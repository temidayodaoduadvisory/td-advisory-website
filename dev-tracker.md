# Dev Tracker — Replit → Vercel migration

Living status doc. Updated as work proceeds. See [`migration-plan.md`](./migration-plan.md)
for the full spec.

**Branch:** `migrate/vercel-static` → PR into `main`.
**Local gate (all green on Node 22 / Apple Silicon):** typecheck · typecheck:test ·
vitest (7) · build · playwright+axe (10).

## Status by phase

| Phase | Status | Notes |
|---|---|---|
| 0. Working docs | ✅ Done | `migration-plan.md`, `dev-tracker.md`, `CLAUDE.md`. |
| 1. Standalone static build | ✅ Done | vite.config de-Replit'd; Node 22 pinned; darwin-arm64 binaries restored. |
| 2. Formspree swap | ✅ Done | UI unchanged; hidden `interest`/`_subject`; a11y fixes. |
| 3. Tests (Vitest + Playwright + axe) | ✅ Done | 7 unit + 10 E2E, all on Chrome. |
| 4. CI (GitHub Actions) | ✅ Done | `.github/workflows/ci.yml`. Needs branch protection (manual). |
| 5. Vercel project | ⏳ Blocked on you | Needs Vercel account + Formspree id. `vercel.json` ready. |
| 6. Domain cutover | ⏳ Blocked on you | Needs Namecheap DNS edit. |
| 7. Dead-code cleanup | ⬜ Pending | After live & green. |

## Verified so far

- [x] `pnpm --filter @workspace/site build` → emits `dist/public` (no Replit/env coupling).
- [x] `typecheck` + `typecheck:test` pass.
- [x] Vitest: 7 component tests pass (render, submit, success/error/submitting, hidden fields).
- [x] Playwright on Chrome: 10 pass (home render, sections, nav scroll, 404, contact
      success/interest/error/validation, 2× axe WCAG2 A/AA).
- [x] `pnpm install --frozen-lockfile` clean (CI parity).

## Remaining manual steps (need credentials / account access)

### Formspree
- [ ] Create form, capture **form id** and set recipient → `enquiries@tdadvisory.co`.
- [ ] Provide id for `VITE_FORMSPREE_FORM_ID` (local `.env.local` + Vercel env).

### Bootstrap order (do this first)
1. [ ] `git push -u origin migrate/vercel-static`.
2. [ ] Open PR; confirm **CI** is green.
3. [ ] Merge PR → `main` (first merge; no protection yet). `main` now has the static build + ci.yml.
4. [ ] Settings → Branches → protect `main`, require the **CI** check (for future changes).

> Why merge before importing to Vercel: the new static build must be on `main` so
> Vercel's first **production** deploy succeeds (old `main` fails without PORT/BASE_PATH).

### Vercel (Phase 5)
- [ ] Create Hobby account → **Add New… → Project → Import** `td-advisory-website`.
- [ ] **Root Directory = `artifacts/site`** (click *Edit* on import; framework auto-detects Vite).
      Build/output come from `artifacts/site/vercel.json` (`pnpm run build` → `dist/public`).
- [ ] If the build can't resolve workspace deps, enable
      **"Include files outside the Root Directory in the Build Step."**
- [ ] Add env var **`VITE_FORMSPREE_FORM_ID`** (Production + Preview) — placeholder ok until
      the Formspree form exists; redeploy after setting the real id.
- [ ] Deploy; share the `*.vercel.app` URL → verify on Chrome (Claude can drive this).

### GitHub
- [ ] Open PR from `migrate/vercel-static`; confirm CI green.
- [ ] Settings → Branches → protect `main`, require the **CI** check.

### Domain (Phase 6 — Namecheap)  ← discovered state (2026-06-25)
Vercel project `tdadvisory-co` (Hobby) already exists, repo connected, `tdadvisory.co`
assigned to Production but **Invalid Configuration** — because DNS still points to Replit.
- Current apex/www → `34.111.179.208` (Replit/GCP, returns 404 — dead Replit app).
- **Email is on Zoho:** MX `mx.zoho.com`, `mx2.zoho.com`, `mx3.zoho.com` — DO NOT TOUCH
  these or any Zoho SPF/DKIM TXT records.
- **Vercel wants:** `A @ → 216.198.79.1` (current recommended; old `76.76.21.21` also works).

Steps (only AFTER new build is live on `main` + verified on the *.vercel.app URL):
- [ ] Namecheap Advanced DNS: change `A @` from `34.111.179.208` → **`216.198.79.1`**.
- [ ] For `www`: add `www.tdadvisory.co` in Vercel (redirect to apex) + `CNAME www →
      cname.vercel-dns.com`, replacing the Replit value.
- [ ] **Leave Zoho MX / SPF / DKIM TXT untouched.**
- [ ] In Vercel Domains, click **Refresh**; wait for "Valid Configuration" + SSL.
- [ ] Verify `https://tdadvisory.co` serves the new build on Chrome; `www` redirects.

## Blockers / open questions

- Formspree form id required before the contact form works in any deployed environment.
- Confirm whether `@tdadvisory.co` still receives mail (it almost certainly does — preserve MX).

## Decision log

- Contact form → Formspree (drop Express/Resend backend). Site becomes pure static.
- Keep monorepo; remove dead code only after go-live (Phase 7).
- DNS via Namecheap A/CNAME (not Vercel nameservers) to protect email.
- Node 22 chosen over Replit's 24 for Vercel/CI compatibility.
- axe `color-contrast` excluded (design-owned; out of scope for migration).
