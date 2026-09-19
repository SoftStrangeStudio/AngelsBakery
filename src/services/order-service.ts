import type {
  Customer,
  OrderRequest,
  Receipt,
  Availability,
} from "../domain/types";
export interface OrderGateway {
  availability(): Promise<Availability>;
  submit(order: OrderRequest): Promise<Receipt>;
}
export function validateCustomer(customer: Customer) {
  const errors: Partial<Record<keyof Customer, string>> = {};
  if (customer.name.trim().length < 2 || customer.name.length > 80)
    errors.name = "Please enter your name (2–80 characters).";
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email) ||
    customer.email.length > 254
  )
    errors.email = "Please enter a valid email address.";
  if (customer.phone && !/^[+\d ()-]{7,25}$/.test(customer.phone))
    errors.phone = "Please check your phone number.";
  if (customer.notes.length > 500)
    errors.notes = "Please keep your note under 500 characters.";
  return errors;
}
export function validReceipt(
  value: unknown,
  requestId: string,
): value is Receipt {
  if (!value || typeof value !== "object") return false;
  const r = value as Receipt;
  return (
    r.status === "received" &&
    r.requestId === requestId &&
    /^AB-[A-Z0-9-]+$/.test(r.orderId) &&
    Number.isSafeInteger(r.total) &&
    r.total > 0 &&
    /^\d{4}-\d{2}-\d{2}$/.test(r.pickupDate) &&
    Number.isFinite(Date.parse(`${r.pickupDate}T12:00:00Z`)) &&
    typeof r.pickupWindow === "string" &&
    r.pickupWindow.length > 0
  );
}
