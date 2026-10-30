import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { COMPANY, EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | CmdReturn",
  description:
    "What CmdReturn collects through this website, why, who processes it, how long it is kept and how to see, correct or delete it.",
  alternates: { canonical: "https://cmdreturn.io/privacy" },
};

const mail = <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

export default function Privacy() {
  return (
    <LegalPage
      label="// privacy"
      title="Privacy Policy"
      updated="October 30, 2026"
      intro={
        <p>
          {COMPANY} (&ldquo;CmdReturn&rdquo;, &ldquo;we&rdquo;) is a software
          studio in Toronto, Ontario. This policy explains, in plain language,
          what we collect through cmdreturn.io, why, and what you can ask us to
          do with it. We follow the principles of Canada&rsquo;s Personal
          Information Protection and Electronic Documents Act (PIPEDA).
        </p>
      }
    >
      <LegalSection title="What we collect">
        <p>
          When you send a request through the quote form on{" "}
          <Link href="/offers">/offers</Link> or{" "}
          <Link href="/contact">/contact</Link>, we receive:
        </p>
        <ul>
          <li>your name and email address</li>
          <li>the offer you picked, if any</li>
          <li>a link to your app or repository, if you add one</li>
          <li>your message</li>
          <li>which page the form was sent from</li>
        </ul>
        <p>
          If you book a call, we receive your name, email address and the
          answers you give in the booking form. If you email or call us, we
          receive whatever you choose to include.
          We do not ask for payment details through this website.
        </p>
      </LegalSection>

      <LegalSection title="Why we collect it">
        <p>
          Only to reply to you and prepare a quote, and to keep a record of
          the conversation if you become a client. We do not use it for
          advertising and we do not add you to a mailing list.
        </p>
      </LegalSection>

      <LegalSection title="Website analytics">
        <p>
          We use Vercel Web Analytics to count page views and to record one
          event, &ldquo;quote_submitted&rdquo;, when a quote form is sent. That
          event includes only the page the form was on and the offer picked,
          never your name, email or message. Vercel Web Analytics does not use
          cookies, and the figures we see are aggregated.
        </p>
      </LegalSection>

      <LegalSection title="Who processes it for us">
        <p>We use three service providers:</p>
        <ul>
          <li>
            <strong>Vercel</strong> hosts this website and provides the
            analytics above. Like any web host, its servers handle technical
            data such as your IP address and browser type.
          </li>
          <li>
            <strong>Resend</strong> delivers the form contents to our inbox
            by email.
          </li>
          <li>
            <strong>Cal.com</strong> handles booking when you schedule a call
            with us. It receives your name, your email address and the answers
            you give in the booking form.
          </li>
        </ul>
        <p>
          All three are based in the United States, so your information may be
          processed and stored there and be subject to US law. They may use it
          only to provide their service to us.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          We keep enquiries for up to 24 months, then delete them, unless you
          become a client (project records are kept as long as the law
          requires) or you ask us to delete them sooner.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          You can ask to see the personal information we hold about you, to
          correct it, or to delete it. Email {mail} and we will respond within
          30 days. We may need to confirm it is you before acting on the
          request.
        </p>
      </LegalSection>

      <LegalSection title="What we never do">
        <p>
          We do not sell, rent or trade your personal information, and we do
          not share it with anyone other than the service providers listed
          above, unless the law requires it.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          Form submissions travel over HTTPS, and access to enquiries is
          limited to the people who need them to reply to you.
        </p>
      </LegalSection>

      <LegalSection title="Questions and complaints">
        <p>
          Dave Miller is responsible for privacy at CmdReturn. Contact {mail}{" "}
          with any question or concern. If you are not satisfied with our
          answer, you can contact the{" "}
          <a href="https://www.priv.gc.ca" rel="noopener noreferrer">
            Office of the Privacy Commissioner of Canada
          </a>
          .
        </p>
        <p>
          If we change this policy, we will update the date at the top of
          this page.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
