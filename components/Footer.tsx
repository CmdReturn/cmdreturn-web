import Link from "next/link";
import { COMPANY, EMAIL, LINKEDIN_URL, PHONE, PHONE_E164 } from "@/lib/site";

const LINK = "hover:text-white transition-colors duration-150";

export default function Footer() {
  return (
    <footer className="bg-carbon">
      <div className="mx-auto max-w-[1200px] px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Link href="/" className="flex flex-col leading-none gap-0.5 mb-4">
            <span className="font-mono text-[12px] text-mint tracking-[0.2em]">
              cmd
            </span>
            <span className="font-sans text-[24px] font-[800] text-white tracking-[-0.04em] leading-none">
              Return
            </span>
          </Link>
          <p className="font-sans text-[14px] font-light text-[#7c7c7c]">
            Press Enter on your business.
          </p>
        </div>

        <div className="font-mono text-[12px] text-[#7c7c7c] leading-[2.2] flex flex-col">
          <span>cmdreturn.io</span>
          <a href={`mailto:${EMAIL}`} className={LINK}>
            {EMAIL}
          </a>
          <a href={`tel:${PHONE_E164}`} className={LINK}>
            {PHONE}
          </a>
          <span>Toronto, Ontario</span>
          {LINKEDIN_URL && (
            <a href={LINKEDIN_URL} className={LINK} rel="noopener noreferrer" target="_blank">
              LinkedIn
            </a>
          )}
        </div>

        <div className="font-mono text-[12px] text-[#7c7c7c] leading-[2.2] flex flex-col">
          <span>{COMPANY}</span>
          <span>Federally Incorporated</span>
          <span>Ontario, Canada</span>
          <span>Privacy-first</span>
        </div>
      </div>

      <div className="border-t border-dark-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 font-mono text-[11px] text-[#7c7c7c]">
          <p>
            © {new Date().getFullYear()} {COMPANY} All rights reserved. // Built by operators.
          </p>
          <nav aria-label="Legal" className="flex gap-6">
            <Link href="/privacy" className={LINK}>
              Privacy
            </Link>
            <Link href="/terms" className={LINK}>
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
