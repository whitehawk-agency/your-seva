# YourSeva

Marketing and fundraising site for **YourSeva** ([yourseva.org](https://yourseva.org)) — a UK
non-profit rooted in the spirit of *seva* (selfless service) and the teachings of Guru Nanak Dev Ji,
supporting vulnerable people through poverty relief, home rebuilding, senior care and education in
Panjab and beyond.

The design is photo-first and minimal, built around one proposition: **100% of public donations go
directly to field projects**, with running costs covered separately by Gift Aid and private donors.

---

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router, React 19, TypeScript, strict) |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens, no `tailwind.config`) |
| Components | shadcn/ui conventions on Radix primitives (`src/components/ui`) |
| Icons | `lucide-react` (brand glyphs hand-inlined in `shared/social-icons.tsx`) |
| Motion | Framer Motion — scroll reveals, counters, layout-animated toggles |
| Forms | React Hook Form + Zod via `@hookform/resolvers` |
| Fonts | Plus Jakarta Sans (display) + Inter (body) through `next/font` |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # eslint (next/core-web-vitals + next/typescript)
npm run typecheck  # tsc --noEmit
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Hero + quick-donate, 100% model, programmes, impact counters, ethos, stories, transparency, FAQ |
| `/our-work` | The four programmes in depth, outcomes, where we work |
| `/100-percent-model` | How the money flows, £25 comparison, vetting process, full FAQ |
| `/impact-stories` | Filterable story index |
| `/impact-stories/[slug]` | Story long-read with cost breakdown sidebar (statically generated) |
| `/about` | Story, values, timeline, team |
| `/donate` | Full giving form — frequency, amount, designation, Gift Aid, summary |
| `/get-involved` | Fundraise, volunteer, partner, fundraising ideas |
| `/transparency` | Funding split, reports and accounts, governance, vetting |
| `/contact` | Routed contact form and direct lines |
| `/privacy`, `/terms` | Policy pages (draft — see below) |
| `/sitemap.xml`, `/robots.txt`, `/icon.svg`, `/opengraph-image` | Generated metadata assets |

## Project structure

```
src/
├── app/                      # App Router pages, metadata routes, global CSS
├── components/
│   ├── layout/               # Header (glass, sticky), mobile nav, footer
│   ├── sections/             # Page-level composable sections
│   ├── shared/               # Reveal, Counter, MediaFrame, Logo, Prose, forms
│   └── ui/                   # shadcn-style primitives (Button, Input, Accordion…)
└── lib/
    ├── content.ts            # ALL copy, programmes, stories, metrics, FAQs
    └── utils.ts              # cn(), currency and number formatting
```

Content is deliberately centralised in `src/lib/content.ts` so copy, figures and impact statements
can be edited without touching components — and later swapped for a CMS with one adapter.

## Design system

Tokens live in `src/app/globals.css` under `:root` and are exposed to Tailwind through
`@theme inline`. The palette is warm rather than neutral: **ink** (near-black through to sand) for
structure, **saffron** as the single brand accent, with **pine** and **clay** as supporting fields.

Utilities worth knowing: `container-page` (page gutter), `headline` (tight display type),
`eyebrow` (section label), `grain-overlay` (film grain over flat colour).

Accessibility: visible focus rings site-wide, a skip link, semantic landmarks, `aria-checked` on
all custom radio controls, and `prefers-reduced-motion` honoured by every animation — `Reveal` and
`Counter` render statically and Framer transitions collapse to zero duration.

## Photography

There is no photography in this repository. Every image slot renders through
`components/shared/media-frame.tsx`, which draws an art-directed duotone placeholder plus a short
note describing the shot that belongs there. Pass a `src` and the placeholder is replaced by a
`next/image` fill automatically:

```tsx
<MediaFrame src="/media/tarn-taran-rebuild.jpg" alt="…" className="aspect-[4/3]" />
```

Remove the `note` prop once real photography is in place, and add your image host to
`next.config.ts` → `images.remotePatterns`.

---

## ⚠️ Before this goes live

This build is design-complete, not launch-complete. The following are **deliberately unfinished**:

1. **All content is placeholder.** Every figure, name, quote, date, address, phone number and
   registration number in `src/lib/content.ts` is sample copy written to shape the design. Search
   the file for `PLACEHOLDER` and replace each with trustee-verified data. In particular:
   - `site.charityNumber` is `TBC`, and the phone number and postal address are invented.
   - `impactStats`, `programmes[].outcomes` and `fundingBreakdown` are illustrative numbers.
   - `stories` are written in the style of real cases but are **not** real people. Publishing them
     as-is would misrepresent the organisation.
   - `team` entries read "Name to confirm".
2. **No payment provider is connected.** `components/sections/donate-form.tsx` validates and
   summarises the gift, then stops at a confirmation state. Wire the submit handler to Stripe
   Checkout (cards / one-off) or GoCardless (UK Direct Debit) from a route handler and redirect to a
   thank-you route.
3. **Forms do not send.** The contact and newsletter forms validate client-side and simulate a
   submit. Point them at route handlers that forward to the team inbox, CRM and email platform.
4. **`/privacy` and `/terms` are drafts** and are marked as such on the page. They need review
   against UK GDPR, the Data Protection Act 2018 and PECR, and sign-off by the trustees.
5. **Report links in `reports` point at `#`.** Replace with the filed accounts and policy PDFs.
6. **Impact statements must be backed by unit costs.** "£25/mo provides educational supplies for a
   child for a full year" is a factual claim about the programme and should be reconciled against
   the project ledger before publication.

Analytics, cookie consent and a CMS are not included — add them according to the privacy policy you
publish.
