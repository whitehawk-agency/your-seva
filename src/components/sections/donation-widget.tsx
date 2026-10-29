"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Heart, Info, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { customImpact, defaultAmount, donationTiers, type Frequency } from "@/lib/content";
import { cn, formatGBP } from "@/lib/utils";

const frequencies: { value: Frequency; label: string; hint: string }[] = [
  { value: "monthly", label: "Give Monthly", hint: "/mo" },
  { value: "once", label: "Give Once", hint: "" },
];

export function DonationWidget({
  className,
  variant = "overlay",
  initialFrequency = "monthly",
}: {
  className?: string;
  variant?: "overlay" | "inline";
  initialFrequency?: Frequency;
}) {
  const [frequency, setFrequency] = React.useState<Frequency>(initialFrequency);
  const [amount, setAmount] = React.useState<number>(defaultAmount);
  const [custom, setCustom] = React.useState("");
  const [isCustom, setIsCustom] = React.useState(false);
  const reduceMotion = useReducedMotion();

  const tiers = donationTiers[frequency];
  const activeTier = tiers.find((tier) => tier.amount === amount && !isCustom);
  const customValue = Number.parseFloat(custom);
  const customIsValid = Number.isFinite(customValue) && customValue >= 1;
  const effectiveAmount = isCustom ? (customIsValid ? customValue : null) : amount;

  const impact = activeTier?.impact ?? customImpact[frequency];

  const href = effectiveAmount
    ? `/donate?frequency=${frequency}&amount=${effectiveAmount}`
    : `/donate?frequency=${frequency}`;

  return (
    <div
      className={cn(
        "w-full rounded-3xl bg-white p-5 sm:p-6",
        variant === "overlay"
          ? "shadow-lift ring-1 ring-slate-950/5 backdrop-blur-xl"
          : "border border-stone-200 shadow-soft",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-extrabold tracking-[-0.02em] text-slate-900">
            Give with full confidence
          </h2>
          <p className="mt-1 flex items-center gap-1.5 text-[0.8125rem] font-semibold text-emerald-800">
            <ShieldCheck aria-hidden className="size-4" />
            100% of this reaches the field
          </p>
        </div>
      </div>

      {/* Frequency toggle */}
      <div
        role="radiogroup"
        aria-label="Donation frequency"
        className="mt-5 grid grid-cols-2 gap-1 rounded-full bg-stone-100 p-1"
      >
        {frequencies.map((option) => {
          const selected = frequency === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setFrequency(option.value)}
              className={cn(
                "relative inline-flex h-11 items-center justify-center rounded-full text-[0.9375rem] font-bold transition-colors",
                selected ? "text-slate-950" : "text-slate-700 hover:text-slate-900",
              )}
            >
              {selected ? (
                <motion.span
                  aria-hidden
                  layoutId="donation-frequency-pill"
                  transition={
                    reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }
                  }
                  className="absolute inset-0 rounded-full bg-orange-500 shadow-soft"
                />
              ) : null}
              <span className="relative">{option.label}</span>
            </button>
          );
        })}
      </div>

      {/* Amounts */}
      <div
        role="radiogroup"
        aria-label="Donation amount"
        className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5"
      >
        {tiers.map((tier) => {
          const selected = !isCustom && amount === tier.amount;
          return (
            <button
              key={tier.amount}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => {
                setAmount(tier.amount);
                setIsCustom(false);
              }}
              className={cn(
                "inline-flex h-14 items-center justify-center rounded-xl border-2 font-display text-lg font-extrabold tracking-[-0.02em] transition-all duration-200",
                selected
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-stone-200 bg-white text-slate-800 hover:border-slate-400",
              )}
            >
              {formatGBP(tier.amount)}
            </button>
          );
        })}
        <button
          type="button"
          role="radio"
          aria-checked={isCustom}
          onClick={() => setIsCustom(true)}
          className={cn(
            "col-span-3 inline-flex h-14 items-center justify-center rounded-xl border-2 text-base font-bold transition-all duration-200 sm:col-span-1",
            isCustom
              ? "border-slate-950 bg-slate-950 text-white"
              : "border-stone-200 bg-white text-slate-800 hover:border-slate-400",
          )}
        >
          Custom
        </button>
      </div>

      <AnimatePresence initial={false} mode="wait">
        {isCustom ? (
          <motion.div
            key="custom-input"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={reduceMotion ? {} : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? {} : { opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-3">
              <label htmlFor="custom-amount" className="sr-only">
                Custom amount in pounds
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-display text-lg font-bold text-slate-600">
                  £
                </span>
                <Input
                  id="custom-amount"
                  type="number"
                  inputMode="decimal"
                  min={1}
                  step="1"
                  value={custom}
                  onChange={(event) => setCustom(event.target.value)}
                  placeholder="Enter an amount"
                  aria-invalid={custom.length > 0 && !customIsValid}
                  className="h-14 pl-9 font-display text-lg font-bold"
                />
              </div>
              {custom.length > 0 && !customIsValid ? (
                <p role="alert" className="mt-2 text-xs font-semibold text-destructive">
                  Please enter an amount of £1 or more.
                </p>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Impact calculator line */}
      <div className="mt-4 min-h-18 rounded-xl bg-orange-50 p-4">
        <AnimatePresence initial={false} mode="wait">
          <motion.p
            key={`${frequency}-${isCustom ? "custom" : amount}`}
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            exit={reduceMotion ? {} : { opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-orange-900"
          >
            <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-orange-600" />
            <span>
              {effectiveAmount ? (
                <>
                  <strong className="font-bold">
                    {formatGBP(effectiveAmount)}
                    {frequency === "monthly" ? "/mo" : ""}
                  </strong>{" "}
                  {impact.charAt(0).toLowerCase() + impact.slice(1)}
                </>
              ) : (
                impact
              )}
            </span>
          </motion.p>
        </AnimatePresence>
      </div>

      <Button asChild size="xl" className="mt-4 w-full">
        <Link href={href}>
          <Heart aria-hidden className="fill-current" />
          Donate {effectiveAmount ? formatGBP(effectiveAmount) : "now"}
          {effectiveAmount && frequency === "monthly" ? (
            <span className="hidden sm:inline">monthly</span>
          ) : null}
          <ArrowRight aria-hidden />
        </Link>
      </Button>

      <p className="mt-3 text-center text-xs leading-relaxed text-slate-600">
        Secure payment · Cancel a monthly gift any time ·{" "}
        <Link href="/100-percent-model" className="font-semibold text-slate-700 underline underline-offset-2">
          How the 100% model works
        </Link>
      </p>
    </div>
  );
}
