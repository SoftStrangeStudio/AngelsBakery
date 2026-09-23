import { catalogService } from "@/services/catalog-service";
import { PastryCarousel } from "@/components/pastry-carousel";
import { ScenicBackdrop } from "@/components/scenic-backdrop";

export function BakeryHero({ title }: { title: string }) {
  return <section className="immersive-hero">
    <h1 className="sr-only">{title}</h1>
    <ScenicBackdrop />
    <PastryCarousel products={catalogService.all()} />
  </section>;
}
