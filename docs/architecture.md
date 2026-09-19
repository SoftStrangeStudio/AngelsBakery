# Architecture

Next.js App Router builds static HTML and client bundles. GitHub Pages has no Next.js runtime, Server Actions, or POST handlers. Product routes are enumerated with `generateStaticParams`.

| Layer       | Location                      | Responsibility                                                            |
| ----------- | ----------------------------- | ------------------------------------------------------------------------- |
| Routes      | `src/app`                     | Static routes, metadata, layout                                           |
| Views       | `src/views`, `src/components` | Presentation, semantic controls, events                                   |
| View-models | `src/view-models`             | State, checkout orchestration, hydration, pending/error/receipt           |
| Domain      | `src/domain`                  | Typed product, cart, pickup, customer, request, receipt                   |
| Services    | `src/services`                | Catalog, cart bounds/totals, validation, pickup fixtures, order interface |
| Adapter     | `src/adapters`                | Google HTTPS requests, timeouts, receipt validation                       |
| Server      | `google-apps-script`          | Private Sheet, independent pricing, locked capacity, idempotent writes    |

Events flow from views to view-models to services/adapters and back as rendered state.

The homepage pastry carousel is intentionally fixture-driven in its first visual slice. Its view-model owns the active index, looping, gestures, autoplay and reduced-motion state. It does not import the Google adapter, order endpoint or customer-order services. The carousel can therefore be redesigned without changing order submission plumbing.

- Only IDs/quantities persist in localStorage; customer data stays in memory until a live submit.
- Retry metadata contains a random key and SHA-256 digest, not plaintext customer information.
- Server prices are authoritative. Approve/update the static menu to match before launch.
- A receipt means **received**, not accepted. Non-cancelled requests consume capacity.
- Preview dates cannot become a real submission.
- Parallax is clamped, passive and frame-throttled. Reduced motion removes movement.
- WebP pastry assets retain alpha. No runtime chroma-key shader / 3D library is necessary for this DOM storefront.
- The immersive homepage uses explicit background, atmosphere, middle, subject, foreground and interaction layers. Decorative motion cannot move or delay the ordering controls.

## Security boundaries

- No secrets in source, browser bundles, Pages artifacts, or `NEXT_PUBLIC_*`.
- Apps Script runs as its owner; `SHEET_ID` is a Script Property. Sheet access stays private.
- A public endpoint is not authentication. Honeypot, size/schema limits and email/global rate limits reduce abuse but are not bot-proof.
- Keep ordering closed until quota, abuse, CORS, privacy and owner approval gates pass.
- No customer order-list endpoint. Only the receipt for a matching request is returned.
- For growth, use a dedicated backend with stronger abuse controls and authenticated operator tooling.

References: [Next static exports](https://nextjs.org/docs/app/guides/static-exports), [basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath), [Apps Script web apps](https://developers.google.com/apps-script/guides/web), [Content Service](https://developers.google.com/apps-script/guides/content).
