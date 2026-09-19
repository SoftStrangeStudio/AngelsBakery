# Angel’s Bakery — Project Task Tracker

- Governing ticket: **LUM-000075**, [Master Register](https://docs.google.com/spreadsheets/d/1fOmmK2tMvJpKi1pOYhKL7bGyG30r44BS0PRadm01Q1Y/edit).
- Accountable owner / approval: Crimson. Execution: Codex.
- Collaboration: Angel’s Bakery, separate from SoftStrange Studio’s business workspace.
- This is the implementation tracker. The pre-existing Drive tracker folder was empty; do not create a second editable copy.
- Execution method: direct bounded implementation. No temporary `.agent` goal is left active.
- Status is source implementation, not production approval. See [validation](validation.md).

| Task   | Outcome / acceptance                                       | Dependency | Status                            | Next action                                              |
| ------ | ---------------------------------------------------------- | ---------- | --------------------------------- | -------------------------------------------------------- |
| AB-001 | Next.js, React, TypeScript app builds                      | None       | Implemented                       | Retain build evidence                                    |
| AB-002 | Export respects /AngelsBakery assets and links             | 001        | Implemented                       | Verify deployed deep links                               |
| AB-003 | Views / view-models / services / domain separated          | 001        | Implemented                       | Maintain boundaries                                      |
| AB-004 | Typed catalog, cart, customer, pickup, request, receipt    | 003        | Implemented                       | Review approved catalog                                  |
| AB-005 | Clearly labeled sample catalog                             | 004        | Implemented                       | Approve real products                                    |
| AB-006 | Catalog service owns lookup source                         | 005        | Implemented                       | Keep fixtures distinct from live prices                  |
| AB-007 | Editorial homepage and generated assets                    | 006        | Implemented                       | Browser review                                           |
| AB-008 | Menu filters, search, empty state                          | 006        | Implemented                       | Browser review                                           |
| AB-009 | Static product routes and allergen caution                 | 006        | Implemented                       | Approve recipes before launch                            |
| AB-010 | Persist sanitized product selections only                  | 004        | Implemented                       | Storage-unavailable check                                |
| AB-011 | Preview / live pickup service boundary                     | 004        | Implemented                       | Provide real pickup settings                             |
| AB-012 | Accessible pickup date selection                           | 011        | Implemented                       | Browser review                                           |
| AB-013 | Guest validation, no PII persistence                       | 004        | Implemented                       | Review privacy policy                                    |
| AB-014 | Review, correction, totals, consent                        | 010–013    | Implemented                       | Browser checkout test                                    |
| AB-015 | Success requires verified receipt                          | 014        | Implemented                       | Verify live contract                                     |
| AB-016 | Service abstraction and safe retry identity                | 004        | Implemented                       | Contract tests                                           |
| AB-017 | Google order-sheet schema / setup function                 | 004        | Blocked: external setup           | Owner creates private Sheet and sets Script Property     |
| AB-018 | Apps Script validation / locking / idempotency             | 016        | Implemented, undeployed           | Tests, owner deployment                                  |
| AB-019 | Adapter never accepts opaque response as success           | 016,018    | Implemented                       | Real-browser CORS test                                   |
| AB-020 | Lint, typecheck, tests, build in CI                        | 001        | Implemented                       | Verify Actions result                                    |
| AB-021 | Pages workflow / project base path                         | 002,020    | Pending deployment                | Push main; Pages source must be Actions                  |
| AB-022 | Layered design, alpha cutouts, responsive / reduced motion | 007        | Implemented                       | Browser inspection                                       |
| AB-023 | Preview journey / negative cases verified                  | 008–015    | In progress                       | Public-browser check; local access blocked               |
| AB-024 | Real order reaches private Sheet exactly once              | 017–019    | Blocked: configuration / approval | Deploy Google service, approve menu, verify test request |
| AB-025 | Main-branch handoff / operational docs                     | All        | In progress                       | Record delivery and remaining gates                      |

## Launch gates

- **Delivery blocked:** local commit exists; `git push origin main` failed because this Git session lacks authenticated credentials. Connect authorized write access and retry the existing commit; do not rebuild a duplicate project.
- **Hosting decision:** Pages is preview-only under its usage limits. Real ordering needs an approved commercial host; Pages workflow forces ordering off.
- Approve menu, USD currency, prices, ingredients, imagery, and cross-contact information.
- Publish contact, pickup address, local timezone, dates/windows, cutoff and capacity.
- Approve privacy/retention/deletion, cancellations and payment arrangements.
- Owner deploys Apps Script; the order Sheet stays private.
- Verify readable cross-origin availability and request receipts from the Pages origin.
- Test retries, full / expired slots, invalid requests and operator confirmation.
- Only then enable ordering at both public build-time and server settings.
