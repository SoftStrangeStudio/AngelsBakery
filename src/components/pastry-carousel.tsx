"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import { ArrowDown, ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import type { Product } from "@/domain/types";
import { asset, sceneAsset } from "@/lib/config";
import { arcOffset, usePastryCarouselViewModel } from "@/view-models/use-pastry-carousel-view-model";

export function PastryCarousel({ products }: { products: Product[] }) {
  const vm = usePastryCarouselViewModel(products);
  const picture = useRef<HTMLDialogElement>(null);
  if (!vm.active) return null;
  const openPicture = () => { vm.setPaused(true); vm.setViewerOpen(true); picture.current?.showModal(); };
  return (
    <section className="arc-carousel" aria-label="Saturday baked goods" aria-roledescription="carousel" data-paused={vm.paused || vm.reducedMotion} data-rotating={vm.rotating}
      onPointerEnter={(e) => { if (e.pointerType === "mouse") vm.setHovered(true); }} onPointerLeave={() => vm.setHovered(false)}
      onFocusCapture={() => vm.setPaused(true)}
      onKeyDown={(event) => {
        if (vm.viewerOpen) return;
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault(); vm.step(event.key === "ArrowRight" ? 1 : -1);
        }
      }}>
      <div className="arc-stage"
        onPointerDown={(e) => vm.beginPointer(e.clientX, e.clientY)}
        onPointerUp={(e) => vm.endPointer(e.clientX, e.clientY)}
        onPointerCancel={vm.cancelPointer}
        onClickCapture={(e) => { if (vm.consumeSwipe()) { e.preventDefault(); e.stopPropagation(); } }}>
        {products.map((product, index) => {
          const slot = arcOffset(index, vm.activeIndex, products.length);
          const distance = Math.abs(slot);
          const selected = slot === 0;
          // Recycle only the hidden occurrence; never tween it across the gallery.
          const occurrence = Math.floor((vm.position + slot) / products.length);
          return <button key={`${product.id}:${occurrence}`} type="button"
            className={`arc-product arc-distance-${distance}${selected ? " is-selected" : ""}`}
            style={{ "--slot": slot, "--drop": `${distance * distance * 15}px`, "--scale": [1, .69, .48, .32][distance] ?? .3, zIndex: 10 - distance } as CSSProperties}
            aria-label={selected ? `Open ${product.name} picture` : `Select ${product.name}`}
            aria-pressed={selected} onClick={() => selected ? openPicture() : vm.select(index)}>
            <Image src={asset(product.image)} alt="" width={1000} height={1000} priority={index === 0} draggable={false} />
          </button>;
        })}
      </div>
      <div className="arc-controls">
        <button type="button" className="arc-arrow" aria-label="Previous baked good" onClick={() => vm.step(-1)}><ChevronLeft size={21} /></button>
        <div className="arc-caption"><p aria-live={vm.rotating ? "off" : "polite"}>{vm.active.name}</p>
          <div className="arc-dots" aria-label="Choose a baked good">{products.map((p, i) => <button type="button" key={p.id} aria-label={`Show ${p.name}`} aria-pressed={i === vm.activeIndex} onClick={() => vm.select(i)} />)}</div>
        </div>
        <button type="button" className="arc-arrow" aria-label="Next baked good" onClick={() => vm.step(1)}><ChevronRight size={21} /></button>
      </div>
      {!vm.reducedMotion && <button type="button" className="arc-motion" aria-label={vm.paused ? "Play pastry rotation" : "Pause pastry rotation"} onClick={() => { vm.setHovered(false); vm.setPaused(!vm.paused); }}>{vm.paused ? <Play size={15} /> : <Pause size={15} />}</button>}
      <a className="arc-scroll" href="#favorites" aria-label="Scroll to the Saturday menu"><ArrowDown size={25} strokeWidth={1.5} /></a>
      <dialog ref={picture} className="pastry-lightbox" aria-label={`${vm.active.name} picture`} onClose={() => vm.setViewerOpen(false)}
        onClick={(e) => { if (e.target === e.currentTarget) picture.current?.close(); }}>
        <button className="pastry-lightbox-close" type="button" onClick={() => picture.current?.close()} aria-label="Close image"><X /></button>
        <Image src={sceneAsset(vm.active.id)} alt={`Concept photograph of ${vm.active.name}`} width={1000} height={750} />
        <p>{vm.active.name} · Concept imagery</p>
      </dialog>
    </section>
  );
}
