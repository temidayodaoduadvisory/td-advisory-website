# Dev Tracker — Replit → Vercel migration

Status doc for the migration. See [`migration-plan.md`](./migration-plan.md) for the spec.

**Outcome:** ✅ Live at **https://tdadvisory.co** on Vercel (Hobby), free hosting,
auto-deploy on push to `main`. Replit no longer needed.

## Status by phase

| Phase | Status | Notes |
|---|---|---|
| 0. Working docs | ✅ Done | `migration-plan.md`, `dev-tracker.md`, `CLAUDE.md`. |
| 1. Standalone static build | ✅ Done | vite.config de-Replit'd; Node 22 pinned; cross-platform binaries. |
| 2. Formspree swap | ✅ Done | `@formspree/react`, form id `xaqaanbr`; UI unchanged; a11y fixes. |
| 3. Tests (Vitest + Playwright + axe) | ✅ Done | 7 unit + 10 E2E on Chrome. |
| 4. CI (GitHub Actions) | ✅ Done | `ci.yml` gates `main`; branch protection enabled (require CI, PR, no force-push). |
| 5. Vercel project | ✅ Done | Reconnected to `temidayodaoduadvisory/td-advisory-website`; Root Directory `artifacts/site`; `VITE_FORMSPREE_FORM_ID` set; auto-deploy working. |
| 6. Domain cutover | ✅ Done | Namecheap `A @ → 216.198.79.1`, `CNAME www → cname.vercel-dns.com`; Zoho MX preserved; HTTPS live; `www` → apex (307). |
| 7. Dead-code cleanup | ✅ Done | Removed `api-server`, `td-advisory-deck`, `mockup-sandbox`, `lib/db`, `lib/api-*`, `scripts`, Replit config + deps. `artifacts/site` is the only package. |

## How it's wired (final)

- **Repo:** `github.com/temidayodaoduadvisory/td-advisory-website` (single package: `artifacts/site`).
- **Host:** Vercel project `tdadvisory-co` (Hobby). Root Directory `artifacts/site`,
  Vite preset, output `dist/public`, SPA rewrite via `artifacts/site/vercel.json`.
- **Env:** `VITE_FORMSPREE_FORM_ID` (Production + Preview).
- **Deploy:** push to `main` → Vercel builds & deploys prod; PRs get preview URLs.
- **DNS (Namecheap):** `A @ → 216.198.79.1`, `CNAME www → cname.vercel-dns.com`.
  Email on **Zoho** (MX/SPF/DKIM untouched).
- **Protection:** `*.vercel.app` preview URLs are behind Vercel login (Standard Protection);
  the production custom domain is public.

## Verified

- [x] Local: typecheck, typecheck:test, vitest (7), site build, **root build**, root typecheck, playwright (10) — all green.
- [x] `pnpm install --frozen-lockfile` clean.
- [x] CI green on PR; `main` branch-protected.
- [x] `https://tdadvisory.co` serves the new build over HTTPS; `www` redirects; MX still Zoho.
- [x] Contact form submits to Formspree and delivers email (user-tested).

## Optional follow-ups (not blocking)

- Stale DNS records in Namecheap can be deleted: `replit-verify` TXT on `@` and `www`,
  and the old Resend/SES sending records (`resend._domainkey`, `send.enquiries` SPF) —
  the site no longer uses Resend. Leave all **Zoho** records.
- `@tanstack/react-query` is still imported in `App.tsx` as a provider but makes no queries;
  could be removed if desired (touches `App.tsx`).

## Decision log

- Contact form → Formspree (dropped Express/Resend backend). Site is pure static.
- DNS via Namecheap A/CNAME (not Vercel nameservers) to protect Zoho email.
- Node 22 for Vercel/CI compatibility.
- axe `color-contrast` excluded (design-owned).
- Vercel project was wired to the wrong repo (`-oss/tdadvisory.co`) via manual upload;
  reconnected to the real repo + scoped Root Directory to fix auto-deploy.
