import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/domain/types";
import { asset, money, orderingEnabled } from "@/lib/config";
import { AddToBox, ProductCard } from "@/components/product-card";
import { catalogService } from "@/services/catalog-service";
export function ProductView({ product }: { product: Product }) {
  return (
    <section className="section">
      <Link className="text-link back-link" href="/menu/"><ArrowLeft size={16} /> Back to Saturday’s menu</Link>
      <div className="product-detail">
        <div className={`detail-art ${product.image}`}>
          <Image src={asset(product.image)} alt={`${product.name} — editorial product imagery`} width={800} height={600} priority />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{product.category} · SATURDAY BAKE SALE</p>
          <h1>{product.name}</h1>
          <p className="detail-price">{orderingEnabled ? money(product.price) : "Price coming soon"}</p>
          <p>{product.description}</p>
          <AddToBox product={product} large />
          <Link className="text-link" href="/menu/"><ShoppingBag size={16} /> See the full Saturday menu</Link>
          <div className="detail-facts">
            <p><Heart size={16} /> Every Saturday · 4–7 PM.</p>
            <p><b>Allergy information:</b> {product.allergens.join(", ")}.</p>
            <p>Final ingredients, cross-contact details, prices and reservation rules are still being confirmed. Editorial imagery represents the menu item but is not photography of Angel’s actual product.</p>
          </div>
        </div>
      </div>
      <div className="section-heading"><h2>More for <em>Saturday.</em></h2></div>
      <div className="product-grid">{catalogService.all().filter((p) => p.id !== product.id).map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </section>
  );
}
