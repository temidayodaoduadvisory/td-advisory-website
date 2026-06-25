# CLAUDE.md

Guidance for AI assistants and developers working in this repo.

## What this is

The marketing website for **TD Advisory** (`https://tdadvisory.co`). It is a **pure
static single-page app** — there is no backend. It was originally built and hosted on
Replit; it now deploys to **Vercel** from GitHub, with DNS at **Namecheap**.

## Architecture (important)

- The deployable site is **`artifacts/site`** — React 19 + Vite 7 + Wouter + Tailwind 4.
- The contact form posts to **Formspree** (`@formspree/react`), not to any server.
  Do **not** reintroduce a backend / `/api/*` calls for the form.
- `artifacts/api-server`, `lib/db`, `artifacts/mockup-sandbox`, and
  `artifacts/td-advisory-deck` are **legacy/unused** by the live site and are slated for
  removal (see `dev-tracker.md`, Phase 7). Don't build new work on them.
- The repo is a pnpm workspace; only `artifacts/site` ships to production.

## Commands (run from repo root)

```bash
pnpm install                                   # install workspace deps (Node 22, see .nvmrc)
pnpm --filter @workspace/site dev              # local dev server
pnpm --filter @workspace/site build            # production build -> artifacts/site/dist/public
pnpm --filter @workspace/site typecheck        # app typecheck
pnpm --filter @workspace/site typecheck:test   # test/types typecheck
pnpm --filter @workspace/site test             # Vitest unit/component tests
pnpm --filter @workspace/site e2e:install      # one-time: install Playwright Chromium
pnpm --filter @workspace/site e2e              # Playwright E2E + axe (Chrome)
```

## Conventions

- **Tests are required** for behavior changes: Vitest for component/logic, Playwright
  (Chrome) for user flows, axe for accessibility. CI must stay green.
- **Don't invent UI/UX.** Keep the existing design; accessibility fixes (labels, names)
  are welcome and should not change the visuals.
- Config/secrets come from typed modules + env vars (e.g. `src/config/formspree.ts`
  reads `VITE_FORMSPREE_FORM_ID`). No inline magic values.
- The `color-contrast` axe rule is intentionally excluded (design-owned).

## Deployment model

- **Vercel** project: Root Directory `artifacts/site`, framework Vite, output
  `dist/public` (see `artifacts/site/vercel.json`).
- Required env var in Vercel (Production + Preview): **`VITE_FORMSPREE_FORM_ID`**.
- **Push to `main` → production deploy.** Pull requests get preview URLs.
- **CI gates `main`**: `.github/workflows/ci.yml` runs typecheck + Vitest + build +
  Playwright/axe on every push and PR.
- **DNS** stays at Namecheap: `A @ → 76.76.21.21`, `CNAME www → cname.vercel-dns.com`.
  Never touch the domain's MX/email records.

## Source of truth

- `migration-plan.md` — the canonical migration spec and decisions.
- `dev-tracker.md` — live status, what's verified, and remaining manual steps.
