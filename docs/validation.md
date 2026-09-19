# Validation evidence — 2026-09-19

## Passed locally

- ESLint: no errors/warnings.
- TypeScript strict checking: passed.
- Production dependency audit (`npm audit --omit=dev`): zero known vulnerabilities at validation time.
- Next.js production static export: passed; home, menu, four products, pickup, about, FAQ, contact, privacy, checkout, review, confirmation and not-found output.
- Export link/asset scan: **17 HTML files**, all discovered local href/src URLs use `/AngelsBakery/` and resolve to exported files.
- **15 automated tests passed**: cart corruption/bounds/totals, customer validation, date rollover, receipt guards, malformed response rejection, server pricing, idempotent replay, request conflicts, capacity/cancellation, cutoff/product availability, input/honeypot/consent checks, formula injection, closed server gate and per-email rate limiting.
- Google tests execute the actual Apps Script code in a mocked service environment. They do not prove a deployed Google connection or real concurrent cloud execution.
- Five original generated WebP assets exist. Cutout alpha inspected programmatically: minimum 0, maximum 254; no opaque fake background.

## Not yet verified

- Browser local navigation returned `net::ERR_BLOCKED_BY_CLIENT`; no bypass attempted. Local desktop/mobile visual and click-through checks are **unverified**.
- Live Google authorization/deployment, browser cross-origin receipt, and Sheet write are **not configured / not verified**.
- Approved menu, ingredients, pickup location/timezone/schedule, contact and privacy policies are not supplied. Real ordering remains disabled.
- **Source delivery:** published to `main` through the authenticated GitHub connection as commit `7ec8caac8da5a75251065684e7b8d83d96999be9`. Actions and public Pages verification remain pending.
- The Pages workflow forces ordering off, following the hosting usage limits. Real ordering requires a different approved host.

## Immersive shell acceptance criteria

- The homepage opens with a centered pastry and partially visible neighboring pastries.
- Previous, next, swipe, drag and keyboard controls select the same active product state.
- Moving beyond either end wraps to the opposite end without an endpoint.
- Autoplay pauses on hover, focus and interaction; reduced motion disables autoplay and floating motion.
- Product name, description, price and links always match the active pastry.
- The pickup CTA routes to the existing order flow and never submits an order directly.
- The scene remains usable when decorative imagery fails and never hides the interaction layer.
- Desktop, tablet, narrow mobile and `/AngelsBakery/` static export require visual inspection before delivery.

## Manual acceptance checklist

- Desktop and narrow mobile: no horizontal overflow, nav/treat images readable, clear CTA, no hidden controls.
- Keyboard: skip link, menu filters, product add, cart controls, date radio group, labels/errors and consent usable; focus visible.
- Reduced motion: no parallax or entrance/hover movement; all content remains visible.
- Preview journey: add → adjust → pickup → fictional details → review; nothing is transmitted; no false receipt.
- Reload: cart survives; personal details do not persist.
- Search no-results state works; direct product/checkout links refresh on Pages.
- Live launch: synthetic test reaches private Sheet once; retries preserve receipt; closed/full/expired slots refuse; no secrets in exported bundles.
