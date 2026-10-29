import {
  BookOpen,
  Building2,
  CalendarDays,
  GraduationCap,
  HandHeart,
  Hammer,
  HeartHandshake,
  Home,
  Receipt,
  ScrollText,
  ShieldCheck,
  Soup,
  Sprout,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { MediaTone } from "@/components/shared/media-frame";

/* ------------------------------------------------------------------------- *
 *  CONTENT SOURCES & PROVENANCE
 *
 *  Items marked [VERIFIED] come from the Charity Commission register entry
 *  for YOUR SEVA (charity 1162477) or from summaries of the charity's own
 *  pages at yourseva.org.
 *
 *  Items marked [CONFIRM] were gathered second-hand and could not be read
 *  from the live site directly — check each against yourseva.org before
 *  launch.
 *
 *  Items marked [TODO] are still placeholders: the charity holds the real
 *  figures and we do not. Search this file for "TODO" to find them all.
 * ------------------------------------------------------------------------- */

export const site = {
  name: "Your Seva",
  legalName: "YOUR SEVA",
  domain: "yourseva.org",
  url: "https://yourseva.org",
  tagline: "100% of your donation changes lives directly.",
  description:
    "Your Seva is a UK charity supporting neglected, abandoned and poverty-stricken families in Panjab — through food, home rebuilding, care for elders and education. 100% of public donations go directly to projects.",
  /** [CONFIRM] Listed on the charity's homepage; a JustGiving listing shows yoursevaorg@gmail.com instead. */
  email: "info@yourseva.org",
  donationsEmail: "info@yourseva.org",
  /** [CONFIRM] Listed on the charity's homepage; the page may be out of date. */
  phone: "07718 853 923",
  /** [CONFIRM] Registered office as given in the 2020 accounts — verify it is still current. */
  address: {
    line1: "Your Seva",
    line2: "c/o Tax Assist, 369 Hagley Road West",
    city: "Birmingham",
    postcode: "B32 2AL",
    country: "United Kingdom",
  },
  /** [VERIFIED] Charity Commission register. */
  charityNumber: "1162477",
  /** [VERIFIED] Company limited by guarantee, England & Wales, incorporated November 2014. */
  companyNumber: "09320448",
  social: {
    instagram: "https://instagram.com/yoursevaorg",
    x: "https://x.com/YourSevaOrg",
  },
} as const;

/** [VERIFIED] Latest figures on the register, year ending 30 November 2024. */
export const latestAccounts = {
  financialYearEnd: "30 November 2024",
  income: 294781,
  expenditure: 163362,
} as const;

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navLinks: NavLink[] = [
  {
    label: "Take Action",
    href: "/get-involved",
    children: [
      { label: "Donate", href: "/donate", description: "Give once or monthly" },
      { label: "Fundraise for us", href: "/get-involved#fundraise", description: "Packs, pages and ideas" },
      { label: "Volunteer a skill", href: "/get-involved#volunteer", description: "In the UK and in Panjab" },
      { label: "Partner or sponsor", href: "/get-involved#partner", description: "Companies and gurdwaras" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our story", href: "/about", description: "Serving Panjab since 2014" },
      { label: "Our work", href: "/our-work", description: "The four programmes" },
      { label: "Impact stories", href: "/impact-stories", description: "How the work actually runs" },
      { label: "Reports & accounts", href: "/transparency", description: "Filed, in full" },
    ],
  },
  { label: "Why Your Seva?", href: "/100-percent-model" },
];

export const footerNav = [
  {
    title: "Our work",
    links: [
      { label: "All programmes", href: "/our-work" },
      { label: "Poverty relief", href: "/our-work#poverty-relief" },
      { label: "Housing & rebuilding", href: "/our-work#housing" },
      { label: "Senior care", href: "/our-work#senior-care" },
      { label: "Education", href: "/our-work#education" },
    ],
  },
  {
    title: "Transparency",
    links: [
      { label: "The 100% model", href: "/100-percent-model" },
      { label: "Where your money goes", href: "/100-percent-model#flow" },
      { label: "Reports & accounts", href: "/transparency" },
      { label: "Governance", href: "/transparency#governance" },
      { label: "How we vet projects", href: "/100-percent-model#vetting" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Give monthly", href: "/donate?frequency=monthly" },
      { label: "Fundraise for us", href: "/get-involved#fundraise" },
      { label: "Volunteer", href: "/get-involved#volunteer" },
      { label: "Partner with us", href: "/get-involved#partner" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Impact stories", href: "/impact-stories" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

/* --------------------------------- Giving -------------------------------- */

export type Frequency = "monthly" | "once";

export type DonationTier = {
  amount: number;
  /** Short impact line shown in the quick-donate box. */
  impact: string;
  /** Longer line used on the donate page. */
  detail: string;
};

/**
 * [VERIFIED] The £15 Ration Panee unit cost is published by the charity.
 * [TODO] The other impact lines need unit costs confirmed by the trustees
 * before publication — they are factual claims, not copy.
 */
export const donationTiers: Record<Frequency, DonationTier[]> = {
  monthly: [
    {
      amount: 15,
      impact: "Feeds one family for a month.",
      detail:
        "£15 a month is the published Ration Panee cost: a full monthly package of food and household essentials for one family with no income of its own.",
    },
    {
      amount: 30,
      impact: "Feeds two families, every month.",
      detail: "£30 a month covers two households on the Ration Panee list — the programme's whole unit cost, doubled.",
    },
    {
      amount: 50,
      impact: "Keeps food going and winter packs ready.",
      detail:
        "£50 a month covers three families' monthly rations with enough left to help stock winter aid packs — warm clothing and blankets — before the cold arrives.",
    },
    {
      amount: 100,
      impact: "Feeds families and funds home repair.",
      detail:
        "£100 a month feeds several households and builds a steady fund for home repairs: walls, roofs, doors and utility connections, paid directly to local workmen.",
    },
  ],
  once: [
    {
      amount: 15,
      impact: "Sends one family a month of food.",
      detail: "£15 is one complete Ration Panee package: food and household essentials for a family for a month.",
    },
    {
      amount: 45,
      impact: "Feeds a family for three months.",
      detail: "£45 covers a quarter of the year for one household on the Ration Panee list.",
    },
    {
      amount: 100,
      impact: "Contributes to a home repair.",
      detail:
        "£100 goes towards repairing a home that is no longer safe — walls, roof, doors and utility connections, paid directly to local workmen and released against receipts.",
    },
    {
      amount: 180,
      impact: "Feeds one family for a whole year.",
      detail: "£180 is twelve months of Ration Panee for one family — the full year, covered in one gift.",
    },
  ],
};

export const customImpact: Record<Frequency, string> = {
  monthly: "Every pound you give monthly lets our field teams commit to work months in advance.",
  once: "Every pound goes straight to the field. Nothing is taken for admin — not a penny.",
};

/** Mid-tier amount used as the default selection. */
export const defaultAmount = 30;

/* ------------------------------- Programmes ------------------------------ */

export type Programme = {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  tone: MediaTone;
  summary: string;
  body: string;
  outcomes: { label: string; value: string }[];
  activities: string[];
  /** PLACEHOLDER photography brief for this slot. */
  photoNote: string;
};

export const programmes: Programme[] = [
  {
    slug: "ration-panee",
    name: "Ration Panee",
    short: "A month of food, every month",
    icon: Soup,
    tone: "warm",
    summary:
      "A monthly package of food and household essentials delivered to families with no income and no safety net — £15 covers one family for a month.",
    body:
      "Ration Panee is the programme families rely on between everything else. Each month a package of food and household goods reaches households that have no income of their own: elders living alone, widows, families where illness or injury ended the only wage. It is run in partnership with Sant Baba Gurbaksh Singh, and the cost is simple and published — £15 feeds one family for one month.",
    outcomes: [
      { label: "Per family, per month", value: "£15" },
      { label: "Delivery", value: "Monthly" },
      { label: "Delivered with", value: "Local sangat" },
    ],
    activities: [
      "A monthly package of food and household essentials",
      "Delivered in partnership with Sant Baba Gurbaksh Singh",
      "Prioritised for elders, widows and families without income",
      "£15 per family, per month — a published, checkable unit cost",
    ],
    photoNote: "Photo slot — ration package handover, hands and faces, natural light",
  },
  {
    slug: "housing",
    name: "Housing & Rebuilding",
    short: "Safe, dry, dignified homes",
    icon: Home,
    tone: "clay",
    summary:
      "Repairing and rebuilding homes that are no longer safe — walls, roofs, doors, basic furniture and utility connections — paying local workmen directly.",
    body:
      "Harsh weather leaves older people in Panjab living in homes that are damaged, damp and unsafe. We survey the house, cost the work, and rebuild: walls, roof, doors, the basic furniture to live with, and the utility connections to live properly. Workmen are paid directly by us rather than through an intermediary, and the work is checked. On longer rebuilds, funds are released in stages against progress photographs and receipts.",
    outcomes: [
      { label: "Paid to local workmen", value: "Direct" },
      { label: "Released against photos & receipts", value: "Staged" },
      { label: "Walls, roof, doors, utilities", value: "Full" },
    ],
    activities: [
      "Walls, roofing and structural repair",
      "Doors and the basic furniture to live with",
      "Utility connections",
      "Staged payments released against progress photos and receipts",
    ],
    photoNote: "Photo slot — workmen mid-rebuild on a roof, wide frame",
  },
  {
    slug: "elder-winter-care",
    name: "Elder & Winter Care",
    short: "Dignity for Bibi ji and Baba ji",
    icon: HandHeart,
    tone: "pine",
    summary:
      "Winter aid packs of warm clothing and blankets, and ongoing support for elderly people living without family around them.",
    body:
      "Winter in Panjab is hard on anyone in a damaged house, and hardest on elders living alone. Our winter aid packs carry warm clothing and blankets to the households our field team has already assessed, before the cold arrives rather than after. Elders are also among the first priority for Ration Panee and for housing repair — the three programmes are deliberately pointed at the same people.",
    outcomes: [
      { label: "Warm clothing & blankets", value: "Winter packs" },
      { label: "Delivered", value: "Before the cold" },
      { label: "Priority for elders living alone", value: "First" },
    ],
    activities: [
      "Winter aid packs: warm clothing and blankets",
      "Priority referral into Ration Panee",
      "Priority referral for home repair before winter",
      "Needs assessed in person by the Panjab team",
    ],
    photoNote: "Photo slot — winter pack handover to an elder, doorway light",
  },
  {
    slug: "education",
    name: "Education",
    short: "Keeping children in school",
    icon: GraduationCap,
    tone: "ink",
    summary:
      "School fees and learning equipment for single-parent, orphaned and poverty-stricken children — plus a volunteer-run after-school programme.",
    body:
      "Our educational support programme sponsors single-parent, orphaned and poverty-stricken children, covering school fees or the learning equipment they need to keep up. Alongside it runs a volunteer-led after-school programme in Panjab built around kirtan and gatka — somewhere to be, and something to belong to, aimed squarely at keeping young people away from substance use.",
    outcomes: [
      { label: "Fees & learning equipment", value: "Covered" },
      { label: "Kirtan and gatka", value: "After school" },
      { label: "Single-parent & orphaned children", value: "Sponsored" },
    ],
    activities: [
      "School fees paid for sponsored children",
      "Learning equipment and school supplies",
      "A volunteer-run after-school programme",
      "Kirtan and gatka — steering young people away from substance use",
    ],
    photoNote: "Photo slot — after-school session, kirtan or gatka, candid",
  },
];

/* ---------------------------- The 100% model ----------------------------- */

export const trustPillars = [
  {
    icon: HeartHandshake,
    title: "100% Direct Impact",
    body:
      "Every penny of public donation goes to field projects. Salaries, software, audit and card fees are paid from Gift Aid and a small circle of private donors who cover our running costs by design.",
    stat: "100%",
    statLabel: "of public donations reach the field",
  },
  {
    icon: ShieldCheck,
    title: "Vetted Verification",
    body:
      "No grant and no build is approved without a needs assessment carried out in person, at the house, by our Panjab-based team.",
    stat: "4-stage",
    statLabel: "assessment before any payment",
  },
  {
    icon: Receipt,
    title: "Radical Transparency",
    body:
      "Longer projects release funds in stages against progress photographs and receipts, and workmen are paid directly by us rather than through an intermediary.",
    stat: "Staged",
    statLabel: "against photos and receipts",
  },
] as const;

export const moneyFlow = [
  {
    icon: HandHeart,
    title: "You give £15",
    body: "Your donation goes into public donation funds that are spent on field projects, not on running the charity.",
  },
  {
    icon: ShieldCheck,
    title: "It is allocated to an assessed family",
    body: "Our Panjab team has already assessed the household in person, at the house, before your money is assigned to it.",
  },
  {
    icon: Hammer,
    title: "It is spent in Panjab",
    body: "Local suppliers and local workmen, paid directly by us. Longer projects are released in stages against photos and receipts.",
  },
  {
    icon: Receipt,
    title: "Running costs are paid separately",
    body: "Gift Aid and private donors cover the cost of running the charity — so your £15 is never touched.",
  },
] as const;

export const vettingSteps = [
  {
    title: "Referred to the Panjab team",
    body:
      "Families are referred through local sangat, gurdwaras and the households we already support. Nothing moves on a phone call alone.",
  },
  {
    title: "Assessed in person, on the ground",
    body:
      "Our Panjab-based team carries out the needs assessment at the house itself — what is actually needed, what it will cost, and who else is already helping.",
  },
  {
    title: "Costed, and paid to the workmen directly",
    body:
      "For a rebuild we price the work locally and pay the workmen ourselves rather than through an intermediary. The work is checked as it goes.",
  },
  {
    title: "Released in stages, against photos and receipts",
    body:
      "On longer projects funds are released in stages. Each stage is evidenced with progress photographs and receipts before the next is paid.",
  },
] as const;

/* -------------------------------- Metrics -------------------------------- */

/**
 * Only figures we can evidence. [TODO] The charity holds cumulative totals
 * (families supported, homes rebuilt, children sponsored) — add them here and
 * these tiles will carry far more weight than the ones below.
 */
export const impactStats = [
  { value: 100, prefix: "", suffix: "%", label: "To the field", sub: "Our 100% donation policy" },
  {
    value: 15,
    prefix: "£",
    suffix: "",
    label: "Feeds a family for a month",
    sub: "The published Ration Panee unit cost",
  },
  {
    value: 4,
    prefix: "",
    suffix: "",
    label: "Programmes running",
    sub: "Food, housing, elder care, education",
  },
  {
    value: 11,
    prefix: "",
    suffix: " yrs",
    label: "Serving families in Panjab",
    sub: "A registered charity since 2014",
  },
] as const;

/**
 * [TODO] Row 3 — the split of running costs between Gift Aid and private
 * donors — needs the trustees' figures before it can be published.
 */
export const fundingBreakdown = [
  {
    label: "Public donations → field projects",
    value: 100,
    note: "Our 100% donation policy. Restricted to project spend.",
  },
  {
    label: "Spent on charitable activity, year to 30 Nov 2024",
    value: 55,
    note: "£163,362 of £294,781 income. Source: Charity Commission register.",
  },
] as const;

/* ----------------------------- Impact stories ---------------------------- */

export type Story = {
  slug: string;
  title: string;
  name: string;
  location: string;
  programme: string;
  date: string;
  readingTime: string;
  tone: MediaTone;
  icon: LucideIcon;
  excerpt: string;
  quote: { text: string; attribution: string };
  body: string[];
  facts: { label: string; value: string }[];
  photoNote: string;
};

/**
 * Programme-level stories rather than named individuals. We have deliberately
 * NOT written stories about specific families: inventing a beneficiary, a
 * quote or a photograph would misrepresent the charity.
 *
 * [TODO] Replace these with real accounts once the charity supplies them,
 * each with written consent from the family, and swap `quote` for a genuine
 * consented quotation.
 */
export const stories: Story[] = [
  {
    slug: "fifteen-pounds-every-month",
    title: "£15, every month, in the same hands",
    name: "Ration Panee",
    location: "Panjab",
    programme: "Ration Panee",
    date: "2026-01-20",
    readingTime: "3 min read",
    tone: "warm",
    icon: Soup,
    excerpt:
      "One package of food and household essentials, delivered monthly to families with no income at all. The cost is published, and it does not change: £15 a family, a month.",
    quote: {
      text: "The number is small enough to say out loud and check. That is rather the point of publishing it.",
      attribution: "Your Seva — on the Ration Panee unit cost",
    },
    body: [
      "Ration Panee is the quietest thing the charity does and the thing most families depend on. Each month a package of food and household essentials goes to a household with no income of its own — an elder living alone, a widow, a family where illness or injury ended the only wage coming in.",
      "It is delivered in partnership with Sant Baba Gurbaksh Singh, through local sangat who know which doors to knock on. The households are the same ones our Panjab team has already assessed in person for housing repair or winter aid, so the programmes reinforce each other rather than running past one another.",
      "The cost is £15 per family, per month. That figure is published deliberately: it is small enough to be checked, and specific enough that you can work out exactly what your own giving covers. Ten pounds a month does not quite cover a family. Fifteen does.",
      "[TODO] Add the current number of households receiving Ration Panee each month, and the districts covered, once the charity confirms them.",
    ],
    facts: [
      { label: "Per family, per month", value: "£15" },
      { label: "Frequency", value: "Monthly" },
      { label: "Delivered with", value: "Sant Baba Gurbaksh Singh" },
      { label: "Households supported", value: "[TODO]" },
    ],
    photoNote: "Photo slot — ration package handover, hands and faces, natural light",
  },
  {
    slug: "when-the-floods-came",
    title: "When the floods came",
    name: "Flood response, September 2025",
    location: "Panjab",
    programme: "Housing & Rebuilding",
    date: "2025-09-15",
    readingTime: "3 min read",
    tone: "clay",
    icon: Home,
    excerpt:
      "Floods across Panjab in September 2025 put water through homes that were already failing. Relief work ran through the same field team and the same checks.",
    body: [
      "In September 2025 flooding across Panjab reached households that were already on our lists — homes with damaged walls and roofs that had been waiting for repair, where water turned a long-standing problem into an immediate one.",
      "Relief ran through the structure that already existed: the Panjab-based team assessing need at the house, local sangat identifying the worst-affected families first, and payments made directly to the workmen doing the repairs rather than through an intermediary.",
      "That matters most in an emergency, when the pressure to move money fast is highest and the checks are easiest to skip. Staged release against progress photographs and receipts held through the response.",
      "[TODO] Add the number of households reached in the flood response and the total spent, from the charity's own records.",
    ],
    quote: {
      text: "An emergency is exactly when the checks matter most, not least.",
      attribution: "Your Seva — on the September 2025 flood response",
    },
    facts: [
      { label: "Response", value: "September 2025" },
      { label: "Payments", value: "Direct to workmen" },
      { label: "Funds released", value: "Against receipts" },
      { label: "Households reached", value: "[TODO]" },
    ],
    photoNote: "Photo slot — flood damage and repair work, wide documentary frame",
  },
  {
    slug: "somewhere-to-be-at-four-oclock",
    title: "Somewhere to be at four o'clock",
    name: "After-school programme",
    location: "Panjab",
    programme: "Education",
    date: "2026-02-10",
    readingTime: "4 min read",
    tone: "ink",
    icon: BookOpen,
    excerpt:
      "Paying school fees keeps a child enrolled. A volunteer-run after-school programme built on kirtan and gatka is what keeps them coming back.",
    body: [
      "Your Seva's educational support sponsors single-parent, orphaned and poverty-stricken children — covering school fees, or the learning equipment they need to keep up with a class they are already enrolled in.",
      "But fees alone leave a gap in the afternoon. The volunteer-run after-school programme in Panjab fills it with kirtan and gatka: a reason to turn up, people to belong to, and an alternative to the substance use that claims so many young people in the region.",
      "It is run by volunteers rather than paid staff, which keeps it cheap and keeps it rooted in the villages it serves. The children who attend are often the same ones whose families receive Ration Panee.",
      "[TODO] Add the number of children currently sponsored, the number attending the after-school programme, and the locations, once confirmed.",
    ],
    quote: {
      text: "Fees keep a child enrolled. Somewhere to be at four o'clock keeps them learning.",
      attribution: "Your Seva — on the after-school programme",
    },
    facts: [
      { label: "Covered", value: "Fees & equipment" },
      { label: "After school", value: "Kirtan & gatka" },
      { label: "Run by", value: "Volunteers" },
      { label: "Children sponsored", value: "[TODO]" },
    ],
    photoNote: "Photo slot — after-school session, kirtan or gatka, candid",
  },
];

/* ---------------------------------- FAQ ---------------------------------- */

export const faqs = [
  {
    question: "How can 100% of my donation really reach the field?",
    answer:
      "Because our running costs are funded separately and deliberately. Gift Aid reclaimed on eligible UK donations, plus private donors and trustees, cover payment processing, filing and administration. No trustee is paid by the charity. Public donations go to field projects. It is a funding structure, not a slogan.",
  },
  {
    question: "Who covers card and payment processing fees?",
    answer:
      "Our unrestricted running-cost fund does. When you give £15, £15 is allocated to a project and the processing fee is paid from the separate overheads fund — so the fee never comes out of your gift.",
  },
  {
    question: "Where exactly do you work?",
    answer:
      "In Panjab, India. Your Seva is a UK registered charity (1162477) working with neglected, abandoned and poverty-stricken families there, delivered by a Panjab-based team and local sangat, including work in partnership with Sant Baba Gurbaksh Singh.",
  },
  {
    question: "How do you decide who gets help?",
    answer:
      "Families are referred through local sangat and the households we already support. Our Panjab-based team then assesses the need in person, at the house. For a rebuild we price the work locally and pay the workmen directly, releasing funds in stages against progress photographs and receipts.",
  },
  {
    question: "Can I claim Gift Aid, and what does it fund?",
    answer:
      "If you are a UK taxpayer, yes — and we would ask you to tick the box, because Gift Aid is the main thing that lets the 100% model work. The 25p we reclaim on each eligible pound funds our running costs, which is exactly how your pound stays whole.",
  },
  {
    question: "Can I choose which programme my donation funds?",
    answer:
      "Yes. On the donate page you can restrict your gift to Ration Panee, housing, elder and winter care, or education. Unrestricted gifts are the most useful to us because they let the field team fund the most urgent case in any given week.",
  },
  {
    question: "How do I cancel or change a monthly donation?",
    answer:
      "Email info@yourseva.org or use the link in any of our emails and it is done the same working day, no questions and no retention call. We would rather you gave £5 for ten years than £50 once and felt trapped.",
  },
  {
    question: "Is Your Seva a religious organisation?",
    answer:
      "We are rooted in Sikh principles — seva, and the teaching of Guru Nanak Dev Ji that service is worship — and we help anyone in need regardless of faith, caste or background. Sarbat da bhala: the wellbeing of all.",
  },
] as const;

/* --------------------------------- About --------------------------------- */

export const values = [
  {
    icon: HandHeart,
    title: "Seva before self",
    body:
      "Service is not a transaction and not a photo opportunity. We do the work that is needed, including the work nobody will fund.",
  },
  {
    icon: Users,
    title: "Vand Chhako — share what you have",
    body:
      "Guru Nanak Dev Ji taught that what we have is to be shared. Our job is to carry what is given faithfully, not to build an institution around it.",
  },
  {
    icon: ScrollText,
    title: "Say the true number",
    body:
      "We publish costs, receipts and failures. A charity that only reports its wins is reporting fiction.",
  },
  {
    icon: Sprout,
    title: "Local hands, local wages",
    body:
      "Every rebuild, every centre, every delivery is done by people from the district, paid properly. Dignity runs both ways.",
  },
] as const;

export const timeline = [
  {
    year: "2014",
    title: "Your Seva is incorporated",
    body: "Registered as a company limited by guarantee in England and Wales in November 2014.",
  },
  {
    year: "2015",
    title: "Registered with the Charity Commission",
    body: "Registered charity 1162477 — relieving poverty among people without financial support through grants, items and services.",
  },
  {
    year: "Ongoing",
    title: "Ration Panee",
    body: "A monthly food and household package for families with no income, delivered with Sant Baba Gurbaksh Singh at £15 per family per month.",
  },
  {
    year: "Ongoing",
    title: "Housing, winter aid and education",
    body: "Home rebuilds paid directly to local workmen, winter packs before the cold, school fees and a volunteer-run after-school programme.",
  },
  {
    year: "2025",
    title: "Flood response in Panjab",
    body: "Relief work after the September 2025 floods, run through the same field team and the same staged checks.",
  },
] as const;

/**
 * [VERIFIED] Trustees as listed on the Charity Commission register, with their
 * appointment dates. [TODO] Bios and photographs to come from the charity —
 * the lines below describe the role, not the person.
 */
export const team = [
  {
    name: "Gurprasad Singh",
    role: "Trustee",
    location: "United Kingdom",
    bio: "Appointed May 2024. Bio to be supplied by the charity.",
    tone: "warm" as MediaTone,
  },
  {
    name: "Gurvir Dhahan",
    role: "Trustee",
    location: "United Kingdom",
    bio: "Appointed April 2024. Bio to be supplied by the charity.",
    tone: "pine" as MediaTone,
  },
  {
    name: "Daljit Singh",
    role: "Trustee",
    location: "United Kingdom",
    bio: "Appointed January 2023. Bio to be supplied by the charity.",
    tone: "sand" as MediaTone,
  },
] as const;

/* ------------------------------ Transparency ----------------------------- */

/**
 * The register entry is live and public. [TODO] Link the individual annual
 * accounts PDFs and the charity's own policy documents once supplied.
 */
export const reports = [
  {
    title: "Charity Commission register entry",
    meta: "Registered charity 1162477 · Updated by the trustees",
    href: "https://register-of-charities.charitycommission.gov.uk/charity-details/?regid=1162477&subid=0",
  },
  {
    title: "Annual accounts, year ending 30 November 2024",
    meta: "Income £294,781 · Expenditure £163,362",
    href: "https://register-of-charities.charitycommission.gov.uk/charity-details/?regid=1162477&subid=0",
  },
  { title: "Trustees and governance", meta: "Three trustees · No trustee is remunerated", href: "/transparency#governance" },
  { title: "Safeguarding policy", meta: "[TODO] To be supplied by the charity", href: "#" },
  { title: "Grant-making & assessment policy", meta: "[TODO] To be supplied by the charity", href: "#" },
] as const;

export const governance = [
  {
    icon: Users,
    title: "Three trustees, publicly listed",
    body: "Named on the Charity Commission register with their appointment dates. No trustee receives remuneration or benefits from the charity.",
  },
  {
    icon: Building2,
    title: "Accounts filed with the Commission",
    body: "Income of £294,781 and expenditure of £163,362 for the year ending 30 November 2024, filed and publicly viewable.",
  },
  {
    icon: Wrench,
    title: "A company limited by guarantee",
    body: "Incorporated in England and Wales in November 2014, company number 09320448, registered as charity 1162477.",
  },
  {
    icon: CalendarDays,
    title: "Funds released in stages",
    body: "On longer projects, each stage is evidenced with progress photographs and receipts before the next payment is made.",
  },
] as const;

/* ----------------------------- Get involved ------------------------------ */

export const involvement = [
  {
    id: "fundraise",
    icon: HeartHandshake,
    title: "Fundraise for us",
    body:
      "Run, walk, cook, shave, cycle or give up something you like. We will send you a fundraising pack, a page and a field update you can share with the people who sponsor you.",
    cta: { label: "Request a fundraising pack", href: "/contact?topic=fundraising" },
  },
  {
    id: "volunteer",
    icon: Users,
    title: "Volunteer your skill",
    body:
      "We need translators, accountants, photographers, teachers and people who are good on the phone. In the UK and in Panjab. Tell us what you are good at.",
    cta: { label: "Offer your skills", href: "/contact?topic=volunteering" },
  },
  {
    id: "partner",
    icon: Building2,
    title: "Partner or sponsor",
    body:
      "Companies, gurdwaras and foundations can fund a whole programme, match-fund a campaign, or join the circle that underwrites our running costs so every public pound stays whole.",
    cta: { label: "Talk to us about partnering", href: "/contact?topic=partnership" },
  },
] as const;

/** [TODO] Confirm the full partner list with the charity before publishing. */
export const partners = [
  "Sant Baba Gurbaksh Singh",
  "Local sangat in Panjab",
  "Gurdwara partners",
  "Panjab field volunteers",
  "UK giving circles",
] as const;
