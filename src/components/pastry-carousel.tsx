"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowDown, X } from "lucide-react";
import type { Product } from "@/domain/types";
import { asset } from "@/lib/config";
import { usePastryCarouselViewModel } from "@/view-models/use-pastry-carousel-view-model";

export function PastryCarousel({ products }: { products: Product[] }) {
  const vm = usePastryCarouselViewModel(products);
  const picture = useRef<HTMLDialogElement>(null);
  if (!vm.active) return null;

  return (
    <div className="pastry-gallery" aria-label="Featured bakery imagery">
      <div className="pastry-gallery-inner">
        <button
          className="pastry-feature"
          type="button"
          aria-label={`Open larger editorial image for ${vm.active.name}`}
          onClick={() => picture.current?.showModal()}
        >
          <Image src={asset(vm.active.image)} alt="" width={700} height={500} priority />
        </button>
        <div className="pastry-thumbnails" aria-label="Choose a baked good">
          {products.map((product, index) => (
            <button
              key={product.id}
              className={index === vm.activeIndex ? "pastry-thumb selected" : "pastry-thumb"}
              type="button"
              aria-label={`Show ${product.name} image`}
              aria-pressed={index === vm.activeIndex}
              onClick={() => vm.select(index)}
            >
              <Image src={asset(product.image)} alt="" width={260} height={195} />
            </button>
          ))}
        </div>
        <a className="pastry-scroll" href="#favorites" aria-label="Scroll to the Saturday menu">
          <ArrowDown size={27} strokeWidth={1.6} aria-hidden="true" />
        </a>
      </div>
      <dialog ref={picture} className="pastry-lightbox" aria-label={`${vm.active.name} editorial image`}>
        <button className="pastry-lightbox-close" type="button" onClick={() => picture.current?.close()} aria-label="Close image"><X aria-hidden="true" /></button>
        <Image src={asset(vm.active.image)} alt={`Editorial image representing ${vm.active.name}`} width={1000} height={750} />
        <p>Editorial concept image · {vm.active.name}</p>
      </dialog>
    </div>
  );
}
