"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Product } from "@/domain/types";

export const wrapIndex = (index: number, length: number) =>
  length === 0 ? 0 : ((index % length) + length) % length;

export const swipeDirection = (distance: number, threshold = 48) => {
  if (Math.abs(distance) < threshold) return 0;
  return distance < 0 ? 1 : -1;
};

export function usePastryCarouselViewModel(products: Product[]) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const startX = useRef<number | null>(null);
  const length = products.length;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const go = useCallback(
    (delta: number) => {
      if (!length) return;
      setActiveIndex((current) => wrapIndex(current + delta, length));
    },
    [length],
  );

  useEffect(() => {
    if (paused || reducedMotion || length < 2) return;
    const timer = window.setInterval(() => go(1), 6500);
    return () => window.clearInterval(timer);
  }, [go, length, paused, reducedMotion]);

  const beginPointer = (clientX: number) => {
    startX.current = clientX;
    setPaused(true);
  };

  const endPointer = (clientX: number) => {
    if (startX.current === null) return;
    const direction = swipeDirection(clientX - startX.current);
    startX.current = null;
    if (direction) go(direction);
  };

  const active = products[activeIndex];
  const previous = products[wrapIndex(activeIndex - 1, length)];
  const next = products[wrapIndex(activeIndex + 1, length)];

  return {
    active,
    activeIndex,
    previous,
    next,
    paused,
    reducedMotion,
    go,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
    beginPointer,
    endPointer,
  };
}
