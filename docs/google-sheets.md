# Google order service setup

Implemented but **not deployed or connected to a live Sheet**. No credentials were invented; no real customer entries were created.

Before production configuration, move ordering to an approved host that permits commercial transactions. GitHub Pages is only the non-ordering design preview; its workflow ignores live-order variables and forces ordering off. References below to an origin / build mean the approved production host, not permission to launch sales on Pages.

1. Bakery owner creates a new **private** Google Sheet and an Apps Script project in their authorized account.
2. Copy `google-apps-script/Code.js`. Enable manifest editing and copy `appsscript.json`.
3. Project Settings → Script Properties: set `SHEET_ID` to that Sheet ID. Never publish the Sheet or embed its ID in the browser.
4. Run `setup()` and approve Sheet access. Missing tabs are created without replacing existing data. Headers are checked; ordering starts disabled.
5. Populate `Products`: approved IDs matching `src/data/products.ts`, names, positive integer USD prices in cents, `TRUE` / `FALSE` active state.
6. Populate `Pickup Dates`: unique ID, **plain-text** ISO date `YYYY-MM-DD`, readable local window, positive capacity **in order requests**, ISO UTC cutoff (e.g. `2026-10-01T16:00:00Z`), active boolean. Explicitly resolve local timezone/DST into UTC.
7. Fill `Settings`: `pickupLocation`, IANA `timezone`, `retentionDays`, `menuApproved`, `privacyApproved`. Keep `orderingEnabled=false` until approval. Retention is an operator process, not automatic deletion.
8. Deploy a versioned web app as owner. Guest ordering requires anonymous access; the owner must authorize this public endpoint. Never expose OAuth tokens. If Workspace policy prevents anonymous deployment, stop and choose an approved backend.
9. Copy the deployment **`/exec`** URL, not `/dev`. It is public configuration.
10. In a separate test deployment / test Sheet, enable server settings and test with synthetic details. Verify the browser reads redirect responses from the approved production origin. Content Service redirects to `script.googleusercontent.com`; never hide CORS failure with `mode: no-cors`.
11. Verify one row per request; identical ID/payload retries return the original receipt; changed payload with same ID is rejected; full/expired dates reject writes. Compare the row and receipt.
12. Approve public menu/contact/pickup/privacy/FAQ copy. In the approved production host's build settings, set `NEXT_PUBLIC_ORDER_ENDPOINT` and `NEXT_PUBLIC_ORDERING_ENABLED=true`, enable the production server, then rebuild. The Pages preview stays disabled.

## Schema

| Tab          | Columns                                                                                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orders       | Request ID, Payload Hash, Order ID, Created UTC, Status, Name, Email, Phone, Pickup ID, Pickup Date, Pickup Window, Items JSON, Total Cents, Notes, Consent |
| Products     | ID, Name, Price Cents, Active                                                                                                                               |
| Pickup Dates | ID, Date, Window, Capacity Orders, Cutoff UTC, Active                                                                                                       |
| Settings     | Key, Value                                                                                                                                                  |

Customer formula characters are escaped. No customer lists, Sheet IDs, stack traces or secrets are returned. No emails, payments or automatic booking confirmation are implemented.

## GitHub Secrets, correctly separated

- Pages needs **no Google credential**. Public endpoint/flag belong in repository **Variables**; making them GitHub Secrets would not hide them in the client bundle.
- Private Sheet configuration stays in Script Properties.
- Future automated Apps Script deployment may use protected environment secrets `CLASP_CLIENT_ID`, `CLASP_CLIENT_SECRET`, `CLASP_REFRESH_TOKEN`, plus a script ID variable. Explicitly authorize the account/scopes first. Do not extract tokens during website builds.
- Execute-as-owner needs no service-account JSON key; do not add an unnecessary long-lived key.
- If browser CORS testing fails, keep ordering off. A separately approved Google Cloud service with explicit CORS is the alternative, not a silent deployment here.
