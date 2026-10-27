import { NextResponse } from "next/server";

export const runtime = "nodejs";

/*
  POST /api/contact
  Delivers quote requests from /offers. Two delivery routes, tried in order:
    1. Resend (https://resend.com)  — set RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
    2. Any webhook (Zapier, n8n, Slack) — set CONTACT_WEBHOOK_URL
  With neither set it returns 503 and the form offers a mailto fallback.
*/

const OFFER_LABELS: Record<string, string> = {
  "": "Not sure yet",
  "spot-fix": "Spot Fix",
  "rescue-audit": "Rescue Audit",
  "rescue-launch": "Rescue & Launch",
  "ai-sprint": "AI Integration Sprint",
  "custom-build": "Custom software",
};

type Payload = {
  name: string;
  email: string;
  offer: string;
  link: string;
  message: string;
  company?: string; // honeypot
};

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let raw: Partial<Payload>;
  try {
    raw = (await req.json()) as Partial<Payload>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field; pretend it worked and drop it.
  if (clean(raw.company, 200)) return NextResponse.json({ ok: true });

  const data: Payload = {
    name: clean(raw.name, 120),
    email: clean(raw.email, 200),
    offer: clean(raw.offer, 40),
    link: clean(raw.link, 500),
    message: clean(raw.message, 5000),
  };

  if (!data.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json(
      { error: "A name and a valid email are required." },
      { status: 400 }
    );
  }
  if (data.message.length < 20) {
    return NextResponse.json(
      { error: "Tell me a little more; a sentence or two is enough." },
      { status: 400 }
    );
  }
  if (!(data.offer in OFFER_LABELS)) data.offer = "";

  const offerLabel = OFFER_LABELS[data.offer];
  const subject = `CmdReturn quote request: ${offerLabel} from ${data.name}`;
  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Offer: ${offerLabel}`,
    `Link: ${data.link || "-"}`,
    "",
    data.message,
  ].join("\n");

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (resendKey && to && from) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject,
        text,
        html: `<pre style="font: 15px/1.5 ui-monospace, monospace">${escapeHtml(text)}</pre>`,
      }),
    });
    if (res.ok) return NextResponse.json({ ok: true });
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json(
      { error: "Email delivery failed." },
      { status: 502 }
    );
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, text, ...data, offerLabel }),
    });
    if (res.ok) return NextResponse.json({ ok: true });
    console.error("Webhook error", res.status);
    return NextResponse.json(
      { error: "Delivery failed." },
      { status: 502 }
    );
  }

  return NextResponse.json(
    { error: "The contact form is not connected yet." },
    { status: 503 }
  );
}
