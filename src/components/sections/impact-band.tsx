import { Counter } from "@/components/shared/counter";
import { Reveal } from "@/components/shared/reveal";
import { impactStats, latestAccounts, site } from "@/lib/content";
import { formatGBP } from "@/lib/utils";

const updated = "21 October 2026"; // [CONFIRM] wire to the project ledger

/**
 * The dark impact band — a ledger-style panel rather than loose statistics,
 * so each figure carries its own "last updated" line.
 */
export function ImpactBand() {
  return (
    <section className="bg-slate-800 py-20 lg:py-24">
      <div className="container-page">
        <Reveal>
          <p className="section-label text-center text-orange-300">Charity impact till date</p>
        </Reveal>

        <Reveal index={1} className="mt-10">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lift">
            <div className="grid divide-y divide-stone-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="flex items-center gap-4 p-6 sm:p-8">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-orange-600" />
                <div className="min-w-0">
                  <p className="font-display text-2xl text-slate-900">{site.name}</p>
                  <p className="mt-0.5 text-xs text-slate-600">Last updated: {updated}</p>
                </div>
              </div>

              <div className="p-6 text-right sm:p-8">
                <p className="font-display text-3xl text-slate-900 sm:text-4xl">
                  {formatGBP(latestAccounts.expenditure)}
                </p>
                <p className="mt-0.5 text-xs text-slate-600">
                  Charitable spend, year to {latestAccounts.financialYearEnd}
                </p>
              </div>
            </div>

            <dl className="grid gap-px border-t border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map((stat) => (
                <div key={stat.label} className="bg-white p-6">
                  <dd className="font-display text-3xl text-slate-900">
                    <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-1.5 text-sm font-bold text-slate-900">{stat.label}</dt>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{stat.sub}</p>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal index={2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-stone-300">
            Figures come from the charity&apos;s filed accounts and published unit costs. Cumulative
            programme totals are being added as the trustees confirm them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
