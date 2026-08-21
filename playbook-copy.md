# Startup Playbook — copy fill-in sheet

Fill in every `→` line. Everything here is a **draft**; nothing is live until it's
merged from `feat/startup-playbook`. Word counts are guidance, not hard limits —
they're the lengths the layout was designed around.

When this is filled in, it gets transferred into `artifacts/site/src/content/startup-playbook.ts`.

Status: 🔲 not started · 🟡 in progress · ✅ ready to transfer → **🔲**

---

## 0. Nestuge URLs (blocking — nothing can go live without these)

UTM params are appended automatically; just paste the plain product URLs.

- Tier 1 URL →
- Tier 2 URL →
- Tier 3 URL →

Is there a single storefront URL too (e.g. `nestuge.com/<handle>`)? →

---

## 1. Hero

- Eyebrow (2–4 words, uppercase, e.g. "A TD ADVISORY GUIDE") →
- Headline (6–10 words — the promise, not the product name) →
- Subhead (20–35 words — who it's for and what changes after reading) →
- Price anchor line (e.g. "From ₦45,000") →
- Primary CTA label (2–4 words, e.g. "Get the Playbook") →

Cover art text (rendered as the CSS placeholder cover):
- Cover title →
- Cover subtitle (e.g. "OPERATIONS · QUALITY · PEOPLE") →

---

## 2. Who it's for

- Section heading (4–8 words) →
- Intro line (optional, 15–25 words) →

3–4 pain points. Each is a short label plus one sentence.

| # | Label (2–5 words) | Description (15–25 words) |
|---|---|---|
| 1 | → | → |
| 2 | → | → |
| 3 | → | → |
| 4 | → | → |

---

## 3. What's inside

- Section heading (4–8 words) →
- Intro line (optional, 15–25 words) →
- Format/length line (e.g. "120 pages · PDF + editable templates") →

Chapters / modules — add or remove rows freely.

| # | Chapter title (3–8 words) | One-line summary (12–20 words) |
|---|---|---|
| 1 | → | → |
| 2 | → | → |
| 3 | → | → |
| 4 | → | → |
| 5 | → | → |
| 6 | → | → |

---

## 4. About TD Advisory

This is the credibility section standing in for testimonials.

- Section heading (3–6 words) →
- Bio (50–80 words — who wrote it, why they're qualified, concrete track record) →
- Optional credibility stats (up to 3):

| Figure | Label |
|---|---|
| → | → |
| → | → |
| → | → |

---

## 5. Pricing — 3 tiers

Middle tier is the highlighted one. Feature lists read best cumulatively
("Everything in Starter, plus…"), which is what the Mobbin references all do.

### Tier 1
- Name (1–3 words) →
- Price (display string incl. currency symbol, e.g. `₦45,000`) →
- Blurb (10–18 words — who this tier is for) →
- CTA label →
- Features (3–6 bullets):
  - →
  - →
  - →

### Tier 2 — ⭐ HIGHLIGHTED
- Name (1–3 words) →
- Price →
- Blurb (10–18 words) →
- Badge label (default: "Most popular") →
- CTA label →
- Features (3–6 bullets, ideally opening with "Everything in <Tier 1>, plus:"):
  - →
  - →
  - →

### Tier 3
- Name (1–3 words) →
- Price →
- Blurb (10–18 words) →
- CTA label →
- Features (3–6 bullets):
  - →
  - →
  - →

Trust line under the CTAs (default: "Secure checkout and delivery by Nestuge") →

---

## 6. FAQ

4–6 question/answer pairs. These four are the ones digital-product buyers
actually look for — keep them unless you have a reason not to.

| # | Question | Answer (25–50 words) |
|---|---|---|
| 1 | What format is it in? | → |
| 2 | How do I receive it after paying? | → |
| 3 | Can I get a refund? *(must match what Nestuge actually enforces)* | → |
| 4 | Do I need a Nestuge account to buy? | → |
| 5 | → | → |
| 6 | → | → |

---

## 7. Final CTA band

- Heading (5–10 words) →
- Supporting line (15–25 words) →
- CTA label →

---

## 8. Home page teaser band

The contained band sitting between `Services` and `Clients` on `/`.

- Eyebrow (1–3 words, e.g. "NEW") →
- Heading (5–9 words) →
- Supporting line (18–30 words) →
- Link label (e.g. "Explore the Playbook →") →

---

## 9. Page metadata (baked into the static HTML — this is what WhatsApp/LinkedIn show)

- `<title>` (50–60 chars) →
- Meta description (140–160 chars) →
- `og:title` (defaults to `<title>` if blank) →
- `og:description` (defaults to meta description if blank) →
