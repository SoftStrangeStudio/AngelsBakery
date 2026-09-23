# Angel’s Bakery — Project Task Tracker

- Governing ticket: **LUM-000075**, [Master Register](https://docs.google.com/spreadsheets/d/1fOmmK2tMvJpKi1pOYhKL7bGyG30r44BS0PRadm01Q1Y/edit).
- Accountable owner / approval: Crimson. Execution: Codex.
- Collaboration: Angel’s Bakery, separate from SoftStrange Studio’s business workspace.
- This is the implementation tracker. The pre-existing Drive tracker folder was empty; do not create a second editable copy.
- Execution method: direct bounded implementation. No temporary `.agent` goal is left active.
- This repository implements Angel’s actual website. Website launch readiness, business-content approval and live ordering approval are separate gates from source implementation.

| Task   | Outcome / acceptance                                       | Dependency | Status                            | Next action                                              |
| ------ | ---------------------------------------------------------- | ---------- | --------------------------------- | -------------------------------------------------------- |
| AB-001 | Next.js, React, TypeScript app builds                      | None       | Implemented; CI re-verification required | Verify Actions on current `main` after stylesheet repair |
| AB-002 | Export respects /AngelsBakery assets and links             | 001        | Implemented                       | Verify deployed deep links                               |
| AB-003 | Views / view-models / services / domain separated          | 001        | Implemented                       | Maintain boundaries                                      |
| AB-004 | Typed catalog, cart, customer, pickup, request, receipt    | 003        | Implemented                       | Review approved catalog                                  |
| AB-005 | Clearly labeled pre-launch catalog                         | 004        | Implemented                       | Approve real products                                    |
| AB-006 | Catalog service owns lookup source                         | 005        | Implemented                       | Keep fixtures distinct from approved live prices         |
| AB-007 | Outdoor-photo homepage and editorial product gallery       | 006        | Implemented; actual bakery product photos pending | Replace concepts when originals are supplied            |
| AB-008 | Menu filters, search, empty state                          | 006        | Implemented                       | Fresh browser review                                     |
| AB-009 | Static product routes and allergen caution                 | 006        | Implemented                       | Approve recipes before ordering launch                   |
| AB-010 | Persist sanitized product selections only                  | 004        | Implemented                       | Storage-unavailable check                                |
| AB-011 | Preview / live pickup service boundary                     | 004        | Implemented                       | Provide real pickup settings                             |
| AB-012 | Accessible pickup date selection                           | 011        | Implemented                       | Fresh browser review                                     |
| AB-013 | Guest validation, no PII persistence                       | 004        | Implemented                       | Review privacy policy                                    |
| AB-014 | Review, correction, totals, consent                        | 010–013    | Implemented                       | Browser checkout test                                    |
| AB-015 | Success requires verified receipt                          | 014        | Implemented                       | Verify live contract                                     |
| AB-016 | Service abstraction and safe retry identity                | 004        | Implemented                       | Contract tests                                           |
| AB-017 | Google order-sheet schema / setup function                 | 004        | Blocked: external setup           | Owner creates private Sheet and sets Script Property     |
| AB-018 | Apps Script validation / locking / idempotency             | 016        | Implemented, undeployed           | Tests, owner deployment                                  |
| AB-019 | Adapter never accepts opaque response as success           | 016,018    | Implemented                       | Real-browser CORS test                                   |
| AB-020 | Lint, typecheck, tests, build in CI                        | 001        | Implemented                       | Verify repaired build on current `main`                  |
| AB-021 | Temporary Pages validation deployment / project base path   | 002,020    | Pending current-main verification | Verify Actions deployment and deployed revision          |
| AB-022 | Photo rotation, gallery, responsive / reduced motion       | 007        | Implemented                       | Fresh desktop/mobile browser inspection                  |
| AB-023 | Actual website journey / negative cases verified           | 008–015    | In progress                       | Fresh deployed desktop/mobile validation                 |
| AB-024 | Real order reaches private Sheet exactly once              | 017–019    | Blocked: configuration / approval | Deploy Google service, approve menu, verify test request |
| AB-025 | Main-branch handoff / operational docs                     | All        | In progress                       | Record validated delivery and remaining launch gates     |

## Launch gates

- **Website identity:** this is Angel’s actual website implementation. GitHub Pages is only the temporary non-ordering validation host, not a substitute for the commercial launch host.
- **Source delivery:** current work is delivered directly on `main`; successful Actions validation is the required build evidence for the delivered revision.
- **Hosting decision:** GitHub Pages must keep ordering disabled. Real ordering needs an approved commercial host before the public ordering flag is enabled.
- Approve menu, USD currency, prices, ingredients, imagery, and cross-contact information.
- Publish contact, pickup address, local timezone, dates/windows, cutoff and capacity.
- Approve privacy/retention/deletion, cancellations and payment arrangements.
- Owner deploys Apps Script; the order Sheet stays private.
- Verify readable cross-origin availability and request receipts from the approved public origin.
- Test retries, full / expired slots, invalid requests and operator confirmation.
- Only then enable ordering at both public build-time and server settings.
