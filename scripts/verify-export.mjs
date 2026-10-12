import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
async function walk(dir) {
  const files = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, item.name);
    if (item.isDirectory()) files.push(...(await walk(p)));
    else files.push(p);
  }
  return files;
}
const files = await walk(root);
const errors = [];
const htmlFiles = files.filter((f) => f.endsWith(".html"));
let openGraphImages = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const relativeFile = path.relative(root, file);
  if (!/<meta\b(?=[^>]*\bname="robots")(?=[^>]*\bcontent="noindex,\s*nofollow")[^>]*>/i.test(html)) {
    errors.push(`${relativeFile}: missing pre-launch noindex metadata`);
  }
  if (html.includes("softstrangestudio.github.io/AngelsBakery")) {
    errors.push(`${relativeFile}: references the retired GitHub Pages origin`);
  }

  for (const match of html.matchAll(
    /(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g,
  )) {
    const url = match[1];
    if (!url.startsWith("/")) continue;
    if (url.includes("/AngelsBakery/AngelsBakery/")) {
      errors.push(`${relativeFile}: duplicated base path in ${url}`);
      continue;
    }
    if (!url.startsWith("/AngelsBakery/")) {
      errors.push(`${relativeFile}: unprefixed URL ${url}`);
      continue;
    }
    const relative = decodeURIComponent(url.slice("/AngelsBakery/".length));
    const local = path.join(root, relative);
    try {
      const info = await stat(local);
      if (info.isDirectory()) await stat(path.join(local, "index.html"));
    } catch {
      errors.push(`${relativeFile}: missing ${url}`);
    }
  }

  for (const match of html.matchAll(
    /<meta\b(?=[^>]*\bproperty="og:image")(?=[^>]*\bcontent="([^"]+)")[^>]*>/gi,
  )) {
    openGraphImages += 1;
    let imageUrl;
    try {
      imageUrl = new URL(match[1]);
    } catch {
      errors.push(`${relativeFile}: Open Graph image must be an absolute URL`);
      continue;
    }
    if (imageUrl.protocol !== "https:") {
      errors.push(`${relativeFile}: Open Graph image must use HTTPS`);
    }
    if (imageUrl.hostname === "softstrangestudio.github.io") {
      errors.push(`${relativeFile}: Open Graph image uses the retired GitHub Pages host`);
    }
    const basePathCount = imageUrl.pathname
      .split("/")
      .filter((segment) => segment === "AngelsBakery").length;
    if (!imageUrl.pathname.startsWith("/AngelsBakery/") || basePathCount !== 1) {
      errors.push(`${relativeFile}: Open Graph image has an invalid /AngelsBakery/ path: ${imageUrl.pathname}`);
      continue;
    }
    const imageFile = path.join(
      root,
      decodeURIComponent(imageUrl.pathname.slice("/AngelsBakery/".length)),
    );
    try {
      const info = await stat(imageFile);
      if (!info.isFile()) errors.push(`${relativeFile}: Open Graph image is not a file: ${imageUrl.pathname}`);
    } catch {
      errors.push(`${relativeFile}: missing Open Graph image ${imageUrl.pathname}`);
    }
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `Verified base-path URLs and noindex across ${htmlFiles.length} exported HTML files; ${openGraphImages} absolute Open Graph images validated.`,
);
