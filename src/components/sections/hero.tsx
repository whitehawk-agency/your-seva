"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

import { DonationWidget } from "@/components/sections/donation-widget";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const trustRow = [
  { value: "100%", label: "to the field" },
  { value: "48", label: "villages reached" },
  { value: "2019", label: "serving since" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate -mt-18 overflow-hidden bg-ink-950 pt-18">
      {/* Background media: swap this block for <video> or next/image at launch.
          Keep the gradient scrim so the headline stays legible over photography. */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div
          initial={reduceMotion ? false : { scale: 1.08, opacity: 0 }}
          animate={reduceMotion ? {} : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-ink-950" />
          <div className="absolute -left-[12%] top-[-18%] size-[70%] rounded-full bg-clay/45 blur-[120px]" />
          <div className="absolute bottom-[-25%] left-[18%] size-[65%] rounded-full bg-saffron-600/40 blur-[130px]" />
          <div className="absolute right-[-12%] top-[8%] size-[58%] rounded-full bg-pine-600/45 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_18%_30%,transparent_0%,rgb(15_14_12/0.55)_60%,rgb(15_14_12/0.9)_100%)]" />
        </motion.div>
        <div className="grain-overlay absolute inset-0 opacity-[0.16] mix-blend-soft-light" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="container-page grid gap-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Badge variant="light" className="px-3.5 py-1.5 text-[0.75rem]">
              <span aria-hidden className="size-1.5 rounded-full bg-saffron-400" />
              Seva in action · Panjab &amp; beyond
            </Badge>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="headline mt-6 text-[2.6rem] text-white sm:text-6xl lg:text-[4.4rem]"
          >
            100% of your donation changes lives{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">directly.</span>
              <motion.span
                aria-hidden
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={reduceMotion ? {} : { scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
                style={{ originX: 0 }}
                className="absolute inset-x-0 bottom-1.5 -z-0 h-[0.32em] rounded-sm bg-saffron-500/70"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl"
          >
            Transparent, selfless service. Rebuilding homes, restoring dignity, and empowering families in
            Panjab.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button asChild variant="white" size="xl" className="w-full sm:w-auto">
              <Link href="/our-work">
                See our work
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="xl" className="w-full sm:w-auto">
              <Link href="/impact-stories">
                <BookOpen aria-hidden />
                Read their stories
              </Link>
            </Button>
          </motion.div>

          <motion.dl
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? {} : { opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/12 pt-8"
          >
            {trustRow.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-extrabold tracking-[-0.03em] text-white">
                    {item.value}
                  </span>
                  <span className="mt-1 block text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-white/50">
                    {item.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:pl-4"
        >
          <DonationWidget />
        </motion.div>
      </div>
    </section>
  );
}
