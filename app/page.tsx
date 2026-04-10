import Link from "next/link";
import Terminal from "@/components/Terminal";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-carbon overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(#0F0F0F 1px, transparent 1px), linear-gradient(90deg, #0F0F0F 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-24">
          <div className="text-center">
            <ScrollReveal>
              <p className="font-mono text-[12px] text-teal tracking-[0.18em] mb-6">
                // retail management platform
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h1 className="font-sans font-[800] text-[48px] lg:text-[88px] tracking-[-0.055em] leading-[0.92] text-white">
                Your store.
                <br />
                Total <span className="text-teal">command</span>.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="font-sans font-light text-[18px] text-[#444444] leading-[1.7] max-w-[420px] mx-auto mt-6">
                Built for Canadian independent retailers and the institutions
                that serve them. From the sales floor to the invoice.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.24}>
              <div className="flex items-center justify-center gap-8 mt-9">
                <Link
                  href="/contact"
                  className="font-sans text-[14px] font-semibold text-teal hover:text-mint transition-colors duration-150"
                >
                  Request a technical deep-dive →
                </Link>
                <Link
                  href="/platform"
                  className="font-sans text-[14px] text-[#333333] hover:text-muted transition-colors duration-150"
                >
                  View the platform →
                </Link>
              </div>
            </ScrollReveal>

            <Terminal />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-carbon py-[120px] lg:py-[120px] py-[64px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { number: "2,652", label: "PRODUCTS CATALOGUED" },
              { number: "112", label: "SCREENS BUILT AND SHIPPED" },
              { number: "$0", label: "AGENCY FEES PAID" },
            ].map((stat, i) => (
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
          <ScrollReveal delay={0.32}>
            <p className="font-mono text-[12px] text-teal text-center mt-16">
              // built by the operator. for the operator.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Three audience paths */}
      <section className="bg-dark-surface py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-[11px] text-[#333333] tracking-[0.14em] mb-16">
              THREE AUDIENCES. ONE PLATFORM.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Store Owners",
                body: "You run the floor. You know every product, every customer, every margin. You need software that keeps up — not software that slows you down.",
                link: { text: "See the platform →", href: "/platform" },
              },
              {
                title: "Institutional Buyers",
                body: "Procurement requires precision. Audit trails. PIPEDA compliance. Canadian data residency. Role-based access. Net-30 invoicing. We speak your language.",
                link: { text: "See compliance →", href: "/institutional" },
              },
              {
                title: "Developers",
                body: "React · Node.js · PostgreSQL · AWS. 147 API routes. 269 migrations. 25,000 lines of production JSX. The architecture is solid because the business demanded it.",
                link: { text: "See the stack →", href: "/platform" },
              },
            ].map((col, i) => (
              <ScrollReveal key={col.title} delay={i * 0.08}>
                <div>
                  <h3 className="font-sans text-[22px] font-bold text-white mb-4">
                    {col.title}
                  </h3>
                  <p className="font-sans text-[15px] text-muted leading-[1.8] mb-6">
                    {col.body}
                  </p>
                  <Link
                    href={col.link.href}
                    className="font-mono text-[12px] text-teal hover:text-mint transition-colors duration-150"
                  >
                    {col.link.text}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Single statement */}
      <section className="bg-carbon py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-sans font-[800] text-[32px] lg:text-[52px] text-white tracking-[-0.04em] leading-[1.1]">
              The return key is the most decisive key on any keyboard.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-sans font-light text-[16px] text-[#333333] mt-4">
              You hit it when you mean it. That is the software we build.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
