import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Prose } from "@/components/shared/prose";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use and donation terms for YourSeva.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        lede="The rules for using this site and for donations made through it."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="mb-10 flex max-w-2xl gap-3 rounded-2xl border border-saffron-300 bg-saffron-50 p-5">
            <AlertTriangle aria-hidden className="mt-0.5 size-5 shrink-0 text-saffron-700" />
            <p className="text-sm leading-relaxed text-saffron-900">
              <strong className="font-bold">Draft — not yet legally reviewed.</strong> Placeholder text to
              show the page in context. Replace with terms approved by the trustees and a solicitor before
              launch.
            </p>
          </div>

          <Prose>
            <h2>Donations</h2>
            <p>
              Donations are voluntary gifts, not purchases, and are generally non-refundable. If you have made
              a mistake — a wrong amount, a duplicate, a donation you did not intend — email{" "}
              <a href={`mailto:${site.donationsEmail}`}>{site.donationsEmail}</a> within 30 days and we will
              refund it without argument.
            </p>

            <h2>The 100% commitment</h2>
            <p>
              100% of public donations are allocated to field projects. Our running costs are funded from Gift
              Aid reclaimed on eligible donations and from unrestricted gifts given specifically for that
              purpose. Where a restricted appeal is over-subscribed or a project cannot proceed, we will
              contact you where practical, and otherwise apply your gift to the closest comparable work.
            </p>

            <h2>Monthly giving</h2>
            <p>
              You may cancel or change a monthly donation at any time by emailing{" "}
              <a href={`mailto:${site.donationsEmail}`}>{site.donationsEmail}</a> or using the link in any of
              our emails. Cancellations are actioned the same working day.
            </p>

            <h2>Gift Aid</h2>
            <p>
              Gift Aid can only be claimed where you are a UK taxpayer and have made a valid declaration. If
              your circumstances change, tell us and we will stop claiming.
            </p>

            <h2>Using this site</h2>
            <p>
              Content on this site belongs to {site.name} unless stated otherwise. You may share and quote it
              with attribution. Please do not use our stories, photographs or name to raise funds without
              written permission.
            </p>

            <h2>Accuracy</h2>
            <p>
              We work hard to keep figures and impact statements accurate and to correct them publicly when
              they are wrong. Nothing on this site is financial, legal or tax advice.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
