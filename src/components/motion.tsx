"use client";
import { useEffect, useRef, type ReactNode } from "react";
export function Parallax({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      ref.current.style.setProperty(
        "--parallax",
        media.matches
          ? "0px"
          : `${Math.max(-25, Math.min(25, -rect.top * 0.065))}px`,
      );
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", scroll, { passive: true });
    media.addEventListener("change", update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      media.removeEventListener("change", update);
    };
  }, []);
  return (
    <div ref={ref} className={`parallax ${className}`}>
      {children}
    </div>
  );
}
