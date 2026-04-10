"use client";

import { type FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const org = (form.elements.namedItem("org") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const subject = encodeURIComponent(`Deep-dive request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${org}\n\n${message}`
    );
    window.location.href = `mailto:dave@cmdreturn.io?subject=${subject}&body=${body}`;
  }

  return (
    <section className="bg-carbon min-h-screen pt-32 pb-[64px] lg:pb-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-mono text-[11px] text-teal tracking-[0.18em] mb-4">
            // initiate contact
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1 className="font-sans font-[800] text-[36px] lg:text-[52px] text-white tracking-[-0.04em]">
            Request a technical deep-dive.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="font-sans font-light text-[16px] text-[#444444] mt-4">
            We respond within one business day.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <form
            onSubmit={handleSubmit}
            className="max-w-[560px] mx-auto mt-12 bg-[#0A0A0A] border border-border-subtle rounded-lg p-8 text-left"
          >
            <div className="mb-8">
              <label className="block font-mono text-[13px] text-[#444444] mb-2">
                {">"} identify yourself
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="your name"
                className="w-full bg-transparent border-b border-border-visible font-mono text-[14px] text-white py-3 outline-none placeholder:text-border-visible focus:border-teal transition-colors duration-150"
              />
            </div>

            <div className="mb-8">
              <label className="block font-mono text-[13px] text-[#444444] mb-2">
                {">"} your organization
              </label>
              <input
                name="org"
                type="text"
                placeholder="company or institution"
                className="w-full bg-transparent border-b border-border-visible font-mono text-[14px] text-white py-3 outline-none placeholder:text-border-visible focus:border-teal transition-colors duration-150"
              />
            </div>

            <div className="mb-8">
              <label className="block font-mono text-[13px] text-[#444444] mb-2">
                {">"} what do you need
              </label>
              <textarea
                name="message"
                required
                placeholder="describe what you are trying to solve"
                className="w-full h-[100px] bg-transparent border-b border-border-visible font-mono text-[14px] text-white py-3 outline-none resize-none placeholder:text-border-visible focus:border-teal transition-colors duration-150"
              />
            </div>

            <button
              type="submit"
              className="font-mono text-[14px] text-teal hover:text-mint transition-colors duration-150 bg-transparent border-none cursor-pointer p-0"
            >
              {">"} send command ↵
            </button>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={0.32}>
          <div className="font-mono text-[12px] text-[#333333] leading-[2.2] mt-12">
            <p>dave@cmdreturn.io</p>
            <p>647-544-1775</p>
            <p>Toronto, Ontario, Canada</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
