import { notFound } from "next/navigation";
import { catalogService } from "@/services/catalog-service";
import { ProductView } from "@/views/product-view";
export function generateStaticParams() {
  return catalogService.all().map((p) => ({ product: p.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const p = catalogService.find((await params).product);
  return { title: p?.name || "Treat not found", description: p?.description };
}
export default async function Page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const product = catalogService.find((await params).product);
  if (!product) notFound();
  return <ProductView product={product} />;
}
