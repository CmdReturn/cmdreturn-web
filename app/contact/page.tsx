import type { Metadata } from "next";
import { Suspense } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/app/offers/ContactForm";
import "../offers/offers.css";

export const metadata: Metadata = {
  title: "Contact | CmdReturn",
  description:
    "Ask for a fixed quote. You hear back within one business day with a price or two questions.",
};

export default function Contact() {
  return (
    <section className="bg-carbon min-h-screen pt-32 pb-[64px] lg:pb-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-mono text-[11px] text-teal tracking-[0.18em] mb-4">
            {"// press enter"}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1 className="font-sans font-[800] text-[36px] lg:text-[52px] text-white tracking-[-0.04em]">
            Get a fixed quote.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="font-sans font-light text-[16px] text-[#828282] mt-4 max-w-[480px] mx-auto">
            Two minutes to fill in. You hear back within one business day
            with a price or two questions.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          {/* Same form and /api/contact route as /offers, in the dark theme. */}
          <div className="cr-offers cr-dark max-w-[560px] mx-auto mt-12 bg-[#0A0A0A] border border-border-subtle rounded-lg p-8 text-left">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.32}>
          <div className="font-mono text-[12px] text-[#7c7c7c] leading-[2.2] mt-12">
            <p>dave@cmdreturn.io</p>
            <p>647-544-1775</p>
            <p>Toronto, Ontario</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
