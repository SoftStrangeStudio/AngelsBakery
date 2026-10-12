import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sceneAsset, basePath } from "@/lib/config";
import { ScenicBackdrop } from "@/components/scenic-backdrop";
import styles from "./saturday-section.module.css";

const notes = [
  { title: "Pick your favorites", text: "See what Angel is baking for this Saturday’s sale.", image: sceneAsset("chocolate-chip-cookies"), alt: "Editorial image of chocolate chip cookies", caption: "Cookies · brownies · muffins", href: "/menu/", link: "See Saturday’s menu" },
  { title: "Come by Saturday", text: "The bake sale runs every Saturday from 4–7 PM. Location details are being finalized.", image: `${basePath}/images/outdoors/yard-morning.jpg`, alt: "Trees and countryside in Gilsum", caption: "Every Saturday · 4–7 PM", href: "/pickup/", link: "Bake sale information" },
  { title: "Take home something sweet", text: "Choose from cookies, brownies and muffins made for the weekly bake sale.", image: sceneAsset("blueberry-muffins"), alt: "Editorial image of blueberry muffins", caption: "A little Saturday happiness", href: "/menu/", link: "Find your favorites" },
];

export function SaturdaySection() {
  return (
    <section className={styles.section} aria-labelledby="saturday-heading">
      <div className={styles.landscape}>
        <ScenicBackdrop cover />
        <div className={styles.headingNote}>
          <p className="eyebrow">SATURDAY, MADE SIMPLE.</p>
          <h2 id="saturday-heading">Your treat. Your Saturday.<br /><em>Easy as one, two, three.</em></h2>
        </div>
      </div>
      <div className={styles.cards}>
        {notes.map((note, index) => (
          <article className={styles.card} key={note.title}>
            <figure>
              <Image src={note.image} alt={note.alt} width={800} height={600} sizes="(max-width: 760px) 90vw, 30vw" />
              <figcaption>{note.caption}</figcaption>
            </figure>
            <div className={styles.copy}>
              <span className={styles.number}>0{index + 1}</span>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
              <Link href={note.href}>{note.link} <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
