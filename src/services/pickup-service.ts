import type { PickupOption } from "../domain/types";

export function previewPickupOptions(now = new Date()): PickupOption[] {
  const day = now.getUTCDay();
  const daysUntilSaturday = (6 - day + 7) % 7 || 7;

  return Array.from({ length: 4 }, (_, i) => {
    const d = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + daysUntilSaturday + i * 7,
      ),
    );
    const date = d.toISOString().slice(0, 10);
    return {
      id: `preview-${date}`,
      date,
      window: "4:00 pm – 7:00 pm",
      available: true,
    };
  });
}
