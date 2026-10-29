"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HandHeart } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Full-bleed photographic hero with a dark scrim and one serif statement.
 * Drop a real photograph into `heroImage` and it replaces the placeholder
 * field underneath without touching the scrim or type.
 */
const heroImage: string | undefined = undefined; // e.g. "/media/hero-panjab.jpg"

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[clamp(26rem,68vh,40rem)] items-center overflow-hidden bg-slate-900">
      <div aria-hidden className="absolute inset-0 -z-10">
        {heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={heroImage} alt="" className="size-full object-cover" />
        ) : (
          <motion.div
            initial={reduceMotion ? false : { scale: 1.06 }}
            animate={reduceMotion ? {} : { scale: 1 }}
            transition={{ duration: 2.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-[#4a3728]" />
            <div className="absolute -left-[10%] top-[-20%] size-[70%] rounded-full bg-orange-700/45 blur-[120px]" />
            <div className="absolute bottom-[-30%] left-[25%] size-[65%] rounded-full bg-[#8a6a3f]/60 blur-[120px]" />
            <div className="absolute right-[-10%] top-[10%] size-[55%] rounded-full bg-emerald-900/50 blur-[120px]" />
            <span className="grain-overlay absolute inset-0 opacity-[0.18] mix-blend-soft-light" />
          </motion.div>
        )}
        {/* Scrim: keeps the statement legible over any photograph */}
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/35 to-slate-950/60" />
      </div>

      <div className="container-page w-full py-20 sm:py-24 lg:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
        >
          <h1 className="headline text-[2.75rem] text-white sm:text-6xl lg:text-7xl">
            Serve Humanity Globally
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85 lg:mx-0">
            Selfless service for neglected, abandoned and poverty-stricken families in Panjab — food
            every month, homes made safe, and school fees for children who would otherwise stop.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <Button asChild size="xl">
              <Link href="/donate">
                <HandHeart aria-hidden />
                Give today
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <Link href="/our-work">Our work</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Photography brief for this slot — remove once the real image is in */}
      {!heroImage ? (
        <p className="absolute right-3 top-3 max-w-[14rem] rounded-lg bg-slate-950/80 px-2.5 py-1.5 text-right text-[0.625rem] font-medium uppercase leading-snug tracking-[0.14em] text-white backdrop-blur-sm sm:max-w-none sm:text-[0.6875rem]">
          Photo slot — field visit in Panjab
        </p>
      ) : null}
    </section>
  );
}
