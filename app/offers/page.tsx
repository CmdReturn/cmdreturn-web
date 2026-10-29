import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ContactForm from "./ContactForm";
import { KeycapLabel as Keycap } from "@/components/Keycap";
import { OFFERS, STEPS } from "./data";
import "./offers.css";

export const metadata: Metadata = {
  title: "Fixed-price software: fixes, rescues, AI integration | CmdReturn",
  description:
    "CmdReturn builds and fixes operational software for small businesses at fixed prices: urgent bugs fixed in 2 days, AI-built apps made production-ready, AI workflows live in 10 days, custom systems from $8,000.",
  alternates: { canonical: "https://cmdreturn.io/offers" },
  openGraph: {
    title: "Press Enter on your business | CmdReturn",
    description:
      "Fixed-price software for small businesses, delivered in weeks by a senior engineer who built, and runs, the systems a three-location retailer operates on.",
    url: "https://cmdreturn.io/offers",
    siteName: "CmdReturn",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function OffersPage() {
  return (
    <div className="cr-offers">
      <section className="cr-hero">
        <div className="cr-wrap">
          <p className="cr-eyebrow">{"// fixed-price offers"}</p>
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
            engineer who built, and runs, the systems a three-location retailer
            operates on.
          </p>
          <p className="cr-hero-note">
            Based in Toronto, Ontario. Every request answered within one
            business day.
          </p>
        </div>
      </section>

      <section className="cr-section cr-alt" id="offers" aria-labelledby="offers-h">
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
            dollars plus applicable GST/HST.
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
            {STEPS.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cr-section cr-alt" aria-labelledby="proof-h">
        <div className="cr-wrap">
          <h2 id="proof-h">Built by the person behind the system three stores run on</h2>
          <div className="cr-proof">
            <div>
              <p>
                I am Dave Miller, founder of CmdReturn and head of IT and
                security at Teletime Superstore, a three-location appliance and
                furniture retailer in the Toronto area founded in 1986, where I
                have also run a sales floor since 2016. The quoting, inventory
                and point-of-sale system the stores run on is one I
                built myself, and I use AI-augmented development to deliver the
                same kind of software to other small businesses in weeks instead
                of months.
              </p>
              <p>
                That means the bar for your project is the one the stores hold
                me to every day: production, not demo.
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

    </div>
  );
}
