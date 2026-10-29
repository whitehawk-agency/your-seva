# Your Seva

Marketing and fundraising site for **Your Seva** ([yourseva.org](https://yourseva.org)) — a UK
registered charity (**1162477**, company **09320448**) rooted in the spirit of *seva* (selfless
service) and the teachings of Guru Nanak Dev Ji, supporting neglected, abandoned and
poverty-stricken families in Panjab through food, home rebuilding, elder and winter care, and
education.

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
| Fonts | Source Serif 4 (display) + Inter (body/UI) through `next/font` |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run build:static # fully static export to ./out
npm run lint       # eslint (next/core-web-vitals + next/typescript)
npm run typecheck  # tsc --noEmit
npm run contrast   # WCAG audit against a running build (see Accessibility)
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

Tokens live in `src/app/globals.css` under `:root` and reach Tailwind through
`@theme inline`. The ramps are Tailwind's own defaults — `orange`, `stone`, `slate`, `emerald` —
so there are no custom colour definitions to drift out of sync.

| Role | Value |
| --- | --- |
| Action / brand | `orange-700` `#c2410c` fill, white label (`orange-600` as the `brand` variant) |
| Background | `stone-50` `#fafaf9` and pure white |
| Dark neutral | `slate-900` `#0f172a` |
| Verification accent | `emerald-700` / `emerald-800` |
| Muted text | `slate-600` — the lightest grey clearing 7:1 on `stone-50` |

Display type is a **serif** (`Source Serif 4`) set with the `headline` utility; UI and body copy
are Inter. Section labels use the `section-label` utility — uppercase, `0.22em` tracking,
`orange-800`.

### Accessibility

`npm run contrast` walks all twelve pages, resolves every text node's true foreground and
background (compositing translucency and `oklch()` up the tree) and fails the build if anything
misses its target.

- **All body, heading and UI text meets WCAG AAA** — 7:1, or 4.5:1 where the text is large.
- **Brand-coloured fills meet AA, not AAA.** White on `orange-700` is 5.22:1. No vivid orange can
  reach 7:1 against white, so this is a deliberate, documented trade: the CTA keeps the brand, and
  the audit holds anything tagged `data-contrast="brand"` to AA while everything else must hit AAA.
  If strict AAA matters more than the brand hue, switch the `cta` variant to `orange-900`.
- Focus indicators are 4.9:1 and 2px with an offset; input boundaries are 4.76:1 (1.4.11 wants 3:1).
- No horizontal scrolling at 320px, 375px or 640px (= 200% zoom of a 1280px window).
- `prefers-reduced-motion` is honoured by every animation — `Reveal` and `Counter` render
  statically and Framer transitions collapse to zero duration.
- Skip link, semantic landmarks, one `<h1>` per page, no heading-level skips, `aria-checked` on
  every custom radio control, and the nav dropdowns are keyboard and `aria-expanded` driven.

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

## Content provenance

`src/lib/content.ts` is the single source of copy and figures. Every entry carries a marker:

- **`[VERIFIED]`** — from the Charity Commission register entry for YOUR SEVA (1162477), or from the
  charity's own published pages. Charity and company numbers, trustee names and appointment dates,
  the filed income and expenditure for the year ending 30 November 2024, the programme descriptions
  and the £15 Ration Panee unit cost all sit here.
- **`[CONFIRM]`** — gathered second-hand and **not** read from the live site. The site could not be
  reached from the build environment (its network policy blocks outbound hosts), so the phone
  number, email address and registered office came from search results and older filings. Check each
  against yourseva.org before launch.
- **`[TODO]`** — genuinely unknown. Cumulative totals (families supported, homes rebuilt, children
  sponsored), the Gift Aid / private-donor split of running costs, trustee bios, and the policy
  documents. The charity holds these; we do not.

Nothing on the site states a figure we could not evidence. Where a number was unavailable the design
uses a real unit cost or a process fact instead of an invented total.

## ⚠️ Before this goes live

This build is design-complete, not launch-complete. The following are **deliberately unfinished**:

1. **Verify the `[CONFIRM]` contact details.** Phone, email and registered office in
   `src/lib/content.ts` could not be read from the live site. One source gives `info@yourseva.org`,
   another `yoursevaorg@gmail.com`; the registered office comes from the 2020 accounts.
2. **Fill the `[TODO]` figures.** Cumulative impact totals would do more for the site than anything
   else on this list — the counters and programme stat rows are built to take them.
3. **There is no photography.** Every image slot is an art-directed placeholder with a note
   describing the shot that belongs there. The charity's own field photography (Instagram
   [@yoursevaorg](https://instagram.com/yoursevaorg)) is the right source — do not substitute stock
   or search-result images of people, which would misrepresent who the charity serves and carry
   licensing risk.
4. **Impact stories are programme-level, not personal.** We deliberately did not invent named
   families or quotes. Replace them with real accounts once the charity supplies them, each with
   written consent.
5. **No payment provider is connected.** `components/sections/donate-form.tsx` validates and
   summarises the gift, then stops at a confirmation state. Wire it to Stripe Checkout (cards /
   one-off) or GoCardless (UK Direct Debit) via a route handler. The charity currently also receives
   gifts through JustGiving and TotalGiving — those may be the quickest route to live.
6. **Forms do not send.** Contact and newsletter forms validate and simulate a submit. Point them at
   route handlers.
7. **`/privacy` and `/terms` are drafts** and say so on the page. They need review against UK GDPR,
   the Data Protection Act 2018 and PECR, and trustee sign-off.
8. **The design references charity:water.** The supplied mockup carried charity:water's own
   marketing copy verbatim — the "696 million people lack basic access to clean water" statistic,
   the "open the door to education, income, dignity, and health" line and their 100% paragraph.
   Those are charity:water's words about charity:water's cause, so the layout and UX patterns have
   been matched while the copy has been replaced with Your Seva's own facts (the £15 Ration Panee
   unit cost in place of the water statistic). Do not reinstate the original text.
9. **Confirm the 100% donation policy wording** with the trustees. The charity states it on its
   social profiles; the site's copy explains it as a funding structure, which the accounts should
   support.

Analytics, cookie consent and a CMS are not included — add them according to the privacy policy you
publish.
