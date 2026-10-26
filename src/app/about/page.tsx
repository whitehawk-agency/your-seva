import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { EthosSection } from "@/components/sections/ethos-section";
import { PageHero } from "@/components/sections/page-hero";
import { MediaFrame } from "@/components/shared/media-frame";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { team, timeline, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Your Seva — a UK registered charity (1162477) serving families in Panjab since 2014. Our values, our timeline and our trustees.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
Selfless service, <span className="text-saffron-400">accounted for.</span>
          </>
        }
        lede="Your Seva is a UK registered charity working with neglected, abandoned and poverty-stricken families in Panjab — a company limited by guarantee since 2014, charity 1162477 since 2015."
      />

      <EthosSection />

      {/* Values */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we hold to"
            title={
              <>
                Four values. <span className="text-ink-400">Each one costs us something.</span>
              </>
            }
            description="Values that are free to hold are not values. These ones shape what we turn down as much as what we take on."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} index={index % 2} className="h-full">
                <div className="flex h-full gap-5 rounded-3xl border border-ink-200 bg-white p-8">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-saffron-100 text-saffron-700">
                    <value.icon aria-hidden className="size-6" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-extrabold tracking-[-0.02em] text-ink-900">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink-600">{value.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="How we got here"
              title={
                <>
  A decade of seva, <span className="text-ink-400">on the record.</span>
                </>
              }
            />
          </div>

          <Reveal index={1}>
            <ol className="relative border-l border-ink-200 pl-8">
              {timeline.map((item, index) => (
                <li key={item.year} className={index === timeline.length - 1 ? "" : "pb-12"}>
                  <span
                    aria-hidden
                    className="absolute -left-[7px] mt-2 size-3.5 rounded-full border-2 border-white bg-saffron-500"
                  />
                  <span className="font-display text-sm font-extrabold tracking-[0.1em] text-saffron-700">
                    {item.year}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-extrabold tracking-[-0.025em] text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[1.0625rem] leading-relaxed text-ink-600">{item.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="The people"
            title={
              <>
                Three trustees, <span className="text-ink-400">one standard.</span>
              </>
            }
            description="Named on the Charity Commission register, with their appointment dates. No trustee takes any remuneration or benefit from the charity — plus the Panjab team and volunteers who do the assessments and deliveries."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person, index) => (
              <Reveal key={person.role} index={index} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink-200">
                  <MediaFrame
                    alt={`${person.role}, ${person.location}`}
                    tone={person.tone}
                    icon={Quote}
                    note="Photo slot — team portrait"
                    className="aspect-[4/5] rounded-none"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-extrabold tracking-[-0.02em] text-ink-900">
                      {person.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold text-saffron-700">{person.role}</p>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.1em] text-ink-500">
                      {person.location}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{person.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal index={4}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button asChild variant="ink" size="lg">
                <Link href="/get-involved">
                  Join the volunteers
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Link
                href="/transparency#governance"
                className="text-sm font-semibold text-ink-700 underline decoration-saffron-400 decoration-2 underline-offset-4 hover:text-ink-950"
              >
                See our governance
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Seva is a practice. <span className="text-saffron-400">Not a donation.</span>
          </>
        }
        body="Give monthly, volunteer a skill, or fundraise where you are. All three are the same thing done differently."
        primary={{ label: "Donate monthly", href: "/donate?frequency=monthly" }}
        secondary={{ label: "Get involved", href: "/get-involved" }}
      />
    </>
  );
}
