# Website deployment

Current validation URL: https://softstrangestudio.github.io/AngelsBakery/

This repository contains Angel’s actual website. **GitHub Pages is only the temporary non-ordering validation deployment**, not the commercial ordering host. GitHub Pages usage limits do not permit using Pages as free hosting for a site primarily directed at facilitating commercial transactions, so the Pages build deliberately forces ordering off.

Before real orders are accepted, select and approve a host that permits the business use, deploy the same validated static application there, then configure the approved Google ordering connection. Do not enable live ordering on GitHub Pages.

The source and assets are published on `main`.

1. Run `npm run publish:root` before delivery. It validates and builds source, then replaces only generated root routes/assets with the fresh `out/` export. Commit source and this root snapshot together to `main`.
2. Settings → Pages → Source: **GitHub Actions** for the temporary validation deployment. The checked-in root snapshot supports existing main/root publishing too; it must be refreshed with `npm run publish:root` whenever source or public images change.
3. The workflow validates the repository, exports `out`, uploads the Pages artifact and deploys it.
4. The Pages build keeps live ordering off. Missing configuration never produces fake success.
5. Check **Validate** and **Deploy bakery to Pages** in Actions. Resolve permission/environment approval gates rather than bypassing them.
6. Verify the deployed revision on desktop and narrow mobile: home, menu, product deep links, cart, pickup CTA and checkout/review flow.
7. Keep launch evidence tied to the exact validated revision. A successful stale branch deployment is not evidence that current source builds.

`basePath` is built in. Local images include it; Next Link handles app links. Trailing slashes produce directory indexes; `.nojekyll` preserves Next assets.

## Commercial launch

- Choose the approved production host.
- Configure the public origin and Google Apps Script CORS/receipt behavior.
- Supply and approve business contact, pickup, menu, pricing, ingredient, privacy and operating details.
- Run the full ordering validation using synthetic test data before enabling real orders.
- Enable ordering only after both the public build flag and server-side setting are approved.

## Rollback

Use a reviewed revert or a previously successful deployment. Never force-push. For order incidents set server `orderingEnabled=false` immediately, then set the public flag false and rebuild; a client-only change is insufficient.
