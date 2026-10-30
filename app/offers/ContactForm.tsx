"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { track } from "@vercel/analytics";
import { BOOKING_URL } from "@/lib/site";

const OFFER_OPTIONS = [
  { value: "", label: "Not sure yet" },
  { value: "spot-fix", label: "Spot Fix ($450, 2 business days)" },
  { value: "rescue-audit", label: "Rescue Audit ($1,500, 5 business days)" },
  { value: "rescue-launch", label: "Rescue & Launch (from $6,000)" },
  { value: "ai-sprint", label: "AI Integration Sprint ($4,500, 10 business days)" },
  { value: "custom-build", label: "Custom software (from $8,000)" },
];

// Where the mailto fallback goes if the API is not configured yet.
const FALLBACK_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "dave@cmdreturn.io";

type State = "idle" | "sending" | "sent" | "error";

// The ?offer= value if it names a known offer, otherwise null.
function offerFrom(params: URLSearchParams): string | null {
  const wanted = params.get("offer") ?? "";
  return OFFER_OPTIONS.some((o) => o.value === wanted) ? wanted : null;
}

export default function ContactForm() {
  const params = useSearchParams();
  const pathname = usePathname();
  const [offer, setOffer] = useState(() => offerFrom(params) ?? "");
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [mailto, setMailto] = useState("");

  // ?offer=... from the keycap links pre-selects the offer. When the URL
  // changes, update during render rather than in an effect.
  const [seenParams, setSeenParams] = useState(params);
  if (params !== seenParams) {
    setSeenParams(params);
    const wanted = offerFrom(params);
    if (wanted !== null) setOffer(wanted);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    setState("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        track("quote_submitted", {
          source: pathname,
          offer: data.offer || "not-sure",
        });
        setState("sent");
        form.reset();
        setOffer("");
        return;
      }
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      throw new Error(body.error || "The request did not go through.");
    } catch (err) {
      const label =
        OFFER_OPTIONS.find((o) => o.value === data.offer)?.label || "Quote";
      const subject = encodeURIComponent(`CmdReturn quote: ${label}`);
      const bodyText = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nLink: ${data.link || "-"}\n\n${data.message}`
      );
      setMailto(`mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${bodyText}`);
      setError(
        err instanceof Error ? err.message : "The request did not go through."
      );
      setState("error");
    }
  }

  return (
    <form className="cr-form" onSubmit={onSubmit} noValidate={false}>
      <div className="cr-field">
        <label htmlFor="cr-name">Your name</label>
        <input id="cr-name" name="name" required autoComplete="name" />
      </div>

      <div className="cr-field">
        <label htmlFor="cr-email">Email</label>
        <input
          id="cr-email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="cr-field">
        <label htmlFor="cr-offer">What do you need?</label>
        <select
          id="cr-offer"
          name="offer"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        >
          {OFFER_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="cr-field">
        <label htmlFor="cr-link">Link to the app or repo</label>
        <input
          id="cr-link"
          name="link"
          type="url"
          placeholder="https://"
          inputMode="url"
        />
        <span className="cr-hint">Optional. Read access can come later.</span>
      </div>

      <div className="cr-field cr-field--wide">
        <label htmlFor="cr-message">What is happening, in your own words</label>
        <textarea
          id="cr-message"
          name="message"
          required
          minLength={20}
          placeholder="What the app or process does, what breaks or what you want it to do, and by when."
        />
      </div>

      {/* Which page the enquiry came from, e.g. /contact or /offers. */}
      <input type="hidden" name="source" value={pathname} />

      {/* Honeypot: real people never see or fill this. */}
      <div className="cr-honey" aria-hidden="true">
        <label htmlFor="cr-company">Company website</label>
        <input id="cr-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="cr-form-actions">
        <button
          type="submit"
          className={`cr-key${state === "sending" ? " is-pressed" : ""}`}
          disabled={state === "sending"}
        >
          <span>{state === "sending" ? "Sending" : "Get a fixed quote"}</span>
          <span className="cr-key-glyph" aria-hidden="true">
            ↵
          </span>
        </button>

        {state === "sent" && (
          <p className="cr-status" data-state="sent" role="status">
            Request sent. You will hear back within one business day.
          </p>
        )}
        {state === "error" && (
          <p className="cr-status" data-state="error" role="alert">
            {error}{" "}
            <a href={mailto}>Send it by email instead</a>.
          </p>
        )}
      </div>

      <p className="cr-form-note">
        By sending this you agree to our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      {BOOKING_URL && (
        <p className="cr-form-note">
          Prefer to talk?{" "}
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book 20 minutes
          </a>
        </p>
      )}
    </form>
  );
}
