# GitHub Pages deployment

Target: https://softstrangestudio.github.io/AngelsBakery/

**Preview only:** [GitHub Pages usage limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) exclude sites primarily facilitating commercial transactions. The Pages workflow deliberately forces ordering off. Before real orders, select and approve a host that permits the business use, migrate this static app, then configure the Google connection. Do not enable live ordering on Pages.

**Delivery blocker:** the authorized `git push origin main` failed with `could not read Username for 'https://github.com'`. Local source and assets are committed; remote main remains the initial commit. No credential extraction or alternate authentication was attempted.

1. Commit source, lockfile, generated assets, tests and workflows to `main`.
2. Settings → Pages → Source: **GitHub Actions**. The provided screenshot showed `main / (root)` branch publishing; that does not build Next.js.
3. Workflow validates, exports, uploads `out`, and deploys to `github-pages`.
4. Default build keeps live ordering off. Missing configuration never produces fake success.
5. Check Validate and Deploy bakery to Pages in Actions. Owner must resolve permission/environment approval gates; do not bypass them.
6. Verify home, menu, product deep links, and checkout after deployment.

`basePath` is built in. Local images include it; Next Link handles app links. Trailing slashes produce directory indexes; `.nojekyll` preserves Next assets. No custom-domain or DNS changes.

## Rollback

Use a reviewed revert or a previously successful Pages deployment. Never force-push. For order incidents set server `orderingEnabled=false` immediately, then public flag false and rebuild; a client-only change is insufficient.
