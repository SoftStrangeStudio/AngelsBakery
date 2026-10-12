# Soft Strange Bakery

The customer-facing bakery site for Angel’s bake sale, built with Next.js, React, TypeScript and MVVM-style services. The public Pages URL is **https://softstrangestudio.github.io/AngelsBakery/**. A push to `main` on October 12, 2026 triggered GitHub’s Pages system workflow, and the URL now displays Soft Strange Bakery. That deployment used the root export from commit `de6f061`, which does not include the latest short-window carousel CSS correction; the workspace now has a refreshed, uncommitted root export. This deployment was not approved and is not launch evidence; do not use it as the bakery’s public host.

## Run

```sh
npm ci
npm run dev -- --port 3001
# http://localhost:3001/AngelsBakery/
npm run check
```

Node 22+ recommended. Production export: `out/`. No server-side Next.js runtime is needed.

## Current release

This repository is the real Angel’s Bakery website implementation. The website is currently in a **pre-ordering launch state**: customers can browse the bakery experience, products, cart and pickup journey, while real order submission remains deliberately disabled until Angel’s approved business details and Google ordering configuration are supplied.

Products, prices, pickup dates, ingredients, imagery and contact details that are still marked as sample or pending approval must remain clearly labeled until Angel approves them. The application never treats a preview interaction as a submitted order, and no payments are collected by this site.

This repository contains the actual customer-facing bakery site. GitHub's current [Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) do not allow free hosting for an online business or a site primarily facilitating commercial transactions. Although the custom Pages workflow was removed from this checkout, repository settings triggered GitHub’s `pages build and deployment` system workflow on the October 12 push. Confirm or disable that Pages configuration before any further push that should not republish the site. Choose and approve a suitable commercial host before public deployment. Real ordering remains disabled until its separate business and service approvals are complete.

- [Architecture / MVVM](docs/architecture.md)
- [Ordering flow](docs/ordering-flow.md)
- [Google Sheets / secrets](docs/google-sheets.md)
- [Deployment](docs/deployment.md)
- [Operations / launch gates](docs/operations.md)
- [Task tracker — LUM-000075](docs/task-tracker.md)
- [Validation evidence](docs/validation.md)
- [Artwork provenance](docs/assets.md)

Angel’s Bakery is a separate business collaboration. SoftStrangeStudio is the repository organization, not the bakery’s public brand.
