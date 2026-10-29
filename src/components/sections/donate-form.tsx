"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Heart, Info, Loader2, Lock, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { donationTiers, programmes, type Frequency } from "@/lib/content";
import { cn, formatGBP } from "@/lib/utils";

const schema = z.object({
  frequency: z.enum(["monthly", "once"]),
  amount: z
    .number({ invalid_type_error: "Please choose or enter an amount." })
    .min(1, "Donations start at £1.")
    .max(50000, "For gifts over £50,000 please email info@yourseva.org so we can handle it properly."),
  designation: z.string(),
  firstName: z.string().trim().min(1, "Please enter your first name."),
  lastName: z.string().trim().min(1, "Please enter your last name."),
  email: z.string().trim().min(1, "We need an email to send your receipt.").email("That doesn't look like an email address."),
  giftAid: z.boolean(),
  postcode: z.string().trim().optional(),
  message: z.string().trim().max(400, "Please keep this under 400 characters.").optional(),
});

export type DonateValues = z.infer<typeof schema>;

const designations = [
  { value: "unrestricted", label: "Where it's needed most", hint: "Recommended — funds the most urgent case" },
  ...programmes.map((programme) => ({
    value: programme.slug,
    label: programme.name,
    hint: programme.short,
  })),
];

export function DonateForm({
  defaultFrequency = "monthly",
  defaultAmount = 30,
  defaultDesignation = "unrestricted",
}: {
  defaultFrequency?: Frequency;
  defaultAmount?: number;
  defaultDesignation?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = React.useState<DonateValues | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<DonateValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      frequency: defaultFrequency,
      amount: defaultAmount,
      designation: defaultDesignation,
      firstName: "",
      lastName: "",
      email: "",
      giftAid: true,
      postcode: "",
      message: "",
    },
  });

  const frequency = watch("frequency");
  const amount = watch("amount");
  const giftAid = watch("giftAid");
  const designation = watch("designation");

  const tiers = donationTiers[frequency];
  const matchedTier = tiers.find((tier) => tier.amount === amount);
  const [customMode, setCustomMode] = React.useState(!matchedTier);

  const giftAidUplift = giftAid ? Math.round((amount || 0) * 0.25 * 100) / 100 : 0;
  const annualised = frequency === "monthly" ? (amount || 0) * 12 : amount || 0;

  async function onSubmit(values: DonateValues) {
    // TODO: hand off to the payment provider (Stripe Checkout for card and
    // one-off gifts, GoCardless for UK Direct Debit) from a route handler, then
    // redirect to /donate/thank-you. No provider is wired up in this build.
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(values);
  }

  if (submitted) {
    const label = designations.find((item) => item.value === submitted.designation)?.label;
    return (
      <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-soft sm:p-10">
        <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-900">
          <Check aria-hidden className="size-7" strokeWidth={2.5} />
        </span>
        <h2 className="mt-6 font-display text-3xl font-extrabold tracking-[-0.03em] text-slate-900">
          Thank you, {submitted.firstName}.
        </h2>
        <p className="mt-3 text-[1.0625rem] leading-relaxed text-slate-600">
          Here is exactly what your gift does. The final step is the secure payment screen.
        </p>

        <dl className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
          {[
            {
              label: "Your gift",
              value: `${formatGBP(submitted.amount)}${submitted.frequency === "monthly" ? " every month" : " one-off"}`,
            },
            { label: "Funding", value: label ?? "Where it's needed most" },
            {
              label: "Gift Aid",
              value: submitted.giftAid
                ? `+${formatGBP(Math.round(submitted.amount * 0.25 * 100) / 100)} reclaimed — this is what covers our running costs`
                : "Not claimed",
            },
            { label: "Reaching the field", value: `${formatGBP(submitted.amount)} — 100%` },
            { label: "Receipt to", value: submitted.email },
          ].map((row) => (
            <div key={row.label} className="flex flex-wrap justify-between gap-4 py-4">
              <dt className="text-sm font-medium text-slate-600">{row.label}</dt>
              <dd className="text-right font-semibold text-slate-900">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 rounded-2xl bg-stone-100 p-5">
          <p className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
            <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-slate-600" />
            <span>
              <strong className="font-semibold text-slate-900">Developer note:</strong> no payment provider is
              connected in this build. Wire this submit handler to Stripe Checkout (cards and one-off gifts)
              or GoCardless (UK Direct Debit) and redirect to a thank-you route.
            </span>
          </p>
        </div>

        <Button variant="outline" size="lg" className="mt-7" onClick={() => setSubmitted(null)}>
          Edit this donation
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">
      {/* Frequency */}
      <fieldset>
        <legend className="font-display text-xl font-extrabold tracking-[-0.02em] text-slate-900">
          1. How often?
        </legend>
        <div className="mt-4 grid grid-cols-2 gap-1 rounded-full bg-stone-100 p-1">
          {(["monthly", "once"] as const).map((value) => {
            const selected = frequency === value;
            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setValue("frequency", value, { shouldValidate: true })}
                className={cn(
                  "relative inline-flex h-12 items-center justify-center rounded-full text-base font-bold transition-colors",
                  selected ? "text-slate-950" : "text-slate-700 hover:text-slate-900",
                )}
              >
                {selected ? (
                  <motion.span
                    aria-hidden
                    layoutId="donate-frequency-pill"
                    transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 rounded-full bg-orange-500 shadow-soft"
                  />
                ) : null}
                <span className="relative">{value === "monthly" ? "Give monthly" : "Give once"}</span>
              </button>
            );
          })}
        </div>
        {frequency === "monthly" ? (
          <p className="mt-3 text-sm text-slate-600">
            Monthly giving lets our field teams commit to work months ahead. Cancel any time, same day, no
            questions.
          </p>
        ) : (
          <p className="mt-3 text-sm text-slate-600">
            A single gift, allocated to a vetted project within the week.
          </p>
        )}
      </fieldset>

      {/* Amount */}
      <fieldset>
        <legend className="font-display text-xl font-extrabold tracking-[-0.02em] text-slate-900">
          2. How much?
        </legend>
        <div role="radiogroup" aria-label="Amount" className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tiers.map((tier) => {
            const selected = !customMode && amount === tier.amount;
            return (
              <button
                key={tier.amount}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => {
                  setCustomMode(false);
                  setValue("amount", tier.amount, { shouldValidate: true });
                }}
                className={cn(
                  "inline-flex h-16 items-center justify-center rounded-2xl border-2 font-display text-xl font-extrabold tracking-[-0.02em] transition-all duration-200",
                  selected
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-stone-200 bg-white text-slate-800 hover:border-slate-400",
                )}
              >
                {formatGBP(tier.amount)}
                {frequency === "monthly" ? <span className="ml-0.5 text-sm font-bold">/mo</span> : null}
              </button>
            );
          })}
        </div>

        <div className="mt-3">
          <button
            type="button"
            onClick={() => setCustomMode(true)}
            aria-pressed={customMode}
            className={cn(
              "inline-flex h-11 items-center rounded-full border-2 px-5 text-sm font-bold transition-colors",
              customMode
                ? "border-slate-950 bg-slate-950 text-white"
                : "border-stone-200 bg-white text-slate-800 hover:border-slate-400",
            )}
          >
            Choose my own amount
          </button>
        </div>

        <AnimatePresence initial={false}>
          {customMode ? (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, height: 0 }}
              animate={reduceMotion ? {} : { opacity: 1, height: "auto" }}
              exit={reduceMotion ? {} : { opacity: 0, height: 0 }}
              transition={{ duration: 0.24 }}
              className="overflow-hidden"
            >
              <div className="pt-4">
                <Label htmlFor="amount">Your amount</Label>
                <div className="relative mt-2 max-w-xs">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-display text-lg font-bold text-slate-600">
                    £
                  </span>
                  <Input
                    id="amount"
                    type="number"
                    inputMode="decimal"
                    min={1}
                    step="1"
                    className="h-14 pl-9 font-display text-lg font-bold"
                    aria-invalid={Boolean(errors.amount)}
                    {...register("amount", { valueAsNumber: true })}
                  />
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {errors.amount ? (
          <p role="alert" className="mt-3 text-sm font-semibold text-destructive">
            {errors.amount.message}
          </p>
        ) : null}

        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={`${frequency}-${amount}`}
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            exit={reduceMotion ? {} : { opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="mt-5 flex gap-2.5 rounded-2xl bg-orange-50 p-5 text-[0.9375rem] leading-relaxed text-orange-900"
          >
            <Heart aria-hidden className="mt-0.5 size-4 shrink-0 fill-current text-orange-600" />
            <span>
              {matchedTier?.detail ??
                `${formatGBP(amount || 0)}${frequency === "monthly" ? " a month" : ""} goes straight to a vetted project — not a penny is taken for admin.`}
            </span>
          </motion.p>
        </AnimatePresence>
      </fieldset>

      {/* Designation */}
      <fieldset>
        <legend className="font-display text-xl font-extrabold tracking-[-0.02em] text-slate-900">
          3. What should it fund?
        </legend>
        <div role="radiogroup" aria-label="Designation" className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {designations.map((option) => {
            const selected = designation === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setValue("designation", option.value, { shouldValidate: true })}
                className={cn(
                  "rounded-2xl border-2 p-4 text-left transition-all duration-200",
                  selected
                    ? "border-orange-500 bg-orange-50"
                    : "border-stone-200 bg-white hover:border-slate-400",
                )}
              >
                <span className="block font-bold text-slate-900">{option.label}</span>
                <span className="mt-0.5 block text-sm text-slate-600">{option.hint}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Details */}
      <fieldset>
        <legend className="font-display text-xl font-extrabold tracking-[-0.02em] text-slate-900">
          4. Your details
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              autoComplete="given-name"
              className="mt-2"
              aria-invalid={Boolean(errors.firstName)}
              {...register("firstName")}
            />
            {errors.firstName ? (
              <p role="alert" className="mt-1.5 text-xs font-semibold text-destructive">
                {errors.firstName.message}
              </p>
            ) : null}
          </div>
          <div>
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              autoComplete="family-name"
              className="mt-2"
              aria-invalid={Boolean(errors.lastName)}
              {...register("lastName")}
            />
            {errors.lastName ? (
              <p role="alert" className="mt-1.5 text-xs font-semibold text-destructive">
                {errors.lastName.message}
              </p>
            ) : null}
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              className="mt-2"
              aria-invalid={Boolean(errors.email)}
              {...register("email")}
            />
            {errors.email ? (
              <p role="alert" className="mt-1.5 text-xs font-semibold text-destructive">
                {errors.email.message}
              </p>
            ) : (
              <p className="mt-1.5 text-xs text-slate-600">
                For your receipt and a short field update. Nothing else, ever.
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="postcode">Postcode (for Gift Aid)</Label>
            <Input id="postcode" autoComplete="postal-code" className="mt-2" {...register("postcode")} />
          </div>
        </div>

        <label className="mt-6 flex cursor-pointer gap-3 rounded-2xl border-2 border-orange-200 bg-orange-50 p-5">
          <input
            type="checkbox"
            className="mt-0.5 size-5 shrink-0 rounded border-stone-300 accent-orange-500"
            {...register("giftAid")}
          />
          <span>
            <span className="block font-bold text-slate-900">
              Yes, add Gift Aid — it is what makes the 100% model work
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-slate-600">
              I am a UK taxpayer and understand that if I pay less Income Tax and/or Capital Gains Tax than
              the amount of Gift Aid claimed on all my donations in that tax year, it is my responsibility to
              pay any difference. The 25p reclaimed on each pound funds our running costs, so your donation
              stays whole.
            </span>
          </span>
        </label>
      </fieldset>

      <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
        <dl className="space-y-3 text-[0.9375rem]">
          <div className="flex justify-between gap-4">
            <dt className="text-slate-600">Your gift</dt>
            <dd className="font-bold text-slate-900">
              {formatGBP(amount || 0)}
              {frequency === "monthly" ? " / month" : ""}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-slate-600">Gift Aid (funds our running costs)</dt>
            <dd className="font-bold text-slate-900">
              {giftAidUplift ? `+ ${formatGBP(giftAidUplift)}` : "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-stone-200 pt-3">
            <dt className="font-semibold text-slate-900">
              Reaching the field{frequency === "monthly" ? " each year" : ""}
            </dt>
            <dd className="font-display text-xl font-extrabold tracking-[-0.02em] text-orange-900">
              {formatGBP(annualised)}
            </dd>
          </div>
        </dl>
      </div>

      <div>
        <Button type="submit" size="xl" disabled={isSubmitting} className="w-full">
          {isSubmitting ? <Loader2 className="animate-spin" /> : <Lock />}
          Continue to secure payment
        </Button>
        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-600">
          <ShieldCheck aria-hidden className="size-4 text-emerald-800" />
          100% of this donation reaches the field.{" "}
          <Link href="/100-percent-model" className="font-semibold text-slate-700 underline underline-offset-2">
            How?
          </Link>
        </p>
      </div>
    </form>
  );
}
