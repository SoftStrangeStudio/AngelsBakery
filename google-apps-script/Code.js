/* Angel's Bakery order service. Deploy as the bakery owner; never publish the Sheet. */
const HEADERS = {
  Orders: [
    "Request ID",
    "Payload Hash",
    "Order ID",
    "Created UTC",
    "Status",
    "Name",
    "Email",
    "Phone",
    "Pickup ID",
    "Pickup Date",
    "Pickup Window",
    "Items JSON",
    "Total Cents",
    "Notes",
    "Consent",
  ],
  Products: ["ID", "Name", "Price Cents", "Active"],
  "Pickup Dates": [
    "ID",
    "Date",
    "Window",
    "Capacity Orders",
    "Cutoff UTC",
    "Active",
  ],
  Settings: ["Key", "Value"],
};
const RATE_LIMIT_MS = 5000;
const RATE_LIMIT_PREFIX = "LAST_SUBMISSION_";
function sheet_() {
  const id = PropertiesService.getScriptProperties().getProperty("SHEET_ID");
  if (!id) throw new Error("NOT_CONFIGURED");
  return SpreadsheetApp.openById(id);
}
function rows_(name) {
  const tab = sheet_().getSheetByName(name);
  if (!tab) throw new Error("NOT_CONFIGURED");
  const values = tab.getDataRange().getValues();
  if (JSON.stringify(values[0]) !== JSON.stringify(HEADERS[name]))
    throw new Error("SCHEMA_MISMATCH");
  return values.slice(1).filter((r) => r[0] !== "");
}
function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
function enabled_(value) {
  return value === true || String(value).toLowerCase() === "true";
}
function config_() {
  const c = Object.fromEntries(
    rows_("Settings").map((r) => [String(r[0]), String(r[1])]),
  );
  if (
    c.orderingEnabled !== "true" ||
    !c.pickupLocation ||
    !c.timezone ||
    c.menuApproved !== "true" ||
    c.privacyApproved !== "true"
  )
    throw new Error("NOT_OPEN");
  return c;
}
function date_(value) {
  return value instanceof Date
    ? Utilities.formatDate(value, "UTC", "yyyy-MM-dd")
    : String(value);
}
function text_(value, min, max) {
  if (
    typeof value !== "string" ||
    value.trim().length < min ||
    value.length > max
  )
    throw new Error("INVALID_INPUT");
  return value.trim();
}
function safeCell_(value) {
  return /^[\s]*[=+\-@\t\r\n]/.test(value) ? "'" + value : value;
}
function actorKey_(email, clientToken) {
  const raw = email + "|" + (clientToken || email);
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, raw)
    .map((b) => ((b + 256) % 256).toString(16).padStart(2, "0"))
    .join("");
  return RATE_LIMIT_PREFIX + digest;
}
function rateLimited_(email, clientToken) {
  const value = PropertiesService.getScriptProperties().getProperty(
    actorKey_(email, clientToken),
  );
  const last = Number(value || 0);
  return Number.isFinite(last) && last > 0 && Date.now() - last < RATE_LIMIT_MS;
}
function recordSubmission_(email, clientToken) {
  try {
    PropertiesService.getScriptProperties().setProperty(
      actorKey_(email, clientToken),
      String(Date.now()),
    );
  } catch (_) {
    // A property-quota failure must not turn an accepted order into an
    // ambiguous client error.
  }
}
function slots_(orders, now) {
  return rows_("Pickup Dates").map((r) => {
    const used = orders.filter(
      (o) =>
        String(o[8]) === String(r[0]) &&
        String(o[4]).toLowerCase() !== "cancelled",
    ).length;
    const cutoff = new Date(r[4]).getTime();
    const capacity = Number(r[3]);
    return {
      id: String(r[0]),
      date: date_(r[1]),
      window: String(r[2]),
      available:
        enabled_(r[5]) &&
        Number.isInteger(capacity) &&
        capacity > used &&
        Number.isFinite(cutoff) &&
        cutoff > now &&
        /^\d{4}-\d{2}-\d{2}$/.test(date_(r[1])) &&
        date_(r[1]) >= new Date(now).toISOString().slice(0, 10),
    };
  });
}
function doGet(e) {
  try {
    if (e.parameter.action !== "availability")
      return json_({ ok: false, code: "INVALID_ACTION" });
    const c = config_();
    return json_({
      ok: true,
      slots: slots_(rows_("Orders"), Date.now()),
      pickupLocation: c.pickupLocation,
      timezone: c.timezone,
    });
  } catch (_) {
    return json_({ ok: false, code: "NOT_OPEN" });
  }
}
function doPost(e) {
  let lock;
  try {
    if (!e || !e.postData || e.postData.contents.length > 12000)
      throw new Error("INVALID_INPUT");
    const input = JSON.parse(e.postData.contents);
    config_();
    if (
      !input ||
      typeof input !== "object" ||
      !/^[0-9a-f-]{36}$/i.test(input.requestId) ||
      input.website !== "" ||
      input.consent !== true
    )
      throw new Error("INVALID_INPUT");
    const clientToken =
      input.clientToken === undefined ? "" : text_(input.clientToken, 8, 120);
    const c = input.customer;
    if (!c || typeof c !== "object") throw new Error("INVALID_INPUT");
    const customer = {
      name: text_(c.name, 2, 80),
      email: text_(c.email, 3, 254).toLowerCase(),
      phone: text_(c.phone, 0, 25),
      notes: text_(c.notes, 0, 500),
    };
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email) ||
      (customer.phone && !/^[+\d ()-]{7,25}$/.test(customer.phone))
    )
      throw new Error("INVALID_INPUT");
    const pickupId = text_(input.pickupId, 1, 100);
    if (
      !Array.isArray(input.items) ||
      input.items.length < 1 ||
      input.items.length > 20
    )
      throw new Error("INVALID_INPUT");
    const ids = new Set();
    const items = input.items
      .map((i) => {
        if (
          !i ||
          typeof i.productId !== "string" ||
          i.productId.length > 100 ||
          ids.has(i.productId) ||
          !Number.isInteger(i.quantity) ||
          i.quantity < 1 ||
          i.quantity > 12
        )
          throw new Error("INVALID_INPUT");
        ids.add(i.productId);
        return { productId: i.productId, quantity: i.quantity };
      })
      .sort((a, b) => a.productId.localeCompare(b.productId));
    if (items.reduce((n, i) => n + i.quantity, 0) > 48)
      throw new Error("INVALID_INPUT");
    const canonical = JSON.stringify({ customer, pickupId, items });
    const digest = Utilities.computeDigest(
      Utilities.DigestAlgorithm.SHA_256,
      canonical,
    )
      .map((b) => ((b + 256) % 256).toString(16).padStart(2, "0"))
      .join("");
    lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) throw new Error("BUSY");
    const orders = rows_("Orders");
    const prior = orders.find((r) => String(r[0]) === input.requestId);
    if (prior) {
      if (String(prior[1]) !== digest) throw new Error("REQUEST_CONFLICT");
      return json_({ ok: true, receipt: receipt_(prior) });
    }
    const recent = orders.filter(
      (r) => Date.now() - new Date(r[3]).getTime() < 3600000,
    );
    if (
      recent.length >= 100 ||
      recent.filter((r) => String(r[6]).replace(/^'/, "") === customer.email)
        .length >= 3
    )
      throw new Error("RATE_LIMITED");
    if (rateLimited_(customer.email, clientToken))
      throw new Error("RATE_LIMITED");
    const slot = slots_(orders, Date.now()).find(
      (s) => s.id === pickupId && s.available,
    );
    if (!slot) throw new Error("SLOT_UNAVAILABLE");
    const products = rows_("Products");
    let total = 0;
    const priced = items.map((i) => {
      const p = products.find(
        (r) => String(r[0]) === i.productId && enabled_(r[3]),
      );
      if (!p || !Number.isSafeInteger(Number(p[2])) || Number(p[2]) <= 0)
        throw new Error("PRODUCT_UNAVAILABLE");
      total += Number(p[2]) * i.quantity;
      return { ...i, name: String(p[1]), unitPrice: Number(p[2]) };
    });
    if (!Number.isSafeInteger(total) || total <= 0 || total > 1000000)
      throw new Error("INVALID_INPUT");
    const row = [
      input.requestId,
      digest,
      "AB-" + Utilities.getUuid().slice(0, 8).toUpperCase(),
      new Date().toISOString(),
      "Received",
      safeCell_(customer.name),
      safeCell_(customer.email),
      safeCell_(customer.phone),
      pickupId,
      slot.date,
      slot.window,
      JSON.stringify(priced),
      total,
      safeCell_(customer.notes),
      true,
    ];
    sheet_().getSheetByName("Orders").appendRow(row);
    SpreadsheetApp.flush();
    recordSubmission_(customer.email, clientToken);
    return json_({ ok: true, receipt: receipt_(row) });
  } catch (error) {
    const allowed = [
      "INVALID_INPUT",
      "SLOT_UNAVAILABLE",
      "PRODUCT_UNAVAILABLE",
      "RATE_LIMITED",
      "BUSY",
      "REQUEST_CONFLICT",
      "NOT_OPEN",
    ];
    return json_({
      ok: false,
      code: allowed.includes(error.message)
        ? error.message
        : "SERVICE_UNAVAILABLE",
    });
  } finally {
    if (lock && lock.hasLock()) lock.releaseLock();
  }
}
function receipt_(r) {
  return {
    requestId: String(r[0]),
    orderId: String(r[2]),
    status: "received",
    total: Number(r[12]),
    pickupDate: date_(r[9]),
    pickupWindow: String(r[10]),
  };
}
function setup() {
  const ss = sheet_();
  Object.keys(HEADERS).forEach((name) => {
    let tab = ss.getSheetByName(name);
    if (!tab) tab = ss.insertSheet(name);
    if (tab.getLastRow() === 0) {
      tab.appendRow(HEADERS[name]);
      tab.setFrozenRows(1);
      tab
        .getRange(1, 1, 1, HEADERS[name].length)
        .setBackground("#3d2924")
        .setFontColor("#fcf7ee")
        .setFontWeight("bold");
    } else if (
      JSON.stringify(
        tab.getRange(1, 1, 1, HEADERS[name].length).getValues()[0],
      ) !== JSON.stringify(HEADERS[name])
    )
      throw new Error("SCHEMA_MISMATCH: " + name);
  });
  const settings = ss.getSheetByName("Settings");
  if (settings.getLastRow() === 1)
    settings.getRange(2, 1, 6, 2).setValues([
      ["orderingEnabled", "false"],
      ["menuApproved", "false"],
      ["privacyApproved", "false"],
      ["pickupLocation", ""],
      ["timezone", ""],
      ["retentionDays", ""],
    ]);
}
