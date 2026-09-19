export const basePath = "/AngelsBakery";
export const asset = (name: string) => `${basePath}/images/${name}.webp`;
export const orderEndpoint = process.env.NEXT_PUBLIC_ORDER_ENDPOINT || "";
export const orderingEnabled =
  process.env.NEXT_PUBLIC_ORDERING_ENABLED === "true" &&
  /^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(
    orderEndpoint,
  );
export const money = (cents: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    cents / 100,
  );
export const dateLabel = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
