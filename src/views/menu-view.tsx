"use client";
import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { catalogService } from "@/services/catalog-service";
export function MenuView() {
  const [category, setCategory] = useState("Everything");
  const [query, setQuery] = useState("");
  const list = catalogService.all().filter((p) =>
    (category === "Everything" || p.category === category) &&
    `${p.name} ${p.description}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <section className="section menu-page">
      <div className="page-heading">
        <p className="eyebrow">THIS SATURDAY · 4–7 PM</p>
        <h1>Fresh from <em>Angel’s oven.</em></h1>
        <p>Cookies, brownies and muffins for Angel’s Saturday Bake Sale.<br />Prices and reservation details will be published after final approval.</p>
      </div>
      <div className="menu-tools">
        <div className="filters" role="group" aria-label="Filter treats">
          {["Everything", "Cookies", "Muffins", "Desserts"].map((c) => (
            <button key={c} className={c === category ? "active" : ""} aria-pressed={c === category} onClick={() => setCategory(c)}>{c}</button>
          ))}
        </div>
        <label className="search"><span className="sr-only">Find a treat</span><input type="search" placeholder="Find your favorite…" value={query} onChange={(e) => setQuery(e.target.value)} /></label>
      </div>
      <p className="menu-note">Saturday menu · Every Saturday 4–7 PM · Reservations remain closed until pricing is confirmed</p>
      <div className="product-grid menu-grid" aria-live="polite">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      {!list.length && (
        <div className="empty-state"><h2>No crumbs here.</h2><p>Try another search, or make room for something new.</p><button className="button secondary" onClick={() => { setQuery(""); setCategory("Everything"); }}>Show every treat</button></div>
      )}
      <aside className="allergen-note"><b>A thoughtful note about allergies</b><p>Ingredient and cross-contact details are still being confirmed. Please do not rely on this website for allergy-related decisions yet.</p></aside>
    </section>
  );
}
