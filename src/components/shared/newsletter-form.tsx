"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().min(1, "Please enter your email address.").email("That doesn't look like an email address."),
  consent: z.literal(true, { errorMap: () => ({ message: "Please tick the box so we know we may email you." }) }),
});

type Values = z.infer<typeof schema>;

export function NewsletterForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { email: "" } });

  async function onSubmit() {
    // TODO: POST to the email platform (Mailchimp / Beehiiv / HubSpot) via a
    // route handler. Deliberately not wired to a provider in this build.
    await new Promise((resolve) => setTimeout(resolve, 650));
    setSubmitted(true);
  }

  const onLight = tone === "light";

  if (submitted) {
    return (
      <p
        className={cn(
          "flex items-center gap-2.5 rounded-xl border px-4 py-3.5 text-sm font-semibold",
          onLight ? "border-orange-200 bg-orange-50 text-orange-900" : "border-white/20 bg-white/10 text-white",
        )}
      >
        <Check className="size-4 shrink-0" />
        You&apos;re on the list. Field updates, four or five times a year.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          className={cn(
            "sm:flex-1",
            !onLight && "border-white/20 bg-white/10 text-white placeholder:text-white/40",
          )}
          {...register("email")}
        />
        <Button type="submit" size="lg" disabled={isSubmitting} className="sm:w-auto">
          {isSubmitting ? <Loader2 className="animate-spin" /> : <ArrowRight />}
          Subscribe
        </Button>
      </div>

      <label
        className={cn(
          "flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed",
          onLight ? "text-slate-600" : "text-white/60",
        )}
      >
        <input
          type="checkbox"
          className="mt-0.5 size-4 shrink-0 rounded border-stone-300 accent-orange-500"
          aria-invalid={Boolean(errors.consent)}
          {...register("consent")}
        />
        <span>
          Yes, email me field updates. No fundraising pressure, no selling your data, unsubscribe in one click.
        </span>
      </label>

      {errors.email || errors.consent ? (
        <p id="newsletter-email-error" role="alert" className="text-xs font-semibold text-destructive">
          {errors.email?.message ?? errors.consent?.message}
        </p>
      ) : null}
    </form>
  );
}
