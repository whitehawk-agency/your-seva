import { Counter } from "@/components/shared/counter";
import { Reveal } from "@/components/shared/reveal";
import { impactStats } from "@/lib/content";

export function ImpactCounters() {
  return (
    <section className="relative isolate overflow-hidden bg-pine-900 py-20 text-white lg:py-24">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-[-6%] top-[-40%] size-[50%] rounded-full bg-pine-600/50 blur-[120px]" />
        <div className="absolute bottom-[-45%] right-[-6%] size-[52%] rounded-full bg-saffron-600/25 blur-[120px]" />
        <div className="grain-overlay absolute inset-0 opacity-[0.12] mix-blend-soft-light" />
      </div>

      <div className="container-page">
        <Reveal>
          <p className="eyebrow flex items-center gap-2.5 text-saffron-300">
            <span aria-hidden className="h-px w-7 bg-saffron-300/60" />
            Impact to date
          </p>
        </Reveal>

        <dl className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => (
            <Reveal key={stat.label} index={index}>
              <div className="border-t border-white/15 pt-6">
                <dd className="font-display text-5xl font-extrabold tracking-[-0.04em] text-white lg:text-6xl">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
                <dt className="mt-3 font-display text-lg font-bold text-saffron-300">{stat.label}</dt>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">{stat.sub}</p>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal index={4}>
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-white/45">
            Charitable spend is taken from the charity&apos;s filed accounts for the year ending 30 November
            2024. The Ration Panee unit cost is the figure the charity publishes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
