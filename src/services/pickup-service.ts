import type { PickupOption } from "../domain/types";
export function previewPickupOptions(now = new Date()): PickupOption[] {
  return Array.from({ length: 4 }, (_, i) => {
    const d = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + 3 + i,
      ),
    );
    const date = d.toISOString().slice(0, 10);
    return {
      id: `preview-${date}`,
      date,
      window: "10:00 am – 12:00 pm",
      available: true,
    };
  });
}
