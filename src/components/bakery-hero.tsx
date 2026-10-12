import { catalogService } from "@/services/catalog-service";
import { PastryCarousel } from "@/components/pastry-carousel";
import { ScenicBackdrop } from "@/components/scenic-backdrop";

export function BakeryHero({ title, className = "", featureEyebrow, featureHeadline }: { title: string; className?: string; featureEyebrow?: string; featureHeadline?: string }) {
  return <section className={`immersive-hero ${className}`}>
    <h1 className="sr-only">{title}</h1>
    {featureHeadline && <div className="hero-journal-note">
      {featureEyebrow && <p className="hero-journal-eyebrow">{featureEyebrow}</p>}
      <h2>{featureHeadline}</h2>
    </div>}
    <ScenicBackdrop />
    <PastryCarousel products={catalogService.all()} />
  </section>;
}
