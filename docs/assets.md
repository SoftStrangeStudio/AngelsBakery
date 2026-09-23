# Artwork provenance

## Current website set — 2026-09-23

The cream-and-sage design and two dog mascots follow the owner-supplied brand board `06fe0053-165d-4bd0-845f-5a5114ec8b12.png`. The primary logo and compact dog mark were newly generated from that reference. Neither adds a dietary claim.

All seven current products have new OpenAI-generated concept imagery:

| Stable product ID | Transparent carousel/cart image | Menu/detail/viewer image |
| --- | --- | --- |
| snickerdoodles | `products/snickerdoodles.webp` | `scenes/snickerdoodles.webp` |
| sugar-cookies | `products/sugar-cookies.webp` | `scenes/sugar-cookies.webp` |
| peanut-butter-cookies | `products/peanut-butter-cookies.webp` | `scenes/peanut-butter-cookies.webp` |
| chocolate-chip-cookies | `products/chocolate-chip-cookies.webp` | `scenes/chocolate-chip-cookies.webp` |
| brownies | `products/brownies.webp` | `scenes/brownies.webp` |
| blueberry-muffins | `products/blueberry-muffins.webp` | `scenes/blueberry-muffins.webp` |
| double-chocolate-muffins | `products/double-chocolate-muffins.webp` | `scenes/double-chocolate-muffins.webp` |

Paths above are relative to `public/images/`. Brand files are `brand/brand-primary.webp` and `brand/brand-small.webp`. Each photographic scene was generated using its matching cutout as a reference. Source outputs were converted to WebP with alpha retained; no runtime chroma keying is used. The check command decodes every image referenced by the static HTML and verifies transparent product alpha.

These images suggest handmade, gluten-free-style textures, but they are **concepts, not photographs of Angel’s actual products or evidence of ingredients/cross-contact safety**. Product pages, the image viewer, and the footer disclose concept imagery. Recipe approval remains separate. The current catalog contains only the seven owner-specified products.

The four outdoor background photographs are owner-provided copies: `outdoors/yard-morning.jpg` from `IMG_9435(1).jpg`; `outdoors/orchard.webp` from `IMG_9438.webp`; `outdoors/sunset-wide.jpg` from `IMG_9439(1).jpg`; and `outdoors/sunset.webp` from `IMG_9439.webp`. They rotate slowly, pause with the pastry rotation control, and become a single still photo under reduced motion.

Older generated assets remain historical source material; current page references use the set above. No scraped third-party food photography was used. DM Sans / DM Serif Display remain self-hosted through Fontsource; icons are Lucide.

See [generation prompts](asset-prompts.md).
