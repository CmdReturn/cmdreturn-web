import type { ReactNode } from "react";

// Shared layout for /privacy and /terms: a single readable column.
export default function LegalPage({
  label,
  title,
  updated,
  intro,
  children,
}: {
  label: string;
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="bg-carbon pt-32 pb-[64px] lg:pb-[120px]">
      <div className="max-w-[760px] mx-auto px-6">
        <p className="font-mono text-[11px] text-teal tracking-[0.18em] mb-4">
          {label}
        </p>
        <h1 className="font-sans font-[800] text-[40px] lg:text-[56px] text-white tracking-[-0.045em] leading-[1.05]">
          {title}
        </h1>
        <p className="font-mono text-[12px] text-[#7c7c7c] mt-4">
          Last updated: {updated}
        </p>
        <div className="font-sans text-[17px] text-muted leading-[1.8] mt-8">
          {intro}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border-visible pt-8 mt-10 first:mt-0">
      <h2 className="font-sans text-[22px] font-bold text-white tracking-[-0.01em] mb-4">
        {title}
      </h2>
      <div className="font-sans text-[16px] text-muted leading-[1.8] space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-teal [&_a]:text-teal [&_a:hover]:text-white [&_strong]:text-white [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}
