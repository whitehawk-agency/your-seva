import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Progress } from "@/components/ui/progress";
import { fundingBreakdown, reports } from "@/lib/content";

export function TransparencyTeaser() {
  return (
    <section className="bg-stone-50 py-20 lg:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Radical transparency"
            title={
              <>
                Open books, <span className="text-slate-500">by default.</span>
              </>
            }
            description="You should not have to trust us. You should be able to check. Here is the funding split, the filings and the project ledger."
          />

          <div className="mt-10 space-y-7">
            {fundingBreakdown.map((row, index) => (
              <Reveal key={row.label} index={index}>
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-base font-bold text-slate-900">{row.label}</span>
                    <span className="font-display text-xl font-extrabold tracking-[-0.02em] text-orange-900">
                      {row.value}%
                    </span>
                  </div>
                  <Progress value={row.value} label={row.label} className="mt-3" />
                  <p className="mt-2 text-sm text-slate-600">{row.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal index={1}>
          <div className="rounded-3xl border border-stone-200 bg-white p-7 sm:p-9">
            <h3 className="font-display text-2xl font-extrabold tracking-[-0.02em] text-slate-900">
              Documents, unedited
            </h3>
            <p className="mt-2 text-[1.0625rem] leading-relaxed text-slate-600">
              Full accounts, not summaries. Policies, not promises.
            </p>

            <ul className="mt-7 divide-y divide-stone-200">
              {reports.map((report) => (
                <li key={report.title}>
                  <Link
                    href={report.href}
                    className="group flex items-center gap-4 py-4 transition-colors hover:text-orange-900"
                  >
                    <FileText aria-hidden className="size-5 shrink-0 text-slate-400" />
                    <span className="flex-1">
                      <span className="block font-semibold text-slate-900 group-hover:text-orange-900">
                        {report.title}
                      </span>
                      <span className="mt-0.5 block text-xs font-medium uppercase tracking-[0.1em] text-slate-600">
                        {report.meta}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/transparency"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-900 underline decoration-orange-400 decoration-2 underline-offset-4"
            >
              Go to reports &amp; accounts
              <ArrowUpRight aria-hidden className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
