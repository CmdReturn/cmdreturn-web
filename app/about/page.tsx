import ScrollReveal from "@/components/ScrollReveal";

const paragraphs = [
  "Teletime Superstore opened in Mississauga in the 1980s. Appliances. Electronics. Furniture. Mattresses. Two locations. Fifteen staff. Real inventory, real customers, real margins.",
  "For forty years, the software never kept up. Clunky POS systems. Spreadsheets at midnight. Inventory that said one thing and the stockroom said another. A customer who drove forty-five minutes and left empty-handed because the system was wrong.",
  "CmdReturn exists because we ran out of patience with software built by people who have never worked a sales floor. Every feature in this platform came from a real problem we could not solve any other way.",
  "We built the quotation system because our quotes took too long. We built the inventory system because we had two locations and no way to see both at once. We built the CRM because our best customers deserved better than a spreadsheet.",
  "This is not a side project. This is not a demo. This is the system our store runs on.",
];

const stats = [
  { number: "40+", label: "YEARS IN RETAIL" },
  { number: "2", label: "LOCATIONS" },
  { number: "15+", label: "STAFF ON THE PLATFORM" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-carbon pt-32 pb-16 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-[11px] text-teal tracking-[0.18em] mb-4">
              // built at the counter. not in a boardroom.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="font-sans font-[800] text-[48px] lg:text-[72px] text-white tracking-[-0.055em] leading-[0.92]">
              40 years.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-carbon py-[64px] lg:py-[120px]">
        <div className="max-w-[680px] mx-auto px-6">
          {paragraphs.map((text, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <p className="font-sans text-[20px] text-muted leading-[1.9] mb-10">
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
                  <span className="font-mono text-[11px] text-[#444444] tracking-[0.12em] mt-2">
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
