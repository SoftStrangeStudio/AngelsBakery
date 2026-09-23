import { test } from "node:test";
import assert from "node:assert/strict";
import {
  sanitizeCart,
  cartTotal,
  setQuantity,
} from "../src/services/cart-service";
import { validateCustomer, validReceipt } from "../src/services/order-service";
import { previewPickupOptions } from "../src/services/pickup-service";
import { GoogleOrderAdapter } from "../src/adapters/google-order-adapter";
test("corrupt or unknown cart contents cannot enter the order", () => {
  assert.deepEqual(sanitizeCart(null), []);
  assert.deepEqual(
    sanitizeCart([
      { productId: "unknown", quantity: 1 },
      { productId: "chocolate-chip-cookies", quantity: -1 },
    ]),
    [],
  );
});
test("cart clamps quantity and deduplicates product ids", () => {
  assert.deepEqual(
    sanitizeCart([
      { productId: "chocolate-chip-cookies", quantity: 2 },
      { productId: "chocolate-chip-cookies", quantity: 99 },
    ]),
    [{ productId: "chocolate-chip-cookies", quantity: 12 }],
  );
});
test("unpriced catalog items remain zero-value until approved and can be removed", () => {
  const cart = setQuantity([], "chocolate-chip-cookies", 2);
  assert.equal(cartTotal(cart), 0);
  assert.deepEqual(setQuantity(cart, "chocolate-chip-cookies", 0), []);
});
test("customer validation requires name and real email shape", () => {
  assert.deepEqual(
    Object.keys(
      validateCustomer({
        name: "",
        email: "bad",
        phone: "abc",
        notes: "x".repeat(501),
      }),
    ),
    ["name", "email", "phone", "notes"],
  );
  assert.deepEqual(
    validateCustomer({
      name: "Test Baker",
      email: "baker@example.com",
      phone: "",
      notes: "",
    }),
    {},
  );
});
test("preview pickup dates roll correctly across month/year boundaries", () => {
  const slots = previewPickupOptions(new Date("2026-12-30T23:59:00Z"));
  assert.equal(slots[0].date, "2027-01-02");
  assert.equal(slots[0].window, "4:00 pm – 7:00 pm");
  assert.equal(slots.length, 4);
});
test("unverified, duplicate-mismatched or incomplete receipts cannot produce success", () => {
  assert.equal(validReceipt({ status: "received" }, "id"), false);
  const r = {
    status: "received",
    requestId: "id",
    orderId: "AB-1234",
    total: 450,
    pickupDate: "2026-10-01",
    pickupWindow: "4–7 PM",
  };
  assert.equal(validReceipt(r, "id"), true);
  assert.equal(validReceipt(r, "different"), false);
  assert.equal(validReceipt({ ...r, total: -1 }, "id"), false);
});
test("adapter rejects opaque/malformed success; readable matching receipt is mandatory", async () => {
  const previous = globalThis.fetch;
  try {
    globalThis.fetch = async () =>
      ({ ok: true, json: async () => ({ ok: true }) }) as Response;
    await assert.rejects(
      new GoogleOrderAdapter("https://example.com").submit({
        requestId: "abc",
        clientToken: "test-client-token",
        items: [],
        pickupId: "x",
        customer: {
          name: "Test",
          email: "test@example.com",
          phone: "",
          notes: "",
        },
        website: "",
        consent: true,
      }),
      /couldn’t confirm/,
    );
  } finally {
    globalThis.fetch = previous;
  }
});
