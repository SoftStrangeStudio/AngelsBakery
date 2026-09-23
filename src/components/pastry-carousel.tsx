"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import type { Product } from "@/domain/types";
import { asset, money, orderingEnabled } from "@/lib/config";
import { usePastryCarouselViewModel } from "@/view-models/use-pastry-carousel-view-model";

function PastryImage({ product, active = false }: { product: Product; active?: boolean }) {
  return (
    <Image
      src={asset(product.image)}
      alt={active ? `${product.name} — editorial product imagery` : ""}
      aria-hidden={!active}
      width={700}
      height={500}
      priority={active}
    />
  );
}

export function PastryCarousel({ products }: { products: Product[] }) {
  const vm = usePastryCarouselViewModel(products);
  if (!vm.active) return null;

  return (
    <section
      className="pastry-carousel"
      aria-roledescription="carousel"
      aria-label="Saturday bake sale menu"
      onMouseEnter={vm.pause}
      onMouseLeave={vm.resume}
      onFocus={vm.pause}
      onBlur={vm.resume}
      onPointerDown={(event) => vm.beginPointer(event.clientX)}
      onPointerUp={(event) => vm.endPointer(event.clientX)}
      onPointerCancel={() => vm.endPointer(0)}
    >
      <div className="carousel-heading">
        <p className="eyebrow">WHAT ARE YOU PICKING UP THIS SATURDAY?</p>
        <p className="carousel-counter" aria-live="polite">
          {vm.activeIndex + 1} / {products.length}
        </p>
      </div>
      <div className="carousel-stage">
        <button className="carousel-arrow carousel-arrow-left" type="button" aria-label="Previous baked good" onClick={() => { vm.pause(); vm.go(-1); }}>
          <ChevronLeft aria-hidden="true" />
        </button>
        <div className="carousel-neighbor carousel-neighbor-previous" aria-hidden="true"><PastryImage product={vm.previous} /></div>
        <div className="carousel-active" role="group" aria-label={`${vm.active.name}, featured baked good`}><PastryImage product={vm.active} active /></div>
        <div className="carousel-neighbor carousel-neighbor-next" aria-hidden="true"><PastryImage product={vm.next} /></div>
        <button className="carousel-arrow carousel-arrow-right" type="button" aria-label="Next baked good" onClick={() => { vm.pause(); vm.go(1); }}>
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
      <div className="carousel-details">
        <p className="eyebrow">{vm.active.category} · SATURDAY BAKE SALE</p>
        <h2>{vm.active.name}</h2>
        <p>{vm.active.description}</p>
        <div className="carousel-meta">
          <strong>{orderingEnabled ? money(vm.active.price) : "Price coming soon"}</strong>
          <span>{vm.active.note}</span>
        </div>
        <div className="carousel-actions">
          <Link className="button primary" href="/menu/">See Saturday’s menu <ArrowRight size={17} /></Link>
          <Link className="text-link" href={`/menu/${vm.active.id}/`}>See the details <ArrowRight size={16} /></Link>
        </div>
        <button type="button" className="carousel-motion-toggle" aria-label={vm.paused ? "Resume pastry carousel" : "Pause pastry carousel"} onClick={() => (vm.paused ? vm.resume() : vm.pause())}>
          {vm.paused ? <Play size={14} /> : <Pause size={14} />}
          {vm.paused ? "Resume" : "Pause"}
        </button>
      </div>
    </section>
  );
}
