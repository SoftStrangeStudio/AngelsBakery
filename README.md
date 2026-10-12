# Soft Strange Bakery

The customer-facing bakery site for Angel’s bake sale, built with Next.js, React, TypeScript and MVVM-style services. The existing public Pages URL is **https://softstrangestudio.github.io/AngelsBakery/**, but it still serves the September 23, 2026 “Angel’s Bakery” snapshot; the current Soft Strange Bakery source in this checkout has not been deployed. A read-only check on October 12, 2026 also found no `noindex` directive and a missing icon response on that older deployment. Do not treat that URL as verification of the current rebrand.

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

This repository contains the actual customer-facing bakery site. GitHub's current [Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) do not allow free hosting for an online business or a site primarily facilitating commercial transactions. The Pages deployment workflow has been removed from this checkout; pushes to `main` run validation only. Choose and approve a suitable commercial host before public deployment. Real ordering remains disabled until its separate business and service approvals are complete.

- [Architecture / MVVM](docs/architecture.md)
- [Ordering flow](docs/ordering-flow.md)
- [Google Sheets / secrets](docs/google-sheets.md)
- [Deployment](docs/deployment.md)
- [Operations / launch gates](docs/operations.md)
- [Task tracker — LUM-000075](docs/task-tracker.md)
- [Validation evidence](docs/validation.md)
- [Artwork provenance](docs/assets.md)

Angel’s Bakery is a separate business collaboration. SoftStrangeStudio is the repository organization, not the bakery’s public brand.
