"use client";
import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { catalogService } from "@/services/catalog-service";
export function MenuView() {
  const [category, setCategory] = useState("Everything");
  const [query, setQuery] = useState("");
  const list = catalogService
    .all()
    .filter(
      (p) =>
        (category === "Everything" || p.category === category) &&
        `${p.name} ${p.description}`
          .toLowerCase()
          .includes(query.toLowerCase()),
    );
  return (
    <section className="section menu-page">
      <div className="page-heading">
        <p className="eyebrow">WHAT ARE YOU CRAVING?</p>
        <h1>
          All the <em>good stuff.</em>
        </h1>
        <p>
          A little buttery. A little chocolatey. Entirely lovely.
          <br />
          Explore our sample collection while we get ready to open.
        </p>
      </div>
      <div className="menu-tools">
        <div className="filters" role="group" aria-label="Filter treats">
          {["Everything", "Pastries", "Cookies", "Desserts"].map((c) => (
            <button
              key={c}
              className={c === category ? "active" : ""}
              aria-pressed={c === category}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="search">
          <span className="sr-only">Find a treat</span>
          <input
            type="search"
            placeholder="Find your favorite…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <p className="menu-note">
        Preview menu · Sample USD prices · No orders or payments taken yet
      </p>
      <div className="product-grid menu-grid" aria-live="polite">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {!list.length && (
        <div className="empty-state">
          <h2>No crumbs here.</h2>
          <p>Try another search, or make room for something new.</p>
          <button
            className="button secondary"
            onClick={() => {
              setQuery("");
              setCategory("Everything");
            }}
          >
            Show every treat
          </button>
        </div>
      )}
      <aside className="allergen-note">
        <b>A thoughtful note about allergies</b>
        <p>
          This is a sample menu. Ingredient and cross-contact information must
          be confirmed before ordering. Please don’t rely on this preview to
          make allergy-related decisions.
        </p>
      </aside>
    </section>
  );
}
