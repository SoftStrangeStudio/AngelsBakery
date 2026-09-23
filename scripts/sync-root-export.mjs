import { cp, readdir, rm, readFile, access } from "node:fs/promises";
import { execFileSync } from "node:child_process";

// Only these generated locations may be replaced. Source/docs are never targets.
const generated = [".nojekyll", "404.html", "404", "_not-found", "_next",
  "about", "contact", "faq", "images", "menu", "order", "pickup", "privacy",
  "index.html", "index.txt", "__next.__PAGE__.txt", "__next._full.txt", "__next._tree.txt"];
const entries = await readdir("out");
for (const name of entries) {
  if (!generated.includes(name)) throw new Error(`Unreviewed export path: ${name}`);
}
for (const route of ["index.html", "menu/index.html"]) {
  if (!(await readFile(`out/${route}`, "utf8")).includes("arc-carousel")) {
    throw new Error(`Missing bakery gallery in ${route}`);
  }
}
const tracked = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" }).split("\0").filter(Boolean);
const obsolete = [];
for (const file of tracked.filter((file) => generated.includes(file.split("/")[0]))) {
  try { await access(`out/${file}`); } catch { obsolete.push(file); }
}
// Explicitly stage removal of obsolete tracked exports as part of publishing.
if (obsolete.length) execFileSync("git", ["rm", "--", ...obsolete]);
for (const name of generated) await rm(name, { recursive: true, force: true });
for (const name of entries) await cp(`out/${name}`, name, { recursive: true });
console.log("Refreshed repository-root Pages export from validated out/.");
