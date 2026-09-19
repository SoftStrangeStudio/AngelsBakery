# Angel’s Bakery

A warm, customer-first bakery storefront built with Next.js, React, TypeScript and MVVM-style services. Static export for **https://softstrangestudio.github.io/AngelsBakery/**.

## Run

```sh
npm ci
npm run dev
# http://localhost:3000/AngelsBakery/
npm run check
```

Node 22+ recommended. Production export: `out/`. No server-side Next.js runtime is needed.

## Current release

This is a polished **preview collection**, not a live bakery ordering launch. Products, prices, dates and imagery are samples. Cart/preview checkout work; real submission stays disabled until approved Google configuration and business details are supplied. No payments are collected.

The source is committed locally; the push was blocked by missing Git authentication. GitHub Pages is preview-only under its usage limits; real ordering must move to a host that permits commercial transactions.

- [Architecture / MVVM](docs/architecture.md)
- [Ordering flow](docs/ordering-flow.md)
- [Google Sheets / secrets](docs/google-sheets.md)
- [Pages deployment](docs/deployment.md)
- [Operations / launch gates](docs/operations.md)
- [Task tracker — LUM-000075](docs/task-tracker.md)
- [Validation evidence](docs/validation.md)
- [Artwork provenance](docs/assets.md)

Angel’s Bakery is a separate business collaboration. SoftStrangeStudio is the repository organization, not the bakery’s public brand.
