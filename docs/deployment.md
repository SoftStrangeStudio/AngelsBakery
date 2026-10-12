# Website deployment

Existing validation URL: https://softstrangestudio.github.io/AngelsBakery/

Read-only check on 2026-10-12 found that this URL still serves the September 23, 2026 “Angel’s Bakery” snapshot, not the current Soft Strange Bakery source in this checkout. The returned HTML had no `noindex` directive, and `/AngelsBakery/icon.svg` returned 404. Do not treat the existing deployment as current-source validation; the local static export is the verified rebrand artifact so far.

This repository contains Angel’s actual customer-facing bakery website. GitHub's current [Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) do not allow free hosting for an online business or a site primarily directed at facilitating commercial transactions. **Do not publish this bakery site to GitHub Pages, even with ordering disabled.** The Pages deployment workflow was removed from this checkout so a source push cannot publish it. The existing public Pages snapshot remains unchanged until the hosting decision is made.

Select and approve a suitable commercial host before public deployment. Validate the static export locally in the meantime. Before real orders are accepted, configure the approved host and Google ordering connection, then complete the business and receipt checks. Do not enable live ordering until those gates pass.

The committed source on `main` is the September 23, 2026 snapshot. The Soft Strange Bakery changes in the current checkout are uncommitted and are not part of that published source yet.

## Read-only release gate recheck — 2026-10-11

- The Pages URL returned HTTP 200 but still had the old `Angel’s Bakery — A little baked happiness` title and no `noindex`; `/AngelsBakery/icon.svg` returned HTTP 404. This is not a current-source deployment.
- GitHub’s current [Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) say Pages is not intended or allowed as free hosting for an online business or a site primarily facilitating commercial transactions. Do not publish this customer-facing bakery site there, even as a non-ordering preview; use local export checks until an approved commercial host is selected.
- Only `.env.example` is present at the repo root. It leaves `NEXT_PUBLIC_ORDER_ENDPOINT` empty and `NEXT_PUBLIC_ORDERING_ENABLED=false`. A targeted scan of `out/` found no Google Apps Script execute URL or common cloud-key/private-key patterns. On the local product route, reservation buttons were disabled; the empty order route exposed no checkout form. This scan is bounded evidence, not a general secret-audit certification.
- Live `origin/main` remains `68ea344`; the Soft Strange changes are still only in the local uncommitted checkout. No deployment or ordering setting was changed.

## Local Pages export preparation — 2026-10-12

- `npm run publish:root` now completes against the current source. Its generated-path allowlist includes the local typography fonts and bakery icon added by this redesign.
- A temporary local Pages-style mapper served the prepared root export under `/AngelsBakery/`: home, Snickerdoodles deep link, font and icon returned HTTP 200, and the export includes `404.html`. The homepage reports the Soft Strange Bakery title and `noindex, nofollow`; 1280px and 390px render widths match their viewports.
- All 17 customer routes also passed direct-load through that mapper at 1280×800 and 390×844 (34 HTTP 200s, one `main` and a page heading each, no horizontal overflow or page errors). An unknown path returned HTTP 404 with the custom bakery recovery page.
- `.github/workflows/deploy-pages.yml` previously published the bakery on every push to `main`. Removed that deployment workflow; `.github/workflows/validate.yml` continues to run checks on pushes and pull requests without publishing a site.
- This is local preparation only. The checkout remains uncommitted, no push/deployment occurred, and the public URL still serves the older Angel’s Bakery snapshot. Do not deploy to Pages; keep AB-021 and AB-023 open until a suitable commercial host is approved and the current revision is verified there.

## Commercial host shortlist — 2026-10-12

No provider is selected or approved yet. These are candidates for the owner to choose from; published prices and plan limits can change, so recheck the linked provider pages before creating an account or enabling billing.

| Candidate | Current documented fit | Cost and tradeoff |
| --- | --- | --- |
| Cloudflare Pages | First-party preset for Next.js static export: build `npx next build`, publish `out`. Pages supports path-preserving `200` proxy rewrites in `_redirects`, which can serve `/AngelsBakery/*` from the root export while keeping the current base path. [Static export guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/), [build settings](https://developers.cloudflare.com/pages/configuration/build-configuration/), [redirects and proxying](https://developers.cloudflare.com/pages/configuration/redirects/). | Free Pages limits currently list 500 builds/month, 20,000 files, and 25 MiB per file. Current `out/` is 205 files; its largest asset is about 0.47 MiB. This is the closest technical match, but the owner should confirm the right commercial account/plan for a customer-facing bakery before choosing it. [Limits](https://developers.cloudflare.com/pages/platform/limits/). |
| Netlify | Static output can use the same `_redirects` rewrite to preserve `/AngelsBakery/`; the platform supports custom domains with SSL and deploy previews. [Rewrites](https://docs.netlify.com/manage/routing/redirects/rewrites-proxies/), [plans](https://www.netlify.com/pricing/). | Published plans list Personal at $9/month with 1,000 credits and Pro at $20/month starting at 3,000 credits. Production deploys use 15 credits, bandwidth 20 credits/GB and requests 2 credits per 10,000. Free has 300 credits and pauses projects at its limit; paid-plan credit use and auto-recharge settings need review before account setup. |
| Vercel | Next.js static export can be hosted with URL routing in `vercel.json` to retain `/AngelsBakery/`. [Rewrites](https://vercel.com/docs/routing/rewrites). | Hobby is explicitly personal/non-commercial. Pro is designed for businesses, starts at $20/month and includes a $20 usage credit; additional member seats are $20/month each. [Plans](https://vercel.com/pricing), [Hobby terms](https://vercel.com/docs/plans/hobby). |

### Required deployment shape

- Keep `basePath: "/AngelsBakery"` in `next.config.ts` unless the owner explicitly approves a different public URL. `next build` emits files such as `out/index.html` and `out/menu/index.html`, while generated URLs include `/AngelsBakery/`; the host must serve those files under that prefix, using a tested static rewrite or an equivalent prefix-mounted deployment.
- Set the public build variable `NEXT_PUBLIC_SITE_URL` to the approved origin only (for example, `https://bakery.example`, with no path). The app appends `/AngelsBakery/` when building `metadataBase`. Until the host is selected, the local build omits an absolute Open Graph image URL instead of pointing social previews at the retired GitHub Pages origin.
- Do not assume a successful upload to the host root is enough. Before switching DNS or enabling indexing, deploy a preview and verify all 17 customer routes, nested product links, the icon, fonts, images, `noindex`, and the guarded order flow under `/AngelsBakery/` on desktop and mobile.
- Preserve the current local preview and ordering safeguards during host evaluation. No account, credential, billing, domain, source push, public deployment, or indexing setting was changed by this research.

### Current recommendation

Cloudflare Pages is the closest documented fit for the existing static export, but its account-plan suitability for this business remains for the owner to confirm. Netlify Personal is the lowest published paid entry price in this shortlist; Netlify's credit model and pause/auto-recharge behavior need an owner-approved budget. Vercel Pro is the clearest published business plan, with a $20/month starting plan and usage credit. Choose only after the owner confirms provider and acceptable billing. This is a technical comparison, not hosting or legal approval.

The old hardcoded `metadataBase` was removed during this pass. With `NEXT_PUBLIC_SITE_URL=https://bakery.example`, a sample build emitted `og:image` as `https://bakery.example/AngelsBakery/images/scenes/snickerdoodles.webp` (base path exactly once). With the variable unset, the validated export and synchronized root homepage contain no absolute social-image URL, no reference to the retired GitHub Pages origin, and retain `noindex, nofollow`. Set the variable to the approved HTTPS origin at the selected host before adding absolute share metadata.

1. Run `npm run publish:root` before delivery. It validates and builds source, then replaces only generated root routes/assets with the fresh `out/` export. Commit source and this root snapshot together to `main`.
2. Do not configure GitHub Pages as the host for this bakery site. The checked-in root snapshot supports local/static export verification; refresh it with `npm run publish:root` whenever source or public images change.
3. `.github/workflows/validate.yml` runs `npm run publish:root` on pull requests and `main` pushes. That runs the full source checks and validates root-export synchronization in the temporary Actions checkout; it does not publish the site.
4. Select and approve a commercial host, then build the hosting workflow for that provider.
5. Verify the exact deployed revision on desktop and narrow mobile: home, menu, product deep links, cart, pickup CTA and checkout/review flow.
6. Keep launch evidence tied to the exact validated revision. A local export or a successful unrelated Pages deployment is not proof of production hosting.

`basePath` is built in. Local images include it; Next Link handles app links. Trailing slashes produce directory indexes; `.nojekyll` preserves Next assets.

## Commercial launch

- Choose the approved production host.
- Configure the public origin and Google Apps Script CORS/receipt behavior.
- Supply and approve business contact, pickup, menu, pricing, ingredient, privacy and operating details.
- Run the full ordering validation using synthetic test data before enabling real orders.
- Enable ordering only after both the public build flag and server-side setting are approved.

## Rollback

Use a reviewed revert or a previously successful deployment. Never force-push. For order incidents set server `orderingEnabled=false` immediately, then set the public flag false and rebuild; a client-only change is insufficient.
