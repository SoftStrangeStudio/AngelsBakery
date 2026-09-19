import { OrderView } from "@/views/order-view";
export const metadata = {
  title: "Review your box",
  robots: { index: false, follow: false },
};
export default function Page() {
  return <OrderView review />;
}
