import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/domain/types";
import { money, sceneAsset } from "@/lib/config";
import { AddToBox, ProductCard } from "@/components/product-card";
import { catalogService } from "@/services/catalog-service";
export function ProductView({ product }: { product: Product }) {
  return (
    <section className="section">
      <Link className="text-link back-link" href="/menu/">
        <ArrowLeft size={16} /> Back to the good stuff
      </Link>
      <div className="product-detail">
        <div className={`detail-art ${product.image}`}>
          <Image
            src={sceneAsset(product.image)}
            alt={`${product.name} — concept imagery`}
            width={800}
            height={600}
            priority
          />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{product.category} · PREVIEW COLLECTION</p>
          <h1>{product.name}</h1>
          <p className="detail-price">
            {money(product.price)} <small>sample price</small>
          </p>
          <p>{product.description}</p>
          <AddToBox product={product} large />
          <Link className="text-link" href="/order/">
            <ShoppingBag size={16} /> Take a peek in your box
          </Link>
          <div className="detail-facts">
            <p>
              <Heart size={16} /> A little moment worth savoring.
            </p>
            <p>
              <b>Sample allergens:</b> {product.allergens.join(", ")}.
            </p>
            <p>
              Recipe and cross-contact details are not yet approved. Actual
              appearance may vary from this AI-created concept image. Ordering
              opens after final menu approval.
            </p>
          </div>
        </div>
      </div>
      <div className="section-heading">
        <h2>
          A little more <em>temptation.</em>
        </h2>
      </div>
      <div className="product-grid">
        {catalogService
          .all()
          .filter((p) => p.id !== product.id)
          .map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
      </div>
    </section>
  );
}
