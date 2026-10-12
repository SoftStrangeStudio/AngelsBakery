import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScenicBackdrop } from "@/components/scenic-backdrop";
import styles from "./closing-notes.module.css";

export function ClosingNote() {
  return (
    <section className={styles.closing} aria-labelledby="closing-heading">
      <ScenicBackdrop cover photo="orchard.webp" />
      <div className={styles.invitation}>
        <p className="eyebrow">SATURDAY · 4–7 PM</p>
        <h2 id="closing-heading">There’s a little happiness<br />waiting for <em>Saturday.</em></h2>
        <Link className="button primary" href="/menu/">See Saturday’s menu <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}
