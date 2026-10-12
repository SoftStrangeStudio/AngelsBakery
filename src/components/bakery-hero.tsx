import { ScenicBackdrop } from "@/components/scenic-backdrop";
import type { ReactNode } from "react";
import styles from "./bakery-hero.module.css";

type BakeryHeroProps = {
  title: string;
  featureEyebrow?: string;
  featureHeadline?: string;
  featureDescription?: string;
  children?: ReactNode;
};

export function BakeryHero({ title, featureEyebrow, featureHeadline, featureDescription, children }: BakeryHeroProps) {
  return (
    <section className={`${styles.hero} ${featureHeadline ? styles.feature : ""}`}>
      <h1 className="sr-only">{title}</h1>
      <ScenicBackdrop priority cover={Boolean(featureHeadline)} />
      {featureHeadline && (
        <div className={styles.notes}>
        <div className={styles.note}>
          {featureEyebrow && <p className={styles.eyebrow}>{featureEyebrow}</p>}
          <h2>{featureHeadline}</h2>
          {featureDescription && <p className={styles.description}>{featureDescription}</p>}
        </div>
        {children && <aside className={styles.details} aria-label="Bake sale details">{children}</aside>}
        </div>
      )}
    </section>
  );
}
