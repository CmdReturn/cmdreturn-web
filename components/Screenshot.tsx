"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export type Shot = {
  src: string;
  width: number;
  height: number;
  label: string;
  caption: string;
  alt: string;
};

// A captioned screenshot that opens full size in a modal <dialog>.
// The native dialog handles Esc, traps focus and makes the page inert.
export default function Screenshot({
  shot,
  sizes,
  delay = 0,
}: {
  shot: Shot;
  sizes: string;
  delay?: number;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  function show() {
    setOpen(true);
    document.documentElement.style.overflow = "hidden";
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function handleClose() {
    setOpen(false);
    document.documentElement.style.overflow = "";
    triggerRef.current?.focus();
  }

  return (
    <ScrollReveal delay={delay} className="min-w-0">
      <figure>
        <button
          ref={triggerRef}
          type="button"
          onClick={show}
          aria-haspopup="dialog"
          className="block w-full rounded-lg border border-border-visible overflow-hidden bg-dark-surface cursor-zoom-in transition-colors duration-150 hover:border-teal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes={sizes}
            className="block w-full h-auto"
          />
          <span className="sr-only">Open full-size image</span>
        </button>
        <figcaption className="mt-3 flex flex-col gap-1">
          <span className="font-mono text-[11px] text-teal tracking-[0.14em]">
            {shot.label}
          </span>
          <span className="font-sans text-[14px] text-muted leading-[1.6]">
            {shot.caption}
          </span>
        </figcaption>
      </figure>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onKeyDown={(e) => {
          // Close is the only control, so keep Tab focus on it.
          if (e.key === "Tab") {
            e.preventDefault();
            closeRef.current?.focus();
          }
        }}
        aria-label={`${shot.caption} Full-size screenshot.`}
        className="m-0 p-0 w-screen h-screen max-w-none max-h-none bg-black/95 backdrop:bg-transparent"
      >
        {/* Clicks on this backdrop area (not the image or caption) close it. */}
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          className="w-full h-full flex flex-col items-center justify-center gap-4 p-4 sm:p-10"
        >
          <button
            type="button"
            ref={closeRef}
            onClick={close}
            autoFocus
            className="absolute top-4 right-4 font-mono text-[13px] text-white bg-carbon border border-border-visible rounded-md px-3 py-2 hover:border-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            Close <span aria-hidden="true">✕</span>
          </button>
          {open && (
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              unoptimized
              className="block w-auto h-auto max-w-full max-h-[calc(100vh-140px)] rounded-lg border border-border-visible"
            />
          )}
          <p className="font-sans text-[14px] text-muted text-center">
            {shot.caption}
          </p>
        </div>
      </dialog>
    </ScrollReveal>
  );
}
