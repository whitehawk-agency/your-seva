import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Progress } from "@/components/ui/progress";
import { fundingBreakdown, governance, reports, site, vettingSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Reports & Accounts",
  description:
    "Your Seva's registered charity details, filed accounts, trustees and the checks behind every project.",
  alternates: { canonical: "/transparency" },
};

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparency"
        title={
          <>
            Do not trust us. <span className="text-saffron-400">Check us.</span>
          </>
        }
        lede="Full accounts, the live project ledger, our policies and our governance. If something here is missing or unclear, email us and we will fix it."
      />

      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="The funding split"
              title={
                <>
                  Two funds. <span className="text-ink-400">Never mixed.</span>
                </>
              }
              description="Public donations are restricted to field projects. Running costs come out of a separate, unrestricted fund. They are reconciled monthly and reported separately."
            />

            <div className="mt-10 space-y-7">
              {fundingBreakdown.map((row, index) => (
                <Reveal key={row.label} index={index}>
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-base font-bold text-ink-900">{row.label}</span>
                      <span className="font-display text-xl font-extrabold tracking-[-0.02em] text-saffron-700">
                        {row.value}%
                      </span>
                    </div>
                    <Progress value={row.value} label={row.label} className="mt-3" />
                    <p className="mt-2 text-sm text-ink-500">{row.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal index={3}>
              <p className="mt-10 rounded-2xl border border-ink-200 bg-white p-6 text-sm leading-relaxed text-ink-600">
                <strong className="font-bold text-ink-900">A note on the numbers.</strong> Figures on this
                page are drawn from our management accounts and are updated quarterly. The audited position
                is whatever appears in the filed annual accounts below — if the two ever disagree, the filed
                accounts are correct and we will say so here.
              </p>
            </Reveal>
          </div>

          <Reveal index={1}>
            <div className="rounded-3xl border border-ink-200 bg-white p-7 sm:p-9">
              <h2 className="font-display text-2xl font-extrabold tracking-[-0.02em] text-ink-900">
                Documents
              </h2>
              <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink-600">
                Published in full. Registered charity number {site.charityNumber}.
              </p>

              <ul className="mt-7 divide-y divide-ink-200">
                {reports.map((report) => (
                  <li key={report.title}>
                    <Link
                      href={report.href}
                      className="group flex items-center gap-4 py-4 transition-colors hover:text-saffron-700"
                    >
                      <FileText aria-hidden className="size-5 shrink-0 text-ink-400" />
                      <span className="flex-1">
                        <span className="block font-semibold text-ink-900 group-hover:text-saffron-700">
                          {report.title}
                        </span>
                        <span className="mt-0.5 block text-xs font-medium uppercase tracking-[0.1em] text-ink-500">
                          {report.meta}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 shrink-0 text-ink-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-saffron-600"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="governance" className="scroll-mt-28 bg-white py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Governance"
            title={
              <>
                Boring, documented, <span className="text-ink-400">and that is the idea.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {governance.map((item, index) => (
              <Reveal key={item.title} index={index} className="h-full">
                <div className="flex h-full flex-col rounded-3xl bg-ink-50 p-7">
                  <item.icon aria-hidden className="size-7 text-saffron-600" strokeWidth={1.7} />
                  <h3 className="mt-5 font-display text-lg font-extrabold tracking-[-0.02em] text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pine-900 py-20 text-white lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            tone="light"
            eyebrow="How we vet"
            title={
              <>
                Four stages <span className="text-white/45">before any money moves.</span>
              </>
            }
            description="The same process for a £40 food parcel and a £4,000 rebuild. Only the number of quotes changes."
          />

          <Reveal index={1}>
            <ol className="space-y-px">
              {vettingSteps.map((step, index) => (
                <li key={step.title} className="border-t border-white/12 py-7 first:border-t-0 first:pt-0">
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

      <CtaBand
        title={
          <>
            Open books. <span className="text-saffron-400">Open invitation.</span>
          </>
        }
        body="Any donor can ask to see the ledger behind any project, or join a field visit. We have never said no."
        primary={{ label: "Donate", href: "/donate" }}
        secondary={{ label: "Ask us anything", href: "/contact" }}
      />
    </>
  );
}
