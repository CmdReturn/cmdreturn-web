"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(8,8,8,0.92)] backdrop-blur-md">
      <div className="mx-auto max-w-[1200px] flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/cmdreturn_profile_800.png"
            alt="CmdReturn"
            width={36}
            height={36}
          />
          <div className="flex flex-col leading-none gap-0.5">
            <span className="font-mono text-[12px] text-mint tracking-[0.2em]">
              cmd
            </span>
            <span className="font-sans text-[24px] font-[800] text-white tracking-[-0.04em] leading-none">
              Return
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/platform"
            className="font-sans text-[14px] font-normal text-muted hover:text-white transition-colors duration-150"
          >
            Platform
          </Link>
          <Link
            href="/institutional"
            className="font-sans text-[14px] font-normal text-muted hover:text-white transition-colors duration-150"
          >
            Institutional
          </Link>
          <Link
            href="/about"
            className="font-sans text-[14px] font-normal text-muted hover:text-white transition-colors duration-150"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-sans text-[13px] font-semibold text-teal hover:text-mint transition-colors duration-150"
          >
            Request deep-dive →
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1px] bg-white transition-transform duration-150 ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-[1px] bg-white transition-opacity duration-150 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-[1px] bg-white transition-transform duration-150 ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[280px] bg-carbon border-l border-border-subtle transform transition-transform duration-200 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="text-muted hover:text-white transition-colors duration-150 text-[14px]"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-6 px-6 pt-8">
          <Link
            href="/platform"
            onClick={() => setMobileOpen(false)}
            className="font-sans text-[14px] text-muted hover:text-white transition-colors duration-150"
          >
            Platform
          </Link>
          <Link
            href="/institutional"
            onClick={() => setMobileOpen(false)}
            className="font-sans text-[14px] text-muted hover:text-white transition-colors duration-150"
          >
            Institutional
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="font-sans text-[14px] text-muted hover:text-white transition-colors duration-150"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="font-sans text-[13px] font-semibold text-teal hover:text-mint transition-colors duration-150"
          >
            Request deep-dive →
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-[-1]"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
}
