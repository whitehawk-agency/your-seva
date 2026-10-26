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
 *  ⚠️  CONTENT PLACEHOLDERS
 *
 *  Every figure, name, quote, date and registration number below is sample
 *  content written to shape the design. Replace each one with verified data
 *  signed off by the trustees before this site goes live — search for
 *  "PLACEHOLDER" to find everything that needs a real value.
 * ------------------------------------------------------------------------- */

export const site = {
  name: "YourSeva",
  domain: "yourseva.org",
  url: "https://yourseva.org",
  tagline: "100% of your donation changes lives directly.",
  description:
    "YourSeva is a UK non-profit rooted in the spirit of seva — selfless service. 100% of public donations fund poverty relief, home rebuilding, senior care and education in Panjab and beyond.",
  email: "hello@yourseva.org",
  donationsEmail: "giving@yourseva.org",
  phone: "+44 (0)20 7946 0123", // PLACEHOLDER
  address: {
    line1: "YourSeva",
    line2: "PO Box 1469",
    city: "Birmingham",
    postcode: "B1 1AA", // PLACEHOLDER
    country: "United Kingdom",
  },
  /** PLACEHOLDER — add the registered number the moment it is issued. */
  charityNumber: "TBC",
  social: {
    instagram: "https://instagram.com/yourseva",
    facebook: "https://facebook.com/yourseva",
    linkedin: "https://linkedin.com/company/yourseva",
    youtube: "https://youtube.com/@yourseva",
  },
} as const;

export const navLinks = [
  { label: "Our Work", href: "/our-work" },
  { label: "100% Model", href: "/100-percent-model" },
  { label: "Impact Stories", href: "/impact-stories" },
  { label: "About Us", href: "/about" },
] as const;

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

/** PLACEHOLDER impact statements — must be backed by programme unit costs. */
export const donationTiers: Record<Frequency, DonationTier[]> = {
  monthly: [
    {
      amount: 10,
      impact: "Feeds an elderly widow for a month.",
      detail:
        "£10 a month delivers a monthly ration parcel — atta, dal, rice, oil, tea and lentils — to a Bibi ji living alone with no pension.",
    },
    {
      amount: 25,
      impact: "Provides educational supplies for a child for a full year.",
      detail:
        "£25 a month covers a full year of schooling essentials for one child: uniform, shoes, books, stationery and exam fees.",
    },
    {
      amount: 50,
      impact: "Keeps a women's sewing centre running.",
      detail:
        "£50 a month keeps a village tailoring centre open — six women trained, equipped and earning their own income.",
    },
    {
      amount: 100,
      impact: "Makes one family home weatherproof every quarter.",
      detail:
        "£100 a month funds a rebuild rota: roofs sealed, walls re-plastered and a safe toilet installed, one home at a time.",
    },
  ],
  once: [
    {
      amount: 10,
      impact: "Sends an emergency food parcel today.",
      detail: "£10 puts a two-week emergency food parcel in the hands of a family that has run out.",
    },
    {
      amount: 25,
      impact: "Equips one child for a school term.",
      detail: "£25 buys a term of books, stationery and a school uniform for a child who would otherwise stay home.",
    },
    {
      amount: 50,
      impact: "Installs a household water filter.",
      detail:
        "£50 installs a household filter in a village on a contaminated supply — clean drinking water for a family of six.",
    },
    {
      amount: 100,
      impact: "Rebuilds one room of a collapsing home.",
      detail: "£100 re-plasters, rewires and waterproofs one room of a home that is no longer safe to sleep in.",
    },
  ],
};

export const customImpact: Record<Frequency, string> = {
  monthly: "Every pound you give monthly lets our field teams commit to work months in advance.",
  once: "Every pound goes straight to the field. Nothing is taken for admin — not a penny.",
};

/** Mid-tier amount used as the default selection. */
export const defaultAmount = 25;

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
    slug: "poverty-relief",
    name: "Poverty Relief",
    short: "Food, essentials and emergency grants",
    icon: Soup,
    tone: "warm",
    summary:
      "Monthly ration parcels, winter kits and emergency cash grants for households with no safety net of any kind.",
    body:
      "Our oldest programme and the simplest. Field volunteers identify households that have fallen through every net — widows without pensions, families after a medical bankruptcy, labourers injured out of work — and put food, bedding and fuel in their hands within days. Where cash is the dignified answer, we give cash, and we publish what we gave.",
    outcomes: [
      { label: "Ration parcels delivered", value: "14,600" },
      { label: "Villages covered", value: "48" },
      { label: "Average days to first delivery", value: "4" },
    ],
    activities: [
      "Monthly ration parcels for 1,200 households",
      "Winter kits: quilts, shawls, firewood and heaters",
      "Emergency cash grants after illness, fire or flood",
      "Langar support for local gurdwara kitchens",
    ],
    photoNote: "Photo slot — ration parcel handover, hands and faces, natural light",
  },
  {
    slug: "housing",
    name: "Housing & Rebuilding",
    short: "Safe, dry, dignified homes",
    icon: Home,
    tone: "clay",
    summary:
      "We rebuild homes that are structurally unsafe — roofs, walls, wiring and sanitation — using local tradespeople and local materials.",
    body:
      "A leaking roof is not a small problem. It is the reason children miss school, the reason an elderly parent gets pneumonia every winter, the reason a family never gets out from under debt. We survey, cost and rebuild with local masons, pay local wages, and hand over a home that is dry, wired safely and has a working toilet. Families keep the title; we keep the receipts.",
    outcomes: [
      { label: "Homes rebuilt or repaired", value: "212" },
      { label: "Local tradespeople employed", value: "64" },
      { label: "Homes with a safe toilet built", value: "188" },
    ],
    activities: [
      "Structural survey and costed rebuild plan",
      "Roofing, re-plastering and damp proofing",
      "Safe electrical rewiring and solar lighting",
      "Sanitation: a private, working household toilet",
    ],
    photoNote: "Photo slot — mason at work on a roof, mid-build, wide frame",
  },
  {
    slug: "senior-care",
    name: "Senior Care",
    short: "Dignity for Bibi ji and Baba ji",
    icon: HandHeart,
    tone: "pine",
    summary:
      "Pension top-ups, medicine, cataract surgery and weekly visits for elders living alone without family support.",
    body:
      "Elders who outlive their children, or whose children migrated and never returned, are among the most invisible people we meet. Our senior care programme pairs each elder with a volunteer who visits weekly, covers their medication and eye care, and makes sure someone would notice if they did not open the door. It is the least glamorous work we do and the work our volunteers care most about.",
    outcomes: [
      { label: "Elders supported monthly", value: "740" },
      { label: "Cataract surgeries funded", value: "310" },
      { label: "Weekly welfare visits a year", value: "38,000" },
    ],
    activities: [
      "Monthly medicine and pension top-up",
      "Cataract surgery and spectacles",
      "Weekly welfare visits from a named volunteer",
      "Mobility aids, glasses and hearing support",
    ],
    photoNote: "Photo slot — volunteer and elder in conversation, doorway light",
  },
  {
    slug: "education",
    name: "Education",
    short: "Keeping children in school",
    icon: GraduationCap,
    tone: "ink",
    summary:
      "Fees, uniforms, books and after-school tuition so that poverty is not the reason a child's education ends.",
    body:
      "Most children we meet are not out of school because their parents do not value education. They are out of school because of a uniform, a bus fare, an exam fee — amounts small enough to be solved and large enough to end a future. We cover those costs directly to the school, run after-school tuition centres, and fund girls' scholarships through to higher education.",
    outcomes: [
      { label: "Children in school this year", value: "1,480" },
      { label: "Girls on full scholarships", value: "126" },
      { label: "After-school tuition centres", value: "9" },
    ],
    activities: [
      "School fees paid directly to the school",
      "Uniforms, shoes, books and stationery",
      "After-school tuition centres in nine villages",
      "Scholarships for girls into further education",
    ],
    photoNote: "Photo slot — classroom or tuition centre, children working, candid",
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
      "No grant and no build is approved without a local needs assessment, two independent references and a costed plan signed off by our field committee.",
    stat: "3-stage",
    statLabel: "assessment before any grant",
  },
  {
    icon: Receipt,
    title: "Radical Transparency",
    body:
      "Every project is published with its budget, its receipts and its completion photographs. If we get something wrong, we write that up too.",
    stat: "Every",
    statLabel: "project published with receipts",
  },
] as const;

export const moneyFlow = [
  {
    icon: HandHeart,
    title: "You give £100",
    body: "Your donation lands in a restricted public donations account that can only be spent on field projects.",
  },
  {
    icon: ShieldCheck,
    title: "£100 is allocated to a vetted project",
    body: "A field assessment, a costed plan and two references already exist before your money is assigned to it.",
  },
  {
    icon: Hammer,
    title: "£100 is spent in the field",
    body: "Local tradespeople, local suppliers, local wages. Paid against invoices we publish.",
  },
  {
    icon: Receipt,
    title: "Running costs are paid separately",
    body: "Gift Aid and private donors cover audit, payments, software and staff — so your £100 is never touched.",
  },
] as const;

export const vettingSteps = [
  {
    title: "Referral and first visit",
    body:
      "A household is referred by a local gurdwara, school or existing beneficiary. A field volunteer visits within a week and records the need in person — never by phone, never by paperwork alone.",
  },
  {
    title: "Independent verification",
    body:
      "Two independent local references confirm the circumstances. We check land records and existing government entitlements so we fund the gap, not the duplicate.",
  },
  {
    title: "Costed plan and committee sign-off",
    body:
      "Our field committee prices the work with at least two local quotes and signs off a written plan with a budget, a timeline and named accountability.",
  },
  {
    title: "Delivery, receipts and follow-up",
    body:
      "Payments are made against invoices. Completion is photographed, published, and revisited at three and twelve months to confirm the change held.",
  },
] as const;

/* -------------------------------- Metrics -------------------------------- */

/** PLACEHOLDER — wire to the real impact dashboard before launch. */
export const impactStats = [
  { value: 1284, suffix: "", label: "Families supported", sub: "Across 48 villages in Panjab" },
  { value: 212, suffix: "", label: "Homes rebuilt", sub: "Dry, wired and with a safe toilet" },
  { value: 1480, suffix: "", label: "Children in school", sub: "Fees paid directly to schools" },
  { value: 100, suffix: "%", label: "To the field", sub: "Running costs funded separately" },
] as const;

export const fundingBreakdown = [
  { label: "Public donations → field projects", value: 100, note: "Restricted. Cannot be spent on anything else." },
  { label: "Running costs from Gift Aid", value: 71, note: "Reclaimed on eligible UK donations." },
  { label: "Running costs from private donors", value: 29, note: "A small circle who fund our overheads on purpose." },
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

/** PLACEHOLDER stories. Names and details must be replaced with consented, real accounts. */
export const stories: Story[] = [
  {
    slug: "a-roof-before-the-monsoon",
    title: "A roof before the monsoon",
    name: "The Kaur family",
    location: "Tarn Taran district, Panjab",
    programme: "Housing & Rebuilding",
    date: "2026-07-14",
    readingTime: "4 min read",
    tone: "clay",
    icon: Home,
    excerpt:
      "Three children had been sleeping under plastic sheeting for two winters. The rebuild took nineteen days and cost £1,840 — here is where every pound went.",
    quote: {
      text: "For two years I listened to the rain and counted the places it came through. Now I sleep.",
      attribution: "Jaswinder Kaur, Tarn Taran",
    },
    body: [
      "When our field volunteer first visited, the roof of the Kaur family's single room had been patched with plastic sheeting and weighted with bricks. The monsoon was six weeks away. Two of the three children had missed most of the previous school year with chest infections that came back every time the damp did.",
      "The household had no title dispute and no outstanding government entitlement — the gap was simply money. Two local masons quoted the work. The committee approved the lower quote with a contingency, and the build started eleven days after the first visit.",
      "Nineteen working days later the family had a sealed roof, re-plastered walls, safe wiring with two solar-backed lights, and a private toilet built against the north wall. The masons were paid local rates on invoice. The total came to £1,840.",
      "At the three-month follow-up visit, all three children were in school with full attendance. We revisit again at twelve months, and we publish what we find either way.",
    ],
    facts: [
      { label: "Total cost", value: "£1,840" },
      { label: "Build time", value: "19 working days" },
      { label: "Local tradespeople paid", value: "4" },
      { label: "People now housed safely", value: "5" },
    ],
    photoNote: "Photo slot — completed rebuild, family on the threshold, late afternoon",
  },
  {
    slug: "the-week-bibi-ji-was-seen",
    title: "The week Bibi ji was seen",
    name: "Harbans Kaur",
    location: "Ludhiana district, Panjab",
    programme: "Senior Care",
    date: "2026-05-02",
    readingTime: "3 min read",
    tone: "pine",
    icon: HandHeart,
    excerpt:
      "She had been living alone for nine years. The cataract surgery cost £62. The weekly visit that found her cost nothing at all.",
    quote: {
      text: "I did not need much. I needed someone to knock.",
      attribution: "Harbans Kaur, Ludhiana",
    },
    body: [
      "Harbans Kaur is 81. Her husband died in 2014 and her son works in Dubai and sends money when he can, which is not often. For nine years she managed alone in two rooms at the edge of the village, and for the last two of those she could not see well enough to cook safely.",
      "A volunteer on our senior welfare round found her because the round exists — not because anyone reported a crisis. Within a fortnight she had a diagnosis, a surgery date and someone to take her there. Both eyes were done for £62 in total at a local eye hospital we have worked with since 2023.",
      "She now receives a monthly medicine top-up and a named volunteer, Simran, who visits every Thursday. The visit is logged. If the door does not open, someone follows up the same day.",
      "The surgery was the cheapest part of this story. The infrastructure that found her is what your monthly giving actually pays for.",
    ],
    facts: [
      { label: "Cataract surgery, both eyes", value: "£62" },
      { label: "Years living alone", value: "9" },
      { label: "Welfare visits since", value: "Weekly" },
      { label: "Elders on the same round", value: "740" },
    ],
    photoNote: "Photo slot — portrait of elder after surgery, hands in frame, soft light",
  },
  {
    slug: "nine-rooms-that-keep-girls-in-school",
    title: "Nine rooms that keep girls in school",
    name: "Simran, Navjot and 126 others",
    location: "Across four districts, Panjab",
    programme: "Education",
    date: "2026-03-18",
    readingTime: "5 min read",
    tone: "ink",
    icon: BookOpen,
    excerpt:
      "An exam fee of £9 was the reason one girl nearly stopped studying. The tuition centres started because we kept hearing the same number.",
    quote: {
      text: "My father did not stop me. The fee did. Nobody had nine pounds that month.",
      attribution: "Navjot, now in her second year of nursing",
    },
    body: [
      "We did not set out to run tuition centres. We set out to pay school fees, and we kept hitting the same wall: a girl's fees were covered, she was enrolled, and she still fell behind because there was nowhere at home to study and no one to ask.",
      "So in 2024 we rented nine rooms in nine villages, paid nine local graduates a proper wage, and opened them from four until seven, six days a week. Girls who had been two years behind closed the gap in eighteen months.",
      "Of the 126 girls currently on full YourSeva scholarships, 41 came through a tuition centre first. Navjot, whose exam fee of £9 almost ended her schooling at fifteen, is in her second year of a nursing degree.",
      "Each centre costs £310 a month to run, all in: rent, salary, electricity, books. That figure is published monthly with the invoices behind it.",
    ],
    facts: [
      { label: "Tuition centres running", value: "9" },
      { label: "Cost per centre, per month", value: "£310" },
      { label: "Girls on full scholarships", value: "126" },
      { label: "Local graduates employed", value: "9" },
    ],
    photoNote: "Photo slot — tuition centre at dusk, students at desks, warm interior light",
  },
];

/* ---------------------------------- FAQ ---------------------------------- */

export const faqs = [
  {
    question: "How can 100% of my donation really reach the field?",
    answer:
      "Because our running costs are funded separately and deliberately. Gift Aid reclaimed on eligible UK donations, plus a small circle of private donors and trustees, cover our audit, payment processing, software and staff. Public donations sit in a restricted account that can only be spent on field projects. It is a funding structure, not a slogan.",
  },
  {
    question: "Who covers card and payment processing fees?",
    answer:
      "Our unrestricted running-cost fund does. When you give £25, £25 is allocated to a project and the processing fee is paid from the separate overheads fund — so the fee never comes out of your gift.",
  },
  {
    question: "Where exactly do you work?",
    answer:
      "The majority of our work is in Panjab, India, across 48 villages in four districts, delivered by local field volunteers and local tradespeople. We also run a smaller UK hardship fund, and we fund partner-led work beyond Panjab where a trusted local organisation can deliver better than we can.",
  },
  {
    question: "How do you decide who gets help?",
    answer:
      "A three-stage assessment: an in-person visit after referral, two independent local references plus a check on existing government entitlements, then a costed plan signed off by our field committee against at least two local quotes. We fund the gap, not the duplicate.",
  },
  {
    question: "Can I claim Gift Aid, and what does it fund?",
    answer:
      "If you are a UK taxpayer, yes — and we would ask you to tick the box, because Gift Aid is the main thing that lets the 100% model work. The 25p we reclaim on each eligible pound funds our running costs, which is exactly how your pound stays whole.",
  },
  {
    question: "Can I choose which programme my donation funds?",
    answer:
      "Yes. On the donate page you can restrict your gift to poverty relief, housing, senior care or education. Unrestricted gifts are the most useful to us because they let the field committee fund the most urgent case in any given week.",
  },
  {
    question: "How do I cancel or change a monthly donation?",
    answer:
      "Email giving@yourseva.org or use the link in any of our emails and it is done the same working day, no questions and no retention call. We would rather you gave £5 for ten years than £50 once and felt trapped.",
  },
  {
    question: "Is YourSeva a religious organisation?",
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
    year: "2019",
    title: "A WhatsApp group and four families",
    body: "Four UK families pooled monthly giving to cover ration parcels for eleven households in one village.",
  },
  {
    year: "2021",
    title: "The first rebuild",
    body: "A collapsing roof in Tarn Taran became our first costed, committee-approved build — and the template for the rest.",
  },
  {
    year: "2023",
    title: "The 100% commitment",
    body: "Private donors agreed to underwrite running costs permanently so that every public pound could go to the field.",
  },
  {
    year: "2024",
    title: "Tuition centres open",
    body: "Nine rooms in nine villages, nine local graduates employed, open six days a week.",
  },
  {
    year: "2026",
    title: "48 villages, four districts",
    body: "1,284 families supported across poverty relief, housing, senior care and education.",
  },
] as const;

/** PLACEHOLDER people — replace with the real team and trustees. */
export const team = [
  {
    name: "Name to confirm",
    role: "Founder & Trustee",
    location: "Birmingham, UK",
    bio: "Led the first four-family giving circle in 2019 and still signs off every rebuild plan.",
    tone: "warm" as MediaTone,
  },
  {
    name: "Name to confirm",
    role: "Field Director, Panjab",
    location: "Amritsar, India",
    bio: "Runs the referral network, the field committee and the follow-up visits that nobody else wants to schedule.",
    tone: "pine" as MediaTone,
  },
  {
    name: "Name to confirm",
    role: "Treasurer & Trustee",
    location: "London, UK",
    bio: "Chartered accountant. Keeps the restricted and unrestricted funds strictly, boringly separate.",
    tone: "sand" as MediaTone,
  },
  {
    name: "Name to confirm",
    role: "Education Lead",
    location: "Ludhiana, India",
    bio: "Former headteacher. Opened all nine tuition centres and hired every tutor in them.",
    tone: "clay" as MediaTone,
  },
] as const;

/* ------------------------------ Transparency ----------------------------- */

/** PLACEHOLDER documents — link to the real filings once published. */
export const reports = [
  { title: "Annual report & accounts 2025–26", meta: "PDF · Published Sept 2026", href: "#" },
  { title: "Annual report & accounts 2024–25", meta: "PDF · Published Sept 2025", href: "#" },
  { title: "Project ledger — current financial year", meta: "Spreadsheet · Updated monthly", href: "#" },
  { title: "Safeguarding policy", meta: "PDF · Reviewed Jan 2026", href: "#" },
  { title: "Grant-making & vetting policy", meta: "PDF · Reviewed Jan 2026", href: "#" },
  { title: "Trustees' conflict of interest register", meta: "PDF · Updated annually", href: "#" },
] as const;

export const governance = [
  {
    icon: Users,
    title: "A board that meets quarterly",
    body: "Four trustees, published minutes, and a conflict of interest register that is actually maintained.",
  },
  {
    icon: Building2,
    title: "Independently examined accounts",
    body: "Our accounts are independently examined each year and filed in full, not in summary.",
  },
  {
    icon: Wrench,
    title: "Restricted funds held separately",
    body: "Public donations and running-cost funds are held in separate accounts and reconciled monthly.",
  },
  {
    icon: CalendarDays,
    title: "Follow-up at 3 and 12 months",
    body: "Every project is revisited twice after completion, and the findings are published either way.",
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

/** PLACEHOLDER — replace with real partner and supporter names once agreed. */
export const partners = [
  "Gurdwara partners",
  "Local eye hospital network",
  "District school boards",
  "UK giving circles",
  "Corporate match-funders",
  "Village panchayats",
] as const;
