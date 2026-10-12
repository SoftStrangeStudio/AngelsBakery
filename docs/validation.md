# Validation evidence

## Five-pass visual iteration — pass 1 — 2026-10-12

- Reworked the homepage opening into a journal-like composition using existing words: the Saturday heading now leads the hero, the landscape is a shallow strip, and the pastry carousel presents three loosely placed items at a time. All seven remain selectable; copy and product claims did not change.
- Reviewed the homepage at 1146×741, 1280×720, 768×1024, 390×844 and 320×568. `document.documentElement.scrollWidth` matched every viewport. At 320px, carousel controls remain inside the carousel. Reviewed `/menu/` at 1280×720; it retained its visible menu heading, controls and seven-card menu.
- With reduced motion enabled at 320×568, the carousel advanced from Brownies to Blueberry Muffins; pastry transition and scenic animation were both `0s`. Motion preference was reset afterward.
- `npm run check` passed: ESLint, TypeScript, all 19 existing tests, 20 static HTML exports, URL/noindex checks, and 18 referenced-image decodes. Screenshots are in `output/soft-strange-bakery-pass1-*.png`.
- These are local preview/build checks only. No deployment or real order was performed.

## Current-source recheck — 2026-10-12

- `npm run check` passed: ESLint, TypeScript, all 19 tests, the static build/export of 20 HTML files, base-path/noindex/Open Graph URL verification, and decoding of 18 referenced images.
- `npm audit --omit=dev --audit-level=moderate` reported zero production dependency vulnerabilities. The full audit reports five high-severity paths through the same dev-only `braces@3.0.3` chain (`eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch`). The current GitHub advisory lists no patched `braces` release; npm's forced fix proposes downgrading `eslint-config-next` to 14.2.35, so it was not applied. See [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm).
- After the production build, the local preview still returned HTTP 200 at `http://localhost:3001/AngelsBakery/`. A fresh 1280×720 browser load measured the document and info strip at exactly 1280px and reported zero browser errors or warnings. Capture: `output/soft-strange-bakery-home-windowed-1280x720-post-check.png`.
- Fresh same-origin direct requests to all 17 customer routes returned HTTP 200 with a title, H1, `noindex, nofollow`, and base-prefixed scripts/styles. On `/menu/` at 390×844, all seven product cards and the search control rendered with document width exactly 390px; capture: `output/soft-strange-bakery-menu-mobile-390x844-readiness.png`.
- With reduced motion enabled on the mobile menu, scenic animation and carousel transition were `0s`, smooth scrolling became `auto`, and the autoplay control was hidden. The carousel remained paused and its Next control changed the selection; document width stayed 390px. Restored normal motion and the 1280×720 homepage. The cart remained `[]` and browser console had zero errors/warnings.
- These checks cover the current local tree only. The bakery changes remain uncommitted, current `main` still matches `origin/main` at `68ea344`, and no deployment or live order was performed.

## Soft Strange Bakery local export — 2026-10-12

- Checkout base: `main` at `68ea344`, matching live `origin/main`; Soft Strange Bakery changes are currently uncommitted.
- `npm run check` passed after the responsive hero adjustments and SVG icon addition: ESLint, TypeScript, all 19 tests, a static export of 20 HTML files, export-link verification, and decoding of 18 referenced images.
- A temporary local static handler served the export under `/AngelsBakery/`. The homepage and direct Snickerdoodles page returned HTTP 200; `/icon.svg` and a built JS asset returned HTTP 200; an unknown path returned HTTP 404 with the bakery recovery page and its menu link. The exported homepage and direct product page loaded in a headless browser without console errors; the carousel control changed the active selection. At 1280×800 and 390×844, document width matched viewport width.
- The local static handler is a smoke-test harness, not GitHub Pages. The Next dev server still returns 500 for ungenerated paths under `output: "export"`; the exported static 404 was verified separately.
- Read-only check of the current public URL on 2026-10-12 returned HTTP 200 but served the September 23, 2026 “Angel’s Bakery” page, with no `noindex` directive; its icon endpoint returned 404. The live homepage HTML differs from the current export. The latest rebrand has not been deployed.
- The current local preview returns HTTP 200 at `http://localhost:3001/AngelsBakery/`; ordering remains disabled. No public deployment or real order was made as part of this check.
- Storage fallback: with one fictional cart item, the `window.localStorage` getter was changed to throw a `SecurityError` on the order page. Incrementing the item still updated the in-memory cart without a console error. A malformed cart record then recovered to the empty-cart page without a console error. A separate browser run made `Storage.prototype.getItem()` throw for the cart key; the page recovered to the empty-cart heading with a zero badge and no console errors. The cart was cleared to `[]` afterward.
- Pickup keyboard flow: the order form exposed the radio group as “Choose a pickup date”; after selecting the first option, ArrowDown selected the second. At 390×844 the document remained 390px wide. Evidence: `output/soft-strange-bakery-pickup-dates-mobile-390x844.png`. The synthetic cart was cleared and no customer details were entered or submitted.
- Route sweep: direct-loaded all 17 customer routes at 1280×800 and 390×844. Every page returned HTTP 200 with a title, primary heading, `noindex, nofollow`, and matching viewport/document width.
- Reduced motion: at 390×844, scene animation was `none`, carousel transitions were `0s`, and scroll behavior was `auto`; the Next control still selected another pastry. Evidence: `output/soft-strange-bakery-reduced-motion-390x844-current.png`. The browser preference was reset afterward.
- Responsive captures: `output/soft-strange-bakery-static-export-1280x800.png`, `output/soft-strange-bakery-static-export-mobile-390x844.png`, plus windowed, wide desktop, tablet and short-phone frames under `output/`.

## Windowed-fit follow-up — 2026-10-12

- At 1280×720, the homepage now keeps the masthead, reduced carousel, full info strip, and “Fresh from our little oven” heading in view. Hero height is 250px at this viewport; the carousel is 120px tall and its selected art is 218px wide. Document width matched 1280px.
- At 390×844, the info strip wraps and document width matched 390px. Reduced mobile product art and raised the art stage so the two-line “Double Chocolate Chip Muffins” title clears the pastry image; carousel focus/selection was exercised without entering order details.
- Captures: `output/soft-strange-bakery-windowed-1280x720-final.png`, `output/soft-strange-bakery-windowed-1536x900.png`, `output/soft-strange-bakery-mobile-long-carousel-title-390x844-final.png`.
- `npm run check` passed after both desktop and mobile spacing changes: lint, typecheck, all 19 tests, 20 exported HTML files, URL verification, and 18 decoded images. Preview remains local; this does not verify the public site or clear launch gates.

## Preview checkout flow — 2026-10-12

- Used one fictional Snickerdoodles cart item and `Preview Tester` / `preview@example.invalid` only in the local headless browser. A malformed email was rejected by native email validation; a one-character name produced the inline 2–80-character error. A valid sample name/email plus the sample pickup date reached `/order/review/`; the phone remained optional.
- Clicking “Preview only — orders open soon” stayed on the review route, announced “This is a preview. No order has been sent, and no payment has been taken.”, displayed no confirmation, and generated zero Google Script requests. Local storage retained only the cart selection; session storage stayed empty. No customer data was persisted or real order attempted.
- Removed the fictional cart item, confirmed the saved cart is `[]`, cleared the tab back to the homepage, and restored 1280×720. Current local homepage width matched viewport width.
- This verifies only the preview behavior. Google deployment, CORS, exact-once delivery, and real receipt verification remain gated under AB-017–024.
- Correction path: on the review page, “Change my details” returned to `/order/` with the selected sample pickup and fictional name/email preserved in app memory. Customer data remained absent from local and session storage. Removed the sample cart item, restored the homepage, and observed zero browser console errors. Homepage frame: `output/soft-strange-bakery-home-after-checkout-review-1280x720.png`.

## Reload retention check — 2026-10-12

- Added one fictional Snickerdoodles item, selected a sample pickup date, and entered fictional name/email in the local preview. Before reload, local storage held only the cart item; no customer fields or session data were stored.
- Reloaded `/order/`: the cart item remained in the summary, while the selected pickup and contact fields reset to blank. At 390×844, the document width was 390px. Evidence: `output/soft-strange-bakery-order-reload-mobile-390x844-final.png`.
- Removed the sample cart, confirmed `[]` in local storage with no session keys, and returned to the 1280×720 homepage. This confirms local retention behavior only; it does not approve a customer-facing privacy policy.

## Keyboard validation recovery — 2026-10-12

- On `/order/`, Tab focused the skip link with a 3px visible outline; Enter moved focus to `main#main`.
- With one fictional cart item and a sample pickup date, submitting a one-character name focused `#name-input`; it exposed `aria-invalid="true"`, described `#name-error`, and showed a 3px focus outline. A malformed optional phone similarly focused `#phone-input` and its linked error. Correcting it let the form reach review.
- On `/order/review/`, the consent checkbox had an associated text label; Space toggled it. No Google Script request was made. At 390×844 document width stayed 390px. Synthetic cart was cleared and the preview restored to its desktop homepage.
- The focus recovery change is in `src/views/order-view.tsx`. `npm run check` passed: lint, typecheck, 19 tests, 20 exported pages, URL verification and 18 decoded images. Phone error frame: `output/soft-strange-bakery-order-name-error-focus-mobile-390x844-final.png`.

## Menu and cart keyboard controls — 2026-10-12

- At `/menu/` and 390×844, focused the Muffins filter and pressed Enter; `aria-pressed` moved to Muffins and two product cards remained within the viewport. Typed a query with no matches, focused “Show every treat,” and pressed Enter; the query cleared, Everything was selected, and all seven cards returned. Both focused controls showed the 3px outline.
- On `/order/`, Enter on the focused Add control increased the sample quantity 1→2; the live quantity region and cart storage updated. Enter on Remove returned it to 1. Removed the synthetic item; local cart is `[]`, session storage is empty, and the preview is back on the 1280×720 homepage.
- Phone frame with the Muffins filter selected: `output/soft-strange-bakery-menu-muffins-mobile-keyboard-390x844.png`. Ordering stayed disabled; no order was submitted.

## Menu/root correction — 2026-09-23

- `npm run publish:root` passed all 19 tests, lint, TypeScript, static URL and image decoding checks. All 198 exported files matched the root copies byte-for-byte.
- Fresh Chromium checks served the repository root, opening `/menu/` at 1440×900 and 390×844. Both now show the outdoor background and curved seven-product carousel. [Desktop](evidence/menu-root-desktop.jpg) · [Phone](evidence/menu-root-phone.jpg).
- Passed selection, wrap, keyboard, drag, paced touch swipe, matching image viewer, autoplay resume, reduced motion, scroll cue, category filter, no-results/reset and a product deep link. No page errors or non-aborted network failures.
- Live deployment verification is separate from this local root-export evidence and must target the delivered commit.


## Cream-and-sage redesign — 2026-09-23

- Current source passes `npm run check`: lint, strict TypeScript, 19 tests, production static export, local URL verification across 20 HTML files, and decoding of all 20 referenced images. All seven product cutouts have transparent alpha.
- Fresh local Chromium inspection of the actual exported website passed at 1440×900 and 390×844. Evidence: [desktop](evidence/cream-sage-desktop.jpg), [phone](evidence/cream-sage-phone.jpg).
- Verified all seven carousel entries, next/previous, wrap in both directions, keyboard navigation, drag, realistic touch swipe, matching scene opening, Escape/close button, autoplay resume, pause, menu scroll cue, deep product route, and no horizontal overflow.
- Reduced motion disables scenic animation and carousel autoplay. Phone image opening passed after swipe. A zero-duration synthetic swipe initially suppressed the next browser click; replaying a paced touch gesture resolved the test artifact without changing the tap behavior.
- No JavaScript errors or non-aborted failed requests. Navigation-cancelled Next.js prefetch requests are excluded from network failures.
- Four owner-supplied outdoor backgrounds remain. New assets are seven generated cutouts, seven matching concept scenes and two generated dog marks. See `assets.md` and `asset-prompts.md` for provenance.
- The former Pages deployment workflow has been removed. `.github/workflows/validate.yml` checks source without publishing it. After a suitable commercial host is approved, add and verify a provider-specific deployment workflow; local validation alone is not deployment evidence.
- Coverage does not establish commercial launch readiness or live order processing; existing ordering gates remain closed.

## Historical repair — 2026-09-22

- Angel’s Bakery is being validated as the actual customer-facing website, not as a portfolio proof or demo.
- The current-source build regression was traced to commit `e82eea0d`: `src/app/globals.css` was replaced wholesale by one corrupted/non-CSS line. The preceding clean revision contained the complete 2,089-line stylesheet.
- This repair restores the known-good stylesheet from the last clean source revision while preserving all later product, ordering-boundary and deployment work.
- Acceptance for this repair is a successful **Validate** workflow on the delivered `main` revision: lint, TypeScript, automated tests, Next.js production export and export verification must all pass.
- Production-host deployment must be checked separately after a suitable host is approved. GitHub Pages is not an approved target for this customer-facing bakery site; a local export or stale branch-root deployment is not proof of production readiness.

## Previously established automated coverage

- ESLint and TypeScript strict checking are part of `npm run check`.
- The repository test suite covers cart corruption/bounds/totals, customer validation, date rollover, receipt guards, malformed response rejection, server pricing, idempotent replay, request conflicts, capacity/cancellation, cutoff/product availability, input/honeypot/consent checks, formula injection, the closed server gate, rate limiting and ordering-boundary behavior.
- Google tests execute the actual Apps Script code in a mocked service environment. They do not prove a deployed Google connection or real concurrent cloud execution.
- Static export verification checks generated routes and local asset/link resolution under `/AngelsBakery/`.

## Not yet verified for launch

- Live commercial-host checkout and order integration validation; the redesign’s local desktop/phone checks above are complete.
- Live Google authorization/deployment, browser cross-origin receipt and private Sheet write.
- Angel-approved menu, ingredients, pickup location/timezone/schedule, contact details and privacy/retention policy.
- Commercial production hosting. GitHub Pages is not an approved host for this customer-facing bakery site.
- Real ordering remains disabled until the external configuration and approval gates are satisfied.

## Website acceptance criteria

- The homepage opens with the intended immersive pastry carousel and clear bakery identity.
- Previous, next, swipe, drag and keyboard controls select the same active product state.
- Moving beyond either end wraps correctly without a dead endpoint.
- Autoplay pauses on hover, focus and interaction; reduced motion disables autoplay and floating motion.
- Product name, description, price and links always match the active pastry.
- The pickup CTA routes into the order journey and never submits an order directly.
- Menu/search/product routes, cart, pickup selection, review and negative states remain usable when decorative imagery fails.
- Preview/pre-launch states never claim that a real order was received.
- Desktop, tablet, narrow mobile and `/AngelsBakery/` static export require fresh visual inspection before commercial launch.

## Manual acceptance checklist

- Desktop and narrow mobile: no horizontal overflow, navigation and product imagery readable, clear pickup CTA, no hidden controls.
- Keyboard: skip link, menu filters, product add, cart controls, date radio group, labels/errors and consent usable; focus visible.
- Reduced motion: no required parallax or entrance/hover movement; all content remains visible.
- Pre-ordering journey: add → adjust → pickup → fictional details → review; nothing is transmitted; no false receipt.
- Reload: cart survives; personal details do not persist.
- Search no-results state works; direct product/checkout links refresh on the deployed host.
- Ordering launch: synthetic test reaches the private Sheet exactly once; retries preserve the receipt; closed/full/expired slots refuse; no secrets appear in exported bundles.

## Carousel keyboard and reduced motion — 2026-10-12

- On the 1280×720 homepage, Previous from Snickerdoodles wrapped to Double Chocolate Chip Muffins; focused Next plus Enter wrapped back. During the pointer check, the neighboring pastry's inline z-index covered Next's hit area. Raised the control row above carousel artwork, reran `npm run check`, and verified actual pointer clicks now wrap back to Snickerdoodles from that same state.
- With `prefers-reduced-motion: reduce`, scenic animations and carousel transitions computed to `0s`, root scrolling was `auto`, and Next plus Enter still advanced the selection to Sugar Cookies. Restored `no-preference` and navigated back to the homepage.
- Final preview state: HTTP 200 at `/AngelsBakery/`, 1280×720, document width 1280, Snickerdoodles selected, autoplay restored, cart `[]`, and no session keys. Screenshot: `output/soft-strange-bakery-windowed-1280x720-carousel-controls-final.png`.
- This verifies local interaction/accessibility only; current-source hosting and ordering approvals remain separate launch gates.

## Responsive and image-loading follow-up — 2026-10-12

- Fresh home frames at 375×667, 768×1024, 1280×720, and 1536×900 all had document widths equal to their viewport. At 375×667 the full menu link remains visible near the fold; “Double Chocolate Chip Muffins” wraps to two lines within its 210px caption, and pointer Next wraps to Snickerdoodles.
- Raised the shared carousel control row above layered pastry artwork after pointer hit testing found an overlap. Updated product-card images to use Next Image `fill` in their fixed-aspect containers; set the rotating above-fold scenic frames to eager loading without multiple preloads; made the editorial brownies image height explicitly auto to retain its source ratio.
- `npm run check` passed after these source changes: lint, typecheck, all 19 tests, static export of 20 HTML files, URL verification, and decoding of 18 referenced images. Fresh browser navigation at the desktop and 375px phone sizes emitted no warnings or errors; all scenic frames completed loading.
- Current local preview: `http://localhost:3001/AngelsBakery/`, restored to 1280×720 with autoplay active, empty cart and no session keys. Current desktop frame: `output/soft-strange-bakery-home-windowed-1280x720-current.png`; 375px frame: `output/soft-strange-bakery-home-mobile-375x667-current.png`.

## Exported route response sweep — 2026-10-11

- Mapped the current `out/` HTML export to its 17 customer routes and requested each exact `/AngelsBakery/` URL from the running local preview. All 17 returned HTTP 200, each title identified Soft Strange Bakery, and each response included `noindex` metadata. The generated 404 documents were excluded from customer-route counts.
- Includes home, About, Contact, FAQ, Privacy, Pickup, menu, all seven product pages, and all three order journey pages. This confirms local route availability and branding only; deployed deep links remain pending source delivery and hosting approval.

## Product-card responsive follow-up — 2026-10-11

- Reopened `/AngelsBakery/menu/` at 390×844 after changing product-card images to Next Image `fill`. All seven cards rendered and their first scene images were complete; document width was 390px.
- Focused Muffins and pressed Enter: the filter exposed two products, retained `aria-pressed`, displayed the visible 3px focus outline, and stayed within 390px. Screenshot: `output/soft-strange-bakery-menu-muffins-mobile-current-390x844.png`.
- Fresh menu navigation logged no browser warnings or errors. Restored `/AngelsBakery/` at 1280×720, autoplay on, cart `[]`, session storage empty.

## Copy-preservation follow-up — 2026-10-11

- Compared the rebrand diff with the user's direction to keep existing wording substantially intact. Restored unnecessary edits to “Fresh from Angel’s oven,” “A little about Angel’s,” the Pickup description, Contact wording, product-image disclaimer, metadata description, and footer eyebrow. Kept Soft Strange Bakery name substitutions and the visual design changes.
- The latest `npm run check` passed after these source edits. The 1280×720 homepage renders the restored headline/link with `noindex, nofollow`; the 375×667 homepage remains 375px wide. Preview returned to desktop home with autoplay on and an empty cart.

## Order-entry link follow-up — 2026-10-11

- Restored a compact “Saturday box” link in the masthead. On desktop it displays its label and item count; at widths up to 430px it shows a bag icon and count while preserving the accessible name (“Saturday box, 0 items”).
- At 1280×720 and 375×667, document width matches the viewport. Clicking the phone control opens `/AngelsBakery/order/`; the empty-cart state shows no form or real-order action. A synthetic two-item Snickerdoodles cart updated the visible badge and accessible label to “2 items”; clearing it restored `[]` and no session keys. Preview is back on desktop home. Phone frame: `output/soft-strange-bakery-home-mobile-375x667-cart-link-current.png`.
- `npm run check` passed after the component and responsive styling change. Real ordering remains disabled pending approval.

## Short window first-fold follow-up — 2026-10-12

- Reproduced the supplied windowed screenshot at 1536×780. Before this adjustment, the featured section began at y=452 and its cards at y=664, leaving only the card tops visible. The new short-desktop-height rule reduces the hero to 218px, carousel to 106px, and featured section top padding to 46px; cards now begin at y=612.
- At 1280×720, hero/carousel heights are 218/106px and cards begin at y=606. The complete bake-sale ticker remains visible in both desktop frames.
- At 390×844, the phone hero/carousel remains 304/118px and the two-line ticker is intact. At 1536, 1280, and 390 CSS-pixel widths, the document scroll width matched the viewport.
- Screenshots: `output/windowed-1536x780-after-followup.png`, `output/windowed-1280x720-after-followup.png`, and `output/mobile-390x844-after-followup.png`.
- `npm run check` passed: lint, typecheck, all 19 tests, static build/export of 20 HTML files, URL verification, and decoding of 18 referenced images. This is local development evidence only; no deployment or live ordering was performed.

## Narrow phone fit follow-up — 2026-10-12

- At 390px, “Fresh from Angel’s oven.” previously wrapped “oven.” by itself. A responsive type clamp keeps the existing phrase on one line at 320, 375, and 390px.
- A 320px viewport exposed a featured-card grid track wider than its parent, caused by the no-wrap price label beside the product name. The one-column grid now uses a shrinkable track; at ≤360px the price label moves below the product name. Document widths now match at 320/320, 375/375, 390/390, and 768/768 CSS pixels.
- At 320px, carousel controls fit between the pause and scroll buttons; the longest label (“Double Chocolate Chip Muffins”) wraps to two lines without covering either arrow. Its controls occupy x=60–260px; the pause and scroll buttons occupy x=20–52px and x=268–300px.
- Direct-loaded all 17 current customer routes at a 320×740 viewport: home, About, Contact, FAQ, Privacy, Pickup, menu, seven products, and three guarded order pages. Every route retained its Soft Strange Bakery title and `main` landmark; each document width was exactly 320px after generalizing the shrinkable mobile product grid and narrow price layout.
- Final screenshots: `output/soft-strange-bakery-smallest-mobile-320x740-final.png`, `output/soft-strange-bakery-small-mobile-375x667-final.png`, `output/soft-strange-bakery-mobile-390x844-final.png`, and `output/soft-strange-bakery-tablet-768x1024-final.png`. Short-window desktop frames: `output/soft-strange-bakery-windowed-1280x720-final.png` and `output/soft-strange-bakery-windowed-1536x780-final.png`.
- After these responsive changes, `npm run check` passed (lint, typecheck, 19 tests, export/link validation for 20 HTML files, and 18 image decodes). Local browser evidence only; deployment and live ordering remain unchanged.

## Current responsive and reduced-motion check — 2026-10-12

- Direct-loaded all 17 customer routes at 320×740. All retained the bakery title and main landmark; every document measured exactly 320px wide. This sweep includes menu and product details, which exposed and verified the shared product-card fix.
- Emulated `prefers-reduced-motion: reduce` on the homepage at 390×844. Scenic animation and pastry transition computed to `0s`, document width stayed 390px, and activating Next changed Snickerdoodles to Sugar Cookies. Root scroll behavior computed to `auto`.
- Screenshot: `output/soft-strange-bakery-reduced-motion-mobile-390x844-current.png`. Restored `no-preference`, navigated back to `/AngelsBakery/` at 1280×720, and confirmed the page title and viewport width.
- At 320px on `/menu/`, focused Muffins and pressed Enter; two cards remained and the focus outline measured 3px. A no-match search displayed the “Show every treat” button; keyboard focus retained the 3px outline and Enter restored all seven cards. Document width remained 320px. Screenshot: `output/soft-strange-bakery-menu-muffins-320x740-keyboard.png`.
- With one temporary Snickerdoodles item and no customer details, opened `/order/` at 320×740. The sample-data/no-order notice, pickup and contact form, and preview progression button fit with document width 320px. Nothing was submitted; the original cart `[]` was restored and the browser returned to the homepage. Screenshot: `output/soft-strange-bakery-order-form-320x740-synthetic-preview.png`.
- At the same width, selected one preview pickup and activated “Review my little box” with the required name/email fields blank. Browser-native validation kept the route in place, focused `#name-input`, and returned “Please fill out this field.” No customer details were entered and nothing was submitted; the cart was restored to `[]`.

## Window-fit caption follow-up — 2026-10-11

- Rechecked the supplied windowed view and kept the compact desktop hero. Added a small paper-backed carousel caption so longer names remain readable over the pastry artwork.
- At 1024×768, the hero is 218px tall and the first product cards begin near y=597; at 1280×720 the cards begin near y=606. At 390×844 the mobile hero/carousel remains 304/118px and the first product card begins near y=739.
- Document widths match the viewport at 1024, 1280, and 390px. Screenshots: `output/soft-strange-bakery-laptop-1024x768-caption-label.png`, `output/soft-strange-bakery-windowed-1280x720-caption-label.png`, and `output/soft-strange-bakery-mobile-390x844-caption-label.png`.
- `npm run check` passed (lint, typecheck, 19 tests, static export of 20 HTML files, URL verification, and 18 image decodes). `git diff --check` passed; the local preview returned HTTP 200 at `/AngelsBakery/`. No deployment or live-ordering changes were made.

## Storage-read denial recovery — 2026-10-12

- Seeded one synthetic Snickerdoodles item, then injected a one-navigation `SecurityError` from `Storage.prototype.getItem()` for `angels-bakery-bag-v2`.
- `/AngelsBakery/order/` recovered to “Your box is waiting.” with a zero cart badge, viewport/document width 1280/1280, and no browser errors. The one-shot injection marker was consumed; a clean follow-up navigation to the homepage confirmed the persisted cart is `[]` and there is no marker.
- Captured the empty-cart recovery view at 1280×720 and 390×844. Each document width matched its viewport; screenshots are `output/soft-strange-bakery-empty-order-desktop-1280x720.png` and `output/soft-strange-bakery-empty-order-mobile-390x844.png`.
- This validates local browser recovery only. It does not validate live ordering or user data persistence.

## Footer text contrast correction — 2026-10-12

- A rendered color-contrast scan found the footer’s 78% cream text on sage at 3.72:1 and its 75% footer-bottom text at 3.57:1, below the 4.5:1 target for small text.
- Raised those text colors to 96% cream without changing the palette or layout. Re-measured rendered 9–13px footer text at 4.69:1; opaque announcement, links and labels remain at 4.93:1. The 17px carousel caption remains at 4.78:1.
- Reviewed the full footer at 390×844 and returned the preview to the 1280×720 homepage. Screenshot: `output/soft-strange-bakery-footer-contrast-mobile-390x844.png`. The homepage document width is 1280px and the cart is empty.
- `npm run check` passed after the CSS change: lint, TypeScript, 19 tests, static export of 20 pages, URL verification, and 18 image decodes.

## Customer-route accessibility sweep — 2026-10-12

- Rechecked all 17 customer routes at 1280×800 after waiting for each page heading to render. All routes have one `main`, one page-level `h1`, a title, and matching document/viewport width. The review route’s exported initial HTML also contains its route-specific heading and a `role="status"` hydration message.
- The rendered scan found zero missing image `alt` attributes, unnamed buttons or links, unlabeled visible form controls, and zero page errors. The first scan caught the brief cart-hydration state without a heading; the shared loading branch now renders the existing route-specific title.
- Rechecked global footer small-text contrast: rendered 9–13px copy is 4.69:1 on sage. The prior homepage/phone contrast values and mobile footer screenshot are recorded above.
- `npm run check` passed after the loading-state heading change: lint, TypeScript, 19 tests, static export of 20 pages, URL verification, and 18 image decodes. The preview is restored to `/AngelsBakery/` at 1280×720 with the cart empty.

## Muted-text contrast correction — 2026-10-12

- The shared `--muted` text color measured 4.12:1 on the warmest paper panel (`#f1e9da`), below the 4.5:1 target for small copy. Darkened it from `#687363` to `#5e6a5a`, keeping the green-sage palette while raising that panel to 4.72:1.
- A rendered sample scan across the homepage, all five information routes, menu, Snickerdoodles detail, and order form found no sampled small text below 4.5:1 and no sampled large text below 3:1. Text over photos and every hover/disabled state are outside this sample scan.
- `npm run check` passed after the CSS and order-loading heading edits: lint, TypeScript, 19 tests, static export of 20 pages, URL verification, and 18 image decodes. Captured the current homepage at 1280×720 and 390×844 in `output/soft-strange-bakery-accessibility-pass-windowed-1280x720.png` and `output/soft-strange-bakery-accessibility-pass-mobile-390x844.png`; the local preview is back at 1280×720, cart `[]`.

## Phone keyboard pass — 2026-10-12

- At 390×844, Tab reaches “Skip to content” with a visible 3px outline; Enter moves focus to `main#main` and scrolls to the target.
- On `/menu/`, Enter on Muffins selects that filter and shows two cards. A no-match search exposes “Show every treat”; Enter resets the query and Everything filter and restores all seven cards. Document width remains 390px.
- With one temporary Snickerdoodles item on `/order/`, the pickup group is named “Choose a pickup date.” ArrowDown selects the next Saturday. Tab then follows the visible fields in order: Your name, Email address, Phone (optional), A little note (optional). No contact values were entered and the order was not submitted.
- The selected pickup frame is `output/soft-strange-bakery-pickup-radio-keyboard-mobile-390x844.png`. The sample cart was cleared; preview returned to `/AngelsBakery/` at 1280×720 with badge zero and an empty cart.

## Static 404 and form-error keyboard recovery — 2026-10-12

- Served the current `out/` export through a temporary local static handler that maps `/AngelsBakery/` to the export root. The homepage returned HTTP 200 and an unknown URL returned HTTP 404 with the custom 404 HTML; its JavaScript and styles loaded under the repository base path.
- At 390×844, the 404 page has one `main` and a page heading. Tab focused “Skip to content” with a 3px outline, Enter focused `main#main`, and the next Tab focused “Back to the menu” with a 3px outline. Document width matched 390px. Screenshot: `output/soft-strange-bakery-not-found-keyboard-mobile-390x844.png`.
- The Next dev server’s browser navigation to that same unknown route reported HTTP 500 even though curl returned 404; the exported static host is the valid check for the deployed static 404. No app asset failures occurred in the static 404 page; the browser’s single console error is the expected 404 document response.
- Order error check: with one synthetic Snickerdoodles item, selected a sample pickup by keyboard, entered only “A” and `preview@example.invalid`, and pressed Enter on “Review my little box.” The route stayed on `/order/`, focus returned to `#name-input`, `aria-invalid="true"` pointed to `#name-error`, and the visible message explained the 2–80-character rule. No order was submitted. Screenshot: `output/soft-strange-bakery-order-name-error-keyboard-390x844.png`.
- Cleared the cart, confirmed session storage is empty and the synthetic email is not persisted, restored the main preview to `/AngelsBakery/` at 1280×720, and stopped the temporary static host on port 3002. The regular preview remains on port 3001.

## Repeated window-fit screenshot review — 2026-10-12

- The supplied Oct 11 Chrome screenshot captures the earlier oversized hero and a ribbon extending beyond the window. Compared against the current preview at 1536×780, 1280×720, 1024×768, and 390×844. The current desktop frames show the featured menu cards in the first screen; the ribbon contents fit on desktop and wrap on mobile.
- Captures: `output/soft-strange-bakery-windowed-1536x780-latest.png`, `output/soft-strange-bakery-windowed-1280x720-latest.png`, `output/soft-strange-bakery-laptop-1024x768-latest.png`, and `output/soft-strange-bakery-mobile-390x844-latest.png`. Browser document width equals the CSS viewport at each tested size. No source changes were needed in this follow-up.

## Dependency security review — 2026-10-12

- Updated `next` and `eslint-config-next` together from 16.3.5 to 16.4.0, and `sharp` from 0.35.4 to 0.35.5. Applied npm's non-breaking fix for `source-map-js`, now 1.2.2. The installed Next 16 guide was reviewed; Node v22.17.1 meets its minimum runtime requirement. Next.js 16.4 was available on Oct 6 ([release notes](https://nextjs.org/blog)); its patched release line includes the [Next.js ImageResponse RCE fix](https://github.com/vercel/next.js/security/advisories/GHSA-vcvr-r3jv-pc5j).
- `npm run check` passed on Next 16.4.0: lint, typecheck, all 19 existing tests, static build of 20 HTML pages, URL verification and 18 image decodes. The local preview was restarted and reports Next 16.4.0.
- `npm audit --omit=dev --audit-level=moderate` reports zero production dependency vulnerabilities. Full `npm audit --audit-level=moderate` reports five high findings in the dev-only chain `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces`. The [current GHSA](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) lists no patched `braces` release; npm's suggested forced fix downgrades the Next lint config to 14.2.35, so it was not applied. Recheck for an upstream patch before release.
- Post-upgrade mobile behavior at 390×844: reduced motion sets the scenic animation and carousel transition to `0s`, scrolling to `auto`, and Next still changes the selected bake. Document width remains 390px; cart is empty. Capture: `output/soft-strange-bakery-mobile-390x844-next164.png`.
- Direct-loaded all 17 customer routes at 1280×800 and 390×844 after the framework update. All 34 navigations returned HTTP 200 with one `main`, a primary heading, matching document/viewport width, and zero page errors. Browser was restored to the homepage at 1280×720 with an empty cart.

## Root Pages export preparation — 2026-10-12

- `npm run publish:root` initially exposed that the root sync allowlist omitted newly generated `fonts/` and `icon.svg`. Updated `scripts/sync-root-export.mjs` to include those export paths; the script completed successfully on the next run after all 19 tests, build, 20-page URL verification and 18 image decodes passed.
- Served the prepared root files through a temporary local `/AngelsBakery/` mapper. Home and direct Snickerdoodles pages returned HTTP 200 with the Soft Strange Bakery title and primary heading; local fonts and `icon.svg` loaded; the exported `404.html` exists. Desktop and phone widths matched 1280 and 390px, both display fonts loaded, and the home export kept `noindex, nofollow`.
- A targeted scan of the generated HTML, JS, JSON and SVG files found no Google Apps Script endpoint, common API-key pattern, or private-key marker. This bounded string scan is not a general secret audit.
- Direct-loaded all 17 customer routes from the prepared root export at 1280×800 and 390×844: all 34 responses returned HTTP 200, each page exposed one `main` and a primary heading, widths matched their viewports, and there were zero page errors. The unknown-bake URL returned HTTP 404 with the custom bakery 404 page at 390px. Restored the primary preview to port 3001; stopped the temporary mapper.
- Captures: `output/soft-strange-bakery-root-export-1280x720.png` and `output/soft-strange-bakery-root-export-mobile-390x844.png`. Stopped the temporary mapper; the Next preview remains on port 3001. Root export preparation is local only, not source delivery or deployment.
- This is dependency evidence only; it does not clear business-content, approved-hosting, GitHub deployment, or verified-order gates.

## Current route and release-safety regression — 2026-10-12

- Direct-loaded all 17 customer routes through the running Next preview at 1280×800 and 390×844 (34 requests). Every route returned HTTP 200, had one `main`, at least one `h1`, a page title and `noindex, nofollow`, and its document width matched its viewport. Zero Playwright page errors were recorded. The browser was restored to the homepage at 1280×720 with an empty cart.
- Fresh homepage captures: `output/soft-strange-bakery-production-sweep-desktop-1280x720.png`, `output/soft-strange-bakery-production-sweep-tablet-768x1024.png`, and `output/soft-strange-bakery-production-sweep-mobile-390x844.png`.
- `npm run check` passed on the current source; `npm audit --omit=dev` reported zero vulnerabilities. The local preview returned HTTP 200 and the browser console had no errors.
- Removed `.github/workflows/deploy-pages.yml` from this checkout after verifying current GitHub Pages limits. `.github/workflows/validate.yml` remains the push/PR validation path. No push or deploy occurred; the old public Pages snapshot remains unchanged. A suitable commercial host is still unselected.

## Clean preview and narrow-phone check — 2026-10-12

- The 320×740 homepage fit the viewport width exactly; its carousel controls and wrapped bake-sale ribbon remained visible. Captured `output/soft-strange-bakery-current-small-phone-320x740-clean.png`.
- Set `devIndicators: false` per the installed Next.js 16.4 documentation so the development badge no longer covers the page in local previews. Compile/runtime errors remain reported. At 1280×720 the indicator was not visible, document width was 1280px, and the homepage main landmark was present. Capture: `output/soft-strange-bakery-current-windowed-1280x720-clean.png`.
- At 320px wide, all 17 customer routes returned HTTP 200 with one main, at least one H1 and a page title; all widths matched the viewport and no page errors occurred. With reduced motion, scenic animation and carousel transition computed to `0s`, scroll behavior to `auto`, and Next still advanced to Sugar Cookies. Restored normal motion and the 1280×720 homepage.
- `npm run check` passed: lint, typecheck, all 19 existing tests, static build of 20 HTML pages, URL verification and 18 image decodes. The preview at port 3001 returned HTTP 200 after the build.

## Short-window fit follow-up — 2026-10-12

- Short desktop windows now use a 196px scenic hero and 92px carousel, down from 218px and 106px. At 1280×720 the featured cards start at y=568 (previously y=606); at 1536×780 they start at y=574. Ticker remains on one desktop line.
- At 390×844, hero/carousel remain 304px/118px and ticker wraps; at 320×740 the document width is 320px. 1280px, 1536px and 1920px desktop document widths also match their viewport.
- Captures: `output/soft-strange-bakery-windowed-1280x720-followup-2.png`, `output/soft-strange-bakery-windowed-1536x780-followup-2.png`, `output/soft-strange-bakery-wide-1920x1080-followup-2.png`, `output/soft-strange-bakery-tablet-768x1024-followup-2.png`, `output/soft-strange-bakery-phone-390x844-followup-2.png`, and `output/soft-strange-bakery-small-phone-320x740-followup-2.png`.
- `npm run check` passed: lint, typecheck, 19 existing tests, static build of 20 HTML pages, URL verification and 18 image decodes. `git diff --check` passed; localhost:3001 returned HTTP 200, and the preview was restored to 1280×720 with an empty cart.

## Public metadata origin and root export follow-up — 2026-10-12

- Source export initially contained an Open Graph image on the retired GitHub Pages host with `/AngelsBakery/` duplicated. Next.js 16.4's installed metadata guide confirms `metadataBase` joins relative metadata paths beneath its configured base path.
- Added optional `NEXT_PUBLIC_SITE_URL` as a public origin-only build setting. In a sample `NEXT_PUBLIC_SITE_URL=https://bakery.example` build, the image resolved to `https://bakery.example/AngelsBakery/images/scenes/snickerdoodles.webp`. Rebuilt with the value unset and ran `npm run publish:root`; both `out/index.html` and repository-root `index.html` now have no absolute Open Graph image, no old or sample origin, and keep `noindex, nofollow`.
- `npm run publish:root` passed lint, typecheck, all 19 existing tests, build, verification of 20 exported HTML pages, and decoding of 18 referenced images. `git diff --check` passed; local preview returned HTTP 200 on port 3001. Host selection and public indexing remain unapproved.

## Current-source desktop, phone, and motion sweep — 2026-10-12

- Direct-loaded all 17 current customer routes at 1280×720 and 320×740 (34 navigations). Every route returned HTTP 200, exposed exactly one `main`, at least one H1, a page title and `noindex`, and had document width equal to its viewport. No browser page errors were recorded.
- At 390×844 with reduced motion enabled, the scenic animation and carousel transition both computed to `0s`, scrolling was `auto`, and the document width stayed 390px. The Next control changed the caption from Snickerdoodles to Sugar Cookies. Restored normal motion and returned to the 1280×720 homepage.
- Screenshots: `output/soft-strange-bakery-release-sweep-windowed-1280x720.png`, `output/soft-strange-bakery-release-sweep-tablet-768x1024.png`, `output/soft-strange-bakery-release-sweep-phone-390x844.png`, and `output/soft-strange-bakery-release-sweep-small-phone-320x740.png`.
- These are current localhost checks only; current-source deployed validation and live-order tests remain gated on the approved host and owner setup.

## Static export metadata guard — 2026-10-12

- Extended the existing export verifier to require `noindex, nofollow` on every pre-launch HTML page, reject the retired GitHub Pages origin and duplicated `/AngelsBakery/` prefixes, and confirm any configured Open Graph image is HTTPS, uses the base path exactly once, and maps to an exported file.
- The no-origin output passed with 20 HTML files and zero absolute Open Graph images. A configured sample-origin build passed with all 20 images resolving under `https://bakery.example/AngelsBakery/...` and matching files present. Rebuilt with the host unset and refreshed repository-root output; no sample or retired origin remains.
- `npm run publish:root` passed lint, typecheck, 19 existing tests, build, the enhanced export verifier, and 18 referenced image decodes. Local preview remains HTTP 200; this is still not host/deployment verification.
- The PR/main workflow now invokes `npm run publish:root` so CI exercises export synchronization as well as source checks. Ruby's YAML parser accepted the workflow and the configured step resolves to `npm run publish:root`; no Actions run is claimed because this checkout has not been pushed.

## Windowed-fit and root-export refresh — 2026-10-12

- Tightened only the short-desktop announcement, masthead, pastry carousel, and menu spacing. At 1536×780 the hero is 172px and carousel 76px; the featured cards begin at y=514 (previously y=664). At 1280×720 the hero is 168px and cards begin at y=504. The ticker remains fully visible.
- The 390×844 phone frame retains its 304px hero, 118px carousel and wrapped ticker; document width matches 390px. Captures: `output/soft-strange-bakery-windowed-feedback-1536x780.png`, `output/soft-strange-bakery-windowed-feedback-1280x720.png`, and `output/soft-strange-bakery-mobile-feedback-390x844.png`.
- `npm run check` passed (lint, typecheck, 19 existing tests, 20 static HTML pages, 18 image decodes). Refreshed the repository-root export from the validated `out/` build and confirmed the homepage stylesheet contains the latest short-window sizing.
- A temporary local static handler returned 200 for `/AngelsBakery/`, `/AngelsBakery/menu/`, `/AngelsBakery/menu/snickerdoodles/`, `/AngelsBakery/privacy/`, and the referenced stylesheet. This checks the exported files through the base-path mapping; it is not a commercial-host deployment. The localhost preview returned 200 with no browser errors, and `git diff --check` passed.

## Full root-export route and dependency recheck — 2026-10-12

- Re-served all 17 customer routes from the refreshed repository-root export through a temporary local `/AngelsBakery/` mapping. Every route returned HTTP 200 with one `main`, an H1, a title, `noindex, nofollow`, and base-prefixed Next assets.
- `npm audit --omit=dev --audit-level=moderate` reports zero production dependency vulnerabilities. The full audit still reports five high findings through the development-only Next ESLint → `fast-glob` → `micromatch` → `braces` chain. GitHub's [GHSA-vfj7-8cjw-p6xm advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) lists affected `braces` through 3.0.3 and no patched release; npm's forced fix would downgrade `eslint-config-next` to 14.2.35, so it was not applied. Recheck after an upstream fix is published.
- Local preview remains HTTP 200; no browser errors or `git diff --check` findings. Static mapping is local artifact evidence only; AB-021/023 and owner content/order approvals remain open.

## Root-export browser acceptance — 2026-10-12

- Served the repository-root export from a temporary MIME-aware static handler at `/AngelsBakery/` and opened it in a real browser. At 1536×780, the homepage hydrated, its scripts/styles/fonts/brand assets returned HTTP 200, and the document width matched the viewport. The carousel advanced from Peanut Butter Cookies to Chocolate Chip Cookies; no failed resources or console errors were reported.
- With reduced motion enabled, scenic animation and carousel transition computed to `0s`, scrolling to `auto`, and the Next control still worked. Directly loaded `/AngelsBakery/menu/`; all seven product cards hydrated, with one main landmark and `noindex, nofollow`.
- Restored normal motion and reviewed the exported homepage at 390×844: document width 390px, hero 304px, carousel 118px, ticker 73px, and all seven carousel images loaded. Captures: `output/soft-strange-bakery-static-export-1536x780.png` and `output/soft-strange-bakery-static-export-mobile-390x844.png`.
- Stopped the temporary static handler and restored the browser to the running development preview at `http://localhost:3001/AngelsBakery/`, 1536×780. This is stronger local export evidence, not validation on the still-unselected production host.

## Preview-only cart and unpublished prices — 2026-10-12

- The order page invited visitors to build a sample box, but the shared Add buttons were disabled while live ordering was closed. Enabled only local preview-cart changes; their accessible labels and product-detail CTA say “preview box”. Live ordering remains disabled, and `useOrderViewModel.submit()` exits before calling the adapter.
- Prevented unpublished zero-cent catalog placeholders from appearing as `$0.00` in a preview cart. Item pricing now reads “Price coming soon” and the aggregate reads “To be confirmed”; live mode retains formatted prices/totals.
- Ran the full exported browser path with one Snickerdoodles item and only made-up `Preview Tester` / `preview@example.invalid` details. The pickup and details survived navigation to review. Clicking “Preview only — orders open soon” stayed on `/order/review/`, showed “No order has been sent, and no payment has been taken,” did not create a confirmation, and made zero Apps Script requests. Local storage contained only the product ID/quantity; session storage was empty. Removed the sample cart and closed the test browser tabs to clear in-memory contact details.
- Static export captures: `output/soft-strange-bakery-preview-cart-menu-1280x800.png` and `output/soft-strange-bakery-preview-box-mobile-390x844.png`. At 390×844 the document width matched the viewport. `npm run check` passed after the source change; the root export was refreshed, localhost:3001 returned 200, and no deployed ordering was enabled.

## Attached window-fit follow-up — 2026-10-12

- At 1280×720 on `/menu/`, scoped a smaller short-desktop hero to the menu view and tightened the gap above filters/cards. First product cards begin at y≈469–475 across fresh renders; the home hero and copy remain unchanged. Captures: `output/audit-soft-strange-bakery-10-menu-windowed-1280x720.png` and `output/audit-soft-strange-bakery-18-menu-windowed-1280x720-final.png`.
- Replayed the preview-only review flow at 390×844 with synthetic `Preview Tester` / `preview@example.invalid` data. Confirmation uses a soft sage panel and `role=status`; the action stayed on review, no alert/receipt appeared, and no Google Script or `/exec` request occurred. Document width matched 390px. Capture: `output/audit-soft-strange-bakery-11-preview-status-mobile-390x844.png`. Cleared cart and session storage.
- `npm run check` passed: lint, typecheck, all 19 existing tests, static build/export validation across 20 HTML files, and 18 referenced-image decodes. Browser console had zero errors or warnings. This is a bounded local UX and flow review, not a full WCAG audit, production-host validation, or real ordering approval. Full sequence: `.agent/audit-2026-10-12.md`.
- Additional home frames: `output/audit-soft-strange-bakery-12-home-mobile-390x844.png`, `output/audit-soft-strange-bakery-13-home-laptop-1024x768.png`, and `output/audit-soft-strange-bakery-14-home-wide-1920x1080.png`. Document widths matched those viewports; the preview was restored to 1280×720 with an empty cart.
- Short-phone comparison and unchanged regular phone: `output/audit-soft-strange-bakery-15-home-short-phone-375x667.png`, `output/audit-soft-strange-bakery-16-home-short-phone-375x667-after.png`, and `output/audit-soft-strange-bakery-17-home-mobile-390x844-final.png`. The 1280×720 menu and 390×844 home were rechecked after the short-phone-only CSS rule.
- All 17 current customer routes returned HTTP 200 with main/H1/title, `noindex, nofollow` and base-prefixed assets. At 375×667 with reduced motion, scene/carousel durations are `0s`, scrolling is `auto`, and the Next control still advances the selected treat. Restored normal motion and the empty-cart homepage at 1280×720; browser errors/warnings are zero. Final frame: `output/audit-soft-strange-bakery-19-home-windowed-final-1280x720.png`.
- At 320×568, home, menu, empty order and preview review all match the 320px viewport width. The review used a synthetic cart and `.invalid` details; preview result retained `role=status`, generated no alert/confirmation or Google Apps Script request, and the button wraps without clipping. Cart/session storage were cleared. Captures: `output/audit-soft-strange-bakery-20-home-320x568.png` through `output/audit-soft-strange-bakery-23-review-320x568.png`.

## Homepage ribbon fit — 2026-10-12

- Grouped the existing “Every Saturday,” “4–7 PM,” “Cookies · brownies · muffins,” and “Soft Strange Bakery” labels with their sparkle details. The strip stays on one line at 1280×720 and 1560×900, and uses two tidy rows at 1024×768, 390×844 and 320×568.
- Home document width matched each viewport at 320, 390, 1024, 1280 and 1560 CSS pixels. The 320px phrase wraps with its icon beside it rather than spilling into the next column. Captures: `output/soft-strange-bakery-ribbon-windowed-1024x768.png`, `output/soft-strange-bakery-ribbon-windowed-1280x720.png`, `output/soft-strange-bakery-ribbon-windowed-1560x900.png`, `output/soft-strange-bakery-ribbon-mobile-390x844.png`, and `output/soft-strange-bakery-ribbon-small-mobile-320x568.png`.
- `npm run check` passed after the final source edit: lint, typecheck, 19 existing tests, static build/export checks for 20 HTML pages, and 18 image decodes. Local preview responds HTTP 200 at port 3001; no deployment performed.

## Automated accessibility follow-up — 2026-10-12

- Axe previously identified the Saturday announcement as content outside landmarks. Wrapped it and the masthead in a single semantic banner landmark while preserving the existing class-driven masthead styling.
- After entrance animations settled, axe-core scans using WCAG 2.0/2.1 A/AA and best-practice tags reported zero violations on `/AngelsBakery/`, `/menu/`, `/menu/snickerdoodles/`, `/about/`, `/pickup/`, `/faq/`, `/contact/`, `/order/`, `/order/review/`, and `/order/confirmation/`.
- On the 390×844 homepage with reduced motion, scenic animation and carousel transition were `0s`; activating Next changed Snickerdoodles to Sugar Cookies and document width stayed 390px. Console reported zero errors or warnings. Preference was reset and browser returned to homepage at 1280×720.
- `npm run check` passed after the semantic markup change. Automated axe coverage does not replace manual keyboard, screen-reader, color-vision, or complete WCAG review; no production host was used.

## Current dependency and source review — 2026-10-12

- `npm audit --omit=dev` reports zero production dependency vulnerabilities. The full audit reports five high findings confined to `eslint-config-next@16.4.0 → @next/eslint-plugin-next → fast-glob → micromatch → braces@3.0.3`.
- The current [GitHub advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) says `braces` versions through 3.0.3 are affected and lists no patched version. npm offers only a forced `eslint-config-next@14.2.35` downgrade; it was not applied. Registry lookup reports 16.4.0 as the latest Next lint config at this check.
- Local `HEAD` and live `origin/main` are both `68ea344c9846cb1d995161ccddc24ee08c4c1f12`. The bakery implementation remains uncommitted; no push or public deployment was done. The preview returned HTTP 200 and the checked 205-file root export exactly matched `out/`.

## Interactive accessibility states — 2026-10-12

- Menu status now announces a concise result count instead of making the whole product grid a live region. Browser checks returned “7 treats shown,” “2 treats shown” for Muffins, and “No treats match your search” for a no-result query; reset restores all seven. Axe reported zero WCAG 2.0/2.1 A/AA or best-practice violations in all three states.
- At 390×844 the no-results state stayed within 390px. Screenshot: `output/soft-strange-bakery-menu-no-results-mobile-390x844.png`.
- Native FAQ disclosure opens by Space and its answer is visible. The pastry image dialog opens with focus on Close; Escape closes it and returns focus to the selected product. Axe returned zero violations for open FAQ and open-dialog states.
- `npm run check` passed after the status-region change. Synced the validated root export without staging/deleting; all 205 files match `out/`. Preview returned to the empty-cart homepage at 1280×720.

## Current customer-route narrow-screen sweep — 2026-10-12

- Direct-loaded all 17 customer routes under `/AngelsBakery/` at 320×740. Every route had a document title, an H1, and `noindex, nofollow`; every `document.documentElement.scrollWidth` exactly matched 320px. The route set includes all information pages, seven products, and the three guarded order routes.
- No cart details were added. This was browser-route/render evidence; the preceding `npm run check` covered static export metadata and all 20 generated HTML files.

## Preview ordering gate recheck — 2026-10-12

- Only `.env.example` exists at the repository root; it keeps `NEXT_PUBLIC_ORDER_ENDPOINT` blank and `NEXT_PUBLIC_ORDERING_ENABLED=false`. Runtime `orderingEnabled` also requires a matching HTTPS Google Apps Script `/exec` URL.
- The rendered menu showed “Saturday box, 0 items,” seven preview-box actions and “Price coming soon” for every product. The empty `/order/` state offered a menu link and no submission controls.
- Loading `/menu/` and the empty `/order/` page made zero network requests matching a Google Apps Script `/exec` endpoint; the menu HTML contained no such endpoint. No contact or order details were entered.

## Short-phone fit follow-up — 2026-10-12

- At 375×667, the prior home hero/carousel measured 270px/118px and the first product card began below the viewport at y≈711. A CSS-only short-phone rule now uses 220px/98px; the intro begins at y≈436 and the first product card at y≈661. Document width remains 375px. Before/after captures: `output/audit-soft-strange-bakery-15-home-short-phone-375x667.png` and `output/audit-soft-strange-bakery-16-home-short-phone-375x667-after.png`.
- The regular 390×844 phone is unaffected. `npm run check` passed after the change, and the root export was refreshed from `out/`; home, menu and review root HTML match their validated build output. `git diff --check` passes.
- Rechecked dependency advisories against the current lockfile: `npm audit --omit=dev` reports zero vulnerabilities; full `npm audit` reports five high paths via `eslint-config-next@16.4.0 → @next/eslint-plugin-next → fast-glob → micromatch → braces@3.0.3`. Registry lists 3.0.3 as the latest braces release, still covered by the current advisory. npm's suggested fix downgrades the Next ESLint config to 14.2.35, so no incompatible forced downgrade was applied. See [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm).

## Five-pass journal refinement — 2026-10-12

- The full-width facts ribbon is now a compact centered paper note with its four phrases unchanged. It has an accessible “Bake sale details” landmark. Featured cards receive a small desktop-only stagger, and Angel’s existing story copy sits on a taped paper panel.
- At 1280×720, 768×1024, 390×844 and 320×568, the homepage document width matched the viewport. The small-phone note wraps within 292px; the 390px note is 362px wide. The featured-card offsets apply only above 1000px; the story panel remains within the responsive grid.
- At 320×740, `/menu/`, `/menu/snickerdoodles/` and `/order/` retained their base-path URLs, titles, main landmarks and H1s, with no document overflow.
- At 390×844 with reduced motion, scene and carousel transition durations were 0s; the featured-card and story transforms were `none`; Next advanced the carousel. Preference was restored afterward.
- `npm run publish:root` passed lint, typecheck, 19 existing tests, static export checks for 20 HTML pages, and 18 referenced-image decodes; the root export was refreshed. Screenshots: `output/soft-strange-bakery-pass4-journal-full-1280.png`, `output/soft-strange-bakery-pass5-reduced-motion-mobile-390x844.png`, and the four `output/soft-strange-bakery-pass2-final-*.png` viewport frames.
- The five-pass source and refreshed static export were delivered in `afde023cae7accdcd709de32f9eed5444fdf6870`. GitHub Actions `Validate` passed in run [38214140151](https://github.com/SoftStrangeStudio/AngelsBakery/actions/runs/38214140151). No public deployment, owner-approved business details, or live order/receipt test was performed.

## Short-window carousel fit — 2026-10-12

- A fresh 1280×720 browser capture showed the short-window pastry cutouts clipped by the top of the framed hero. Reduced cutout scale only at short desktop heights and lowered the stage within the same compact hero. The selected cutout now stays inside the hero (measured y=121 to 278 within hero y=112 to 286); the Saturday menu still begins in the first screen.
- Browser layout widths matched 1280, 768, 390 and 320 CSS-pixel viewports. Shared a refreshed 1280×720 frame and a native 390×844 frame in the conversation. The mobile rules were unchanged.
- `npm run check` passed after the source change: lint, typecheck, 19 tests, 20 exported HTML pages and 18 image decodes. This check does not establish deployed behavior or business approval.
