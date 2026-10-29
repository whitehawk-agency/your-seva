import { Play } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";

/**
 * "Why Your Seva?" — centred serif statement followed by the film block,
 * mirroring the intro beat in the design.
 */
export function WhySection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label">Why Your Seva?</p>
          <h2 className="headline mt-5 text-[2rem] text-slate-900 sm:text-4xl lg:text-[3.25rem]">
            Serving the unfortunate across the globe selflessly.
          </h2>
        </Reveal>

        <Reveal index={1} className="mt-14">
          <figure className="relative isolate overflow-hidden rounded-3xl bg-slate-950">
            <div className="aspect-[16/9] w-full sm:aspect-[2/1]">
              <div aria-hidden className="absolute inset-0">
                <div className="absolute left-[12%] top-[8%] size-[55%] rounded-full bg-orange-800/35 blur-[110px]" />
                <div className="absolute bottom-[-20%] right-[6%] size-[50%] rounded-full bg-emerald-900/50 blur-[110px]" />
                <span className="grain-overlay absolute inset-0 opacity-[0.16] mix-blend-soft-light" />
              </div>

              <button
                type="button"
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white transition-colors hover:bg-white/5"
              >
                <span className="inline-flex size-16 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 sm:size-20">
                  <Play aria-hidden className="size-7 translate-x-0.5 fill-current sm:size-8" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em]">Watch our film</span>
                <span className="sr-only">Play the Your Seva film</span>
              </button>
            </div>

            <figcaption className="absolute left-4 top-4 rounded-lg bg-slate-950/80 px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              Video slot — embed the Your Seva film here
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
