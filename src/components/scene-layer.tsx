import type { ReactNode } from "react";

export function SceneLayer({
  depth,
  children,
  className = "",
}: {
  depth: "background" | "atmosphere" | "middle" | "subject" | "foreground" | "interaction";
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`scene-layer scene-layer-${depth} ${className}`} data-depth={depth}>
      {children}
    </div>
  );
}
