import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Keycap from "@/components/Keycap";

export const metadata: Metadata = {
  title: "Work: CRM and point of sale for a three-location retailer | CmdReturn",
  description:
    "Case study: the CRM, point of sale, quoting, inventory and delivery system a three-location Toronto-area retailer runs on every day.",
  alternates: { canonical: "https://cmdreturn.io/work" },
};

const features = [
  {
    category: "POINT OF SALE",
    name: "Full POS",
    why: "Because a sale that cannot be completed is a customer who leaves.",
    data: "Moneris integrated · HST calculated · multi-tender · receipt printed",
  },
  {
    category: "INVENTORY",
    name: "Multi-location inventory",
    why: "Because a product that exists in Mississauga and does not exist in Etobicoke is two different problems.",
    data: "3 locations · serial tracking · procurement triggers",
  },
  {
    category: "CUSTOMER CRM",
    name: "Customer intelligence",
    why: "Because your best customer deserves to be recognized the moment they walk in.",
    data: "Trade accounts · lifetime value · order history · custom pricing",
  },
  {
    category: "QUOTATION",
    name: "Quote builder",
    why: "Because a quote that takes 20 minutes is a sale that might not happen.",
    data: "PDF generation · financing options · spec imports · approval workflow",
  },
  {
    category: "PROCUREMENT",
    name: "Demand & procurement",
    why: "Because running out of your best-selling product is an operational failure, not bad luck.",
    data: "Reorder triggers · supplier tracking · receiving workflow · transfer management",
  },
  {
    category: "REPORTING",
    name: "Delivery & analytics",
    why: "Because what happens after the sale matters as much as the sale itself.",
    data: "Delivery manifests · route scheduling · sales analytics · staff performance",
  },
];

const operations = [
  {
    label: "TESTS",
    title: "3,600+ automated tests",
    body: "Across 200+ suites, green on every merge, so the stores are not the place changes get tested.",
  },
  {
    label: "APPROVALS",
    title: "Manager approvals built in",
    body: "The offline-capable point of sale and the quote builder both run on manager approval workflows. Access is by role: salesperson, supervisor, store manager, operations manager, admin.",
  },
  {
    label: "SECURITY",
    title: "A pre-launch security pass",
    body: "60 unauthenticated endpoints closed, secrets moved out of the code and each customer's data isolated. Every transaction is logged with role, timestamp, value and approval chain.",
  },
];

const results = [
  { number: "3", label: "STORES RUNNING ON IT DAILY" },
  { number: "15+", label: "STAFF USING IT" },
  { number: "112", label: "SCREENS BUILT AND SHIPPED" },
  { number: "3,600+", label: "AUTOMATED TESTS" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <ScrollReveal>
      <p className="font-mono text-[11px] text-teal tracking-[0.18em] mb-4">
        {children}
      </p>
    </ScrollReveal>
  );
}

export default function Work() {
  return (
    <>
      {/* Hero */}
      <section className="bg-carbon pt-32 pb-[64px] lg:pb-[96px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-[11px] text-teal tracking-[0.18em] mb-4">
              {"// case study · retail · toronto area"}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="font-sans font-[800] text-[40px] lg:text-[72px] text-white tracking-[-0.055em] leading-[0.98] max-w-[980px]">
              The CRM and point of sale behind a three-location retailer
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-sans font-light text-[18px] text-[#828282] leading-[1.7] mt-6 max-w-[640px]">
              One system for the sales floor, the stockroom and the back
              office, in daily use across three stores. Every feature exists
              because a real store needed it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-dark-surface py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-6 lg:gap-16">
          <div>
            <SectionLabel>{"// the problem"}</SectionLabel>
            <ScrollReveal delay={0.08}>
              <h2 className="font-sans text-[28px] lg:text-[32px] font-bold text-white tracking-[-0.02em] leading-[1.2]">
                The software never kept up.
              </h2>
            </ScrollReveal>
          </div>
          <div className="max-w-[640px]">
            <ScrollReveal delay={0.08}>
              <p className="font-sans text-[17px] text-muted leading-[1.8] mb-6">
                Teletime Superstore has sold appliances, electronics, furniture
                and mattresses in the Toronto area since 1986, from three
                locations. Real inventory, real customers, real margins.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="font-sans text-[17px] text-muted leading-[1.8] mb-6">
                The tools it had were clunky point-of-sale systems and
                spreadsheets updated at midnight. Inventory said one thing and
                the stockroom said another, and no one could see every location
                at once. Quotes took too long. A customer who drove forty-five
                minutes could leave empty-handed because the system was wrong.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="font-sans text-[17px] text-muted leading-[1.8]">
                It needed one system that ran the whole store and could be
                trusted on a busy Saturday.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What was built */}
      <section className="bg-carbon py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel>{"// what was built"}</SectionLabel>
          <ScrollReveal delay={0.08}>
            <h2 className="font-sans text-[28px] lg:text-[32px] font-bold text-white tracking-[-0.02em] leading-[1.2] mb-12 max-w-[720px]">
              Six areas, one system, from the sales floor to the invoice.
            </h2>
          </ScrollReveal>

          {/* TODO(screenshots): add real product screenshots here, one per
              feature area or a single gallery above the grid. Use next/image
              with explicit width/height, and blur or crop any customer data. */}

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-visible border border-border-visible rounded-lg overflow-hidden">
            {features.map((feature, i) => (
              <li key={feature.category} className="bg-carbon">
                <ScrollReveal
                  delay={(i % 3) * 0.06}
                  className="h-full p-6 lg:p-8 flex flex-col"
                >
                  <p className="font-mono text-[11px] text-[#7c7c7c] tracking-[0.14em] mb-3">
                    {feature.category}
                  </p>
                  <h3 className="font-sans text-[20px] font-bold text-white mb-3">
                    {feature.name}
                  </h3>
                  <p className="font-sans text-[15px] text-muted leading-[1.7] mb-5 flex-1">
                    {feature.why}
                  </p>
                  <p className="font-mono text-[12px] text-teal leading-[1.8]">
                    {feature.data.split(" · ").map((tag, j, all) => (
                      <span key={tag}>
                        <span className="whitespace-nowrap">{tag}</span>
                        {j < all.length - 1 && " · "}
                      </span>
                    ))}
                  </p>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it's run */}
      <section className="bg-dark-surface py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel>{"// how it’s run"}</SectionLabel>
          <ScrollReveal delay={0.08}>
            <h2 className="font-sans text-[28px] lg:text-[32px] font-bold text-white tracking-[-0.02em] leading-[1.2] mb-12 max-w-[720px]">
              Production, not demo.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {operations.map((item, i) => (
              <ScrollReveal
                key={item.label}
                delay={i * 0.06}
                className="border-t-2 border-[#10b7a4] pt-5"
              >
                <p className="font-mono text-[11px] text-[#10b7a4] tracking-[0.14em] mb-3">
                  {item.label}
                </p>
                <h3 className="font-sans text-[18px] font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-[15px] text-muted leading-[1.7]">
                  {item.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.12}>
            <p className="font-mono text-[12px] text-[#7c7c7c] leading-[1.9] mt-12">
              Stack: React · Node.js · PostgreSQL · AWS · 147 API routes · 269 migrations
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="bg-carbon py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel>{"// results"}</SectionLabel>
          <ScrollReveal delay={0.08}>
            <h2 className="font-sans text-[28px] lg:text-[32px] font-bold text-white tracking-[-0.02em] leading-[1.2] mb-12 max-w-[720px]">
              The system three stores run on, every day.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {results.map((stat, i) => (
              <ScrollReveal
                key={stat.label}
                delay={i * 0.06}
                className={[
                  "pr-4 border-border-subtle",
                  i % 2 === 1 ? "pl-4 lg:pl-6 border-l" : "",
                  i === 2 ? "lg:pl-6 lg:border-l" : "",
                ].join(" ")}
              >
                <span className="block font-sans font-[800] text-[40px] lg:text-[56px] text-white tracking-[-0.04em] leading-[1.1]">
                  {stat.number}
                </span>
                <span className="block font-mono text-[11px] text-[#828282] tracking-[0.12em] mt-2 leading-[1.6]">
                  {stat.label}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-surface py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-sans font-[800] text-[32px] lg:text-[52px] text-white tracking-[-0.04em] leading-[1.1]">
              Need something like this?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-sans font-light text-[16px] text-[#7c7c7c] mt-4 max-w-[520px] mx-auto">
              Custom operational software is a fixed price between $8,000 and
              $40,000, starting with a one-week paid Discovery.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-10">
              <Keycap href="/contact" className="text-[15px]">
                Get a fixed quote
              </Keycap>
              <Link
                href="/offers#custom-build"
                className="font-sans text-[14px] font-semibold text-[#9a9a9a] hover:text-white transition-colors duration-150"
              >
                See the offer →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
