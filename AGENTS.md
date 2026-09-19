# Working on Angel’s Bakery

- Governing LUM-000075; maintain `docs/task-tracker.md`, no duplicate tracking.
- Preserve Next.js static export and `/AngelsBakery` base path.
- Services own rules; view-models own state; views own presentation.
- Never commit private credentials, customer data or local environment files.
- Never treat a resolved fetch, opaque response or preview as successful ordering.
- Real ordering requires business approval, Google deployment and receipt evidence.
- Run `npm run check`; record visual/deployment limits honestly.
- Preserve imagery provenance and reduced-motion support.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
