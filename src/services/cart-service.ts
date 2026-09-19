import type { CartItem } from "../domain/types";
import { catalogService } from "./catalog-service";
export const MAX_QUANTITY = 12;
export function sanitizeCart(value: unknown): CartItem[] {
  if (!Array.isArray(value)) return [];
  const unique = new Map<string, number>();
  for (const item of value)
    if (
      item &&
      typeof item.productId === "string" &&
      catalogService.find(item.productId) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0
    )
      unique.set(item.productId, Math.min(MAX_QUANTITY, item.quantity));
  return [...unique].map(([productId, quantity]) => ({ productId, quantity }));
}
export function cartTotal(items: CartItem[]) {
  return sanitizeCart(items).reduce(
    (sum, item) =>
      sum + (catalogService.find(item.productId)?.price || 0) * item.quantity,
    0,
  );
}
export function setQuantity(
  items: CartItem[],
  productId: string,
  quantity: number,
) {
  return sanitizeCart([
    ...items.filter((i) => i.productId !== productId),
    { productId, quantity },
  ]);
}
