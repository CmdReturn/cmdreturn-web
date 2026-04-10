import Link from "next/link";

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
          <p className="font-sans text-[14px] font-light text-[#333333]">
            Press Enter on your business.
          </p>
        </div>

        <div className="font-mono text-[12px] text-[#333333] leading-[2.2] flex flex-col">
          <span>cmdreturn.io</span>
          <span>cmdreturn.ca</span>
          <a
            href="mailto:dave@cmdreturn.io"
            className="hover:text-muted transition-colors duration-150"
          >
            dave@cmdreturn.io
          </a>
          <a
            href="tel:6475441775"
            className="hover:text-muted transition-colors duration-150"
          >
            647-544-1775
          </a>
          <span>Toronto, ON</span>
        </div>

        <div className="font-mono text-[12px] text-[#333333] leading-[2.2] flex flex-col">
          <span>CmdReturn Inc.</span>
          <span>Federally Incorporated</span>
          <span>Ontario, Canada</span>
          <span>PIPEDA Compliant</span>
        </div>
      </div>

      <div className="border-t border-dark-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-4">
          <p className="font-mono text-[11px] text-border-visible">
            © 2025 CmdReturn Inc. All rights reserved. // Built by operators.
          </p>
        </div>
      </div>
    </footer>
  );
}
