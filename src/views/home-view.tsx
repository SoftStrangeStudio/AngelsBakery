import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  CalendarDays,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { catalogService } from "@/services/catalog-service";
import { asset } from "@/lib/config";
import { ProductCard } from "@/components/product-card";
import { Parallax } from "@/components/motion";
import { PastryCarousel } from "@/components/pastry-carousel";
import { SceneLayer } from "@/components/scene-layer";
export function HomeView() {
  return (
    <>
      <section className="immersive-hero">
        <SceneLayer depth="background" className="immersive-background" />
        <SceneLayer depth="atmosphere" className="immersive-atmosphere" />
        <SceneLayer depth="middle" className="immersive-middle">
          <span className="scene-sun" aria-hidden="true" />
          <span className="scene-line scene-line-one" aria-hidden="true" />
          <span className="scene-line scene-line-two" aria-hidden="true" />
        </SceneLayer>
        <SceneLayer depth="subject" className="immersive-subject">
          <PastryCarousel products={catalogService.all()} />
        </SceneLayer>
        <SceneLayer depth="foreground" className="immersive-foreground">
          <span className="foreground-crumb foreground-crumb-one" aria-hidden="true">✳</span>
          <span className="foreground-crumb foreground-crumb-two" aria-hidden="true">·</span>
        </SceneLayer>
        <SceneLayer depth="interaction" className="immersive-intro">
          <p className="eyebrow"><Heart size={14} /> A LITTLE BAKED HAPPINESS</p>
          <h1>Good things<br />come to those<br /><em>who treat.</em></h1>
          <p>Flaky pastries, happy little desserts, and something lovely to look forward to.</p>
        </SceneLayer>
      </section>
      <div className="ribbon" aria-hidden="true">
        <span>A little butter</span>
        <Sparkles />
        <span>A lot of heart</span>
        <Sparkles />
        <span>Something worth slowing down for</span>
        <Sparkles />
        <span>A little butter</span>
        <Sparkles />
      </div>
      <section id="favorites" className="section favorites">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MEET YOUR NEXT HAPPY MOMENT</p>
            <h2>
              Love at first <em>bite.</em>
            </h2>
          </div>
          <Link className="text-link" href="/menu/">
            All the good stuff <ArrowRight size={18} />
          </Link>
        </div>
        <p className="section-intro">
          A first look at the sweet things we’re dreaming up. Sample menu &
          prices.
        </p>
        <div className="product-grid">
          {catalogService.featured().map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <section className="how-section section">
        <div className="section-heading centered">
          <p className="eyebrow">LESS FUSS. MORE FLAKY GOODNESS.</p>
          <h2>
            Your treat. Your day.
            <br />
            <em>Easy as one, two, three.</em>
          </h2>
        </div>
        <div className="steps">
          {[
            {
              icon: ShoppingBag,
              title: "Follow your cravings",
              text: "A buttery pastry? Something chocolatey? Fill your box with whatever makes you smile.",
            },
            {
              icon: CalendarDays,
              title: "Make a little date",
              text: "When orders open, choose an available pickup day and time that fits your plans.",
            },
            {
              icon: Heart,
              title: "Pick up the happiness",
              text: "We’ll confirm the details. You swing by, collect your treats, and make someone’s day. Yours counts, too.",
            },
          ].map((s, i) => (
            <div className="step" key={s.title}>
              <span className="step-number">0{i + 1}</span>
              <s.icon size={29} strokeWidth={1.2} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <Link className="button secondary" href="/pickup/">
          A little more about pickup <ArrowRight size={17} />
        </Link>
      </section>
      <section className="story-section section">
        <Parallax className="story-art">
          <div className="story-arch">
            <Image
              src={asset("croissant")}
              alt="An illustrated-by-AI golden butter croissant"
              width={700}
              height={500}
            />
          </div>
          <span className="story-tag handwritten">
            Flaky outside.
            <br />
            Soft spot inside.
          </span>
          <span className="story-star" aria-hidden="true">
            ✳
          </span>
        </Parallax>
        <div className="story-copy">
          <p className="eyebrow">HELLO, SWEET THING.</p>
          <h2>
            A little bakery.
            <br />A whole lot of <em>heart.</em>
          </h2>
          <p>
            We believe a treat doesn’t need an occasion. Sometimes, the occasion
            is a slow morning. A catch-up with a friend. Or simply making it to
            Friday.
          </p>
          <p>
            Angel’s Bakery is a place for those little moments. Come for
            something sweet. Leave with something to look forward to.
          </p>
          <Link className="text-link" href="/about/">
            A little about Angel’s <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="sweet-banner">
        <span className="banner-spark" aria-hidden="true">
          ✳
        </span>
        <p className="eyebrow">GO ON. MAKE YOUR DAY.</p>
        <h2>
          There’s a little happiness
          <br />
          with <em>your name on it.</em>
        </h2>
        <Link className="button primary" href="/menu/">
          Let’s find your favorite <ArrowRight size={18} />
        </Link>
        <Image
          className="banner-cookie"
          src={asset("cookie")}
          width={350}
          height={250}
          alt=""
        />
      </section>
    </>
  );
}
