"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Product } from "@/domain/types";

export const wrapIndex = (index: number, length: number) =>
  length === 0 ? 0 : ((index % length) + length) % length;
export const swipeDirection = (distance: number, threshold = 48) =>
  Math.abs(distance) < threshold ? 0 : distance < 0 ? 1 : -1;
export const arcOffset = (index: number, active: number, length: number) => {
  const offset = wrapIndex(index - active, length);
  return offset > Math.floor(length / 2) ? offset - length : offset;
};
const subscribeMotion = (notify: () => void) => {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", notify);
  return () => media.removeEventListener("change", notify);
};

export function usePastryCarouselViewModel(products: Product[]) {
  const [position, setPosition] = useState(0);
  const activeIndex = wrapIndex(position, products.length);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const go = useCallback((delta: number) => {
    setPosition((current) => current + delta);
  }, []);
  const rotating = !paused && !hovered && !viewerOpen && !reducedMotion;
  useEffect(() => {
    if (!rotating || products.length < 2) return;
    const timer = window.setInterval(() => go(1), 7000);
    return () => window.clearInterval(timer);
  }, [go, rotating, products.length]);
  return {
    active: products[activeIndex], activeIndex, position, paused, reducedMotion, rotating,
    viewerOpen, setViewerOpen, setHovered, setPaused,
    select: (index: number) => { setPaused(true); setPosition((current) => current + arcOffset(index, wrapIndex(current, products.length), products.length)); },
    step: (delta: number) => { setPaused(true); go(delta); },
    beginPointer: (x: number, y: number) => { pointer.current = { x, y }; swiped.current = false; },
    cancelPointer: () => { pointer.current = null; },
    endPointer: (x: number, y: number) => {
      const start = pointer.current;
      pointer.current = null;
      if (!start) return;
      const dx = x - start.x;
      const direction = Math.abs(dx) > Math.abs(y - start.y) ? swipeDirection(dx) : 0;
      if (direction) { swiped.current = true; setPaused(true); go(direction); }
    },
    consumeSwipe: () => { const value = swiped.current; swiped.current = false; return value; },
  };
}
