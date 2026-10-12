import Link from "next/link";
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { orderingEnabled } from "@/lib/config";
import { HeaderCartLink } from "@/components/header-cart-link";
import { ScenicBackdrop } from "@/components/scenic-backdrop";
import styles from "./closing-notes.module.css";

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header>
        <div className="announcement">
          <Sparkles size={13} aria-hidden="true" />{" "}
          Saturday Bake Sale · Every Saturday · 4–7 PM{" "}
          <Sparkles size={13} aria-hidden="true" />
        </div>
        <div className="header">
          <Link className="wordmark brand-wordmark" href="/" aria-label="Soft Strange Bakery home">
            <span className="brand-script">Soft Strange</span>
            <span className="brand-kicker">BAKERY</span>
          </Link>
          <HeaderCartLink />
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className={styles.footer}>
      <ScenicBackdrop cover photo="orchard.webp" />
      <div className={styles.cards}>
        <div>
          <Link href="/" className={`wordmark ${styles.wordmark}`}>
            <span className="brand-script">Soft Strange</span>
            <span className="brand-kicker">BAKERY</span>
          </Link>
          <p>Saturday Bake Sale<br />Every Saturday · 4–7 PM</p>
        </div>
        <div>
          <p className="eyebrow">SATURDAY AT ANGEL’S</p>
          <Link href="/menu/">This Saturday’s menu <ArrowUpRight size={14} /></Link>
          <Link href="/pickup/">Bake sale information <ArrowUpRight size={14} /></Link>
          <Link href="/faq/">Good questions <ArrowUpRight size={14} /></Link>
        </div>
        <div>
          <p className="eyebrow">A LITTLE HELLO</p><p>Have something sweet in mind?</p>
          <Link href="/contact/">Let’s talk treats <ArrowUpRight size={14} /></Link>
        </div>
      </div>
      <div className={styles.finePrint}>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Soft Strange Bakery</span>
          <span>Made with a little extra <Heart size={13} aria-label="love" /></span>
          <Link href="/privacy/">Privacy & your information</Link>
        </div>
        {!orderingEnabled && (
          <p className={styles.disclosure}>Saturday menu confirmed · Prices, ingredients, pickup location and reservations are still being finalized · Editorial imagery is not photography of the bakery’s actual products.</p>
        )}
      </div>
    </footer>
  );
}
