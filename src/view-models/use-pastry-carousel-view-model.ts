"use client";

import { useState } from "react";
import type { Product } from "@/domain/types";

export const wrapIndex = (index: number, length: number) =>
  length === 0 ? 0 : ((index % length) + length) % length;

export const swipeDirection = (distance: number, threshold = 48) => {
  if (Math.abs(distance) < threshold) return 0;
  return distance < 0 ? 1 : -1;
};

export function usePastryCarouselViewModel(products: Product[]) {
  const [activeIndex, setActiveIndex] = useState(0);
  return {
    active: products[activeIndex],
    activeIndex,
    select: (index: number) => setActiveIndex(wrapIndex(index, products.length)),
  };
}
