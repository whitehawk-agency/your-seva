import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { MediaFrame } from "@/components/shared/media-frame";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { programmes } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Ration Panee, housing and rebuilding, elder and winter care, and education — the four Your Seva programmes in Panjab, and what they cost.",
  alternates: { canonical: "/our-work" },
};

const howWeWork = [
  { name: "Assessed in person", detail: "By our Panjab-based team, at the house itself" },
  { name: "Paid directly", detail: "To local workmen, not through an intermediary" },
  { name: "Released in stages", detail: "Against progress photographs and receipts" },
  { name: "Delivered with sangat", detail: "Local referrals, including Sant Baba Gurbaksh Singh" },
];

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Four programmes, built around what people actually{" "}
            <span className="text-saffron-400">asked us for.</span>
          </>
        }
        lede="We do not run pilots or write strategies. A household tells a field volunteer what is broken, we price it, we fix it, and we come back to check it held."
      >
        <div className="mt-10 flex flex-wrap gap-2.5">
          {programmes.map((programme) => (
            <Link
              key={programme.slug}
              href={`#${programme.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:border-saffron-400 hover:text-white"
            >
              <programme.icon aria-hidden className="size-4 text-saffron-400" />
              {programme.name}
            </Link>
          ))}
        </div>
      </PageHero>

      {programmes.map((programme, index) => {
        const flip = index % 2 === 1;
        return (
          <section
            key={programme.slug}
            id={programme.slug}
            className={cn("scroll-mt-28 py-20 lg:py-28", index % 2 === 0 ? "bg-white" : "bg-ink-50")}
          >
            <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal className={cn(flip && "lg:order-2")}>
                <MediaFrame
                  alt={`${programme.name} — ${programme.short}`}
                  tone={programme.tone}
                  icon={programme.icon}
                  note={programme.photoNote}
                  className="aspect-[4/3]"
                />
              </Reveal>

              <div className={cn(flip && "lg:order-1")}>
                <Reveal>
                  <Badge>
                    <programme.icon aria-hidden className="size-3.5" />
                    Programme {String(index + 1).padStart(2, "0")}
                  </Badge>
                </Reveal>

                <Reveal index={1}>
                  <h2 className="headline mt-5 text-[2rem] text-ink-900 sm:text-4xl lg:text-5xl">
                    {programme.name}
                  </h2>
                </Reveal>

                <Reveal index={2}>
                  <p className="mt-5 text-xl leading-relaxed text-ink-700">{programme.summary}</p>
                </Reveal>

                <Reveal index={3}>
                  <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-600">{programme.body}</p>
                </Reveal>

                <Reveal index={4}>
                  <ul className="mt-7 space-y-3">
                    {programme.activities.map((activity) => (
                      <li key={activity} className="flex gap-3 text-[1.0625rem] text-ink-700">
                        <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-saffron-100 text-saffron-700">
                          <Check aria-hidden className="size-3" strokeWidth={3} />
                        </span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal index={5}>
                  <dl className="mt-8 grid grid-cols-3 gap-5 border-t border-ink-200 pt-6">
                    {programme.outcomes.map((outcome) => (
                      <div key={outcome.label}>
                        <dd className="font-display text-3xl font-extrabold tracking-[-0.03em] text-ink-900">
                          {outcome.value}
                        </dd>
                        <dt className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-ink-500">
                          {outcome.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </Reveal>

                <Reveal index={6}>
                  <Button asChild variant="ink" size="lg" className="mt-8">
                    <Link href={`/donate?programme=${programme.slug}`}>
                      Fund this work
                      <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-pine-900 py-20 text-white lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            tone="light"
            eyebrow="How the work is done"
            title={
              <>
                In Panjab, <span className="text-white/45">by people who live there.</span>
              </>
            }
            description="Every assessment happens at the house itself, carried out by our Panjab-based team. Nothing is approved from a desk in the UK."
          />

          <Reveal index={1}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {howWeWork.map((item) => (
                <li key={item.name} className="rounded-2xl border border-white/12 bg-white/5 p-6 backdrop-blur">
                  <MapPin aria-hidden className="size-5 text-saffron-400" />
                  <p className="mt-4 font-display text-xl font-extrabold tracking-[-0.02em] text-white">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-white/55">{item.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/45">
              Your Seva is a UK registered charity (1162477) working with neglected, abandoned and
              poverty-stricken families in Panjab.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Pick a programme. <span className="text-saffron-400">Fund it end to end.</span>
          </>
        }
        body="Restrict your gift to poverty relief, housing, senior care or education — or leave it unrestricted so the field committee can fund the most urgent case this week."
        primary={{ label: "Donate to a programme", href: "/donate" }}
        secondary={{ label: "Read impact stories", href: "/impact-stories" }}
      />
    </>
  );
}
