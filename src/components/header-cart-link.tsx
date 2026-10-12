"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { orderingEnabled } from "@/lib/config";
import { useBakery } from "@/view-models/bakery-provider";

export function HeaderCartLink() {
  const { count } = useBakery();
  const label = orderingEnabled ? "Your box" : "Saturday box";

  return (
    <Link
      className="header-cart-link"
      href="/order/"
      aria-label={`${label}, ${count} ${count === 1 ? "item" : "items"}`}
    >
      <ShoppingBag size={17} aria-hidden="true" />
      <span>{label}</span>
      <b aria-hidden="true">{count}</b>
    </Link>
  );
}
