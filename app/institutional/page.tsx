import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const evidence = [
  {
    label: "FEDERALLY INCORPORATED",
    detail:
      "CmdReturn Inc. — Canada Business Corporations Act (CBCA)",
  },
  {
    label: "ONTARIO REGISTERED",
    detail:
      "Extra-provincial registration — Ontario Corporations Information Act",
  },
  {
    label: "PIPEDA COMPLIANT",
    detail: "Canadian data privacy law compliance from day one",
  },
  {
    label: "CANADIAN DATA RESIDENCY",
    detail:
      "AWS ca-central-1 Montreal — your data does not leave Canada",
  },
  {
    label: "HST REGISTERED",
    detail: "Ontario HST account — proper invoicing from day one",
  },
  {
    label: "NUANS VERIFIED",
    detail: "Federal corporate name search — reservation 122834163",
  },
  {
    label: "AUDIT TRAIL",
    detail:
      "Every transaction logged — role · timestamp · value · approval chain",
  },
  {
    label: "ROLE-BASED ACCESS",
    detail:
      "Salesperson · Supervisor · Store Manager · Operations Manager · Admin",
  },
  {
    label: "NET-30 INVOICING",
    detail: "Institutional payment terms supported",
  },
  {
    label: "VENDOR REGISTRATION",
    detail: "MERX and Biddingo registration in progress",
  },
];

export default function Institutional() {
  return (
    <>
      {/* Hero */}
      <section className="bg-carbon pt-32 pb-16 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-[11px] text-teal tracking-[0.18em] mb-4">
              // for municipalities · school boards · housing authorities
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="font-sans font-[800] text-[48px] lg:text-[72px] text-white tracking-[-0.055em] leading-[0.92]">
              Every keystroke accountable.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-sans font-light text-[18px] text-[#444444] mt-4">
              No hype. Evidence only.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Evidence grid */}
      <section className="bg-carbon py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {evidence.map((item, i) => (
              <ScrollReveal key={item.label} delay={(i % 2) * 0.08}>
                <div>
                  <p className="font-mono text-[12px] text-teal tracking-[0.1em] mb-2">
                    {item.label}
                  </p>
                  <p className="font-sans text-[15px] text-muted leading-[1.7]">
                    {item.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-dark-surface py-[64px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-sans font-[800] text-[32px] lg:text-[42px] text-white tracking-[-0.04em]">
              Built in Ontario. For Ontario.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="font-sans font-light text-[16px] text-[#444444] mt-4 max-w-[480px] mx-auto leading-[1.7]">
              Not a US company with a Canadian office. A federally incorporated
              Canadian company, built by a 40-year Ontario retailer, running on
              Canadian infrastructure.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <Link
              href="/contact"
              className="inline-block font-mono text-[13px] text-teal hover:text-mint transition-colors duration-150 mt-8"
            >
              Request an institutional overview →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
