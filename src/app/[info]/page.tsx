import { notFound } from "next/navigation";
import { InfoView } from "@/views/info-view";
const pages = ["pickup", "about", "faq", "contact", "privacy"] as const;
export function generateStaticParams() {
  return pages.map((info) => ({ info }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ info: string }>;
}) {
  const { info } = await params;
  return {
    title: (
      {
        pickup: "Pickup, made simple",
        about: "A little about us",
        faq: "Good questions",
        contact: "Let’s talk treats",
        privacy: "Your privacy",
      } as Record<string, string>
    )[info],
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ info: string }>;
}) {
  const { info } = await params;
  if (!pages.includes(info as (typeof pages)[number])) notFound();
  return <InfoView kind={info as (typeof pages)[number]} />;
}
