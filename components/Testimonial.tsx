import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

// Client quotes. Keep the quote text exactly as the client approved it.
export const TELETIME = {
  full: "A system ready for the new era of retail, built around our needs and fully customizable. Inventory, sales and approvals in one place: managers at every level can approve a negotiation in seconds, so deals get locked in, not lost, and customers feel the difference in our service. It has brought Teletime into the future, and it will help us scale our business and the ventures that come next.",
  short:
    "Managers at every level can approve a negotiation in seconds, so deals get locked in, not lost. It has brought Teletime into the future.",
  attribution: "JD, Operations Manager, Teletime Superstore",
  logo: { src: "/clients/teletime-logo.png", width: 7271, height: 1428 },
  alt: "Teletime Superstore",
};

// The client's logo in its own colours, on a white card. Width is fixed and
// height follows the file's aspect ratio, so it is never stretched.
function LogoCard() {
  return (
    <div className="self-start shrink-0 w-[140px] lg:w-[180px] bg-white rounded-lg px-3 py-2.5">
      <Image
        src={TELETIME.logo.src}
        width={TELETIME.logo.width}
        height={TELETIME.logo.height}
        alt={TELETIME.alt}
        sizes="(min-width: 1024px) 156px, 116px"
        className="block w-full h-auto"
      />
    </div>
  );
}

export default function Testimonial({
  quote,
  surface = "bg-dark-surface",
  link,
}: {
  quote: string;
  /** Panel background; pick the one that contrasts with the section. */
  surface?: string;
  link?: { href: string; label: ReactNode };
}) {
  return (
    <figure
      className={`${surface} border border-border-visible rounded-lg p-6 md:p-10 lg:p-12 flex flex-col md:flex-row gap-6 md:gap-10`}
    >
      <LogoCard />
      <div className="flex-1 min-w-0">
        <span
          aria-hidden="true"
          className="block font-sans font-[800] text-teal text-[48px] leading-[0.6] mb-4"
        >
          &ldquo;
        </span>
        <blockquote className="font-sans text-[19px] lg:text-[22px] text-white leading-[1.55] tracking-[-0.01em]">
          <p>{quote}</p>
        </blockquote>
        <figcaption className="font-mono text-[12px] text-muted tracking-[0.04em] mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span>{TELETIME.attribution}</span>
          {link && (
            <Link
              href={link.href}
              className="text-teal hover:text-white transition-colors duration-150"
            >
              {link.label}
            </Link>
          )}
        </figcaption>
      </div>
    </figure>
  );
}
