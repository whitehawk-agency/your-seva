import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MediaFrame } from "@/components/shared/media-frame";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { programmes } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProgrammesGrid({ limit }: { limit?: number }) {
  const items = limit ? programmes.slice(0, limit) : programmes;

  return (
    <section id="our-work" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Our work"
            title={
              <>
                Four programmes. <span className="text-ink-400">One idea:</span> show up, and stay.
              </>
            }
            description="We work where need is specific and fixable — a roof, a uniform, a month of medicine — and we keep returning long after the photographs are taken."
            className="max-w-3xl"
          />
          <Reveal index={2}>
            <Button asChild variant="outline" size="lg">
              <Link href="/our-work">
                All programmes
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((programme, index) => (
            <Reveal key={programme.slug} index={index % 2} className="h-full">
              <Link
                href={`/our-work#${programme.slug}`}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200 bg-ink-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
                )}
              >
                <MediaFrame
                  alt={`${programme.name} — ${programme.short}`}
                  tone={programme.tone}
                  icon={programme.icon}
                  note={programme.photoNote}
                  className="aspect-[16/10] rounded-none"
                />

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-2.5">
                    <programme.icon aria-hidden className="size-5 text-saffron-600" strokeWidth={1.9} />
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      {programme.short}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.025em] text-ink-900 sm:text-3xl">
                    {programme.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[1.0625rem] leading-relaxed text-ink-600">
                    {programme.summary}
                  </p>

                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-ink-200 pt-5">
                    {programme.outcomes.map((outcome) => (
                      <div key={outcome.label}>
                        <dd className="font-display text-xl font-extrabold tracking-[-0.02em] text-ink-900">
                          {outcome.value}
                        </dd>
                        <dt className="mt-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-ink-500">
                          {outcome.label}
                        </dt>
                      </div>
                    ))}
                  </dl>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ink-900">
                    Read more
                    <ArrowRight
                      aria-hidden
                      className="size-4 text-saffron-600 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
