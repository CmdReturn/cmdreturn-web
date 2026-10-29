import Link from "next/link";
import type { ReactNode } from "react";

// The return-key button. Styles live in globals.css (.cr-key).
export function KeycapLabel({ children }: { children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      <span className="cr-key-glyph" aria-hidden="true">
        ↵
      </span>
    </>
  );
}

export default function Keycap({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link href={href} className={`cr-key ${className}`} onClick={onClick}>
      <KeycapLabel>{children}</KeycapLabel>
    </Link>
  );
}
