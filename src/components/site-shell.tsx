"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowUpRight,
  Heart,
  Menu,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { useBakery } from "@/view-models/bakery-provider";
import { orderingEnabled } from "@/lib/config";
export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useBakery();
  const path = usePathname();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <Sparkles size={13} aria-hidden="true" />{" "}
        {orderingEnabled
          ? "A little something sweet, ready for your pickup."
          : "Something sweet is on its way. Explore our preview menu."}{" "}
        <Sparkles size={13} aria-hidden="true" />
      </div>
      <header className="header">
        <Link className="wordmark" href="/" aria-label="Angel’s Bakery home">
          Angel’s<span>BAKERY</span>
        </Link>
        <nav aria-label="Main navigation" className={open ? "nav open" : "nav"}>
          {[
            ["/menu/", "The good stuff"],
            ["/about/", "A little about us"],
            ["/pickup/", "How pickup works"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                path === href || path === href.slice(0, -1) ? "page" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link
            className="bag-link"
            href="/order/"
            onClick={() => setOpen(false)}
          >
            <ShoppingBag size={18} aria-hidden="true" />
            <span>Your box</span>
            <b>{count}</b>
          </Link>
          <button
            className="icon-button mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="wordmark">
            Angel’s<span>BAKERY</span>
          </Link>
          <p>
            For the everyday.
            <br />
            And the little celebrations.
          </p>
        </div>
        <div>
          <p className="eyebrow">MAKE YOURSELF AT HOME</p>
          <Link href="/menu/">
            Explore the menu <ArrowUpRight size={14} />
          </Link>
          <Link href="/pickup/">
            Pickup, made simple <ArrowUpRight size={14} />
          </Link>
          <Link href="/faq/">
            Good questions <ArrowUpRight size={14} />
          </Link>
        </div>
        <div>
          <p className="eyebrow">A LITTLE HELLO</p>
          <p>Have something sweet in mind?</p>
          <Link href="/contact/">
            Let’s talk treats <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Angel’s Bakery</span>
        <span>
          Made with a little extra <Heart size={13} aria-label="love" />
        </span>
        <Link href="/privacy/">Privacy & your information</Link>
      </div>
      {!orderingEnabled && (
        <p className="preview-footnote">
          Preview collection · Sample products and prices · AI-created editorial
          imagery, not photographs of the bakery’s actual products. Orders are
          not yet open.
        </p>
      )}
    </footer>
  );
}
