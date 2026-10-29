// The five fixed-price offers and the project steps. Used by /offers and the home page.

export type Offer = {
  id: string;
  name: string;
  price: string;
  from?: boolean;
  time: string;
  /** One line for the home page grid. */
  summary: string;
  promise: string;
  gets: string[];
  not: string;
  cta: string;
};

export const OFFERS: Offer[] = [
  {
    id: "spot-fix",
    name: "Spot Fix",
    price: "$450",
    time: "2 business days",
    summary: "One clearly defined bug in your app, fixed and explained.",
    promise:
      "One clearly defined problem in a Node, React, Next.js or PostgreSQL app, fixed and explained: a failed deploy, a login bug, a Stripe webhook that misfires, a broken migration, a report with the wrong totals.",
    gets: [
      "The fix as a tested pull request, or applied directly",
      "A short written explanation of the cause and what to watch for",
      "Up to 4 hours of senior time; if it needs more, you hear within the first hour",
    ],
    not: "Not for new features or redesigns. A second problem is a second Spot Fix; a tangle of problems is a Rescue Audit.",
    cta: "Request a Spot Fix",
  },
  {
    id: "rescue-audit",
    name: "Rescue Audit",
    price: "$1,500",
    time: "5 business days",
    summary: "A senior review of your AI-built app: what will fail, and what it costs to fix.",
    promise:
      "Your Lovable, Bolt, Replit, v0 or Cursor app works in the demo but breaks with real users, data or payments. A senior engineer reviews all of it and tells you, in writing, what will fail and what it costs to fix.",
    gets: [
      "Code, security, database, hosting and payments reviewed",
      "Every finding ranked Critical to Low, each with an effort estimate",
      "A stop-the-bleeding list for this week, a fixed quote to ship, and a recorded 60-minute walkthrough",
    ],
    not: "Report only, no code changes. The full fee is credited against Rescue & Launch if you book within 30 days.",
    cta: "Request a Rescue Audit",
  },
  {
    id: "rescue-launch",
    name: "Rescue & Launch",
    price: "$6,000",
    from: true,
    time: "2 to 4 weeks",
    summary: "Critical and High issues fixed, the app hardened and deployed to your own cloud.",
    promise:
      "Everything Critical and High from the audit fixed, the app hardened and deployed to your own cloud, with tests and a runbook. The price is fixed before work starts; most land between $6,000 and $15,000.",
    gets: [
      "Authentication and permissions hardened, secrets out of the code, backups with one tested restore",
      "Error monitoring, automated tests on sign-up, login, payment and your core workflow, a repeatable deploy",
      "README, runbook, a 60-minute handover; you own the code, with a 30-day warranty",
    ],
    not: "New features, redesigns, data migration from another product and app-store submissions are quoted separately.",
    cta: "Talk about a Rescue",
  },
  {
    id: "ai-sprint",
    name: "AI Integration Sprint",
    price: "$4,500",
    time: "10 business days",
    summary: "One AI-powered workflow built into the software you already run.",
    promise:
      "One AI-powered workflow built into the software you already run: emails and PDFs turned into records, answers from your own documents with citations, inbound leads triaged and drafted, or a connector so Claude or ChatGPT can act on your system safely.",
    gets: [
      "The workflow running in production on your own accounts",
      "An evaluation set of 30 to 50 of your real examples with measured accuracy before sign-off",
      "Spend and rate-limit guardrails, an on/off switch, logs, human approval wherever money or customers are affected",
    ],
    not: "One workflow, fixed scope. Model fine-tuning and multi-workflow agent platforms are a separate quote; API usage runs on your own account.",
    cta: "Request an AI Sprint",
  },
  {
    id: "custom-build",
    name: "Custom operational software",
    price: "$8,000",
    from: true,
    time: "3 to 8 weeks",
    summary: "Software built from scratch for one business process.",
    promise:
      "Software built from scratch for one business process: quoting with manager approvals, inventory and serial tracking, delivery scheduling, dealer catalogs, customer portals, service-business operations. Fixed price between $8,000 and $40,000.",
    gets: [
      "A one-week paid Discovery ($950, credited): written scope, a not-included list and a fixed quote",
      "Working software demonstrated every Friday",
      "Launch on your accounts with tests, monitoring and a runbook, then an optional Care Plan at $900 a month",
    ],
    not: "Hosting, API usage, domains and licences stay on your accounts and are never marked up.",
    cta: "Start a Discovery",
  },
];

export const STEPS = [
  {
    title: "Tell me what is broken or what you want",
    body: "The form below takes two minutes. A link to the app or repo helps; a perfect brief is not required.",
  },
  {
    title: "A 20-minute call and a written scope",
    body: "Within one business day you get a scope with a not-included list and a fixed price. Nothing starts until you approve it.",
  },
  {
    title: "Pay to start, then watch it get built",
    body: "Small jobs are paid up front; builds are 50% to start and 50% at acceptance. You see working software every Friday.",
  },
  {
    title: "Launch on your own accounts",
    body: "Code, hosting and data stay yours. Defects in delivered work are fixed free for 30 days after acceptance.",
  },
];
