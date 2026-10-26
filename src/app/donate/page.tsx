import type { Metadata } from "next";
import Link from "next/link";
import { HandHeart, Landmark, Mail, Repeat, ShieldCheck } from "lucide-react";

import { DonatePanel, DonateTiers } from "@/components/sections/donate-panel";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Give once or monthly. 100% of your donation funds vetted field projects — our running costs are paid by Gift Aid and private donors.",
  alternates: { canonical: "/donate" },
};

const otherWays = [
  {
    icon: Landmark,
    title: "Bank transfer",
    body: "For larger gifts, a direct transfer avoids processing fees entirely. Email us and we will send our account details and a reference.",
  },
  {
    icon: Repeat,
    title: "Payroll giving",
    body: "Give straight from your salary before tax. Ask your employer to add Your Seva, or email us and we will do the paperwork.",
  },
  {
    icon: HandHeart,
    title: "Legacy gifts",
    body: "Leaving something in your will is the most lasting seva there is. We will talk you through it with no pressure at all.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={
          <>
            Give once, or give monthly. <span className="text-saffron-400">All of it arrives.</span>
          </>
        }
        lede="No cut for admin. No card fees taken from your gift. Your donation is allocated to a vetted field project and published with its receipts."
      />

      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <Reveal>
            <div className="rounded-3xl border border-ink-200 bg-white p-7 shadow-soft sm:p-10">
              <DonatePanel />
            </div>
          </Reveal>

          <aside className="space-y-6">
            <Reveal index={1}>
              <div className="rounded-3xl bg-ink-950 p-7 text-white">
                <ShieldCheck aria-hidden className="size-8 text-saffron-400" strokeWidth={1.6} />
                <h2 className="mt-5 font-display text-xl font-extrabold tracking-[-0.02em]">
                  What your money does
                </h2>
                <DonateTiers />
                <p className="mt-6 text-xs leading-relaxed text-white/45">
                  The £15 Ration Panee figure is the unit cost the charity publishes. Other lines are indicative
                  of what your giving funds.
                </p>
              </div>
            </Reveal>

            <Reveal index={2}>
              <div className="rounded-3xl border border-ink-200 bg-white p-7">
                <h2 className="font-display text-xl font-extrabold tracking-[-0.02em] text-ink-900">
                  Other ways to give
                </h2>
                <ul className="mt-6 space-y-6">
                  {otherWays.map((way) => (
                    <li key={way.title}>
                      <way.icon aria-hidden className="size-5 text-saffron-600" strokeWidth={1.9} />
                      <h3 className="mt-2.5 font-bold text-ink-900">{way.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">{way.body}</p>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${site.donationsEmail}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-ink-900 underline decoration-saffron-400 decoration-2 underline-offset-4"
                >
                  <Mail aria-hidden className="size-4" />
                  {site.donationsEmail}
                </a>
              </div>
            </Reveal>

            <Reveal index={3}>
              <div className="rounded-3xl border border-ink-200 bg-white p-7">
                <h2 className="font-display text-lg font-extrabold tracking-[-0.02em] text-ink-900">
                  Changed your mind?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Cancel or change a monthly gift any time — same working day, no retention call. Email{" "}
                  <a
                    href={`mailto:${site.donationsEmail}`}
                    className="font-semibold text-ink-900 underline underline-offset-2"
                  >
                    {site.donationsEmail}
                  </a>{" "}
                  or use the link in any email we send.
                </p>
                <Link
                  href="/100-percent-model"
                  className="mt-4 inline-flex text-sm font-bold text-ink-900 underline decoration-saffron-400 decoration-2 underline-offset-4"
                >
                  How the 100% model works
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <FaqSection limit={5} />
    </>
  );
}
