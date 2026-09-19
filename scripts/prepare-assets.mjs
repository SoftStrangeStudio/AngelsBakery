import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
const [hero, sheet] = process.argv.slice(2);
if (!hero || !sheet)
  throw new Error(
    "Usage: node scripts/prepare-assets.mjs HERO.png CUTOUTS.png",
  );
const output = path.resolve("public/images");
await mkdir(output, { recursive: true });
await sharp(hero)
  .resize({ width: 1536, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile(path.join(output, "hero.webp"));
const meta = await sharp(sheet).metadata();
if (!meta.hasAlpha || !meta.width || !meta.height)
  throw new Error("Cutout sheet must have genuine alpha");
const width = Math.floor(meta.width / 2),
  height = Math.floor(meta.height / 2);
for (const [i, name] of ["croissant", "danish", "cookie", "cake"].entries()) {
  await sharp(sheet)
    .extract({
      left: (i % 2) * width,
      top: Math.floor(i / 2) * height,
      width,
      height,
    })
    .webp({ quality: 88, alphaQuality: 100 })
    .toFile(path.join(output, `${name}.webp`));
}
console.log(
  "Prepared five web-optimized assets with cutout transparency preserved.",
);
