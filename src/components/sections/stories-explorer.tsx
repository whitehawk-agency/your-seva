"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { MediaFrame } from "@/components/shared/media-frame";
import { Badge } from "@/components/ui/badge";
import { stories } from "@/lib/content";
import { cn } from "@/lib/utils";

const ALL = "All stories";

export function StoriesExplorer() {
  const reduceMotion = useReducedMotion();
  const filters = React.useMemo(
    () => [ALL, ...Array.from(new Set(stories.map((story) => story.programme)))],
    [],
  );
  const [active, setActive] = React.useState(ALL);

  const visible = active === ALL ? stories : stories.filter((story) => story.programme === active);

  return (
    <section className="bg-stone-50 py-16 lg:py-24">
      <div className="container-page">
        <div
          role="tablist"
          aria-label="Filter stories by programme"
          className="flex flex-wrap gap-2 border-b border-stone-200 pb-6"
        >
          {filters.map((filter) => {
            const selected = active === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(filter)}
                className={cn(
                  "relative inline-flex h-11 items-center rounded-full px-5 text-sm font-bold transition-colors",
                  selected ? "text-slate-950" : "text-slate-700 hover:bg-slate-900/5 hover:text-slate-900",
                )}
              >
                {selected ? (
                  <motion.span
                    aria-hidden
                    layoutId="story-filter-pill"
                    transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 rounded-full bg-orange-500"
                  />
                ) : null}
                <span className="relative">{filter}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((story) => (
              <motion.article
                key={story.slug}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                exit={reduceMotion ? {} : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="h-full"
              >
                <Link
                  href={`/impact-stories/${story.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-orange-300"
                >
                  <MediaFrame
                    alt={story.title}
                    tone={story.tone}
                    icon={story.icon}
                    note={story.photoNote}
                    className="aspect-[16/10] rounded-none"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{story.programme}</Badge>
                      <span className="text-xs font-medium text-slate-600">{story.readingTime}</span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.025em] text-slate-900">
                      {story.title}
                    </h2>
                    <p className="mt-3 flex-1 text-[1.0625rem] leading-relaxed text-slate-600">
                      {story.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-stone-200 pt-5">
                      <span className="text-sm font-semibold text-slate-700">{story.location}</span>
                      <ArrowRight
                        aria-hidden
                        className="size-5 text-orange-600 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
