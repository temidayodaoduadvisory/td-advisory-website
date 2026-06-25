# TD Advisory — Migration Plan (Replit → GitHub + Vercel + Namecheap)

> Canonical spec for moving `https://tdadvisory.co` off Replit to a free, fully
> automated GitHub → Vercel deployment. Status lives in [`dev-tracker.md`](./dev-tracker.md).

## Context

The site was built and hosted on Replit and goes offline whenever the Replit
subscription lapses. Goal: a **free, push-to-deploy** setup — code on GitHub, Vercel
auto-deploys on every push to `main`, custom domain served via Namecheap DNS, no manual
builds. Exploration found the site was **not static** (the contact form posted to an
Express + Resend backend). Removing that backend dependency makes the site pure static
and free to host.

## Decisions

| Topic | Decision |
|---|---|
| Contact form | **Formspree** (`@formspree/react`) — no backend, no secrets server-side. |
| Repo structure | Keep the monorepo; go live first, then remove dead code (Phase 7). |
| DNS | Keep DNS at **Namecheap**; add `A`/`CNAME` for Vercel. **Never touch MX/email.** |
| Testing | Playwright on **Chrome** (E2E) + Vitest (unit) + axe (a11y). |
| CI / deploy gate | **GitHub Actions gates `main`**; Vercel auto-deploys `main`, previews PRs. |
| Hosting | **Vercel Free Hobby** plan. |
| Node | **22** (`.nvmrc`, `engines`) — Vite 7 + Vercel + CI compatible. |

## Target architecture

- **`artifacts/site`** (React 19 / Vite 7 / Wouter / Tailwind 4) is the only deployed app.
- Static build → `dist/public`. SPA fallback via `artifacts/site/vercel.json` rewrite.
- Contact form → Formspree; form id from `VITE_FORMSPREE_FORM_ID` (typed in
  `src/config/formspree.ts`). `interest` + email subject ride along as hidden fields.
- Legacy/unused (to be removed in Phase 7): `artifacts/api-server`, `lib/db`,
  `artifacts/mockup-sandbox`, `artifacts/td-advisory-deck`, and unused deps
  (`@tanstack/react-query`, drizzle, resend, `@workspace/api-client-react`, Replit plugins).

## Phases

0. **Working docs** — `migration-plan.md`, `dev-tracker.md`, `CLAUDE.md`. ✅
1. **Standalone static build** — de-Replit `vite.config.ts` (base `/`, drop Replit
   plugins, `/api` proxy, required-env throws); keep darwin-arm64 binaries in
   `pnpm-workspace.yaml`; pin Node 22. ✅
2. **Formspree swap** — replace `fetch('/api/contact')` with `useForm`; UI unchanged;
   a11y fixes (viewport zoom, Select label, menu button name). ✅
3. **Tests** — Vitest component tests + Playwright/axe E2E on Chrome (10 specs). ✅
4. **CI** — `.github/workflows/ci.yml` (typecheck + unit + build + Playwright/axe). ✅
5. **Vercel project** *(guided, needs your account)* — connect repo, Root Directory
   `artifacts/site`, set `VITE_FORMSPREE_FORM_ID`, verify preview on Chrome.
6. **Domain cutover** *(guided, needs Namecheap)* — add domain in Vercel; set
   `A @ → 76.76.21.21` + `CNAME www → cname.vercel-dns.com`; preserve MX; verify HTTPS.
7. **Dead-code cleanup** — remove legacy artifacts/libs/deps + Replit files; re-verify.

## What we need from you (credentials / account actions)

- **Formspree:** account + the form **id** (from `https://formspree.io/f/<id>`) and the
  recipient email (currently `enquiries@tdadvisory.co`).
- **Vercel:** Hobby account; connect the GitHub repo (browser).
- **Namecheap:** login to edit Advanced DNS.
- **GitHub:** enable branch protection on `main` requiring the CI check.

## Verification (end to end)

- **Local:** `typecheck`, `typecheck:test`, `test`, `build`, `e2e` all green on Chrome.
- **CI:** GitHub Actions green on the PR; `main` protected.
- **Preview:** Vercel `*.vercel.app` opened in Chrome; contact form submits; email received.
- **Production:** `https://tdadvisory.co` over HTTPS; `www` redirects; email still delivers.
- **Automation proof:** a trivial push to `main` auto-deploys.

## Caveats

- Vercel Hobby restricts commercial use (low risk for low traffic; upgrade only if flagged).
- Formspree free tier ≈ 50 submissions/month.
- DNS propagation can take a few hours; the `*.vercel.app` URL works meanwhile.
- Some steps (Vercel/Namecheap/Formspree/GitHub settings) are account actions you perform;
  we prepare exact values and guide each click.
