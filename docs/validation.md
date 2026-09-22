# Validation evidence

## Current repair — 2026-09-22

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

- Fresh desktop and narrow-mobile browser inspection against the exact repaired/deployed revision.
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
