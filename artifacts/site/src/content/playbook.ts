/**
 * The Scalable Startup Operating System — page content.
 *
 * All copy for `/playbook` lives here so the page components stay presentational
 * and the text can be revised without touching JSX.
 *
 * ⚠️ PRICES ARE DUPLICATED FROM NESTUGE. Nestuge is the system of record for what
 * a buyer is actually charged; the values below are display-only. If a price
 * changes on Nestuge, it MUST be changed here in the same commit.
 */

/** Public product name, used in headings, metadata and alt text. */
export const PRODUCT_NAME = "The Scalable Startup Operating System";

/** Short form for mid-sentence use, where the full name would be heavy. */
export const PRODUCT_SHORT = "the Operating System";

/** Canonical path for the page. `vercel.json` redirects longer slugs here. */
export const PLAYBOOK_PATH = "/playbook";

/**
 * Nestuge product URLs, one per tier. All three verified live (HTTP 200).
 *
 * The slugs are opaque Nestuge short codes, so the comments below are the only
 * record of which URL sells which tier — keep them accurate.
 */
export const NESTUGE_URLS = {
  /** Tier 1 — Playbook only. */
  playbook: "https://nestuge.com/qikit0xaf",
  /** Tier 2 — Playbook + Implementation Toolkit. */
  toolkit: "https://nestuge.com/opsplaybook",
  /** Tier 3 — Playbook + Toolkit + 1-hour session. */
  partner: "https://nestuge.com/nbu6h2xci",
} as const;

/**
 * Appends campaign parameters so Nestuge can attribute a sale back to the
 * position on this page that produced the click.
 */
export function withUtm(url: string, content: string): string {
  const u = new URL(url);
  u.searchParams.set("utm_source", "tdadvisory.co");
  u.searchParams.set("utm_medium", "site");
  u.searchParams.set("utm_campaign", "scalable-startup-operating-system");
  u.searchParams.set("utm_content", content);
  return u.toString();
}

export interface Tier {
  id: string;
  name: string;
  price: string;
  /** Who the tier is for — the line directly under the price. */
  blurb: string;
  /** Optional lead-in above the feature list, e.g. "Everything in X, plus:". */
  featuresLabel?: string;
  features: string[];
  bestFor: string;
  cta: string;
  url: string;
  /** Exactly one tier should set this; it renders the badge and the filled CTA. */
  highlight?: boolean;
  badge?: string;
}

export const TIERS: Tier[] = [
  {
    id: "playbook",
    name: "The Playbook",
    price: "₦20,000",
    blurb: "For founders who want the knowledge and frameworks.",
    featuresLabel: "The complete 8-module Playbook:",
    features: [
      "Leadership & Governance",
      "Operations",
      "Finance",
      "People",
      "Sales",
      "Technology",
      "Project Delivery",
      "Performance",
    ],
    bestFor:
      "Founders and business leaders who want practical guidance and a structured approach to strengthening their business.",
    cta: "Get the Playbook",
    url: NESTUGE_URLS.playbook,
  },
  {
    id: "toolkit",
    name: "Playbook + Implementation Toolkit",
    price: "₦50,000",
    blurb: "For founders who want to move from understanding to implementation.",
    featuresLabel: "Everything in The Playbook, plus:",
    features: [
      "Editable templates and worksheets",
      "Trackers and scorecards",
      "Implementation frameworks",
      "Practical tools across all eight modules",
    ],
    bestFor:
      "Founders and teams who don't just want to know what to do — they want practical tools to help them get started.",
    cta: "Get the Toolkit",
    url: NESTUGE_URLS.toolkit,
    highlight: true,
    badge: "Most popular",
  },
  {
    id: "partner",
    name: "Implementation Partner Package",
    price: "₦100,000",
    blurb: "For founders who want expert guidance applying the Playbook to their business.",
    featuresLabel: "Everything in Playbook + Toolkit, plus:",
    features: [
      "A 1-hour advisory session with TD Advisory",
      "Help identifying your key operational priorities",
      "A discussion of what is creating the most friction",
      "Guidance on where to begin",
    ],
    bestFor:
      "Founders who want to discuss their specific business and leave with greater clarity on their implementation priorities.",
    cta: "Get Expert Guidance",
    url: NESTUGE_URLS.partner,
  },
];

/** Shown under the pricing CTAs to signal the third-party handoff. */
export const CHECKOUT_TRUST_LINE = "Secure checkout and delivery by Nestuge";

export const HERO = {
  eyebrow: "Operations · Quality · People",
  headlineLines: [
    { text: "From chaos", italic: false },
    { text: "to clarity.", italic: true },
    { text: "Build a business", italic: false },
    { text: "that can scale.", italic: false },
  ],
  intro:
    "The Scalable Startup Operating System is a practical, implementation-focused resource designed to help founders and growing businesses build the systems, structures, and management practices required to scale with greater clarity, consistency, and control.",
  summary:
    "8 core business modules. Practical frameworks. Editable templates. Implementation tools.",
  cta: "Get the Playbook — from ₦20,000",
  secondaryCta: "See what's inside",
} as const;

export const PROBLEM = {
  eyebrow: "The problem",
  heading: "Growth shouldn't make your business harder to run.",
  lead: [
    "As businesses grow, the challenges change.",
    "What once worked through hustle, informal communication, and constant founder involvement can quickly become difficult to manage.",
  ],
  symptoms: [
    "Decisions begin to pile up.",
    "Teams wait for direction.",
    "Processes live in people's heads.",
    "Work gets duplicated.",
    "Customers experience inconsistency.",
    "The founder becomes involved in almost everything.",
  ],
  close: [
    "The problem is not always a lack of effort.",
    "Often, the business has simply outgrown the systems it was built on.",
    "The Scalable Startup Operating System was created to help you build what your next stage of growth requires.",
  ],
} as const;

/** The "Reactive → Intentional" style shifts, shown as a transitions strip. */
export const SHIFTS = [
  { from: "Reactive", to: "Intentional" },
  { from: "Founder-dependent", to: "System-driven" },
  { from: "Unclear", to: "Accountable" },
  { from: "Inconsistent", to: "Repeatable" },
  { from: "Constant firefighting", to: "Controlled execution" },
] as const;

/**
 * The eight modules.
 *
 * Note on ordering: the supplied copy numbered these "03 People / 04 Finance"
 * but gave 03 the finance description and 04 the people description, while the
 * FAQ and the Tier 1 list both read "Finance, People". Relabelling 03 → Finance
 * and 04 → People fixes the swapped bodies and the ordering inconsistency at once.
 */
export const MODULES = [
  {
    number: "01",
    name: "Leadership & Governance",
    desc: "Build the direction, decision-making structures, accountability systems, and operating rhythms required to lead a growing business.",
  },
  {
    number: "02",
    name: "Operations",
    desc: "Design how work flows through your business and build processes that support consistent execution, quality, and sustainable growth.",
  },
  {
    number: "03",
    name: "Finance",
    desc: "Build stronger financial discipline, improve visibility, and create better systems for managing the financial health of your business.",
  },
  {
    number: "04",
    name: "People",
    desc: "Build the structures and practices required to hire, develop, manage, retain, and transition the people who drive your business.",
  },
  {
    number: "05",
    name: "Sales",
    desc: "Create a more structured and repeatable approach to generating, managing, and converting opportunities while strengthening the customer journey.",
  },
  {
    number: "06",
    name: "Technology",
    desc: "Use technology intentionally to improve efficiency, coordination, visibility, and the scalability of your business.",
  },
  {
    number: "07",
    name: "Project Delivery",
    desc: "Improve how your business plans, prioritises, manages, and delivers important initiatives.",
  },
  {
    number: "08",
    name: "Performance",
    desc: "Build stronger systems for measurement, accountability, business reviews, and continuous improvement.",
  },
] as const;

export const MODULES_SECTION = {
  eyebrow: "What's inside",
  heading: "8 modules.\nOne stronger business foundation.",
} as const;

export const TOOLKIT = {
  eyebrow: "Built to be used, not just read",
  heading: "Practical tools to help you move from knowledge to implementation.",
  lead: [
    "Understanding what to do is one thing. Knowing where to start is another.",
    "That's why the Operating System includes practical resources designed to help you begin implementation without starting from a blank page.",
  ],
  itemsHeading: "Inside the Implementation Toolkit, you'll find:",
  items: [
    "Editable templates",
    "Worksheets and implementation guides",
    "SOP templates",
    "Process documentation tools",
    "Process mapping frameworks",
    "Organisational design tools",
    "Delegation and accountability frameworks",
    "KPI scorecards and performance trackers",
    "Meeting and governance templates",
    "Root cause analysis tools",
    "Improvement trackers",
    "Planning and review templates",
  ],
  close:
    "The goal is not simply to give you more information. It is to give you practical tools you can adapt to your business.",
} as const;

export const AUDIENCE = {
  eyebrow: "Who is this for?",
  heading: "Built for founders and leaders who know their business needs more structure.",
  groups: [
    {
      name: "Founders and entrepreneurs",
      desc: "Who want to reduce unnecessary dependency on themselves and build a business that can operate with greater independence.",
    },
    {
      name: "Startup and SME leaders",
      desc: "Who are growing but need stronger systems, processes, and management structures to support the next stage.",
    },
    {
      name: "Operations and business leaders",
      desc: "Who are responsible for improving execution and creating more effective ways of working.",
    },
    {
      name: "Growing teams",
      desc: "Who need greater clarity around roles, processes, accountability, and performance.",
    },
  ],
  footnoteHeading: "You do not need an operations background.",
  footnote:
    "The Playbook is designed to make practical business and operational concepts accessible, relevant, and actionable.",
} as const;

export const OUTCOMES = {
  eyebrow: "What you can begin to build",
  heading: "By using the Operating System, you will be better equipped to:",
  items: [
    "Create greater clarity around where the business is going and how decisions are made.",
    "Identify areas where the business is overly dependent on individuals.",
    "Clarify roles, responsibilities, and decision-making authority.",
    "Design and document critical business processes.",
    "Create more effective operating and meeting rhythms.",
    "Improve visibility into business and team performance.",
    "Build stronger accountability structures.",
    "Identify inefficiencies and opportunities for improvement.",
    "Create a stronger operational foundation for sustainable growth.",
  ],
  deliverablesHeading: "What you get",
  deliverables: [
    {
      name: "The complete 8-module Playbook",
      desc: "A practical guide covering the core systems and management practices required to build and scale a growing business.",
    },
    {
      name: "Editable templates and worksheets",
      desc: "Practical resources you can adapt to your own business rather than creating everything from scratch.",
    },
    {
      name: "Implementation frameworks and artifacts",
      desc: "Tools designed to help you translate concepts into practical action.",
    },
    {
      name: "A resource you can return to",
      desc: "As your business evolves, the Playbook can serve as a reference point for strengthening your systems, structures, and ways of working.",
    },
  ],
} as const;

export const PRICING = {
  eyebrow: "Choose the level of support you need",
  heading:
    "Start building a business that can grow without everything growing with you.",
  lead: "Whether you simply want the knowledge, practical tools to implement it, or direct guidance applying it to your business, choose the option that best fits your needs.",
} as const;

export const ABOUT = {
  eyebrow: "About TD Advisory",
  heading: "Built from practical experience.",
  lead: "TD Advisory is a boutique business advisory and operations consulting firm that helps startups and growing businesses build the systems, structures, and capabilities required to scale sustainably.",
  body: [
    "Through strategic advisory, Fractional COO support, operational improvement, and practical implementation solutions, we work with businesses to turn complexity into greater clarity, consistency, and execution.",
    "The Scalable Startup Operating System brings together practical lessons, frameworks, and tools shaped by real-world experience supporting growing businesses.",
  ],
} as const;

export const FAQ = [
  {
    q: "Is this just an ebook?",
    a: "No. The Operating System combines practical guidance across eight core business areas with editable templates, worksheets, frameworks, and implementation artifacts designed to help you apply what you learn.",
  },
  {
    q: "Who is the Operating System designed for?",
    a: "It is designed primarily for startup founders, SME leaders, operators, and growing teams looking to build stronger systems and structures within their businesses.",
  },
  {
    q: "Do I need an operations background to use it?",
    a: "No. It is designed to make practical business and operational concepts accessible to founders and business leaders without formal operations training.",
  },
  {
    q: "What does the Operating System cover?",
    a: "It covers eight core areas: Leadership & Governance, Operations, Finance, People, Sales, Technology, Project Delivery, and Performance.",
  },
  {
    q: "What format will I receive?",
    a: "You will receive the complete Playbook together with access to the accompanying editable templates, worksheets, and implementation resources.",
  },
  {
    q: "What is the refund policy?",
    a: "Due to the digital nature of the Scalable Startup Operating System, all purchases are final and non-refundable once access has been granted. If you experience a duplicate charge or a technical issue preventing access, please contact us within 7 days, and we'll work promptly to resolve it or issue a refund where applicable.",
  },
] as const;

export const FINAL_CTA = {
  heading: "Your business doesn't need more heroics.\nIt needs a stronger foundation.",
  body: [
    "As your business grows, complexity will grow with it.",
    "The question is whether your systems, structures, and management practices are growing too.",
    "The Scalable Startup Operating System gives you practical guidance and tools to begin building that foundation.",
  ],
  summary:
    "8 modules. Practical frameworks. Editable templates. Implementation tools.",
  cta: "Get the Operating System",
} as const;

/** The teaser band on the home page, between Services and Clients. */
export const HOME_TEASER = {
  eyebrow: "New",
  heading: "From chaos to clarity.",
  body: "The Scalable Startup Operating System — a practical, implementation-focused toolkit to help founders build the systems, structures, and management practices required to scale, across 8 core business modules.",
  link: "Explore the Playbook",
} as const;
