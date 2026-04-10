import ScrollReveal from "@/components/ScrollReveal";

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
    data: "2,652 SKUs · 2 locations · serial tracking · procurement triggers",
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

export default function Platform() {
  return (
    <>
      {/* Hero */}
      <section className="bg-carbon pt-32 pb-16 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-[11px] text-teal tracking-[0.18em] mb-4">
              // the blueprint
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="font-sans font-[800] text-[48px] lg:text-[72px] text-white tracking-[-0.055em] leading-[0.92]">
              The platform.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-sans font-light text-[18px] text-[#444444] mt-4">
              Every feature exists because a real store needed it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      {features.map((feature, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={feature.category}
            className={`py-[64px] lg:py-[120px] ${i % 2 === 0 ? "bg-carbon" : "bg-dark-surface"}`}
          >
            <div
              className={`max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "direction-rtl" : ""}`}
            >
              <div
                className={`${reversed ? "lg:order-2" : ""}`}
              >
                <ScrollReveal>
                  <p className="font-mono text-[11px] text-[#333333] tracking-[0.14em] mb-3">
                    {feature.category}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.08}>
                  <h2 className="font-sans text-[32px] font-bold text-white mb-4">
                    {feature.name}
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.16}>
                  <p className="font-sans text-[16px] text-muted leading-[1.7] mb-6">
                    {feature.why}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.24}>
                  <p className="font-mono text-[12px] text-teal">
                    {feature.data}
                  </p>
                </ScrollReveal>
              </div>
              <div className={`${reversed ? "lg:order-1" : ""}`}>
                <ScrollReveal delay={0.16}>
                  <div className="bg-[#0A0A0A] border border-border-subtle rounded-lg h-[300px] lg:h-[400px] p-8 flex flex-col justify-between">
                    <div className="flex gap-1.5 mb-6">
                      <span className="w-2 h-2 rounded-full bg-[#333333]" />
                      <span className="w-2 h-2 rounded-full bg-[#333333]" />
                      <span className="w-2 h-2 rounded-full bg-[#333333]" />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      {[...Array(5)].map((_, j) => (
                        <div
                          key={j}
                          className="h-[1px] bg-border-subtle"
                          style={{ width: `${60 + Math.random() * 30}%` }}
                        />
                      ))}
                      <div className="mt-auto grid grid-cols-3 gap-3">
                        {[...Array(6)].map((_, j) => (
                          <div
                            key={j}
                            className="h-8 bg-[#111111] rounded-[2px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
