import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Prose } from "@/components/shared/prose";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How YourSeva collects, uses and protects your personal data.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lede="What we collect, why we collect it, how long we keep it, and how to make us stop."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="mb-10 flex max-w-2xl gap-3 rounded-2xl border border-saffron-300 bg-saffron-50 p-5">
            <AlertTriangle aria-hidden className="mt-0.5 size-5 shrink-0 text-saffron-700" />
            <p className="text-sm leading-relaxed text-saffron-900">
              <strong className="font-bold">Draft — not yet legally reviewed.</strong> This text is a
              structural placeholder written to show the page in context. It must be replaced with a policy
              checked against UK GDPR, the Data Protection Act 2018 and PECR before launch.
            </p>
          </div>

          <Prose>
            <p>
              <strong>Last updated:</strong> placeholder date. {site.name} (&ldquo;we&rdquo;) is the data
              controller for the personal data described below. You can reach our data contact at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <h2>What we collect</h2>
            <ul>
              <li>
                <strong>Donation data:</strong> your name, email address, postal address or postcode,
                donation amount and frequency, and Gift Aid declaration status.
              </li>
              <li>
                <strong>Contact data:</strong> anything you type into our contact or newsletter forms.
              </li>
              <li>
                <strong>Technical data:</strong> basic, aggregated analytics about how pages are used. We do
                not use advertising trackers.
              </li>
            </ul>
            <p>
              Card details are never seen or stored by us — they are handled entirely by our regulated
              payment provider.
            </p>

            <h2>Why we use it</h2>
            <ul>
              <li>To process your donation and send your receipt (contract and legal obligation).</li>
              <li>To claim Gift Aid where you have made a declaration (legal obligation).</li>
              <li>To send field updates where you have asked for them (consent).</li>
              <li>To keep accurate financial records (legal obligation).</li>
            </ul>

            <h2>How long we keep it</h2>
            <p>
              Gift Aid and financial records are kept for the period HMRC requires. Marketing consent records
              are kept until you withdraw consent, plus a short period so we can prove we acted on your
              request.
            </p>

            <h2>Who we share it with</h2>
            <p>
              Our payment provider, our email platform, our accountants and HMRC for Gift Aid. We do not sell
              your data, swap donor lists, or share your details with other charities. Ever.
            </p>

            <h2>Your rights</h2>
            <p>
              You can ask for a copy of your data, ask us to correct it, ask us to delete it, object to how we
              use it, or withdraw consent at any time. Email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> and we will act within one month. You can also
              complain to the Information Commissioner&apos;s Office.
            </p>

            <h2>Cookies</h2>
            <p>
              We use only what is needed to make the site work, plus privacy-respecting aggregate analytics.
              No advertising cookies and no cross-site tracking.
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
