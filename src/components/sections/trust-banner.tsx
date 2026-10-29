import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { trustPillars } from "@/lib/content";

export function TrustBanner() {
  return (
    <section id="the-100-model" className="bg-stone-50 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="The 100% Model"
          title={
            <>
              Your pound arrives whole. <span className="text-slate-500">Nothing taken out.</span>
            </>
          }
          description="Most charities take a cut of your donation for overheads — reasonably, because overheads are real. We cover ours a different way, so your gift can reach the field intact."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {trustPillars.map((pillar, index) => (
            <Reveal key={pillar.title} index={index} className="h-full">
              <article className="group flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lift">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-900 transition-colors group-hover:bg-orange-500 group-hover:text-slate-950">
                  <pillar.icon aria-hidden className="size-7" strokeWidth={1.75} />
                </span>

                <h3 className="mt-7 font-display text-2xl font-extrabold tracking-[-0.02em] text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 text-[1.0625rem] leading-relaxed text-slate-600">{pillar.body}</p>

                <div className="mt-7 border-t border-stone-200 pt-5">
                  <span className="block font-display text-4xl font-extrabold tracking-[-0.03em] text-slate-900">
                    {pillar.stat}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-slate-600">{pillar.statLabel}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal index={3} className="mt-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button asChild variant="ink" size="lg">
              <Link href="/100-percent-model">
                See exactly where your money goes
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Link
              href="/transparency"
              className="text-sm font-semibold text-slate-700 underline decoration-orange-400 decoration-2 underline-offset-4 hover:text-slate-950"
            >
              Read our reports &amp; accounts
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
