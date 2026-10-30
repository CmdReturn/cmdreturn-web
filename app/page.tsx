import type { Metadata } from "next";
import Link from "next/link";
import Terminal from "@/components/Terminal";
import ScrollReveal from "@/components/ScrollReveal";
import Keycap from "@/components/Keycap";
import Testimonial, { TELETIME } from "@/components/Testimonial";
import { OFFERS, STEPS } from "@/app/offers/data";

export const metadata: Metadata = {
  title: "Fixed-price software for small businesses | CmdReturn",
};

const proof = [
  { number: "3", label: "RETAIL LOCATIONS RUNNING LIVE" },
  { number: "3,600+", label: "AUTOMATED TESTS" },
  { number: "30-day", label: "WARRANTY ON EVERY JOB" },
];

// On the home page there is no form directly below the steps.
const steps = STEPS.map((s, i) =>
  i === 0
    ? { ...s, body: s.body.replace("The form below", "The quote form") }
    : s
);

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

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-32 pb-20">
          <div className="text-center">
            <ScrollReveal>
              <p className="font-mono text-[12px] text-teal tracking-[0.18em] mb-6">
                {"// fixed-price software studio"}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h1 className="font-sans font-[800] text-[44px] sm:text-[56px] lg:text-[88px] tracking-[-0.055em] leading-[0.95] text-white">
                Software that ships.
                <br />
                At a <span className="text-teal">fixed price</span>.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="font-sans font-light text-[18px] text-[#828282] leading-[1.7] max-w-[560px] mx-auto mt-6">
                Fixes, rescues of AI-built apps, AI integrations and custom
                systems for small businesses, scoped and priced before work
                starts.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.24}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-10">
                <Keycap href="/contact" className="text-[15px]">
                  Get a fixed quote
                </Keycap>
                <Link
                  href="/offers"
                  className="font-sans text-[14px] font-semibold text-[#9a9a9a] hover:text-white transition-colors duration-150"
                >
                  See the offers →
                </Link>
              </div>
            </ScrollReveal>

            <Terminal />
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="bg-dark-surface py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-[11px] text-teal tracking-[0.18em] mb-4">
              {"// five fixed-price offers"}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="font-sans font-[800] text-[32px] lg:text-[44px] text-white tracking-[-0.04em] leading-[1.1] mb-12">
              Pick the one that matches where you are.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-border-visible border border-border-visible rounded-lg overflow-hidden">
              {OFFERS.map((o, i) => (
                <li
                  key={o.id}
                  className={`bg-carbon ${i === OFFERS.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <Link
                    href={`/offers#${o.id}`}
                    className="group flex flex-col h-full p-6 hover:bg-[#0d0d0d] transition-colors duration-150"
                  >
                    {/* Cards without a "from" label get matching top padding
                        (11px label + 8px gap) so prices line up in a row. */}
                    <span
                      className={`font-sans text-[32px] font-[800] text-white tracking-[-0.04em] leading-none ${o.from ? "" : "md:pt-[19px]"}`}
                    >
                      {o.from && (
                        <span className="block font-mono text-[11px] font-normal text-[#7c7c7c] tracking-[0.12em] mb-2">
                          FROM
                        </span>
                      )}
                      {o.price}
                    </span>
                    <span className="font-mono text-[11px] text-teal tracking-[0.08em] mt-3">
                      {o.time}
                    </span>
                    <h3 className="font-sans text-[17px] font-semibold text-white leading-[1.3] mt-5">
                      {o.name}
                    </h3>
                    <p className="font-sans text-[14px] text-muted leading-[1.6] mt-2 flex-1">
                      {o.summary}
                    </p>
                    <span className="font-mono text-[12px] text-teal group-hover:text-white transition-colors duration-150 mt-5">
                      Details →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-sans text-[13px] text-[#7c7c7c] mt-6">
              Prices in US dollars. Canadian businesses are billed in Canadian
              dollars plus applicable GST/HST.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="mt-10 lg:mt-12">
            <Testimonial
              quote={TELETIME.short}
              surface="bg-carbon"
              link={{ href: "/work", label: "See the system we built →" }}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Proof strip */}
      <section className="bg-carbon py-[64px] lg:py-[96px] border-y border-border-subtle">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {proof.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div
                  className={`flex flex-col items-center text-center py-6 md:py-0 ${i > 0 ? "border-t border-border-subtle md:border-t-0 md:border-l" : ""}`}
                >
                  <span className="font-sans font-[800] text-[56px] lg:text-[64px] text-white tracking-[-0.04em] leading-[1.1]">
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

      {/* Recent work */}
      <section className="bg-dark-surface py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <Link
              href="/work"
              className="group block bg-carbon border border-border-visible rounded-lg p-6 sm:p-8 lg:p-12 hover:border-[#333333] transition-colors duration-150"
            >
              <p className="font-mono text-[11px] text-teal tracking-[0.18em] mb-4">
                {"// recent work"}
              </p>
              <h2 className="font-sans font-[800] text-[28px] lg:text-[44px] text-white tracking-[-0.04em] leading-[1.1] max-w-[760px]">
                The CRM and point of sale behind a three-location retailer
              </h2>
              <p className="font-sans text-[16px] text-muted leading-[1.7] max-w-[620px] mt-5">
                Point of sale, quoting, inventory across every location,
                customer accounts, procurement and delivery: one system, built
                and run for a Toronto-area retailer and in daily use across its
                three stores.
              </p>
              <p className="font-mono text-[12px] text-[#7c7c7c] mt-6 leading-[1.8]">
                POS · inventory · CRM · quoting · procurement · delivery
              </p>
              <span className="inline-block font-mono text-[13px] text-teal group-hover:text-white transition-colors duration-150 mt-8">
                Read the case study →
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* How a project runs */}
      <section className="bg-carbon py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-[11px] text-teal tracking-[0.18em] mb-4">
              {"// how a project runs"}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="font-sans font-[800] text-[32px] lg:text-[44px] text-white tracking-[-0.04em] leading-[1.1] mb-12">
              The same four steps, whether it is a two-day fix or an eight-week
              build.
            </h2>
          </ScrollReveal>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="list-none">
                <ScrollReveal
                  delay={i * 0.06}
                  className="border-t-2 border-teal pt-5"
                >
                  <span className="block font-mono text-[13px] text-teal mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="font-sans text-[17px] font-semibold text-white leading-[1.35] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[15px] text-muted leading-[1.7]">
                    {step.body}
                  </p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Founder line */}
      <section className="bg-dark-surface py-[64px] lg:py-[96px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="font-sans text-[20px] lg:text-[24px] font-light text-[#b5b5b5] leading-[1.6] max-w-[820px]">
              CmdReturn is run by{" "}
              <span className="text-white font-normal">Dave Miller</span>, who
              has led IT and security at a three-location retailer since 2016
              and built the system its stores run on. Every job is held to the
              same bar: production, not demo.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <Link
              href="/about"
              className="inline-block font-mono text-[13px] text-teal hover:text-white transition-colors duration-150 mt-6"
            >
              About the founder →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-carbon py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-sans font-[800] text-[32px] lg:text-[52px] text-white tracking-[-0.04em] leading-[1.1]">
              The return key is the most decisive key on any keyboard.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-sans font-light text-[16px] text-[#7c7c7c] mt-4">
              Two minutes to fill in. You hear back within one business day
              with a price or two questions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <div className="mt-10">
              <Keycap href="/contact" className="text-[15px]">
                Get a fixed quote
              </Keycap>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
