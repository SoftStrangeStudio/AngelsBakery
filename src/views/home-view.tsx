import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, CalendarDays, ShoppingBag, Sparkles } from "lucide-react";
import { catalogService } from "@/services/catalog-service";
import { asset, sceneAsset } from "@/lib/config";
import { ProductCard } from "@/components/product-card";
import { Parallax } from "@/components/motion";
import { PastryCarousel } from "@/components/pastry-carousel";
import { ScenicBackdrop } from "@/components/scenic-backdrop";

export function HomeView() {
  return (
    <>
      <section className="immersive-hero">
        <h1 className="sr-only">Angel’s Bakery Saturday bake sale</h1>
        <ScenicBackdrop />
        <PastryCarousel products={catalogService.all()} />
      </section>
      <div className="ribbon" aria-hidden="true"><span>Every Saturday</span><Sparkles /><span>4–7 PM</span><Sparkles /><span>Cookies · brownies · muffins</span><Sparkles /><span>Angel’s Bakery</span><Sparkles /></div>
      <section id="favorites" className="section favorites">
        <div className="section-heading">
          <div><p className="eyebrow">THIS SATURDAY</p><h2>Fresh from <em>Angel’s oven.</em></h2></div>
          <Link className="text-link" href="/menu/">See the full Saturday menu <ArrowRight size={18} /></Link>
        </div>
        <p className="section-intro">Seven bake-sale favorites: cookies, brownies and muffins. Prices and reservations will be published after final approval.</p>
        <div className="product-grid">{catalogService.featured().map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
      <section className="how-section section">
        <div className="section-heading centered"><p className="eyebrow">SATURDAY, MADE SIMPLE.</p><h2>Your treat. Your Saturday.<br /><em>Easy as one, two, three.</em></h2></div>
        <div className="steps">{[
          { icon: ShoppingBag, title: "Pick your favorites", text: "See what Angel is baking for this Saturday’s sale." },
          { icon: CalendarDays, title: "Come by Saturday", text: "The bake sale runs every Saturday from 4–7 PM. Location details are being finalized." },
          { icon: Heart, title: "Take home something sweet", text: "Choose from cookies, brownies and muffins made for the weekly bake sale." },
        ].map((s, i) => <div className="step" key={s.title}><span className="step-number">0{i + 1}</span><s.icon size={29} strokeWidth={1.2} /><h3>{s.title}</h3><p>{s.text}</p></div>)}</div>
        <Link className="button secondary" href="/pickup/">Saturday bake sale information <ArrowRight size={17} /></Link>
      </section>
      <section className="story-section section">
        <Parallax className="story-art">
          <div className="story-arch"><Image src={sceneAsset("brownies")} alt="Editorial image of Angel’s Bakery brownies" width={700} height={500} /></div>
          <span className="story-tag handwritten">Saturday treats.<br />A little extra joy.</span>
          <span className="story-star" aria-hidden="true">✳</span>
        </Parallax>
        <div className="story-copy">
          <p className="eyebrow">HELLO, SWEET THING.</p>
          <h2>A little bakery.<br />A whole lot of <em>heart.</em></h2>
          <p>Angel’s Bakery brings cookies, brownies and muffins together for a weekly Saturday bake sale.</p>
          <p>Stop by between 4 and 7 PM, find something sweet, and take a little Saturday happiness home with you.</p>
          <Link className="text-link" href="/about/">A little about Angel’s <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="sweet-banner">
        <span className="banner-spark" aria-hidden="true">✳</span>
        <p className="eyebrow">SATURDAY · 4–7 PM</p>
        <h2>There’s a little happiness<br />waiting for <em>Saturday.</em></h2>
        <Link className="button primary" href="/menu/">See Saturday’s menu <ArrowRight size={18} /></Link>
        <Image className="banner-cookie" src={asset("products/chocolate-chip-cookies")} width={350} height={250} alt="" />
      </section>
    </>
  );
}
