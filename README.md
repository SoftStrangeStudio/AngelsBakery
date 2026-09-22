# Angel’s Bakery

Angel’s Bakery’s actual customer-facing website, built with Next.js, React, TypeScript and MVVM-style services. The current non-ordering deployment is available at **https://softstrangestudio.github.io/AngelsBakery/** while launch configuration is completed.

## Run

```sh
npm ci
npm run dev
# http://localhost:3000/AngelsBakery/
npm run check
```

Node 22+ recommended. Production export: `out/`. No server-side Next.js runtime is needed.

## Current release

This repository is the real Angel’s Bakery website implementation. The website is currently in a **pre-ordering launch state**: customers can browse the bakery experience, products, cart and pickup journey, while real order submission remains deliberately disabled until Angel’s approved business details and Google ordering configuration are supplied.

Products, prices, pickup dates, ingredients, imagery and contact details that are still marked as sample or pending approval must remain clearly labeled until Angel approves them. The application never treats a preview interaction as a submitted order, and no payments are collected by this site.

GitHub Pages is being used only as a temporary, non-ordering validation deployment because GitHub Pages is not intended to host a site primarily facilitating commercial transactions. The website itself is not a demo or portfolio mockup; commercial ordering must be launched on an approved host before real orders are accepted.

- [Architecture / MVVM](docs/architecture.md)
- [Ordering flow](docs/ordering-flow.md)
- [Google Sheets / secrets](docs/google-sheets.md)
- [Deployment](docs/deployment.md)
- [Operations / launch gates](docs/operations.md)
- [Task tracker — LUM-000075](docs/task-tracker.md)
- [Validation evidence](docs/validation.md)
- [Artwork provenance](docs/assets.md)

Angel’s Bakery is a separate business collaboration. SoftStrangeStudio is the repository organization, not the bakery’s public brand.
