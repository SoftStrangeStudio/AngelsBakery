# Angel’s Bakery website handoff

This repository is Angel’s actual website implementation. The current deployment remains in a pre-ordering state until the business, hosting and Google integration gates below are approved.

## Before ordering launch

- Select and approve a commercial host before any public bakery deployment. GitHub Pages is not an approved host for this customer-facing business site. Although the custom Pages workflow was removed from this checkout, repository settings triggered GitHub’s system `pages build and deployment` workflow on a push to `main` on October 12, 2026 (run [38215201236](https://github.com/SoftStrangeStudio/AngelsBakery/actions/runs/38215201236)). The URL currently displays Soft Strange Bakery from the root export in `de6f061`, but that public deployment is not approved. The workspace root export has been refreshed locally; do not push it until the Pages configuration and approved host are resolved.
- Approve products, pricing, currency, imagery, ingredients and cross-contact information.
- Publish approved contact details, pickup address/timezone, cutoff rules, cancellations and payment arrangements.
- Publish privacy contact, retention period and deletion process.
- Deploy and configure the private Google Sheet / Apps Script service.
- Test the deployed website with synthetic order data and verify exactly-once Sheet writes plus readable receipts.
- Validate desktop and narrow-mobile customer journeys against the exact launch revision.
- Enable ordering deliberately on both server and public build only after the above checks pass.

## Daily routine after ordering opens

1. Review `Received` rows; these are requests, not confirmed bookings.
2. Contact each customer, confirm products, discuss ingredient needs, confirm pickup and payment.
3. Update status to `Confirmed`, `Ready`, `Collected`; `Cancelled` releases date capacity.
4. Preserve request IDs and immutable details. Never sort only part of a row.
5. Close unavailable products/dates and reconcile capacity.
6. Apply the approved retention schedule; keep Sheet access restricted. Automatic deletion is not implemented.

## Known limits

- No online payment, email/SMS, accounts, delivery, admin app, mailing list or automatic confirmed reservation.
- Apps Script quotas / baseline abuse controls require review and a manual contact fallback.
- Static menu changes need a site build; server validation independently protects writes.
- Cart works in memory if storage is unavailable. Refresh clears personal details and receipt state.
- Animation is decorative, never required to operate checkout.
