import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import ContactForm from "./ContactForm";
import "./offers.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fixed-price software: fixes, rescues, AI integration | CmdReturn",
  description:
    "CmdReturn builds and fixes operational software for small businesses at fixed prices: urgent bugs fixed in 2 days, AI-built apps made production-ready, AI workflows live in 10 days, custom systems from $8,000.",
  alternates: { canonical: "https://cmdreturn.io/offers" },
  openGraph: {
    title: "Press Enter on your business | CmdReturn",
    description:
      "Fixed-price software for small businesses, delivered in weeks by a senior engineer who runs his own three-location retail business on what he builds.",
    url: "https://cmdreturn.io/offers",
    siteName: "CmdReturn",
    type: "website",
  },
};

type Offer = {
  id: string;
  name: string;
  price: string;
  from?: boolean;
  time: string;
  promise: string;
  gets: string[];
  not: string;
  cta: string;
};

const OFFERS: Offer[] = [
  {
    id: "spot-fix",
    name: "Spot Fix",
    price: "$450",
    time: "2 business days",
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

function Keycap({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span>{children}</span>
      <span className="cr-key-glyph" aria-hidden="true">
        ↵
      </span>
    </>
  );
}

export default function OffersPage() {
  return (
    <main className={`cr-offers ${plexSans.variable} ${plexMono.variable}`}>
      <section className="cr-hero">
        <div className="cr-wrap">
          <h1>
            Press{" "}
            <Link href="#quote" className="cr-key">
              <Keycap>Enter</Keycap>
            </Link>{" "}
            on your business.
          </h1>
          <p className="cr-hero-lead">
            Fixed-price software for small businesses: urgent bugs fixed in two
            days, AI-built apps made production-ready, AI workflows live in ten
            days, and systems built from scratch. Delivered in weeks by a senior
            engineer who runs his own three-location retail business on what he
            builds.
          </p>
          <p className="cr-hero-note">
            Based in Mississauga, Ontario. Every request answered within one
            business day.
          </p>
        </div>
      </section>

      <section className="cr-section" id="offers" aria-labelledby="offers-h">
        <div className="cr-wrap">
          <h2 id="offers-h">Five ways to work with CmdReturn</h2>
          <p className="cr-section-lead">
            Every offer is a fixed price with a written scope, a delivery date
            and a 30-day warranty. Pick the one that matches where you are.
          </p>
          <ol className="cr-list">
            {OFFERS.map((o) => (
              <li className="cr-offer" key={o.id} id={o.id}>
                <div className="cr-price">
                  {o.from && <span className="cr-from">from</span>}
                  {o.price}
                  <span className="cr-time">{o.time}</span>
                </div>
                <div>
                  <h3>{o.name}</h3>
                  <p>{o.promise}</p>
                  <ul>
                    {o.gets.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                  <p className="cr-not">{o.not}</p>
                  <Link
                    href={`/offers?offer=${o.id}#quote`}
                    className="cr-key"
                  >
                    <Keycap>{o.cta}</Keycap>
                  </Link>
                </div>
              </li>
            ))}
          </ol>
          <p className="cr-prices-note">
            Prices in US dollars. Canadian businesses are billed in Canadian
            dollars plus HST.
          </p>
        </div>
      </section>

      <section className="cr-section" aria-labelledby="how-h">
        <div className="cr-wrap">
          <h2 id="how-h">How a project runs</h2>
          <p className="cr-section-lead">
            The same four steps whether it is a two-day fix or an eight-week
            build.
          </p>
          <ol className="cr-steps">
            <li>
              <h3>Tell me what is broken or what you want</h3>
              <p>
                The form below takes two minutes. A link to the app or repo
                helps; a perfect brief is not required.
              </p>
            </li>
            <li>
              <h3>A 20-minute call and a written scope</h3>
              <p>
                Within one business day you get a scope with a not-included
                list and a fixed price. Nothing starts until you approve it.
              </p>
            </li>
            <li>
              <h3>Pay to start, then watch it get built</h3>
              <p>
                Small jobs are paid up front; builds are 50% to start and 50% at
                acceptance. You see working software every Friday.
              </p>
            </li>
            <li>
              <h3>Launch on your own accounts</h3>
              <p>
                Code, hosting and data stay yours. Defects in delivered work are
                fixed free for 30 days after acceptance.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="cr-section" aria-labelledby="proof-h">
        <div className="cr-wrap">
          <h2 id="proof-h">Built by someone who runs his business on it</h2>
          <div className="cr-proof">
            <div>
              <p>
                I am Dave Miller, founder of CmdReturn and owner-operator of
                Teletime Superstore, a three-location appliance and furniture
                retailer in the Toronto area founded in 1986. The quoting,
                inventory and point-of-sale system our stores run on is one I
                built myself, and I use AI-augmented development to deliver the
                same kind of software to other small businesses in weeks instead
                of months.
              </p>
              <p>
                That means the bar for your project is the one I hold my own
                stores to: production, not demo.
              </p>
              <div className="cr-stack">
                <strong>Stack:</strong> React, Next.js, Node, PostgreSQL, AWS,
                Fly.io, Stripe, Docker, n8n, Claude and OpenAI APIs, MCP.
              </div>
            </div>
            <ul>
              <li>
                A multi-tenant CRM and point-of-sale system in daily use across
                three retail locations, built and operated by me
              </li>
              <li>
                3,600+ automated tests across 200+ suites, green on every merge
              </li>
              <li>
                A pre-launch security pass that closed 60 unauthenticated
                endpoints, moved secrets out of code and isolated each
                customer&rsquo;s data
              </li>
              <li>
                Stripe billing and Stripe Connect with HST-compliant invoicing;
                consumer-financing, construction-data and vendor-catalog
                integrations
              </li>
              <li>
                An offline-capable point of sale with manager approval
                workflows
              </li>
              <li>
                A second product, CleanOps Pro: scheduling, crews, invoicing and
                payments for cleaning companies
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cr-section" aria-labelledby="terms-h">
        <div className="cr-wrap">
          <h2 id="terms-h">The terms, in short</h2>
          <p className="cr-section-lead">
            The full terms come with every quote. These are the ones people
            ask about.
          </p>
          <dl className="cr-terms">
            <div>
              <dt>Payment</dt>
              <dd>
                Spot Fix and Audit paid in full to start. Builds 50% to start,
                50% at acceptance; over $10,000, 40/30/30. Card or e-transfer.
              </dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>
                Written scope with a not-included list before any payment.
                Anything outside it is a change order, quoted before it starts.
              </dd>
            </div>
            <div>
              <dt>Revisions</dt>
              <dd>
                Two rounds on each deliverable. Further changes at $95 an hour
                or a new fixed quote.
              </dd>
            </div>
            <div>
              <dt>Warranty</dt>
              <dd>
                Defects in delivered work fixed free for 30 days after
                acceptance. New requests are quoted.
              </dd>
            </div>
            <div>
              <dt>Ownership</dt>
              <dd>
                You own the code on final payment. Hosting, API usage, domains
                and licences stay on your accounts.
              </dd>
            </div>
            <div>
              <dt>Access and response</dt>
              <dd>
                Read access to your repo and hosting before the start date.
                Replies within one business day, Eastern time.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="cr-quote" id="quote" aria-labelledby="quote-h">
        <div className="cr-wrap">
          <h2 id="quote-h">Get a fixed quote</h2>
          <p className="cr-section-lead">
            Two minutes to fill in. You hear back within one business day with
            a price or two questions.
          </p>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      <footer className="cr-foot">
        <div className="cr-wrap">
          <p>CmdReturn Inc., Mississauga, Ontario, Canada.</p>
          <p>
            Prices in US dollars; Canadian businesses billed in Canadian dollars
            plus 13% HST.
          </p>
        </div>
      </footer>
    </main>
  );
}
