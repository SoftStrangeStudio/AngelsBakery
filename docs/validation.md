# Validation evidence

## Cream-and-sage redesign — 2026-09-23

- Current source passes `npm run check`: lint, strict TypeScript, 19 tests, production static export, local URL verification across 20 HTML files, and decoding of all 20 referenced images. All seven product cutouts have transparent alpha.
- Fresh local Chromium inspection of the actual exported website passed at 1440×900 and 390×844. Evidence: [desktop](evidence/cream-sage-desktop.jpg), [phone](evidence/cream-sage-phone.jpg).
- Verified all seven carousel entries, next/previous, wrap in both directions, keyboard navigation, drag, realistic touch swipe, matching scene opening, Escape/close button, autoplay resume, pause, menu scroll cue, deep product route, and no horizontal overflow.
- Reduced motion disables scenic animation and carousel autoplay. Phone image opening passed after swipe. A zero-duration synthetic swipe initially suppressed the next browser click; replaying a paced touch gesture resolved the test artifact without changing the tap behavior.
- No JavaScript errors or non-aborted failed requests. Navigation-cancelled Next.js prefetch requests are excluded from network failures.
- Four owner-supplied outdoor backgrounds remain. New assets are seven generated cutouts, seven matching concept scenes and two generated dog marks. See `assets.md` and `asset-prompts.md` for provenance.
- Deployment uses the existing Actions workflow: build this source into `out`, upload Pages artifact, then deploy under `/AngelsBakery/`. Actions and public asset verification must be checked on the delivery commit; local validation alone is not a deployment claim.
- Coverage does not establish commercial launch readiness or live order processing; existing ordering gates remain closed.

## Historical repair — 2026-09-22

- Angel’s Bakery is being validated as the actual customer-facing website, not as a portfolio proof or demo.
- The current-source build regression was traced to commit `e82eea0d`: `src/app/globals.css` was replaced wholesale by one corrupted/non-CSS line. The preceding clean revision contained the complete 2,089-line stylesheet.
- This repair restores the known-good stylesheet from the last clean source revision while preserving all later product, ordering-boundary and deployment work.
- Acceptance for this repair is a successful **Validate** workflow on the delivered `main` revision: lint, TypeScript, automated tests, Next.js production export and export verification must all pass.
- The temporary Pages deployment must be checked separately. A successful stale branch-root deployment is not proof that current source builds.

## Previously established automated coverage

- ESLint and TypeScript strict checking are part of `npm run check`.
- The repository test suite covers cart corruption/bounds/totals, customer validation, date rollover, receipt guards, malformed response rejection, server pricing, idempotent replay, request conflicts, capacity/cancellation, cutoff/product availability, input/honeypot/consent checks, formula injection, the closed server gate, rate limiting and ordering-boundary behavior.
- Google tests execute the actual Apps Script code in a mocked service environment. They do not prove a deployed Google connection or real concurrent cloud execution.
- Static export verification checks generated routes and local asset/link resolution under `/AngelsBakery/`.

## Not yet verified for launch

- Live commercial-host checkout and order integration validation; the redesign’s local desktop/phone checks above are complete.
- Live Google authorization/deployment, browser cross-origin receipt and private Sheet write.
- Angel-approved menu, ingredients, pickup location/timezone/schedule, contact details and privacy/retention policy.
- Commercial production hosting. GitHub Pages remains a temporary non-ordering validation deployment.
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
