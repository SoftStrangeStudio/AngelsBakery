# Soft Strange Bakery — Intent Pack

Purpose: One current, checked interpretation of the user's direction for the bakery website. Update this pack whenever the user steers the work; record the original thought in [`THOUGHTS.md`](THOUGHTS.md) first. Keep implementation status in `.agent/current.md` and delivery/launch tracking in [`../docs/task-tracker.md`](../docs/task-tracker.md), avoiding duplicate task lists.

## Current intent

Keep the cozy homemade Polaroid appearance, warm paper, sage framing, existing bakery photos and wording. Remove the carousel entirely. The seven existing photo cards are the main display, framed above and below by the owner-provided Gilsum landscape with gentle page-scroll movement. Latest refinement: extend the upper landscape behind a single taped note containing “This Saturday,” the original headline and all four Saturday details; replace the separate headline block and facts ribbon with that overlay. Reduced motion makes the landscape still.

Clean up the obsolete carousel state, controls and accumulated hero styling; preserve the service/view-model/view architecture, routes, base path and ordering safeguards. Compare screenshots before and after at desktop, windowed, tablet and phone sizes. This pass is local only: do not commit, push or deploy. Earlier carousel-retention directions below are historical and superseded by this request.

Latest clarified scope: the request for a taller image and different Polaroid note cards refers to the lower “Your treat. Your Saturday” section, not the homepage opening. Preserve the accepted opening. Present the lower section with a tall landscape, taped heading and three photo cards for choosing treats, Saturday details and taking something home; reuse factual copy and imagery.

## Ongoing collaboration intent

- Adapt the Soft Strange Studio design language already reviewed for the bakery.
- Keep the headless preview at `http://localhost:3001/AngelsBakery/` (port 3000 was already occupied).
- Work only on Soft Strange Bakery; continue iteratively as the user shares thoughts, until the website work is complete.
- Give concise conversational progress/workflow readbacks and capture each new design thought here and in `THOUGHTS.md`.
- Keep sharing fresh screenshot frames in chat at useful aspect ratios, including windowed desktop, tablet, and mobile.
- Treat “production ready” carefully: complete and verify local source/user journeys, but keep the documented business approvals, approved host, Google deployment, and receipt evidence as separate gates. Do not call a local build a public launch or a successful real order.

## Earlier direction-to-work map (historical)

| User thought | Design implication | Check |
| --- | --- | --- |
| “in windowed mode it doens fit” and “See how it fits here is notgood?” | Rebalance the desktop first screen for a regular browser window; prevent decorative strips and content from clipping horizontally. | Desktop screenshot at 1440×900 and 1280×800; inspect horizontal overflow. |
| 2026-10-12 attached windowed view still clips the final ribbon detail | Keep the full wording and let each Saturday detail wrap as one visual group in a compact two-row layout at narrow desktop widths and phones. | Compare 1024×768, 1280×720, 1560×900, and 390×844; inspect each detail and viewport/document widths. |
| 2026-10-12 screenshot: the windowed page still feels oversized | Reduce desktop hero and carousel scale another small step; preserve copy and familiar layout. | Compare 1280×720 and 1536×900 with a 390×844 mobile frame; verify ticker wraps and no horizontal overflow. |
| Latest windowed screenshot still feels crowded above the menu | For short desktop windows, shrink the scenic/carousel stack and reclaim some space above the featured cards; leave phone layouts and copy alone. | Compare 1536×780 and 1280×720, plus 390×844; inspect the visible featured cards and horizontal fit. |
| Attached windowed screenshot still feels badly balanced | Keep the compact hero sizing and put the featured pastry name on a quiet paper label so it stays clear of floating pastries; preserve the current wording and mobile controls. | Review 1024×768, 1280×720, 390×844 screenshots; check document width against each viewport. |
| “See how it fits here is notgood?” with the oversized attached Chrome view | Preserve the compact short-window layout; compare the supplied older render to fresh localhost frames before changing CSS again. | Review 1536×780, 1280×720, 390×844, and 1920×1080; confirm ticker fit and document width. |
| “See how it fits here is notgood?” with the older oversized windowed view | Give the menu more room in short desktop windows by slightly shortening the scenic/carousel stack and reducing the gap above the featured cards; leave phone sizing and copy alone. | Compare 1280×720 and 1536×780, plus 390×844 and 320×740; confirm cards enter the first fold and widths fit. |
| Latest attached windowed view still feels too large | Keep the tightened desktop masthead and pastry display; use fresh captures to distinguish the older clipped render from the current local layout. Preserve wording and phone sizing. | Compare 1180×720, 1560×910 and 390×844; inspect the ticker and document width. |
| Responsive QA observation: the featured headline left “oven.” alone on mobile, and the 320px page overflowed | Slightly reduce only that heading, let the one-column product grid shrink, stack price under product name on the narrowest phones, and keep carousel controls clear of pause/scroll buttons. | Verify 320, 375, 390, 768, 1280, and 1536 CSS-pixel widths; check the longest carousel name and matching document width. |
| “also the screen and evyeirng is jsut too big” | Reduce hero/carousel height, excess spacing, and oversized type where it crowds the viewport. Preserve readable text and touch targets. | Compare desktop and mobile screenshots; check the first fold. |
| “it doesn tfeel homey enough it feels too professional” | Warm the existing palette and soften the card/paper treatment using the current assets and styling system. | Visual review against existing photos and Studio-derived handmade language. |
| “it needs to feel alsmost put toghet erliek a blog” | Give the existing page a more personal, editorial rhythm through restrained layout and styling; do not restructure routes or invent blog copy. | Review the homepage as a whole and confirm original copy remains. |
| “dont overhaul or chagne the wordign too much jsut reworkd the stylgin slithgly” | Keep changes narrowly visual; preserve approved and factual copy. | Diff review of text and content files. |
| “track all intente and reflec thtem back to be as you work” | Log thoughts and evidence, maintain this readback, and briefly echo how new direction affects the work. | Update both packs as user steering arrives. |
| 2026-10-12 carousel feedback: “it is making it seem too streamlined”; request for five strategic changes | Rework the carousel as an informal collage, then review the page in five distinct passes: opening composition, facts strip, featured-bake cards, story pacing, and responsive coherence. Keep copy and interactions recognizable. | Review each pass against the supplied screenshots and capture windowed, tablet and mobile frames; check no clipping, keyboard operation and reduced motion. |

## Guardrails

- Work only on Soft Strange Bakery, as directed.
- Preserve existing routes, `/AngelsBakery` base path, reduced-motion support, image provenance, and business/order approval gates.
- Keep existing wording substantially intact; do not invent product, ingredient, location, or availability claims.
- Do not deploy or enable live ordering from local preview work.
- Treat generated/concept food imagery as editorial concepts, not actual product photography.

## Derived launch-safe choice

- The local preview/export uses `noindex, nofollow`. The user subsequently chose the existing Pages site for now. This new photo redesign is explicitly local only; that earlier hosting choice does not authorize publishing this pass.
- The shared skip link should place keyboard focus on the main landmark across routes; use a programmatically focusable main target while preserving the existing skip-link wording and layout.
- Finite static information and product routes should reject ungenerated params, so unknown slugs cannot trigger request-time generation against `output: "export"`.

## Not yet specified

- The exact blog-like details (for example, whether the user wants dated posts or a more informal visual rhythm) are open; do not add new content or page structures unless their feedback points there.
- “Homey” has been read as a visual tone, not permission to change copy or business facts.

## Earlier five visual passes (historical)

1. **Opening — complete:** the existing Saturday headline leads a cropped landscape and loose three-treat collage; other bakes stay selectable, and the name marker is a small handwritten paper note.
2. **Saturday facts — complete:** the existing four phrases are a compact, taped paper note with a named landmark; wording is unchanged.
3. **Featured bakes — complete:** the existing taped cards have a subtle stagger on wide desktop while keeping their order, product details and smaller-screen layout.
4. **Story pacing — complete:** Angel’s existing story sits on a lightly taped paper card; no dates, posts or business details were invented.
5. **Responsive coherence — checked:** windowed desktop, tablet, phone and small-phone views fit; reduced-motion behavior and the carousel remain usable.

## Double-check record

- 2026-10-11: Compared this readback against all six user directions above and the attached browser screenshot. The intent preserves the copy constraint, narrow styling scope, window fit, smaller scale, homey/blog tone, and ongoing reflection request. No additional product facts were inferred.
- 2026-10-11: Cross-checked the pack against the earlier request to adapt Soft Strange Studio, keep a headless localhost preview, work only on the bakery, continue iteratively, track and reflect incoming thoughts, and supply frequent workflow updates and responsive screenshots. The local-preview versus production-launch distinction remains explicit.
- 2026-10-12: Rechecked the attached short-window screenshot against the 1536×780 preview. The compact rule moves the first featured cards from y≈664 to y≈612, while the 390×844 phone metrics remain unchanged and both desktop ticker/document widths fit.
- 2026-10-12: Compared the repeated Oct 11 screenshot with a fresh 1536×780, 1280×720, 1024×768, and 390×844 render. The current compact preview shows the first menu cards in desktop windows; the ribbon fits on desktop and wraps on mobile.
- 2026-10-12: A 320px route sweep found the shared product card width affecting `/menu/` and product details as well as home; the responsive grid and ≤360px price layout were generalized. All 17 customer routes now measure exactly 320px wide at a 320px viewport.
- 2026-10-12: Compared the new attached window screenshot with a fresh localhost render. The attachment shows the older oversized state; current 1536×780 and 1280×720 frames fit the ticker and bring featured cards into view, while 390×844 wraps the ticker with a 390px document width. No additional CSS change was needed for this comparison.
- 2026-10-12: New screenshots clarify that the carousel itself still feels too streamlined, with a centered label, evenly spaced food cutouts and too much sky. Added a five-pass design map and began the hand-assembled opening pass while keeping all names and controls intact.
- 2026-10-12: Rechecked the attached render against 1180×720, 1560×910, and 390×844. Current desktop ticker fits and the mobile document stays 390px wide; retained the existing responsive styling and recorded the new screenshots in `THOUGHTS.md`.
- 2026-10-12: Rechecked reduced motion after the responsive CSS edits at 390×844. Scenic animation and carousel transition both compute to 0s, document width remains 390px, and the Next control still changes the selected pastry.
- 2026-10-12: Verified the 320px menu filter and no-results recovery by keyboard: Muffins returns two products, “Show every treat” restores all seven, and both focused controls retain a 3px outline.
- 2026-10-12: The latest 1280×720 screenshot still left too little menu content visible. Preserve the homepage hero and copy, but compact the menu-only hero and spacing; style a non-ordering preview result as an informational status. Recheck at short desktop and phone widths.
- 2026-10-11 implementation pass: shortened the hero/carousel, reduced product scale and card shadow, warmed the page paper color, restored the already-loaded soft serif for editorial headings, wrapped the bake-sale strip, and stacked the featured-menu link below its heading on phone widths. A 768px tablet check exposed three-column card overflow, so that breakpoint now uses two columns. Existing page wording and structure were left in place.
- 2026-10-11 screenshot follow-up: reduced the shared scenic hero from 47svh to 42svh (300–420px) and the phone hero from 49svh to 39svh (290–380px), with an 8px shorter mobile carousel. This keeps the existing carousel and copy while bringing menu/home content higher into a short first screen.
- 2026-10-11 visual check: captured `output/soft-strange-bakery-windowed-1280x800.png`, `output/soft-strange-bakery-desktop-1440x900.png`, `output/soft-strange-bakery-tablet-768x1024.png`, `output/soft-strange-bakery-mobile-390x844.png`, and `output/soft-strange-bakery-small-mobile-360x800.png`. The document width matched the viewport at 1280, 1440, 768, 390, and 360 CSS pixels; the bake-sale strip wraps on phone screens.
- 2026-10-11 validation: final `npm run check` passed after the serif and tablet-grid refinements (lint, typecheck, all 19 tests, static build/export of 20 HTML files, 18 referenced images). `git diff --check` passed before the final tracking-note updates; repeat it after these notes.
- 2026-10-11 route review: applied the same restrained serif treatment to existing About, Pickup, FAQ, and product titles without changing their copy or structure. Captured desktop/mobile route frames and confirmed no horizontal overflow on each reviewed view. Rerun `npm run check` after this shared heading update.
- 2026-10-11 validation: final `npm run check` passed after homepage and shared inner-page heading updates (lint, typecheck, all 19 tests, static build/export of 20 HTML files, 18 referenced images). Browser width checks matched at 1280, 1440, 768, 390, and 360px across homepage and reviewed inner routes. Repeat `git diff --check` after the latest notes.
- 2026-10-11 ordering guard review: the product reservation CTA is disabled in local preview, the empty order page offers a path back to the menu, and `/order/confirmation/` states that no verified receipt exists. Desktop and phone widths matched their viewports; no customer details were entered or request submitted.
- 2026-10-11 local preview interaction: seeded one fictional sample cart item and used `Preview Tester` / `preview@example.invalid` only in the headless browser to open the review screen. The preview action stayed on `/order/review/`, displayed “This is a preview. No order has been sent, and no payment has been taken.”, and produced no Google Script resource request. Removed the temporary cart and retry state, then returned the browser to the homepage.
- 2026-10-11 interaction/accessibility review: menu showed 7 products, the Muffins filter showed 2, and a “Blueberry” search narrowed that to 1 without overflow. A FAQ disclosure opened with its answer visible. Reduced-motion emulation set the scenic animation to `none`, kept the first frame visible, and changed scroll behavior to `auto`; the 390px layout remained within its viewport. Captured `output/soft-strange-bakery-mobile-reduced-motion-390x844.png` and `output/soft-strange-bakery-faq-mobile-open-390x844.png`.
- 2026-10-11 Next.js warning cleanup: added `data-scroll-behavior="smooth"` per the installed Next 16 upgrade guide and `loading="eager"` to the above-fold About image after the dev server identified it as LCP. Revisited About: image loading is eager, the root scroll-behavior attribute is present, and its console log has no app warning. Re-captured the current windowed homepage frame.
- Responsive follow-up: captured laptop landscape 1024×768, wide desktop 1920×1080, tablet 820×1180, and short phone 375×667. All four measured document widths exactly matched their viewport widths; captured screenshots are in `output/soft-strange-bakery-<size>.png`.
- 2026-10-11 window-fit follow-up: visually recaptured the mobile menu at 390×844, the homepage at 1280×800, short phone at 375×667, and wide desktop at 1920×1080. Carousel/paper content fits within each frame; phone menu now begins higher. `npm run check` passed (lint, typecheck, 19 tests, static export of 20 pages, 18 referenced images) and `git diff --check` passed after this CSS adjustment.
- 2026-10-11 production metadata review: the validation host had shared `index: true` metadata. Changed the temporary build to `noindex, nofollow` and documented that indexing waits for approved commercial hosting/details. `npm run check` passed; live preview and exported home, menu, product, and pickup HTML all report the noindex directive.
- 2026-10-11 keyboard review: on the privacy route, the skip link updated `#main` but focus remained on the document. Added `tabIndex={-1}` to the shared main landmark; pressing Tab then Enter now reports main as the focused accessibility container. `npm run check` passed after the change.
- 2026-10-11 404 review: `out/404.html` contains the bakery recovery message, menu link, noindex metadata, and focusable main landmark. Direct unknown-slug requests to the Next dev server still return 500 under `output: "export"` because those params are not generated; `dynamicParams = false` now expresses the finite route contract. The installed Next 16 guide does not document metadata exports for ordinary `not-found.tsx`, so no client-side title workaround was added.
- 2026-10-12 static export route check: a temporary local static handler returned the exported home, direct product route, and base-path JavaScript asset successfully. An unknown route returned HTTP 404 with the exported bakery recovery page and menu link. This strengthens local export evidence, but is not commercial-host deployment evidence; AB-021 remains open for host selection and AB-023 remains open for deployed validation.
- 2026-10-12 production polish: added a small cookie-and-sparkle icon using the existing sage and paper palette. Next’s exported icon URL includes `/AngelsBakery/`; the static-browser homepage and direct product page had zero console errors, carousel interaction worked, and mobile width measured 390/390px.
- 2026-10-12 windowed-fit follow-up: reduced desktop hero from 260–340px to 250–300px, carousel product art from 190–270px to 170–230px, and carousel height from 132px to 120px. At 1280×720, the masthead, full info strip and next-section heading now fit before the cards; mobile retains its wrapped ticker. Captures: `output/soft-strange-bakery-windowed-1280x720.png`, `output/soft-strange-bakery-windowed-1536x900.png`, `output/soft-strange-bakery-mobile-390x844-current.png`.

## Carousel rethink — 2026-10-12

User readback: the carousel still makes the page feel too streamlined. Keep the same bake-sale copy and seven treats, but make browsing feel like leafing through a baking journal.

1. Default to a still display; make rotation opt-in. **Complete.**
2. Add a less regular still-life ground and stagger the supporting bakes. **Complete; checked at window, tablet, phone and small-phone sizes.**
3. Attach the selected name to the collage as a handwritten bake note; soften the selector marks. **Complete.**
4. Give the controls a casual journal rhythm while preserving Previous/Next, direct selection, swipe and keyboard access. **Complete.**
5. Recheck crop, fit, selection and reduced-motion behavior across all target sizes after the visual passes. **Complete:** five sizes fit, and reduced-motion navigation remains functional.

The first implementation and its screenshots are recorded in `THOUGHTS.md`; the full project validation passed. Local preview stays on port 3001.


Latest opening preference (2026-10-12): follow the supplied three-note screenshot, with slightly smaller taped Polaroid notes and faint ruled paper lines. Preserve the wording, three paper colors, scenery and responsive readability.

- Closing-section direction (2026-10-12): layered ruled notecards and Polaroid paper over a different owner-provided Gilsum photo. Keep scenery visible, notes cozy and readable, and footer navigation/disclosures intact.

- Opening-card fit: avoid full-width stacked notes. Leave visible scenery beside each card, using narrower widths and gentle stagger without clipping text.

- Footer clarification: retain a complete full-width footer with compact, quiet information cards; group copyright/privacy/disclosures into one subdued area instead of separate prominent strips.
