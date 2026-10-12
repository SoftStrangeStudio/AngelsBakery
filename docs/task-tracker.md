# Angel’s Bakery — Project Task Tracker

- Governing ticket: **LUM-000075**, [Master Register](https://docs.google.com/spreadsheets/d/1fOmmK2tMvJpKi1pOYhKL7bGyG30r44BS0PRadm01Q1Y/edit).
- Accountable owner / approval: Crimson. Execution: Codex.
- Collaboration: Angel’s Bakery, separate from SoftStrange Studio’s business workspace.
- This is the implementation tracker. The pre-existing Drive tracker folder was empty; do not create a second editable copy.
- Execution method: direct bounded implementation. No temporary `.agent` goal is left active.
- This repository implements Soft Strange Bakery’s customer-facing website for Angel’s bake sale. Website launch readiness, business-content approval and live ordering approval are separate gates from source implementation.

| Task   | Outcome / acceptance                                       | Dependency | Status                            | Next action                                              |
| ------ | ---------------------------------------------------------- | ---------- | --------------------------------- | -------------------------------------------------------- |
| AB-001 | Next.js, React, TypeScript app builds                      | None       | Implemented; GitHub Actions passed | Keep build verification in CI |
| AB-002 | Export respects /AngelsBakery assets and links             | 001        | Implemented                       | Verify deployed deep links                               |
| AB-003 | Views / view-models / services / domain separated          | 001        | Implemented                       | Maintain boundaries                                      |
| AB-004 | Typed catalog, cart, customer, pickup, request, receipt    | 003        | Implemented                       | Review approved catalog                                  |
| AB-005 | Clearly labeled pre-launch catalog                         | 004        | Implemented                       | Approve real products                                    |
| AB-006 | Catalog service owns lookup source                         | 005        | Implemented                       | Keep fixtures distinct from approved live prices         |
| AB-007 | Outdoor-photo homepage and editorial product gallery       | 006        | Complete locally: seven still Polaroid cards, Gilsum scroll bands, five-size screenshot comparison | Incorporate owner feedback; replace concepts when originals are supplied |
| AB-008 | Menu filters, search, empty state                          | 006        | Implemented; phone keyboard and live result status checked | Verify on approved deployed revision                     |
| AB-009 | Static product routes and allergen caution                 | 006        | Implemented                       | Approve recipes before ordering launch                   |
| AB-010 | Persist sanitized product selections only                  | 004        | Implemented; storage and keyboard quantities browser-checked | Keep personal details out of persisted state             |
| AB-011 | Preview / live pickup service boundary                     | 004        | Implemented                       | Provide real pickup settings                             |
| AB-012 | Accessible pickup date selection                           | 011        | Implemented; keyboard radio checked | Replace sample dates with approved pickup schedule       |
| AB-013 | Guest validation, no PII persistence                       | 004        | Implemented; reload retention browser-checked | Approve privacy and retention language                   |
| AB-014 | Review, correction, totals, consent                        | 010–013    | Implemented; preview checkout browser-checked | Verify using an approved ordering endpoint before launch |
| AB-015 | Success requires verified receipt                          | 014        | Implemented                       | Verify live contract                                     |
| AB-016 | Service abstraction and safe retry identity                | 004        | Implemented                       | Contract tests                                           |
| AB-017 | Google order-sheet schema / setup function                 | 004        | Blocked: external setup           | Owner creates private Sheet and sets Script Property     |
| AB-018 | Apps Script validation / locking / idempotency             | 016        | Implemented, undeployed           | Tests, owner deployment                                  |
| AB-019 | Adapter never accepts opaque response as success           | 016,018    | Implemented                       | Real-browser CORS test                                   |
| AB-020 | Lint, typecheck, tests, build in CI                        | 001        | `de6f061` passed GitHub Actions; all newer local commits passed `npm run check` | Run CI on the approved source delivery |
| AB-021 | Static export and project base path validation                | 002,020    | Local export verified; public host not approved | Owner selects an assessed host; then verify its `/AngelsBakery/` path mapping |
| AB-022 | Still photos, landscape scroll, responsive / reduced motion       | 007        | Complete locally: five viewport sizes fit; both landscape bands scroll and become still with reduced motion | Verify on approved current-source deployment             |
| AB-023 | Actual website journey / negative cases verified           | 008–015    | Local journeys, all 17 base-path routes, and exported unknown-route recovery reverified; public Pages auto-deployed an unapproved root export | Resolve Pages configuration; then verify on an approved host |
| AB-024 | Real order reaches private Sheet exactly once              | 017–019    | Blocked: configuration / approval | Deploy Google service, approve menu, verify test request |
| AB-025 | Main-branch handoff / operational docs                     | All        | Prior main delivery reached `7ae5f04`; current still-photo redesign is uncommitted and local only | Review the local photo redesign; current instruction explicitly excludes commit/push/deploy |

## Redesign delivery — 2026-09-23

- AB-022: cream/sage dog identity and curved seven-product carousel implemented; fresh desktop and phone browser checks passed, including touch swipe, image viewer, keyboard, wrapping, autoplay and reduced motion.
- AB-020: `npm run check` passes 19 tests, lint/type checks, static export/link checks and 20 referenced-image decodes.
- AB-026: seven transparent cutouts, seven matching product scenes and two dog marks delivered; all current product image references replaced. Generated concepts remain subject to owner approval; ingredient claims are not inferred from pictures.
- AB-021/025 (historical plan, superseded 2026-10-12): deliver this change to main and verify Pages assets. Current GitHub hosting terms rule out Pages for this customer-facing bakery; use an approved commercial host for deployment evidence.
- AB-023/024: commercial checkout and live Google integration remain outside this visual redesign and blocked by the existing launch gates.

## Launch gates

- **Website identity:** this is Soft Strange Bakery’s customer-facing brand for Angel’s bake sale, styled from the Soft Strange Studio visual language. Do not host it on GitHub Pages; its deployment workflow has been removed from this checkout. Select and approve a commercial host before publication.
- **Search indexing:** the current local preview/export is `noindex`; enable indexing only after the approved commercial host and customer-facing business details are ready. A read-only check of the older live Pages snapshot on 2026-10-12 found no `noindex` directive; that snapshot is not current-source verification.
- **Source delivery:** this checkout is based on the verified `origin/main` revision `68ea344`, but the Soft Strange Bakery changes here remain uncommitted. The local check is not GitHub Actions or production-host evidence; verify CI after source delivery and verify the deployed revision only after a suitable commercial host is approved.
- **Hosting decision:** GitHub Pages is not an approved host for the customer-facing bakery. Its deployment workflow is removed from this checkout; real ordering needs an approved commercial host before the public ordering flag is enabled.
- Approve menu, USD currency, prices, ingredients, imagery, and cross-contact information.
- Publish contact, pickup address, local timezone, dates/windows, cutoff and capacity.
- Approve privacy/retention/deletion, cancellations and payment arrangements.
- Owner deploys Apps Script; the order Sheet stays private.
- Verify readable cross-origin availability and request receipts from the approved public origin.
- Test retries, full / expired slots, invalid requests and operator confirmation.
- Only then enable ordering at both public build-time and server settings.

## Menu and root export correction — 2026-09-23

- AB-022: reuse the same outdoor/curved-pastry opening on home and `/menu/`; keep filters and the full seven-item menu below its scroll cue. Remove the oversized menu introduction.
- AB-021: refresh the tracked repository-root static export and all image copies from the validated Next build. Add `npm run publish:root` as the repeatable delivery command; preserve the Actions `out/` deployment.

- AB-022 follow-up: only carousel edge recycling/fade and banner depth changed (175px desktop, 150px phone). Local root-export browser checks passed in both directions, including opacity during exit/entry, invisible reset, swipe, viewer, controls and reduced motion. `npm run publish:root` passed all 19 tests and rebuilt the root snapshot.
- AB-022 follow-up: lock both carousel arrows and the caption to fixed flex bases so changing product names cannot squeeze the arrow buttons.
- AB-022 follow-up: tune the site palette to the bakery brand board (cream, sage, coral, lavender and butter yellow) and soften image/panel shading with warm gradients and shadows.
- AB-022 follow-up: flatten the carousel’s upper edge and reduce product artwork corner rounding to 8px.
- AB-022 follow-up: remove top navigation and Saturday box controls; center the logo beneath the bake-sale notice and fade the masthead from white to transparent.

## Soft Strange Bakery identity pass — 2026-10-05

- Rebrand the customer-facing bakery as Soft Strange Bakery and carry Soft Strange Studio’s paper textures, sage torn-paper masthead, hand lettering, and taped photo-card treatment into the existing bakery site.
- Preserve the Saturday 4–7 PM bake-sale facts, ordering approval gates, existing routes, reduced-motion behavior, and `/AngelsBakery` base path.

## Windowed fit and homey styling pass — 2026-10-11

- Following the user's windowed-browser feedback, reduced the homepage hero/carousel height and product scale, warmed the paper background, softened card shadows, wrapped the bake-sale strip, and prevented the featured-menu link from squeezing the mobile heading. Existing copy and page structure were preserved.
- Captured current frames for windowed 1280×800, desktop 1440×900, tablet 768×1024, phone 390×844, and small phone 360×800. Playwright reported matching document and viewport widths at 1280, 390, and 360 CSS pixels.
- `npm run check` passed: lint, typecheck, 19 tests, static export/link validation (20 HTML files), and image validation (18 references). No deployment or live-ordering change was made.

## Commercial host evaluation — 2026-10-12

- Documented Cloudflare Pages, Netlify and Vercel as current candidates with official pricing, static-export and rewrite references in `docs/deployment.md`. No provider/account is approved or selected.
- Verified the path constraint from the current build: files are emitted at `out/index.html` and `out/menu/index.html`, while browser URLs retain `/AngelsBakery/`. Any selected host must test a rewrite or prefix mount for all deep routes and assets before DNS or indexing changes.
- No account, credential, billing, domain, source push or public deployment was used. AB-021 and AB-023 remain open pending host selection and deployed current-source validation.

## Public metadata origin follow-up — 2026-10-12

- Export inspection found `og:image` pointing to the retired GitHub Pages URL and duplicating `/AngelsBakery/` in the path. Replaced that hardcoded origin with optional public build variable `NEXT_PUBLIC_SITE_URL`; the app appends its base path and uses a relative image path. With no approved host configured, no stale absolute social-image URL is emitted.
- Added the origin-only setting to `.env.example` and deployment notes. A sample build with `https://bakery.example` emitted the image at `/AngelsBakery/images/...` exactly once; a clean build and synchronized root export omit the absolute image until a host is approved. Both outputs retain `noindex, nofollow` and contain neither the retired origin nor the sample domain.
- `npm run publish:root` passed the full check and refreshed the static root export; `git diff --check` passed, the local preview returned HTTP 200, and the example ordering endpoint remains empty with ordering disabled. Host selection, indexing and order approvals remain unchanged.
- Fresh browser sweep then loaded all 17 customer routes at 1280×720 and 320×740: all returned 200, had one main landmark, an H1 and noindex, with exact viewport widths and no page errors. At 390×844 reduced motion removed scenic/carousel transitions while Next still changed the bake caption. Evidence and screenshots are recorded in `docs/validation.md`.
- Hardened `scripts/verify-export.mjs` so the regular `npm run check` now catches missing pre-launch noindex, stale GitHub Pages metadata, duplicated base paths, and invalid/missing configured Open Graph images. The no-host and sample-host builds both passed; `npm run publish:root` then restored the no-host export and synchronized root files.
- Changed the existing PR/main validation workflow to run `npm run publish:root`, exercising the sync and safety allowlist in addition to all standard checks. This is CI validation only, not a deployment. The local command passed; GitHub Actions evidence still requires a source push, which has not been done.
- Follow-up to the user's “See how it fits here is notgood?”: reduced the desktop hero and carousel another step, with a small phone adjustment. Captured 1280×800, 1920×1080, 768×1024, 390×844, and 375×667; each document width matched its viewport. The full check passed and the local preview is restored at port 3001.
- 2026-10-12 latest windowed check: the new attached 1536×780 screenshot shows the pre-adjustment oversized hero and clipped ribbon. The current localhost CSS already reduces hero/carousel height and menu top padding; fresh 1536×780, 1280×720, 390×844, and 1920×1080 frames show a fully visible desktop ribbon, featured images in the short desktop frame, and a wrapped mobile ribbon. Document widths match each viewport. No CSS change was needed for this comparison; the preview returned HTTP 200.
- Narrow-phone visual QA: fixed the mobile featured-heading orphan and a 320px product-card intrinsic-width overflow; the shared grid now fits home, menu, and detail cards, while narrow price labels stack and carousel controls fit around pause/scroll actions with the longest product name. All 17 routes measure 320/320px at 320px viewport; home also matches at 375, 390, 768, 1280 and 1536px. Full `npm run check` passes.
- Reduced-motion regression after responsive changes: at 390×844 the scenic animation and carousel transition are both 0s, scrolling is automatic, and Next remains functional (Snickerdoodles → Sugar Cookies). Preference was restored and the browser returned to desktop home.
- Narrow menu keyboard check: at 320px, Enter on Muffins shows two cards with 3px keyboard focus; the no-results “Show every treat” action restores all seven. Document width remains 320px.
- Guarded order form at 320px: with one temporary Snickerdoodles cart item, `/order/` displayed the sample/no-order notice and form at 320/320px. No customer details were entered and nothing was submitted; restored cart `[]` and homepage. Screenshot: `output/soft-strange-bakery-order-form-320x740-synthetic-preview.png`.
- Blank-form recovery at 320px: with a sample pickup selected and customer fields blank, native required validation kept the user on `/order/`, focused `#name-input`, and exposed the browser’s required-field message. No customer data or order was sent; cart restored to `[]`.

## Static export route smoke — 2026-10-12

- A temporary local static handler served the exported homepage, a direct product URL, and a built JavaScript asset under `/AngelsBakery/`. A missing route returned HTTP 404 with the exported bakery recovery copy and menu link.
- This validates local static-export behavior only. The public Pages URL remains an old deployment and must not receive this bakery site; AB-021 and AB-023 remain open for an approved commercial host and deployed desktop/mobile validation.
- Added a small SVG bakery icon through Next’s `app/icon.svg` convention. The export links it from `/AngelsBakery/icon.svg`; static-browser checks confirmed the icon and page assets load, the homepage carousel advances, a product deep link hydrates without console errors, and the mobile page width matches 390px. `npm run check` passed after this change. GitHub Pages remains unverified.
- Read-only live check: the public URL returns HTTP 200 but still has the September 23, 2026 “Angel’s Bakery” title, no `noindex` directive, and a 404 at `/AngelsBakery/icon.svg`; its homepage HTML differs from the current local export. The latest Soft Strange Bakery source is uncommitted and not deployed. Deployment requires approval under the repo instructions, so AB-021 remains pending and no claim of public rebrand launch is made.

## Storage fallback check — 2026-10-12

- AB-010 browser check: seeded one fictional Snickerdoodles cart item, made `window.localStorage` throw a `SecurityError`, and incremented the quantity on the preview order page. The in-memory cart updated, the storage write was caught, and the page emitted no console error. Restored the original empty cart and removed the temporary session marker afterward.
- Corrupt-cart and denied-read check: malformed JSON recovered to the empty-cart page. In a separate run, `Storage.prototype.getItem()` threw a `SecurityError` for the cart key; `/order/` recovered to “Your box is waiting.” with a zero badge, and a clean navigation confirmed the cart was `[]`. No browser errors, customer details or order submission occurred.
- Captured empty-cart recovery at 1280×720 and 390×844; both document widths matched their viewports. See `docs/validation.md` for screenshot paths. Live checkout behavior remains gated.

## Footer text contrast — 2026-10-12

- Rendered footer body text measured 3.72:1 and footer-bottom text 3.57:1 against sage because of translucent cream. Increased those colors to 96% opacity; current small text measures 4.69:1 while the existing palette and layout stay intact.
- `npm run check` passed. Mobile footer screenshot and route measurements are in `docs/validation.md`.

## Customer-route accessibility review — 2026-10-12

- Settled browser inspection of all 17 customer routes at 1280×800 found one `main`, one `h1`, a page title, matching viewport width, no unnamed controls or missing image alternatives, and no page errors.
- Added the existing route heading and a status announcement to the cart hydration state so the first-render review/order screens also expose a page heading. The exported review HTML confirms it is present before hydration.
- `npm run check` passed; full evidence is recorded in `docs/validation.md`.

## Muted-text contrast review — 2026-10-12

- Darkened the shared muted green text from `#687363` to `#5e6a5a` after it measured 4.12:1 on the warm paper panel. That panel now measures 4.72:1.
- Rendered sample review across home, information pages, menu, product detail, and order form found no sampled small copy below 4.5:1. Photo-backed and hover-state text remain outside this sample measurement.
- `npm run check` passed after the contrast and loading-state updates; see `docs/validation.md` for scope and limits.

## Phone keyboard review — 2026-10-12

- On the 390px menu, keyboard filtering selects Muffins (two cards) and recovers a no-match search to all seven treats. On the order preview, the pickup radio responds to ArrowDown and Tab advances through the labeled contact fields in order.
- The skip link retains its visible outline and focuses the main landmark. No customer data was entered and no order was sent; the synthetic cart was cleared.
- See `docs/validation.md` for the screenshot and interaction evidence.

## Not-found and form-error recovery — 2026-10-12

- The current static export served at a temporary local handler returned HTTP 404 with the custom, base-path-aware 404 page. Skip-link focus and the menu-recovery link both worked by keyboard at 390px.
- The dev server itself still reports HTTP 500 for this unknown route in browser navigation; this is distinct from the static export behavior and remains a dev-server limitation, not deployed Pages verification.
- Invalid short-name submission by keyboard retained the guarded order form, focused the invalid field and exposed its linked error. No order was sent; the synthetic cart and test details were cleared.
- See `docs/validation.md`. AB-023 still awaits deployed verification.

## Pickup-date keyboard check — 2026-10-12

- With one synthetic cart item on `/order/`, the native date radio group exposed the accessible name “Choose a pickup date.” Selecting the first date and pressing ArrowDown moved the checked state to the next sample date.
- At 390×844, document width matched the viewport. Captured `output/soft-strange-bakery-pickup-dates-mobile-390x844.png`. The sample cart was restored to its prior empty state; no customer details were entered and no order was submitted.

## Root Pages export preparation — 2026-10-12

- The local root-export step found the generated typography fonts and bakery icon missing from its allowlist. Added `fonts/` and `icon.svg`; `npm run publish:root` now completes and refreshes the root Pages files from the validated static export.
- Local static-host checks passed for home, product, fonts and icon under `/AngelsBakery/`. All 17 customer routes passed direct-load at 1280×800 and 390×844; a missing route returned 404 with the bakery recovery page. The exported homepage reports `noindex, nofollow`. This is not a push or deployment. AB-021 remains open for approved commercial hosting; the public Pages URL still serves the old Angel’s Bakery snapshot and is not the deployment target.

## Responsive route and reduced-motion sweep — 2026-10-12

- Direct-loaded all 17 customer-facing routes at 1280×800 and 390×844: home, menu, seven products, five information pages and three order pages. Every route returned HTTP 200, retained its page title and primary heading, reported `noindex, nofollow`, and had document width equal to the viewport at both sizes.
- With reduced motion emulated on mobile, scenic animation resolved to `none`, carousel transition to `0s`, and scroll behavior to `auto`; the Next carousel control still selected another pastry. Captured `output/soft-strange-bakery-reduced-motion-390x844-current.png`.
- This is local development-browser evidence, not production-host validation. AB-021 and AB-023 remain open for approved hosting and live verification.
- 2026-10-12 windowed fit: reduced desktop hero/carousel scale to fit a 1280×720 window more comfortably, then reduced mobile art and raised its stage after the longest muffin label visually overlapped the pastries. The 1280px and 390px document widths matched their viewports; `npm run check` passed after the CSS changes. Evidence is recorded in `docs/validation.md`.
- 2026-10-12 dependency security: moved Next and `eslint-config-next` together to 16.4.0, updated Sharp and `source-map-js`, and reran the full check plus all 17 customer routes at desktop/phone widths. Production audit is clean; five high audit findings remain in the dev-only Next ESLint → `braces` chain, for which GHSA currently lists no patched release. The forced npm suggestion would downgrade the lint config to Next 14, so it was not used. Details and release caveat are in `docs/validation.md`.
- 2026-10-12 preview checkout: native email validation rejected malformed input; the order service surfaced the minimum-name error while leaving optional phone blank. Fictional sample details reached the review route, but clicking its preview-only button stayed on that route, showed the no-order notice, created no confirmation, and made zero Google Script requests. No customer data entered local/session storage; the synthetic cart was removed and empty state restored. Live service verification remains gated under AB-024.
- 2026-10-12 correction loop: from review, “Change my details” returned to the order form with the sample pickup and in-memory fictional name/email intact. Customer data was absent from local and session storage. Removed the cart item and restored the homepage; browser console reported zero errors.
- 2026-10-12 reload retention: with one sample item, pickup and fictional name/email selected, reloaded `/order/`. The item remained in local storage and the summary; pickup and contact fields reset, with no customer or session data persisted. At 390×844 the document width matched the viewport. Removed the sample item and restored the homepage.
- Keyboard error recovery: corrected `/order/` so failed custom validation focuses the first invalid customer field after rendering its `aria-invalid` / `aria-describedby` message. At 390×844, both the short-name and malformed-phone errors focused the corresponding field with a visible 3px outline. Skip-link Tab/Enter focused `main#main`; Space toggled the review consent checkbox. Full `npm run check` passed; the synthetic cart was cleared. Phone error frame: `output/soft-strange-bakery-order-name-error-focus-mobile-390x844-final.png`.
- 2026-10-12 menu/cart keyboard check: Enter on the focused Muffins filter showed two cards; a no-results query exposed “Show every treat,” whose Enter action restored all seven. At 390px, both controls had visible focus and no horizontal overflow. In `/order/`, Enter on Add changed quantity 1→2 and the live quantity text updated; Enter on Remove returned it to 1. Removed the synthetic item and restored the homepage. Mobile filter frame: `output/soft-strange-bakery-menu-muffins-mobile-keyboard-390x844.png`.
- Follow-up visual pass: restored the loaded serif face on editorial headings and corrected the 768px tablet product grid to two columns after direct width measurement found overflow. Latest screenshot measurements match the viewport at all five captured widths. Final `npm run check` passed after these changes.
- Applied the same restrained serif treatment to existing About, Pickup, FAQ, and product titles without changing their copy or structure. Captured desktop/mobile route frames and confirmed no horizontal overflow on those views. Final `npm run check` passed after this shared heading update.
- Preview-order safety review: product reservation remains disabled; an empty cart shows the menu return path; the confirmation route does not claim success without a verified receipt. Desktop and mobile widths match. No order or customer data was submitted.
- Local preview flow: used a fictional sample cart and `.invalid` email to reach review, then clicked the preview action. It stayed on the review route, showed the no-order/no-payment warning, and made no Google Script resource request. Removed the temporary browser cart and retry state afterward.
- Menu interaction: 7 products load at phone width; Muffins filters to 2 and “Blueberry” search narrows to 1. FAQ disclosure opens correctly. Reduced-motion emulation removes scene animation while preserving the first frame and normal viewport fit.
- Next 16 warning cleanup: added the documented `data-scroll-behavior="smooth"` root attribute and made the above-fold About LCP image eager. Revisited About; its image reports eager loading and the console has no app warning. `npm run check` passed after both source changes.
- Responsive follow-up: added 1024×768 laptop, 1920×1080 wide desktop, 820×1180 tablet, and 375×667 short-phone screenshots. Each page width matched its viewport exactly.
- Current local browser follow-up: reviewed `/menu/snickerdoodles/` at 390×844 and 1280×800. Both show the reservation control disabled and clearly mark price, ingredients and cross-contact details as pending; no order was submitted. The checkout’s base revision matches live `origin/main` at `68ea344`; current edits remain uncommitted, so deployment validation is still pending.
- Temporary preview metadata: the local runtime and exported home, menu, product and pickup pages now all emit `noindex, nofollow`. This does not count as deployed validation; keep AB-021 pending.
- Local accessibility follow-up: on `/privacy/` at 390×844, keyboard Tab + Enter through “Skip to content” changes focus to `main#main`. Contact and privacy routes render at the same width; details remain pending as documented. Deployed route validation remains open for AB-023.
- `out/404.html` contains the custom bakery recovery message and menu link. Direct unknown-param requests to Next dev return 500 under `output: "export"` even with `dynamicParams = false`, including after a clean server restart. Known local routes return 200; the exported artifact exists, but static-host response has not been verified. Keep AB-023 in progress pending deployed validation.
- 2026-10-12 carousel check: Previous/Next wrap by keyboard; reduced motion sets scenic animation and carousel transition to 0s while keyboard selection remains usable. Browser hit-testing exposed the neighboring pastry above Next's pointer target, so the control row now renders above the artwork. `npm run check` passed and real pointer clicks wrap from Double Chocolate Chip Muffins to Snickerdoodles. Restored autoplay and the clean 1280×720 homepage. Screenshot: `output/soft-strange-bakery-windowed-1280x720-carousel-controls-final.png`.
- 2026-10-12 responsive/image polish: fresh 375×667, 768×1024, 1280×720 and 1536×900 frames fit their viewport widths; the longest carousel title wraps cleanly and pointer wrap passes on phone. Replaced product-card fixed dimensions with fill sizing in the existing aspect-ratio frame; set rotating hero photos eager without preload and explicitly preserved the editorial image ratio. `npm run check` passed, and fresh desktop/mobile navigation reported no browser warnings or errors. Current captures and details are in `docs/validation.md`.
- 2026-10-11 route response sweep: requested each of the 17 customer URLs present in `out/` from the running `/AngelsBakery/` preview. Every path returned HTTP 200 with a Soft Strange Bakery title and `noindex` metadata. The route list and limits are recorded in `docs/validation.md`; deployed deep-link validation remains open.
- 2026-10-11 product-card follow-up: on `/menu/` at 390×844, all seven cards and their scene art loaded; Enter on the focused Muffins filter showed two cards with visible focus and no horizontal overflow. Fresh menu navigation had no browser warnings/errors. Preview restored to the 1280×720 homepage with empty cart.
- 2026-10-11 release-safety recheck: live Pages still serves the old Angel’s Bakery title, lacks `noindex`, and returns 404 for the bakery icon. Live `origin/main` is still `68ea344`. The example env keeps the endpoint empty and ordering false; only `.env.example` is present, and the targeted export scan found no Google execute URL or common key patterns. Local product reservations remain disabled and `/order/` has no empty-cart checkout form. GitHub’s current Pages policy is linked in `docs/deployment.md`; commercial-host approval and delivery remain open.
- 2026-10-11 copy follow-up: restored non-brand phrasing that had been changed during the rebrand, including the homepage oven line and About link, Pickup and Contact wording, actual-product image disclaimer, metadata description, and footer eyebrow. Kept necessary bakery-name substitutions. Full `npm run check` passed; screenshots and evidence are in `docs/validation.md`.
- 2026-10-11 order-entry follow-up: restored a compact masthead link to the existing `/order/` route after the header cart entry was removed. Desktop shows “Saturday box” and count; small phones use a bag/count control with the same accessible label. Verified its 375px click opens the guarded empty-cart page with no form and no overflow; synthetic quantity 2 updates the badge/accessibility label, then clears to `[]`. Full `npm run check` passed; ordering stays disabled.

## Current route and release-safety regression — 2026-10-12

- Direct-loaded all 17 customer routes through the running Next preview at 1280×800 and 390×844 (34 requests). Every route returned HTTP 200, had one `main`, at least one `h1`, a title and `noindex, nofollow`, and matched the viewport width. Zero page errors. Captured the homepage at 1280×720, 768×1024 and 390×844; the preview is restored to the windowed desktop size with an empty cart.
- Removed `.github/workflows/deploy-pages.yml` from this checkout after verifying current GitHub Pages limits. The separate `validate.yml` still checks main and pull requests without publishing. No push or deploy occurred; the existing public Pages site remains the old Angel’s Bakery snapshot.
- `npm run check` passed; `npm audit --omit=dev` reported zero vulnerabilities. `git diff --check` passed and localhost:3001 returned HTTP 200. AB-021/023 remain open for an approved commercial host and deployed validation; business details and live-ordering approvals remain separate gates.

## Clean preview and narrow-phone check — 2026-10-12

- Set the documented Next.js `devIndicators: false` option to keep the development badge from covering the headless preview. At 320×740 the page width matched the viewport; at 1280×720 the dev indicator was absent and the main landmark remained present. Saved clean phone and windowed screenshots under `output/soft-strange-bakery-current-*-clean.png`.
- Rechecked 17 customer routes at 320px and reduced motion: all routes returned 200 without overflow or page errors, animation and transition were 0s, and the Next control still changed the selected product. `npm run check` passed (19 tests, 20 exported pages, 18 images). Preview remains at port 3001.
- Latest window-fit feedback: shortened only the short-desktop hero/carousel stack to 196px/92px. Featured cards now begin at y=568 in 1280×720 and y=574 in 1536×780; phone sizing is unchanged, and 320/390px widths still fit. `npm run check`, `git diff --check`, and the local preview HTTP check passed. Captures and details are recorded in `docs/validation.md`.
- 2026-10-12 window-fit refinement: compressed the short-desktop header and carousel again. Featured cards now start at y=504 in 1280×720 and y=514 in 1536×780; the 390px phone layout is unchanged. `npm run check` passed, and the refreshed root export returned 200 for home, menu, a direct product page, privacy, and its stylesheet through a temporary `/AngelsBakery/` static mapping. This is not deployment evidence; AB-021/023 remain open.
- 2026-10-12 root-export recheck: all 17 customer routes returned 200 through the local base-path mapping with page landmarks, titles, pre-launch robots metadata and prefixed assets. Production dependency audit is clean; the full audit still has five high dev-only findings through `braces`, with no patched release listed by the current advisory. Details and the decision not to force-downgrade Next lint tooling are in `docs/validation.md`.
- 2026-10-12 root-export browser acceptance: homepage and menu hydrated from the static artifact under `/AngelsBakery/`; scripts, styles and assets loaded, the carousel advanced even with reduced motion enabled, all seven menu cards appeared, and the mobile export fit 390px without overflow. The temporary static server was stopped and the dev preview restored. This does not close AB-021/023 because no approved production host is selected.
- 2026-10-12 preview checkout completion: made sample cart additions usable while ordering remains disabled; unpublished zero-cent placeholders no longer read as free. In the exported site, a made-up preview customer and pickup survived review navigation; the preview-only action stayed on review, announced no order/payment, made zero Apps Script requests, and created no receipt. Only product ID/quantity entered local storage; cleared the cart and closed test tabs. `npm run check` passed; AB-024 live-order verification remains approval-gated.

## Current-source readiness recheck — 2026-10-12

- `npm run check` passed on the current local tree: lint, typecheck, 19 tests, 20 exported HTML files, base-path/metadata verification and 18 decoded images. GitHub Actions `Validate` passed for `afde023` (run [38214140151](https://github.com/SoftStrangeStudio/AngelsBakery/actions/runs/38214140151)), tracker follow-up `754c9a7` (run [38214268719](https://github.com/SoftStrangeStudio/AngelsBakery/actions/runs/38214268719)), and current pushed source `de6f061` (run [38215201521](https://github.com/SoftStrangeStudio/AngelsBakery/actions/runs/38215201521)). The latest local root export is refreshed but uncommitted while the Pages configuration awaits an owner decision.
- Production dependency audit is clean. The full audit still reports five high-severity paths through dev-only `braces@3.0.3` in the Next ESLint toolchain; the current advisory lists no patched release. The suggested forced fix downgrades `eslint-config-next` to 14.2.35, so it was not applied. Full evidence is in `docs/validation.md`.
- The post-build local preview returned HTTP 200 on port 3001; browser errors/warnings were zero and the 1280×720 page/strip widths both matched the viewport. Screenshot: `output/soft-strange-bakery-home-windowed-1280x720-post-check.png`.
- Fresh direct browser requests to all 17 customer routes returned HTTP 200 with titles, H1s, `noindex, nofollow`, and base-prefixed assets. The 390×844 menu showed seven cards with no overflow. Reduced motion disabled the scenic/carousel animations while keeping Next navigation usable. Restored the normal-motion homepage at 1280×720 with an empty cart; details are in `docs/validation.md`.
- Source delivery, an approved commercial host, approved business details, and deployed checkout evidence remain open under AB-021/023/024/025.

## Attached window-fit follow-up — 2026-10-12

- AB-022 visual follow-up: at 1280×720, reduced only the menu-page hero and tightened its first-screen spacing; the first product cards now begin around y=469–475 across fresh captures. The homepage hero and existing copy are unchanged.
- Preview-only confirmation now reads as an informational sage status and is announced with `role=status`. Replayed the mobile flow at 390×844 using synthetic `.invalid` contact data; it stayed on review, made no ordering/Google Script request and created no receipt. Cleared cart/session storage.
- `npm run check` passed after the source changes. This is local evidence only; AB-021/023/024/025 and business approvals remain open. See `.agent/audit-2026-10-12.md` for the review sequence and limitations.
- Short-phone refinement: at 375×667 the home intro moved up about 50px and the first product card now enters the viewport; 390×844 is unchanged. Build/export checks pass and the root snapshot matches `out/` on home, menu and review. Full dependency audit still has five dev-only high findings with no patched braces release; production dependencies remain clear.
- The short-phone change uses CSS only. Final mobile/home and windowed-menu frames are saved in `output/audit-soft-strange-bakery-17-home-mobile-390x844-final.png` and `output/audit-soft-strange-bakery-18-menu-windowed-1280x720-final.png`.
- Current-source invariant check passed across all 17 routes (HTTP 200, main/H1/title, noindex and `/AngelsBakery/` assets). Reduced motion still leaves carousel Next functional on a 375×667 viewport. Preview restored to home at 1280×720 with empty cart and no browser errors/warnings; final capture is `output/audit-soft-strange-bakery-19-home-windowed-final-1280x720.png`.
- At 320×568, home/menu/empty-order/review screens fit without horizontal overflow. A synthetic preview-only checkout created no confirmation or Apps Script request; storage was cleared and the 1280×720 empty-cart home restored. Evidence: `output/audit-soft-strange-bakery-20-home-320x568.png` through `output/audit-soft-strange-bakery-23-review-320x568.png`.
- AB-022 fit follow-up: grouped the homepage’s four bake-sale ribbon phrases so they remain visible in narrow desktop and phone windows without changing copy. Screens at 320×568, 390×844, 1024×768, 1280×720 and 1560×900 all match viewport width; fresh captures are in `output/soft-strange-bakery-ribbon-*.png`. Full `npm run check` passed; local preview remains available on port 3001.
- AB-023 local accessibility follow-up: the Saturday banner is now inside the page banner landmark. Axe reports zero WCAG 2.0/2.1 A/AA or best-practice violations on 10 main customer routes; reduced-motion carousel behavior remains usable on mobile. Manual assistive-technology review and deployed-host checks remain open; details are in `docs/validation.md`.
- AB-023 narrow-route recheck: all 17 current customer routes loaded at `/AngelsBakery/` with a title, H1 and `noindex, nofollow`; each document remained exactly 320px wide at a 320px viewport. Deployed current-source validation remains open pending host approval.

## Five-pass journal refinement — 2026-10-12

- AB-007 / AB-022: completed the local visual passes. The Saturday facts now sit on a compact taped note; the featured cards have a restrained wide-desktop stagger; Angel’s unchanged story copy sits on a paper card. The carousel collage and all existing wording remain intact.
- Responsive evidence at 1280×720, 768×1024, 390×844 and 320×568 showed exact viewport/document-width matches. `/menu/`, `/menu/snickerdoodles/` and `/order/` each rendered at 320px with the expected title, main landmark and H1.
- `npm run publish:root` passed lint, typecheck, 19 existing tests, the static build/export verification for 20 HTML pages and 18 referenced-image decodes. The root export was refreshed. Reduced-motion review at 390×844 confirmed 0s scene/carousel transitions, no card/story transforms, and working carousel navigation.
- GitHub Actions `Validate` passed for pushed `afde023cae7accdcd709de32f9eed5444fdf6870` (run [38214140151](https://github.com/SoftStrangeStudio/AngelsBakery/actions/runs/38214140151)). No public deployment or live-order test occurred; AB-021/023/024 and owner/host approval gates remain open.
- Current status — 2026-10-12: a later push triggered GitHub’s separate `pages build and deployment` system workflow (run [38215201236](https://github.com/SoftStrangeStudio/AngelsBakery/actions/runs/38215201236)). The public URL now displays Soft Strange Bakery, but that deployment used the root export from `de6f061` and omits the latest short-window carousel CSS correction. The workspace root export has since been refreshed locally and remains uncommitted. The public deployment was not approved; the Pages configuration needs an owner decision before any further publishing push.

## Server ordering retention gate — 2026-10-12

- The Apps Script server now fails closed unless `retentionDays` is a positive whole number. Added existing-harness cases for missing, zero, negative, fractional, and non-numeric values; the process still requires manual record-retention handling and does not delete customer data automatically.
- `npm run check` passed (lint, typecheck, 20 tests, production build, 20-page export verification, 18 image decodes). Root export refreshed and port 3001 returned HTTP 200. Local-only; not pushed because the Pages deployment setting is unresolved.

## Product page phone fit — 2026-10-12

- The product preview-box action now fits inside the 390×844 first screen; the 320px layout remains overflow-free. Full `npm run check` passed and the repository-root export was refreshed.
- Local screenshot: `output/playwright/soft-strange-bakery/soft-strange-bakery-product-mobile-390x844.png`. No push was made because it would trigger the unresolved Pages deployment.

## Carousel rethink — Pass 1 — 2026-10-12

- User feedback: the carousel still feels too streamlined. Began a new five-step rethink; details and user-intent readback are in `.agent/INTENT.md` and `.agent/THOUGHTS.md`.
- The carousel now opens paused, with rotation available by Play. A loose paper ground and more irregular pastry heights make the hero feel less like a timed storefront slider. All seven selection buttons, Previous/Next, swipe and keyboard remain available.
- Rechecked 1280×720, 768×1024, 390×844 and 320×568; each document width matches its viewport. Next advanced at 320px; Play/Pause toggled; reduced-motion navigation worked with a 0s transition.
- `npm run check` passed: lint, typecheck, 20 tests, static build/export verification and 18 image decodes. Local root export refreshed; no push/deploy. The later bullets in this entry close the carousel rethink locally.
- Pass 2 refined the selected-name note with an uneven paper shape and irregular selector marks; Pass 3 gave arrows and corner actions a slight hand-set angle. Final browser review at 1536×900, 1280×720, 768×1024, 390×844 and 320×568 found no overflow. Reduced-motion Next still works at 320px with a 0s transition. `npm run check` passed after styling and the root export is refreshed locally. Final screenshot set is under `output/playwright/soft-strange-bakery/`; this carousel rethink is complete locally, not deployed.
- Shared-carousel follow-up: checked `/menu/` at 1280×720 and 390×844, then corrected its 320px category filters to a balanced two-by-two layout. At 320×568 all filters fit above the fold; Muffins selection returned two cards and the document remained 320px wide. Full `npm run check` passed; root export refreshed locally.


## Still photos and Gilsum framing — 2026-10-12

- AB-007 / AB-022 complete locally: removed the shared carousel, controls, view-model, its three obsolete tests and 195 unused hero/carousel CSS rules (including an earlier unused hero implementation). Home keeps the seven existing Polaroid cards, exact copy and product order; the menu shares the simplified scenic hero. Hero and scenery styling now use small component CSS modules.
- The owner-provided `yard-morning.jpg` frames the photo collection above and below. Existing Parallax supplies bounded page-scroll movement, with both bands reporting `transform: none` under reduced motion. No timed slideshow remains. Provenance was updated in `docs/assets.md`; existing product-image disclosures remain visible.
- Before/after full-page screenshots: `output/playwright/bakery-still-{before,final}-{desktop,window,tablet,phone,small-phone}.png`. Viewport frames: `bakery-still-final-frame-*.png`. Compared 1536×900, 1280×720, 768×1024, 390×844 and 320×568; each document width equals its viewport, all seven photos remain, and no broken loaded images were found.
- Comparison loop refinements: shifted the initial dark landscape crop toward the horizon, shortened compact-window bands, and tightened short-phone spacing. The first card begins at y=480 in 1280×720 and y=512 in 320×568 (initial new phone pass: y=569). Corrected the existing wordmark hover color after the browser interaction exposed low contrast on sage.
- Direct browser checks: Muffins filter returns 2, an unmatched search returns 0, clearing it restores 7. A product link opens its detail page; adding one item opens the preview box with the existing no-order/no-payment notice. Removed the sample item afterward. No personal details or real order were submitted.
- Validation: `npm run check` passes lint, typecheck, 17 retained business/service tests, production build, base-path/noindex checks across 20 HTML exports and decoding of 9 referenced images. The count dropped from 20 tests because only the three deleted carousel tests were removed. `git diff --check` passes; no runtime errors in the current browser navigation log.
- Delivery: localhost:3001 remains available. No commit, push, deployment, or checked-in root-export refresh was performed; the new build exists in local ignored `out/`. Browser viewport is restored to 1280×720 on the homepage. Intent, thoughts, current-state notes and repository memory reflect this direction.


### AB-007 / AB-022 follow-up — landscape note overlay

- Extended the upper Gilsum photograph and overlaid one taped note containing “THIS SATURDAY,” the original headline and all four existing bake-sale details. Removed the separate facts ribbon and its obsolete CSS. The shared menu hero and lower photo band retain their existing sizing.
- Screenshot review at 1280×720, 768×1024, 390×844 and 320×568 found no horizontal overflow or clipped card text; desktop capture at 1536×900 is also saved. Evidence: `output/playwright/bakery-overlay-{desktop,window,tablet,phone,small-phone}.png`.
- `npm run check` passed: lint/typecheck, 17 tests, production build, 20 exported HTML base-path/noindex checks and 9 decoded images. No commit, push or deployment.


### AB-007 / AB-022 follow-up — lower Saturday scrapbook section

- User clarified the target with a screenshot: lower “Your treat. Your Saturday” section. Restored the opening hero to its previously accepted overlay note.
- Extracted `SaturdaySection` and scoped CSS. The old narrow lower landscape and icon-only steps are replaced by a taller Gilsum photograph, taped heading note and three Polaroid cards using existing cookie, Gilsum and muffin imagery. Original step copy remains; added captions and direct menu/pickup links.
- Screenshots: `output/playwright/bakery-saturday-notes-{desktop,window,tablet,phone,small-phone}.png`; reviewed 1536×900, 1280×720, 768×1024, 390×844 and 320×568. Document widths equal viewport widths and all three cards render. Scenery transform is none under reduced motion. Phone evidence uses viewport captures to avoid the browser's offscreen fixed-element artifact in tall element screenshots.
- `npm run check` passed (17 tests, production build, 20 HTML exports, 9 decoded image assets). `git diff --check` passes. No commit, push or deployment.


### AB-007 / AB-022 follow-up — smaller ruled opening notes

- Matched the latest supplied three-note opening reference, reduced note size and added faint sage rules in the scoped hero CSS. Existing copy and menu/pickup destinations retained; lower Saturday component unchanged.
- Screenshot evidence: `output/playwright/bakery-lined-{desktop,window,tablet,phone,small-phone}.png`; desktop and phone reviewed, five viewport widths checked. Local only.
- Validation: `npm run check` passed (17 tests, static build, 20 HTML exports, 9 decoded images); all five document widths match their viewports.


### AB-007 / AB-022 follow-up — layered closing invitation and footer

- Added scoped ClosingNote and closing-notes CSS; adapted shared Footer to three taped ruled cards. ScenicBackdrop accepts the existing orchard image; provenance recorded. All original footer destinations, disclosure and ordering conditions retained.
- Screenshot comparison: `output/playwright/bakery-footer-before.png`, `bakery-footer-{desktop,window,tablet,phone,small-phone}.png` and `bakery-footer-links-*`. First narrow-screen pass found a wordmark-width issue; fixed it before final capture. Local only, no commit/push/deployment.
- Final validation: `npm run check` passed (17 tests, production static build, 20 HTML export checks, 9 decoded images). Five homepage viewport widths match; shared menu also fits at 320px. Reduced-motion scenery transform is none; all six footer links retain the base path. `git diff --check` passed.


### AB-007 / AB-022 follow-up — reveal scenery around opening notes

- Scoped hero CSS only: narrower desktop group, capped introduction width, smaller supporting cards staggered right/left when stacked. Copy and behavior unchanged.
- Compared 1536, 1280, 768, 600, 390 and 320px widths; all document widths match the viewport. Screens: `output/playwright/bakery-narrow-*.png`. Local only.
- `npm run check` and `git diff --check` passed.


### AB-007 / AB-022 follow-up — complete, quieter footer

- Full-width scenic footer with compact content-height cards, lighter borders/shadows and a single quiet sage fine-print panel. Preserved all six navigation links and conditional order/image disclosure.
- Captured `output/playwright/bakery-quiet-footer-{desktop,window,tablet,phone,small-phone}.png`; all five viewport widths match document widths. Local only.
- `npm run check` passed (17 tests, build/export and image verification); `git diff --check` passed.


### Pages publication — 2026-10-12

User authorized committing/pushing the completed redesign to main and publishing on Pages. Updated the root-export guard from the removed carousel to the retained product grid. Screenshot output remains local.
- Full check passed. Publishing also needed the current Next static RSC `__next._index.txt` added to its explicit generated-file allowlist; reviewed that output before permitting it.
