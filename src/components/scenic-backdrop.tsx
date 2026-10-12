import Image from "next/image";
import { basePath } from "@/lib/config";
import { Parallax } from "@/components/motion";
import styles from "./scenic-backdrop.module.css";

// Owner-provided Gilsum photograph; provenance is recorded in docs/assets.md.
export function ScenicBackdrop({ framed = false, priority = false, cover = false, photo = "yard-morning.jpg" }: { framed?: boolean; priority?: boolean; cover?: boolean; photo?: "yard-morning.jpg" | "orchard.webp" }) {
  return (
    <div className={`${styles.landscape} ${framed ? styles.framed : ""} ${cover ? styles.cover : ""}`} aria-hidden="true">
      <Parallax className={styles.photo}>
        <Image
          src={`${basePath}/images/outdoors/${photo}`}
          alt=""
          fill
          sizes="100vw"
          loading={priority ? "eager" : "lazy"}
        />
      </Parallax>
    </div>
  );
}
