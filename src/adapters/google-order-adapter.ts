import type { OrderGateway } from "../services/order-service";
import { validReceipt } from "../services/order-service";
import type { Availability, OrderRequest } from "../domain/types";
export class GoogleOrderAdapter implements OrderGateway {
  constructor(private readonly endpoint: string) {}
  async availability(): Promise<Availability> {
    const response = await fetch(`${this.endpoint}?action=availability`, {
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
      credentials: "omit",
    });
    if (!response.ok)
      throw new Error("Pickup dates are taking a moment. Please try again.");
    const result = await response.json();
    if (
      !result.ok ||
      !Array.isArray(result.slots) ||
      !result.pickupLocation ||
      !result.timezone ||
      !result.slots.every(
        (s: Record<string, unknown>) =>
          typeof s.id === "string" &&
          typeof s.date === "string" &&
          /^\d{4}-\d{2}-\d{2}$/.test(s.date) &&
          Number.isFinite(Date.parse(`${s.date}T12:00:00Z`)) &&
          typeof s.window === "string" &&
          typeof s.available === "boolean",
      )
    )
      throw new Error(
        "We’re not quite ready to take orders. Please check back soon.",
      );
    return result;
  }
  async submit(order: OrderRequest) {
    // A readable response is mandatory. Never use no-cors or an opaque response as proof.
    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(order),
      credentials: "omit",
      signal: AbortSignal.timeout(25000),
      redirect: "follow",
    });
    if (!response.ok)
      throw new Error(
        "We couldn’t confirm your order. Please retry with the same order.",
      );
    const result = await response.json();
    if (!result.ok || !validReceipt(result.receipt, order.requestId))
      throw new Error(
        result.code === "SLOT_UNAVAILABLE"
          ? "That pickup time just filled up. Please choose another date."
          : result.code === "RATE_LIMITED"
            ? "Please wait a few seconds before sending another request."
            : result.code === "NOT_OPEN"
              ? "Ordering is not open yet. Please check back soon."
              : "We couldn’t confirm your order. Please retry with the same order.",
      );
    return result.receipt;
  }
}
