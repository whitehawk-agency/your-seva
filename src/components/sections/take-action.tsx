"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

/** [CONFIRM] Replace with the charity's own campaigns and appeals. */
const actions = [
  {
    title: "Your Seva Hike",
    body: "Walk a distance, raise a month of food for a family. Packs and sponsorship pages provided.",
    href: "/get-involved#fundraise",
    label: "Fundraise",
    tone: "from-sky-200 to-emerald-300",
  },
  {
    title: "Farmers Support",
    body: "Stand with farming households hit by failed harvests, debt and flood damage.",
    href: "/our-work#ration-panee",
    label: "Appeal",
    tone: "from-amber-200 to-orange-300",
  },
  {
    title: "Shaheed Families",
    body: "Ongoing support for the families left behind — rations, schooling and home repair.",
    href: "/our-work#elder-winter-care",
    label: "Programme",
    tone: "from-orange-200 to-rose-300",
  },
  {
    title: "Free School Fees",
    body: "Sponsor a single-parent or orphaned child through a full year of schooling.",
    href: "/our-work#education",
    label: "Sponsor",
    tone: "from-emerald-200 to-teal-300",
  },
];

export function TakeAction() {
  const trackRef = React.useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  const sync = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  React.useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.clientWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-white pb-16 pt-20 lg:pb-20 lg:pt-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="headline text-[2rem] text-slate-900 sm:text-4xl lg:text-5xl">
            Ready to take action?
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate-600">
            There are lots of ways to help families in Panjab. Take action today, and change lives.
          </p>
        </Reveal>

        <Reveal index={1} className="mt-12">
          <ul
            ref={trackRef}
            className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {actions.map((action) => (
              <li
                key={action.title}
                className="w-[17rem] shrink-0 snap-start sm:w-[19rem]"
              >
                <Link
                  href={action.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div
                    className={cn(
                      "relative aspect-[4/3] bg-gradient-to-b",
                      action.tone,
                    )}
                  >
                    <span className="absolute left-3 top-3 rounded-lg bg-slate-950/80 px-2.5 py-1.5 text-[0.625rem] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      Photo slot
                    </span>
                    <span className="absolute inset-x-0 bottom-0 bg-emerald-800 px-4 py-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white">
                      {action.title}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-orange-800">
                      {action.label}
                    </span>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{action.body}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-900">
                      Take action
                      <ArrowRight
                        aria-hidden
                        className="size-3.5 text-orange-700 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous actions"
              onClick={() => scrollBy(-1)}
              disabled={atStart}
              className="inline-flex size-11 items-center justify-center rounded-full border-2 border-slate-900/20 text-slate-900 transition-colors hover:border-slate-900/50 hover:bg-slate-900/5 disabled:opacity-35"
            >
              <ArrowLeft aria-hidden className="size-4" />
            </button>
            <button
              type="button"
              aria-label="More actions"
              onClick={() => scrollBy(1)}
              disabled={atEnd}
              className="inline-flex size-11 items-center justify-center rounded-full border-2 border-slate-900/20 text-slate-900 transition-colors hover:border-slate-900/50 hover:bg-slate-900/5 disabled:opacity-35"
            >
              <ArrowRight aria-hidden className="size-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
