import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

async function htmlFiles(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(file));
    else if (file.endsWith(".html")) files.push(file);
  }
  return files;
}
const images = new Set();
for (const file of await htmlFiles("out")) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(/<img\b[^>]*\bsrc="(\/AngelsBakery\/images\/[^"?]+)"/g)) {
    images.add(path.join("out", match[1].slice("/AngelsBakery/".length)));
  }
}
for (const file of images) {
  await sharp(file).raw().toBuffer();
  if (file.includes("/products/")) {
    const { channels } = await sharp(file).stats();
    const meta = await sharp(file).metadata();
    if (!meta.hasAlpha || channels[channels.length - 1].min !== 0) throw new Error(`Missing transparent cutout: ${file}`);
  }
}
console.log(`Decoded ${images.size} referenced images; product cutouts have transparent alpha.`);
