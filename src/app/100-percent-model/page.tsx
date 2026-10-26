import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Banknote, Check, Lock, Receipt } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { TransparencyTeaser } from "@/components/sections/transparency-teaser";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { moneyFlow, trustPillars, vettingSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "The 100% Model",
  description:
    "How 100% of public donations to YourSeva reach field projects: restricted funds, Gift Aid and private donors covering running costs, and a three-stage vetting process.",
  alternates: { canonical: "/100-percent-model" },
};

const comparison = [
  {
    label: "A typical £25 donation",
    rows: [
      { text: "£3–£6 to fundraising and admin", ok: false },
      { text: "£0.60–£1 to card processing", ok: false },
      { text: "£18–£21 reaches the project", ok: false },
    ],
    tone: "muted" as const,
  },
  {
    label: "A £25 donation to YourSeva",
    rows: [
      { text: "£0 to fundraising and admin", ok: true },
      { text: "£0 to card processing", ok: true },
      { text: "£25 reaches the project", ok: true },
    ],
    tone: "brand" as const,
  },
];

export default function HundredPercentPage() {
  return (
    <>
      <PageHero
        eyebrow="The 100% model"
        title={
          <>
            Every penny you give is spent in the field.{" "}
            <span className="text-saffron-400">Here is the mechanism.</span>
          </>
        }
        lede="Not a marketing promise — a funding structure. Public donations sit in a restricted account that cannot pay a salary, a subscription or a card fee. Those are paid from somewhere else, on purpose."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="white" size="xl">
            <Link href="/donate">
              Donate now
              <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outline-light" size="xl">
            <Link href="/transparency">See the accounts</Link>
          </Button>
        </div>
      </PageHero>

      {/* The flow */}
      <section id="flow" className="scroll-mt-28 bg-white py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Where your money goes"
            title={
              <>
                Follow £100 <span className="text-ink-400">from your card to a rooftop.</span>
              </>
            }
            description="Four steps, no detours. The only thing that touches your donation between here and the field is a bank transfer."
          />

          <ol className="mt-14 grid gap-5 lg:grid-cols-4">
            {moneyFlow.map((step, index) => (
              <Reveal key={step.title} index={index} as="li" className="h-full">
                <div className="relative flex h-full flex-col rounded-3xl border border-ink-200 bg-ink-50 p-7">
                  <span className="font-display text-sm font-extrabold tracking-[0.1em] text-saffron-600">
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>
                  <step.icon aria-hidden className="mt-5 size-8 text-ink-900" strokeWidth={1.6} />
                  <h3 className="mt-5 font-display text-xl font-extrabold tracking-[-0.02em] text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">{step.body}</p>
                  {index < moneyFlow.length - 1 ? (
                    <ArrowRight
                      aria-hidden
                      className="absolute -right-3.5 top-1/2 hidden size-7 -translate-y-1/2 text-saffron-400 lg:block"
                    />
                  ) : null}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="The difference, in pounds"
            title={
              <>
                The same £25, <span className="text-ink-400">two different journeys.</span>
              </>
            }
            description="We are not criticising charities that take an overhead cut — it is honest and necessary accounting. We simply fund ours separately so you never have to think about it."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {comparison.map((column, index) => (
              <Reveal key={column.label} index={index} className="h-full">
                <div
                  className={
                    column.tone === "brand"
                      ? "flex h-full flex-col rounded-3xl bg-ink-950 p-8 text-white shadow-lift"
                      : "flex h-full flex-col rounded-3xl border border-ink-200 bg-white p-8"
                  }
                >
                  <h3
                    className={
                      column.tone === "brand"
                        ? "font-display text-xl font-extrabold text-saffron-400"
                        : "font-display text-xl font-extrabold text-ink-500"
                    }
                  >
                    {column.label}
                  </h3>

                  <ul className="mt-7 flex-1 space-y-4">
                    {column.rows.map((row) => (
                      <li key={row.text} className="flex items-start gap-3">
                        <span
                          className={
                            row.ok
                              ? "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-saffron-500 text-ink-950"
                              : "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-ink-200 text-ink-500"
                          }
                        >
                          {row.ok ? (
                            <Check aria-hidden className="size-3.5" strokeWidth={3} />
                          ) : (
                            <span aria-hidden className="block h-0.5 w-2.5 rounded-full bg-current" />
                          )}
                        </span>
                        <span
                          className={
                            column.tone === "brand"
                              ? "text-lg font-semibold text-white"
                              : "text-lg font-semibold text-ink-700"
                          }
                        >
                          {row.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className={
                      column.tone === "brand"
                        ? "mt-8 border-t border-white/15 pt-6 text-sm leading-relaxed text-white/60"
                        : "mt-8 border-t border-ink-200 pt-6 text-sm leading-relaxed text-ink-500"
                    }
                  >
                    {column.tone === "brand"
                      ? "Running costs are covered by Gift Aid reclaimed on eligible UK donations and by private donors who fund overheads deliberately."
                      : "Illustrative ranges drawn from published UK charity accounts. Overheads are legitimate — they just come out of the gift."}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What backs it up"
            title={
              <>
                Three commitments <span className="text-ink-400">we can be held to.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {trustPillars.map((pillar, index) => (
              <Reveal key={pillar.title} index={index} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-ink-200 bg-ink-50 p-8">
                  <pillar.icon aria-hidden className="size-8 text-saffron-600" strokeWidth={1.6} />
                  <h3 className="mt-6 font-display text-2xl font-extrabold tracking-[-0.02em] text-ink-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[1.0625rem] leading-relaxed text-ink-600">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting */}
      <section id="vetting" className="scroll-mt-28 bg-pine-900 py-20 text-white lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="Vetted verification"
              title={
                <>
                  Nothing is funded <span className="text-white/45">on a feeling.</span>
                </>
              }
              description="Four stages between a referral and a payment. It slows us down by about three weeks, and it is the reason our money lands where it should."
            />

            <Reveal index={3}>
              <div className="mt-10 space-y-4">
                {[
                  { icon: Lock, text: "Restricted and unrestricted funds held in separate accounts" },
                  { icon: Receipt, text: "Payments made against invoices, published with the project" },
                  { icon: Banknote, text: "At least two local quotes before any build is approved" },
                ].map((item) => (
                  <p key={item.text} className="flex items-start gap-3 text-[0.9375rem] text-white/70">
                    <item.icon aria-hidden className="mt-0.5 size-5 shrink-0 text-saffron-400" />
                    {item.text}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal index={1}>
            <ol className="space-y-px">
              {vettingSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="border-t border-white/12 py-7 first:border-t-0 first:pt-0"
                >
                  <div className="flex gap-5">
                    <span className="font-display text-2xl font-extrabold tracking-[-0.02em] text-saffron-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
                      <p className="mt-2 text-[1.0625rem] leading-relaxed text-white/65">{step.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <TransparencyTeaser />
      <FaqSection />
      <CtaBand />
    </>
  );
}
