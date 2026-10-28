import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About | CmdReturn",
};

const paragraphs = [
  "Teletime Superstore was founded in 1986. Appliances. Electronics. Furniture. Mattresses. Three locations in the Toronto area. Real inventory, real customers, real margins.",
  "Dave Miller has run a sales floor and led IT and security there since 2016. For years the software never kept up. Clunky POS systems. Spreadsheets at midnight. Inventory that said one thing and the stockroom said another. A customer who drove forty-five minutes and left empty-handed because the system was wrong.",
  "So he built the system Teletime’s three stores now run on. The quotation system, because quotes took too long. The inventory system, because there was no way to see every location at once. The CRM, because the best customers deserved better than a spreadsheet.",
  "CmdReturn is the company he founded to build that kind of software for other businesses. Every feature in this platform came from a real problem on a real sales floor.",
  "This is not a side project. This is not a demo. It is the system three stores run on every day.",
];

const stats = [
  { number: "3", label: "LOCATIONS" },
  { number: "15+", label: "STAFF ON THE PLATFORM" },
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
              // built at the counter. not in a boardroom.
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
    </>
  );
}
