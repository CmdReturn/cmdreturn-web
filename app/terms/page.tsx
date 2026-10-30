import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { COMPANY, EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms | CmdReturn",
  description:
    "Terms for using cmdreturn.io, and a summary of how CmdReturn's fixed-price projects work: scope, payment, revisions, warranty and ownership.",
  alternates: { canonical: "https://cmdreturn.io/terms" },
};

export default function Terms() {
  return (
    <LegalPage
      label="// terms"
      title="Terms"
      updated="October 30, 2026"
      intro={
        <p>
          These terms cover your use of cmdreturn.io, run by {COMPANY} in
          Toronto, Ontario. The second half summarizes how our projects work.
          Every project has its own written quote and agreement; if anything
          there differs from this page, the signed document wins.
        </p>
      }
    >
      <LegalSection title="Using this website">
        <ul>
          <li>
            The content on this site, including text, design and screenshots,
            belongs to {COMPANY}. You may link to it and quote short passages
            with credit; please ask before reusing anything else.
          </li>
          <li>
            Prices, timelines and descriptions here are a guide and may
            change. A price is only binding once it is in a written quote you
            have accepted.
          </li>
          <li>
            Screens shown in our case studies use demo data and may differ
            from the live systems.
          </li>
          <li>
            Please do not misuse the site, for example by sending spam through
            the forms or trying to break or overload it.
          </li>
          <li>
            The site is provided as is. We work to keep it accurate and
            available but cannot promise it is error-free, and we are not
            liable for losses from relying on it. Links to other sites are for
            convenience; we are not responsible for their content.
          </li>
          <li>
            How we handle what you send us is covered by our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Projects, in short">
        <ul>
          <li>
            <strong>Fixed scope.</strong> Every project starts with a written
            scope and a not-included list, agreed before any payment. Anything
            outside it is a change order, quoted before it starts.
          </li>
          <li>
            <strong>Payment.</strong> Spot Fix and Rescue Audit are paid in
            full to start. Builds are 50% to start and 50% at acceptance; over
            $10,000, 40/30/30. Card or e-transfer. Prices are in US dollars;
            Canadian businesses are billed in Canadian dollars plus applicable
            GST/HST.
          </li>
          <li>
            <strong>Revisions.</strong> Two rounds on each deliverable. Further
            changes at $95 an hour or a new fixed quote.
          </li>
          <li>
            <strong>30-day warranty.</strong> Defects in delivered work are
            fixed free for 30 days after acceptance. New requests are quoted.
          </li>
          <li>
            <strong>Ownership.</strong> You own the code on final payment.
            Hosting, API usage, domains and licences stay on your own
            accounts.
          </li>
          <li>
            <strong>Stopping.</strong> Either side can stop the project at a
            milestone. You pay for the work completed up to that point and
            receive it.
          </li>
          <li>
            <strong>Law.</strong> These terms and our project agreements are
            governed by the laws of Ontario and the federal laws of Canada
            that apply there.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Questions">
        <p>
          Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. If we change these
          terms, we will update the date at the top of this page.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
