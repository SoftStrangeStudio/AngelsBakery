import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createContext, runInContext } from "node:vm";
import { createHash, randomUUID } from "node:crypto";
const code = readFileSync("google-apps-script/Code.js", "utf8");
function harness(capacity = 2) {
  const data: Record<string, unknown[][]> = {
    Orders: [
      [
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
    ],
    Products: [
      ["ID", "Name", "Price Cents", "Active"],
      ["butter-croissant", "Croissant", 450, true],
    ],
    "Pickup Dates": [
      ["ID", "Date", "Window", "Capacity Orders", "Cutoff UTC", "Active"],
      [
        "slot-1",
        "2099-10-01",
        "10 am – noon",
        capacity,
        "2099-09-30T16:00:00Z",
        true,
      ],
    ],
    Settings: [
      ["Key", "Value"],
      ["orderingEnabled", "true"],
      ["menuApproved", "true"],
      ["privacyApproved", "true"],
      ["pickupLocation", "Test pickup"],
      ["timezone", "Etc/UTC"],
    ],
  };
  let locked = false;
  const properties: Record<string, string> = {};
  const context = createContext({
    PropertiesService: {
      getScriptProperties: () => ({
        getProperty: (key: string) =>
          key === "SHEET_ID" ? "private-test-sheet" : properties[key] || null,
        setProperty: (key: string, value: string) => {
          properties[key] = value;
        },
      }),
    },
    SpreadsheetApp: {
      openById: () => ({
        getSheetByName: (name: string) => ({
          getDataRange: () => ({ getValues: () => data[name] }),
          appendRow: (row: unknown[]) => {
            data[name].push(row);
          },
        }),
      }),
      flush: () => {},
    },
    ContentService: {
      MimeType: { JSON: "application/json" },
      createTextOutput: (text: string) => ({
        setMimeType: () => JSON.parse(text),
      }),
    },
    Utilities: {
      DigestAlgorithm: { SHA_256: "sha256" },
      computeDigest: (_: string, text: string) => [
        ...createHash("sha256").update(text).digest(),
      ],
      getUuid: randomUUID,
      formatDate: (date: Date) => date.toISOString().slice(0, 10),
    },
    LockService: {
      getScriptLock: () => ({
        tryLock: () => {
          locked = true;
          return true;
        },
        hasLock: () => locked,
        releaseLock: () => {
          locked = false;
        },
      }),
    },
  });
  runInContext(code, context);
  const payload = () => ({
    requestId: randomUUID(),
    clientToken: randomUUID(),
    items: [{ productId: "butter-croissant", quantity: 2 }],
    pickupId: "slot-1",
    customer: {
      name: "Test Customer",
      email: "test@example.com",
      phone: "",
      notes: "",
    },
    website: "",
    consent: true,
  });
  const submit = (value: unknown) =>
    context.doPost({ postData: { contents: JSON.stringify(value) } });
  return { context, data, payload, submit, isLocked: () => locked };
}
test("server writes authoritative price and replay returns same receipt without duplicate", () => {
  const h = harness();
  const p = { ...h.payload(), total: 1 };
  const a = h.submit(p),
    b = h.submit(p);
  assert.equal(a.ok, true);
  assert.equal(a.receipt.total, 900);
  assert.deepEqual(a, b);
  assert.equal(h.data.Orders.length, 2);
  assert.equal(h.isLocked(), false);
});
test("same id with modified payload is rejected", () => {
  const h = harness(),
    p = h.payload();
  h.submit(p);
  p.items[0].quantity = 3;
  assert.equal(h.submit(p).code, "REQUEST_CONFLICT");
  assert.equal(h.data.Orders.length, 2);
});
test("capacity is reserved under lock and cancelled rows release it", () => {
  const h = harness(1);
  assert.equal(h.submit(h.payload()).ok, true);
  assert.equal(h.submit(h.payload()).code, "SLOT_UNAVAILABLE");
  h.data.Orders[1][4] = "Cancelled";
  assert.equal(h.submit(h.payload()).ok, true);
});
test("cutoff and inactive product reject without writes", () => {
  const h = harness();
  h.data["Pickup Dates"][1][4] = "2000-01-01T00:00:00Z";
  assert.equal(h.submit(h.payload()).code, "SLOT_UNAVAILABLE");
  assert.equal(h.data.Orders.length, 1);
  const j = harness();
  j.data.Products[1][3] = false;
  assert.equal(j.submit(j.payload()).code, "PRODUCT_UNAVAILABLE");
});
test("honeypot, quantity, consent, duplicate product and email are validated", () => {
  const h = harness();
  const p = h.payload();
  for (const value of [
    { ...p, website: "bot" },
    { ...p, consent: false },
    { ...p, items: [{ productId: "butter-croissant", quantity: 0 }] },
    { ...p, items: [...p.items, ...p.items] },
    { ...p, customer: { ...p.customer, email: "invalid" } },
  ])
    assert.equal(h.submit(value).code, "INVALID_INPUT");
  assert.equal(h.data.Orders.length, 1);
});
test("spreadsheet formula text is escaped; public availability contains no personal data", () => {
  const h = harness();
  const p = h.payload();
  p.customer.name = '=HYPERLINK("test")';
  p.customer.notes = "+formula";
  assert.equal(h.submit(p).ok, true);
  assert.equal(h.data.Orders[1][5], '\'=HYPERLINK("test")');
  assert.equal(h.data.Orders[1][13], "'+formula");
  const result = h.context.doGet({ parameter: { action: "availability" } });
  assert.equal(result.ok, true);
  assert.equal(JSON.stringify(result).includes("test@example.com"), false);
});
test("server closed gate rejects even if client is enabled", () => {
  const h = harness();
  h.data.Settings[1][1] = "false";
  assert.equal(h.submit(h.payload()).code, "NOT_OPEN");
  assert.equal(h.data.Orders.length, 1);
});
test("per-email rate limit bounds abuse", () => {
  const h = harness(10);
  for (let n = 0; n < 3; n++) assert.equal(h.submit(h.payload()).ok, true);
  assert.equal(h.submit(h.payload()).code, "RATE_LIMITED");
});
test("same client token is rate limited for five seconds", () => {
  const h = harness(10);
  const first = h.payload();
  const token = randomUUID();
  first.clientToken = token;
  assert.equal(h.submit(first).ok, true);
  const second = h.payload();
  second.clientToken = first.clientToken;
  assert.equal(h.submit(second).code, "RATE_LIMITED");
  assert.equal(h.data.Orders.length, 2);
});
