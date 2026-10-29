import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bike, CookingPot, Gift, Users } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { involvement } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Fundraise, volunteer a skill, or partner with Your Seva. Practical ways to join the work beyond donating.",
  alternates: { canonical: "/get-involved" },
};

const ideas = [
  { icon: CookingPot, title: "Host a langar or supper", body: "Cook for forty, ask for donations at the door. Our most-repeated fundraiser." },
  { icon: Bike, title: "Take on a distance", body: "Run, ride or walk it. We will send you a page, a pack and a field update to share." },
  { icon: Gift, title: "Give up a birthday", body: "Ask for donations instead of presents. It raises more than you would think." },
  { icon: Users, title: "Start a giving circle", body: "Five households, £10 each a month. That is how this organisation started." },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title={
          <>
            Money is one kind of seva. <span className="text-orange-400">There are others.</span>
          </>
        }
        lede="Time, skill, a kitchen, a WhatsApp group, a birthday. Everything this organisation does started as one of those."
      />

      <section className="bg-stone-50 py-20 lg:py-28">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {involvement.map((item, index) => (
            <Reveal key={item.id} index={index} className="h-full">
              <article
                id={item.id}
                className="flex h-full scroll-mt-28 flex-col rounded-3xl border border-stone-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lift"
              >
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-900">
                  <item.icon aria-hidden className="size-7" strokeWidth={1.75} />
                </span>
                <h2 className="mt-7 font-display text-2xl font-extrabold tracking-[-0.025em] text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 flex-1 text-[1.0625rem] leading-relaxed text-slate-600">{item.body}</p>
                <Button asChild variant="outline" size="lg" className="mt-7 self-start">
                  <Link href={item.cta.href}>
                    {item.cta.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Fundraising ideas"
            title={
              <>
                Four that <span className="text-slate-500">actually work.</span>
              </>
            }
            description="Tested by our supporters, in that order of success. We will send you everything you need for any of them."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ideas.map((idea, index) => (
              <Reveal key={idea.title} index={index} className="h-full">
                <div className="flex h-full flex-col rounded-3xl bg-stone-50 p-7">
                  <idea.icon aria-hidden className="size-7 text-orange-600" strokeWidth={1.7} />
                  <h3 className="mt-5 font-display text-lg font-extrabold tracking-[-0.02em] text-slate-900">
                    {idea.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{idea.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 py-20 text-white lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            tone="light"
            eyebrow="For companies and gurdwaras"
            title={
              <>
                Fund a programme. <span className="text-white/70">Or fund our overheads.</span>
              </>
            }
            description="The rarest and most valuable thing anyone gives us is unrestricted funding for running costs — because it is what lets every public pound stay whole."
          />
          <Reveal index={1}>
            <div className="rounded-3xl border border-white/12 bg-white/5 p-8 backdrop-blur">
              <h3 className="font-display text-xl font-extrabold text-white">The overheads circle</h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-white/70">
                A small group of private donors, trustees and companies who cover audit, payment processing,
                software and staff. They get no recognition on the website and no naming rights — that is
                rather the point. They get the quarterly accounts and an open invitation to any field visit.
              </p>
              <Button asChild variant="white" size="lg" className="mt-7">
                <Link href="/contact?topic=partnership">
                  Ask about joining
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Start where you are. <span className="text-orange-400">Today is fine.</span>
          </>
        }
        body="A monthly gift, an hour a week, or a supper for forty. Tell us what you can do and we will make it count."
        primary={{ label: "Donate", href: "/donate" }}
        secondary={{ label: "Talk to a person", href: "/contact" }}
      />
    </>
  );
}
