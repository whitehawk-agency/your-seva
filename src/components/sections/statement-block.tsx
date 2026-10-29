import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

/**
 * The single biggest claim on the page: one number, one consequence, one CTA.
 */
export function StatementBlock() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="headline text-[1.9rem] text-slate-900 sm:text-4xl lg:text-[3rem]">
            £15 feeds a family for a month. Most of the households we visit have no income at all.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-slate-600">
            You can help open the door to food, shelter, dignity and education — especially for elders
            living alone and children whose schooling is about to end.
          </p>

          <div className="mt-9 flex justify-center">
            <Button asChild size="xl">
              <Link href="/donate">Give today</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal index={1} className="mx-auto mt-12 max-w-3xl">
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-orange-200 bg-orange-100 p-6 text-center sm:flex-row sm:gap-7 sm:p-7 sm:text-left">
            <span className="flex size-24 shrink-0 items-center justify-center rounded-full border-2 border-orange-800 font-display text-2xl font-semibold text-orange-900">
              100%
            </span>
            <p className="text-[0.9375rem] leading-relaxed text-orange-900">
              Thanks to Gift Aid and a small circle of private donors who cover our running costs,
              <strong className="font-bold"> 100% of your donation goes directly to projects</strong> in
              Panjab — food, home rebuilding, winter care and school fees.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
