# Artwork provenance

- Homepage outdoor background photographs were supplied by the site owner in this design request. `public/images/outdoors/yard-morning.jpg`, `orchard.webp`, `sunset-wide.jpg`, and `sunset.webp` are copies of `IMG_9435(1).jpg`, `IMG_9438.webp`, `IMG_9439(1).jpg`, and `IMG_9439.webp`, respectively. The sunset images are similar views but retain the four supplied source files. They rotate slowly; reduced-motion mode shows the first still photo.
- The homepage gallery and menu still use the editorial concept product images described below. The exact photos of Angel’s finished baked goods were not present in the available uploads or this repository; replace the catalog image keys and review all routes when those originals become available. A larger gallery image discloses its editorial nature in the picture viewer.

- Original OpenAI-generated imagery, 2026-09-19; no scraped third-party photographs.
- Hero prompt: premium natural editorial pastry platter, golden croissants/chocolate pastries/strawberry custard, ivory ceramic and butter-yellow linen, morning light, peach plaster, no text/logos/people.
- Cutout prompt: consistent 2×2 food-photo sheet; full isolated croissant, strawberry Danish, chocolate cookie, lemon layer cake; warm 35-degree camera angle, genuine transparent alpha, no labels/plates/props.
- Actual output contains alpha. `scripts/prepare-assets.mjs` crops quadrants and optimizes WebP with transparency retained. No runtime keying or chroma fringe.
- The featured carousel now has twelve isolated subject assets: peanut butter cookies, chocolate chip cookies, cinnamon rolls, butter croissants, dense seeded sandwich bread, sourdough, dinner rolls, banana bread, blueberry muffins, brownies, fruit danishes, and cinnamon coffee cake.
- Each featured product also has a matching full-setting scene under `public/images/scenes/`. The carousel uses isolated assets; product detail pages use the full-setting pair.
- The dense seeded sandwich bread image is a visual concept. Gluten-free and dairy-free claims remain provisional until the recipe and cross-contact process are approved.
- CSS provides texture, colors, layered borders/shadows and bounded parallax. Raster source subjects remain separate.
- These are **concept images**, not photos/evidence of actual bakery products. Site disclosure is explicit; approve/replace before launch.
- Isolated subject asset checklist: preserve alpha; inspect edges for halos/fringing; verify transparent pixels at mobile sizes; keep a stable fallback image; do not use the concept assets as proof of actual product appearance.
- Self-hosted DM Sans / DM Serif Display via Fontsource (package license notices); Lucide icons (ISC). No external font/tracking request needed.
