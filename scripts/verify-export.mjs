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
for (const file of files.filter((f) => f.endsWith(".html"))) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(
    /(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g,
  )) {
    const url = match[1];
    if (!url.startsWith("/")) continue;
    if (!url.startsWith("/AngelsBakery/")) {
      errors.push(`${path.relative(root, file)}: unprefixed URL ${url}`);
      continue;
    }
    const relative = decodeURIComponent(url.slice("/AngelsBakery/".length));
    const local = path.join(root, relative);
    try {
      const info = await stat(local);
      if (info.isDirectory()) await stat(path.join(local, "index.html"));
    } catch {
      errors.push(`${path.relative(root, file)}: missing ${url}`);
    }
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `Verified local URLs across ${files.filter((f) => f.endsWith(".html")).length} exported HTML files.`,
);
