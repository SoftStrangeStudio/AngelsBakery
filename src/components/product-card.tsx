"use client";
import Image from "next/image";
import Link from "next/link";
import { Plus, Check } from "lucide-react";
import type { Product } from "@/domain/types";
import { sceneAsset, money, orderingEnabled } from "@/lib/config";
import { useBakery } from "@/view-models/bakery-provider";
export function AddToBox({
  product,
  large = false,
}: {
  product: Product;
  large?: boolean;
}) {
  const { state, dispatch } = useBakery();
  const quantity =
    state.items.find((i) => i.productId === product.id)?.quantity || 0;
  const unavailable = quantity >= 12 || !state.hydrated;
  return (
    <button
      className={large ? "button primary" : "add-button"}
      disabled={unavailable}
      aria-label={
        orderingEnabled
          ? `Add ${product.name} to your box`
          : `Add ${product.name} to your preview box`
      }
      onClick={() =>
        dispatch({
          type: "quantity",
          id: product.id,
          quantity: quantity + 1,
          notice: `${product.name} added to your box.`,
        })
      }
    >
      {quantity >= 12 ? <Check size={20} /> : <Plus size={20} />}
      {large &&
        (!orderingEnabled
          ? "Add to preview box"
          : quantity >= 12
            ? "Your box is full of this one"
            : "Add to Saturday box")}
    </button>
  );
}
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`product-card ${product.image}`}>
      <div className="product-art">
        <Link href={`/menu/${product.id}/`} tabIndex={-1} aria-hidden="true">
          <Image
            src={sceneAsset(product.id)}
            alt=""
            fill
            sizes="(max-width: 760px) 90vw, 45vw"
          />
        </Link>
        <span className="product-category">{product.category}</span>
        <AddToBox product={product} />
      </div>
      <div className="product-heading">
        <h3>
          <Link href={`/menu/${product.id}/`}>{product.name}</Link>
        </h3>
        <span>{orderingEnabled ? money(product.price) : "Price coming soon"}</span>
      </div>
      <p>{product.note}</p>
    </article>
  );
}
