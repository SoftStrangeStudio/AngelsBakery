# Agent Memory

## Purpose
- Soft Strange Bakery's customer-facing website for Angel's weekly Saturday bake sale, currently pre-launch.

## Architecture
- Next.js static export under `/AngelsBakery`; domain and services own rules, view-models own state, and views own presentation.

## Durable Decisions
- Adapt Soft Strange Studio's handmade language to the bakery, with a warmer, personal, almost-blog-like feel.
- Keep design iterations restrained and preserve existing wording unless the user directs otherwise.

## Conventions
- Track live direction in `.agent/THOUGHTS.md` and its current interpretation in `.agent/INTENT.md`; keep implementation progress in `.agent/current.md` and delivery gates in `docs/task-tracker.md`.
- Preserve routes, `/AngelsBakery` base path, reduced-motion support, imagery provenance, and approval-gated ordering.

## Constraints
- Keep work scoped to Soft Strange Bakery. Local preview or a successful request does not prove a real order or public launch.
