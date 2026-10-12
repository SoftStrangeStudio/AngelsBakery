import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { catalogService } from "@/services/catalog-service";
import { sceneAsset } from "@/lib/config";
import { ProductCard } from "@/components/product-card";
import { Parallax } from "@/components/motion";
import { BakeryHero } from "@/components/bakery-hero";
import { ClosingNote } from "@/components/closing-note";
import { SaturdaySection } from "@/components/saturday-section";

export function HomeView() {
  return (
    <>
      <BakeryHero title="Soft Strange Bakery Saturday bake sale" featureEyebrow="THIS SATURDAY" featureHeadline="Fresh from Angel’s oven." featureDescription="Soft Strange Bakery brings cookies, brownies and muffins together for a weekly Saturday bake sale.">
        <article>
          <h3>Every Saturday</h3>
          <p>4–7 PM</p>
          <Link href="/pickup/">Bake sale information <ArrowRight size={17} /></Link>
        </article>
        <article>
          <h3>Cookies · brownies · muffins</h3>
          <p>Seven bake-sale favorites.</p>
          <Link href="/menu/">See Saturday’s menu <ArrowRight size={17} /></Link>
        </article>
      </BakeryHero>
      <section id="favorites" className="section favorites">
        <div className="section-heading">
          <Link className="text-link" href="/menu/">See the full Saturday menu <ArrowRight size={18} /></Link>
        </div>
        <p className="section-intro">Seven bake-sale favorites: cookies, brownies and muffins. Prices and reservations will be published after final approval.</p>
        <div className="product-grid">{catalogService.featured().map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
      <SaturdaySection />
      <section className="story-section section">
        <Parallax className="story-art">
          <div className="story-arch"><Image src={sceneAsset("brownies")} alt="Editorial image of Soft Strange Bakery brownies" width={1000} height={750} /></div>
          <span className="story-tag handwritten">Saturday treats.<br />A little extra joy.</span>
          <span className="story-star" aria-hidden="true">✳</span>
        </Parallax>
        <div className="story-copy">
          <p className="eyebrow">HELLO, SWEET THING.</p>
          <h2>A little bakery.<br />A whole lot of <em>heart.</em></h2>
          <p>Soft Strange Bakery brings cookies, brownies and muffins together for a weekly Saturday bake sale.</p>
          <p>Stop by between 4 and 7 PM, find something sweet, and take a little Saturday happiness home with you.</p>
          <Link className="text-link" href="/about/">A little about Angel’s <ArrowRight size={18} /></Link>
        </div>
      </section>
      <ClosingNote />
    </>
  );
}
