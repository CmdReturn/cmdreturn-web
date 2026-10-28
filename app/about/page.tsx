import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Keycap from "@/components/Keycap";

export const metadata: Metadata = {
  title: "About | CmdReturn",
  description:
    "Dave Miller, founder of CmdReturn, built the system a three-location Toronto-area retailer runs on, and now builds the same kind of software for other businesses.",
};

const paragraphs = [
  "Dave Miller is the founder of CmdReturn, a fixed-price software studio for small businesses, based in Toronto.",
  "Since 2016 he has run a sales floor and led IT and security at Teletime Superstore, an appliance, electronics, furniture and mattress retailer in the Toronto area, founded in 1986 and now operating three locations.",
  "For years the software never kept up. Clunky POS systems. Spreadsheets at midnight. Inventory that said one thing and the stockroom said another. A customer who drove forty-five minutes and left empty-handed because the system was wrong.",
  "So he built the system Teletime’s three stores now run on. The quotation system, because quotes took too long. The inventory system, because there was no way to see every location at once. The CRM, because the best customers deserved better than a spreadsheet.",
  "CmdReturn is how he now builds the same kind of software for other businesses: urgent fixes, rescues of AI-built apps, AI integrations and custom systems, each scoped and priced before work starts.",
  "The bar is the one the stores hold him to every day: production, not demo.",
];

const stats = [
  { number: "3", label: "LOCATIONS" },
  { number: "15+", label: "STAFF ON THE SYSTEM" },
  { number: "3,600+", label: "AUTOMATED TESTS" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-carbon pt-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-[11px] text-teal tracking-[0.18em] mb-4">
              {"// the founder"}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="font-sans font-[800] text-[48px] lg:text-[72px] text-white tracking-[-0.055em] leading-[0.92]">
              Built on a sales floor.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-carbon py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          {paragraphs.map((text, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <p className="font-sans text-[20px] text-muted leading-[1.9] mb-10 max-w-[632px]">
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark-surface py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div
                  className={`flex flex-col items-center py-8 md:py-0 ${i > 0 ? "md:border-l md:border-border-subtle" : ""}`}
                >
                  <span className="font-sans font-[800] text-[64px] text-white tracking-[-0.04em]">
                    {stat.number}
                  </span>
                  <span className="font-mono text-[11px] text-[#828282] tracking-[0.12em] mt-2">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-carbon py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-sans font-[800] text-[32px] lg:text-[44px] text-white tracking-[-0.04em] leading-[1.1] max-w-[720px]">
              Same standard, for your business.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mt-10">
              <Keycap href="/contact" className="text-[15px]">
                Get a fixed quote
              </Keycap>
              <Link
                href="/work"
                className="font-sans text-[14px] font-semibold text-[#9a9a9a] hover:text-white transition-colors duration-150"
              >
                Read the case study →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
