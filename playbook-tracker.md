# Playbook Tracker — Startup Playbook sales page

Live working document for the `/startup-playbook` promotional sales page.
The Replit → Vercel migration record lives in [`dev-tracker.md`](./dev-tracker.md) and is closed.

**Goal:** a standalone sales page on `tdadvisory.co` that promotes the *Startup Playbook*
and hands buyers off to **Nestuge** (hosted product pages, checkout, payment, file delivery).
TD Advisory never handles payment or fulfilment.

**Branch:** `feat/startup-playbook` — nothing merges to `main` until final copy + Nestuge URLs land.

## Status by phase

| Phase | Status | Notes |
|---|---|---|
| 0. Interview + spec | ✅ Done | 22 decisions agreed. See decision log below. |
| 1. Tracker + copy template | ✅ Done | This file + [`playbook-copy.md`](./playbook-copy.md). |
| 2. Real copy supplied | ✅ Done | Source archived at [`playbook-copy-source.md`](./playbook-copy-source.md); transferred into `src/content/playbook.ts`. |
| 3. Component extraction | ✅ Done | `components/motion.tsx`, `components/navbar.tsx`, `components/footer.tsx`, `components/section-nav.ts`. `App.tsx` 713 → 642 lines. |
| 4. Route-aware nav | ✅ Done | Verified: `/playbook` → "Services" lands on `/#services` in view. Home behaviour unchanged. |
| 5. Content module | ✅ Done | `src/content/playbook.ts` — all copy, tiers, UTM helper. |
| 6. Page build | ✅ Done | `src/pages/playbook.tsx`, 9 sections. |
| 7. Home teaser band | ✅ Done | Between `Services` and `Clients`. |
| 8. MPA meta + redirects | ✅ Done | Build emits `dist/public/playbook/index.html` with own OG tags; `vercel.json` rewrite + 2 redirects. |
| 9. Tests | ✅ Done | 7 Vitest + 15 Playwright (4 new + axe on `/playbook`). All green, no regressions. |
| 10. Launch | ⬜ **Blocked** | Waiting on the 3 real Nestuge URLs. Nothing merged to `main`. |
| 11. Footer legal links | ✅ Done | `/privacy` + `/terms` routes, pages, MPA entries, rewrites and tests. Real Privacy Policy + Terms and Conditions supplied and transferred verbatim; both dated 21 Aug 2026 and indexable. |

## Page structure

Canonical route: **`/playbook`**. `/startup-operations-playbook` and `/startup-playbook` 301 → `/playbook`.

```
/playbook
  1  Hero            headline, intro, summary, CTA / CSS cover art + shifts strip
  2  The Problem     symptoms list on forest green
  3  What's Inside   8 modules, 2-up grid
  4  Built To Be Used   toolkit contents (12 items)
  5  Who Is This For    4 audience cards + "no ops background needed"
  6  Outcomes        9 outcomes + 4 deliverables
  7  Pricing         3 tiers, middle highlighted  (#pricing)
  8  About TD Advisory
  9  Final CTA       + FAQ accordion (6 Q&A)
```

Home page gains a contained teaser band between `Services` and `Clients`.

## Decision log

| # | Decision | Rationale |
|---|---|---|
| 1 | Dedicated route `/startup-playbook` **+** home teaser band | Shareable URL for campaigns, plus passive discovery. `vercel.json` already SPA-rewrites, so no infra change. |
| 2 | New page file, minimal extraction | Only `FadeIn`, `RevealText`, `Navbar`, `Footer` move out of the 713-line `App.tsx`. Avoids a large refactor over working production code. |
| 3 | Route-aware shared nav | Home behaviour byte-identical (existing E2E keeps passing); off-home nav targets `/#section`. |
| 4 | Multiple tiers on Nestuge | User's offer shape. |
| 5 | 3 tiers, data-driven array, middle highlighted | Most-validated pricing layout; anchors buyers to the middle. Copy changes never touch JSX. |
| 6 | Prices shown on-page, single currency | Hiding price costs more conversion than it protects. `price` is a preformatted display string, so currency is a content choice. |
| 7 | New tab + `rel="noopener noreferrer"` + UTM | Sales page survives an abandoned checkout; UTM attributes sales per tier. Real `<a>`, not a button, for a11y. |
| 8 | Feature branch until content is final | No draft copy publicly reachable. Review via local dev or Vercel preview (which needs login — Standard Protection). |
| 9 | Full sales page, **testimonials omitted** | New product has no real proof yet; an empty or invented proof block is worse than none. Additive to add later. |
| 10 | CSS/SVG typographic cover placeholder | No asset dependency, crisp at any size, zero KB, swappable. |
| 11 | Static per-route HTML via Vite MPA | WhatsApp/LinkedIn/X crawlers don't run JS. Vercel serves a real file before applying the SPA rewrite, so OG previews work. |
| 12 | Desktop Playwright only — **no Android emulator** | Supersedes the "test on the Android emulator" line in the original brief. `Pixel_10`/`Pixel_Tablet` AVDs and Maestro exist locally, but GitHub Actions can't boot an emulator, so CI would not gate it. **Consequence: the mobile experience has no automated coverage** despite mobile being the likely majority of traffic. |
| 13 | Minimal smoke tests **+ axe** on the new route | User chose minimal scope; axe added back to satisfy `CLAUDE.md`. **Consequence: a broken Nestuge URL or a dropped UTM param would not fail the suite.** |
| 14 | Teaser band after `Services`, before `Clients` | Natural beat after "what we do"; real attention without fronting a product pitch over the advisory positioning. |
| 15 | Add `Playbook` nav item + contextual primary button | Nav button becomes "Get the Playbook" on the sales page so the most prominent control sells the product. |
| 16 | FAQ + "Secure checkout and delivery by Nestuge" trust line | Signals the third-party handoff, which reduces drop-off. Dead footer legal links tracked separately. |
| 17 | New `playbook-tracker.md` | Keeps the closed migration record intact. |
| 18 | Build now with placeholders + `playbook-copy.md` template | Nothing blocks on copy; enumerated slots mean none get forgotten. |
| 19 | Supplied copy is authoritative; consolidated 12 blocks → 9 sections | "Introducing" folded into Hero; "What You Can Begin To Build" + "What You Get" merged (they overlap). Every distinct idea kept. |
| 20 | Canonical `/playbook`, longer slugs 301 in | Short link is what actually gets shared and said aloud; URL keywords carry little SEO weight. |
| 21 | Pricing cards only — no comparison matrix | The matrix held no information the cumulative card lists don't; avoids duplicated content and a 4-column table on a 375px phone. |
| 23 | Product renamed to **The Scalable Startup Operating System**; "Playbook" kept as the core component | The cover art is authoritative. The OS is the product; it's delivered as the Playbook (8-module guide) + Implementation Toolkit + optional advisory — which is exactly what the three tiers sell, so tier names and the cumulative framing survive intact. |
| 24 | Footer legal links → real `/privacy` + `/terms` routes | User chose real routes over external hosting or removal: a paid product handoff needs policy URLs on our own domain. Text is a legal decision, so the pages ship as an honest scaffold that says so, rather than inventing binding wording or leaving `href="#"`. Shipped first as structure with placeholder text and `noindex`; real copy landed the same day and both were lifted. |
| 25 | Supplied legal copy transferred **verbatim**, product-name mismatch left in place | The text is binding and TD Advisory-approved. Correcting a product name inside it is a legal edit, not a typo fix, so it stays as written and is tracked as an open item instead. Ordering, numbering and British spellings are the client's. |
| 26 | Clause anchors + `useHashScroll` on legal pages | Legal documents get cited and linked by clause. The browser's native hash scroll fires before React renders, so `/terms#refund-policy` landed nowhere until the existing hook was reused here. Caught by E2E, not by review. |
| 27 | `CHECKOUT_CONSENT` exported but never rendered | The supplied consent line is first-person ("I confirm that I have read…"), so it is checkout copy for Nestuge, where payment happens. Kept in the repo so the agreed wording has one home. |
| 22 | Explicit `/playbook` rewrite + preview middleware | `vite preview` answered `/playbook` with the SPA fallback, so E2E was exercising a routing model production doesn't use. Both sides now match. |

## Corrections applied to the supplied copy

1. **Modules 03/04 had swapped descriptions** — `03 People` carried the finance text and
   `04 Finance` carried the people text. The bodies were in the right order; the labels
   were swapped. Relabelled to `03 Finance / 04 People`, which also resolves (2).
2. **Module order contradicted itself** — Section 4 read `…People, Finance…` while the FAQ
   and Tier 1 list read `…Finance, People…`. Standardised on `Finance, People`.
3. **Tier CTA labels differed** between the prose and the comparison table. Used the shorter
   table labels ("Get the Toolkit", "Get Expert Guidance") — the long forms wrap badly
   inside a pricing card on mobile.

## Deliberate deviations from the agreed spec

- **Mobile tier order.** Decision 5's sketch said "highlighted tier first" on mobile. Not
  implemented: the cumulative feature framing chosen in decision 21 ("Everything in The
  Playbook, plus:") depends on ascending reading order. Reordering would make the first
  mobile card reference a tier the reader hasn't seen. Tiers stack in price order instead.
  Say the word to switch it and drop the cumulative framing.

## Open / waiting on user

- [x] Final copy — supplied, archived at [`playbook-copy-source.md`](./playbook-copy-source.md)
- [ ] 🚧 **3 real Nestuge product URLs** — the only launch blocker. Placeholders live in
      `src/content/playbook.ts` → `NESTUGE_URLS`.
- [ ] Confirm the refund-policy FAQ answer matches what Nestuge actually enforces
- [x] Real cover image supplied — `src/assets/playbook-cover.webp` (1.4 MB PNG → 43 KB WebP)
- [x] Product name resolved — the artwork is authoritative. See decision 23.
- [x] Real Privacy Policy and Terms and Conditions text — supplied and transferred verbatim
      into `src/content/legal.ts`. Both dated 21 Aug 2026; `noindex` lifted.
- [ ] 🚧 **Terms name the wrong product** — the supplied Terms say "The Startup Operations
      Playbook"; the site sells "The Scalable Startup Operating System" (decision 23). Tier
      names differ too ("Playbook Only" / "Playbook + Toolkit + Implementation Session" vs
      "The Playbook" / "Implementation Partner Package"). Prices agree. Left as supplied by
      decision 25 — TD Advisory revises the wording, then bump `lastUpdated`.
- [ ] Give Nestuge the checkout consent line — `src/content/legal.ts` → `CHECKOUT_CONSENT`.
      It is first-person buyer copy, so it belongs at checkout, not on our pages.
- [ ] Optional: a playbook-specific `og:image` (1200×630) — currently reuses `/opengraph.jpg`

## Naming model

- **Product:** The Scalable Startup Operating System
- **Delivered as:** The Playbook (8-module guide) → + Implementation Toolkit → + advisory session
- "the Playbook" in copy always means the guide component, never the whole product.
- Route stays `/playbook` — the entry tier is still the Playbook, and the slug is short and
  shareable. `/startup-operations-playbook` and `/startup-playbook` still 301 in.

## Known gaps (accepted, not oversights)

- No mobile automated test coverage (decision 12).
- No test asserting Nestuge hrefs / UTM params (decision 13).
- No test asserting the MPA build emits `playbook/index.html` (decision 13) — if
  `vite.config.ts` regresses, OG previews break silently with tests green.
- Footer legal links resolve to `/privacy` and `/terms`, carrying the real supplied
  documents (phase 11). The Terms still name the old product — see "Open / waiting on user".
- No test asserts the *wording* of either legal document, only its structure, dates and the
  refund-window agreement with the FAQ. Wording is TD Advisory's to own, not CI's.
- The home page `index.html` has **no** og:/twitter: tags at all (pre-existing; `public/opengraph.jpg`
  sits unused). Only `/playbook` has them. Out of scope here, worth a follow-up.
- Home-page sections have no `scroll-mt`, so nav clicks land ~80px under the fixed navbar.
  Pre-existing; `/playbook` sections were given `scroll-mt-20`.
- Prices are duplicated between Nestuge and `src/content/playbook.ts`. **Change both together.**
