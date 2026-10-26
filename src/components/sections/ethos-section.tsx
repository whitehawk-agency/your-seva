import Link from "next/link";
import { ArrowRight, HandHeart, Sprout, Users } from "lucide-react";

import { MediaFrame } from "@/components/shared/media-frame";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

const principles = [
  { icon: HandHeart, label: "Seva", meaning: "Service, given freely" },
  { icon: Users, label: "Pangat", meaning: "Everyone sits in one row" },
  { icon: Sprout, label: "Vand Chhako", meaning: "Share what you have" },
];

export function EthosSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <MediaFrame
              alt="Volunteers preparing ration parcels in a village courtyard"
              tone="warm"
              icon={HandHeart}
              note="Photo slot — volunteers preparing parcels, hands in frame"
              className="aspect-[5/6]"
            />
            <div className="absolute -bottom-6 -right-4 w-56 rounded-2xl bg-ink-950 p-5 text-white shadow-lift sm:-right-8 sm:w-64">
              <p className="font-display text-3xl font-extrabold tracking-[-0.03em] text-saffron-400">2014</p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                Serving families in Panjab since. Registered charity 1162477.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow flex items-center gap-2.5 text-saffron-700">
              <span aria-hidden className="h-px w-7 bg-saffron-500/60" />
              Rooted in seva
            </span>
          </Reveal>

          <Reveal index={1}>
            <h2 className="headline mt-5 text-[2.1rem] text-ink-900 sm:text-5xl lg:text-[3.3rem]">
              Service is not charity. <span className="text-ink-400">It is an obligation.</span>
            </h2>
          </Reveal>

          <Reveal index={2}>
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-ink-600">
              <p>
                Your Seva is a UK charity working with neglected, abandoned and poverty-stricken families in
                Panjab. Food each month, homes made safe again, warmth before winter, and school fees for
                children who would otherwise stop — carried out by a team on the ground there.
              </p>
              <p>
                We are guided by the teachings of Guru Nanak Dev Ji — that honest work, remembrance and
                sharing what you have are one practice, not three. In the gurdwara, everyone eats in the same
                row from the same kitchen. That is the standard we try to hold in how we assess, fund and
                account for every project.
              </p>
              <p>
                We serve anyone in need, of any faith, caste or background. <em>Sarbat da bhala</em> — the
                wellbeing of all.
              </p>
            </div>
          </Reveal>

          <Reveal index={3}>
            <dl className="mt-9 grid gap-5 sm:grid-cols-3">
              {principles.map((principle) => (
                <div key={principle.label} className="border-t border-ink-200 pt-4">
                  <principle.icon aria-hidden className="size-5 text-saffron-600" strokeWidth={1.9} />
                  <dt className="mt-3 font-display text-lg font-bold text-ink-900">{principle.label}</dt>
                  <dd className="mt-0.5 text-sm text-ink-500">{principle.meaning}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal index={4}>
            <Button asChild variant="ink" size="lg" className="mt-9">
              <Link href="/about">
                Our story
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
