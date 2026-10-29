"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const topics = [
  { value: "general", label: "General enquiry" },
  { value: "donation", label: "My donation" },
  { value: "fundraising", label: "Fundraising" },
  { value: "volunteering", label: "Volunteering" },
  { value: "partnership", label: "Partnership" },
  { value: "press", label: "Press" },
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please tell us your name."),
  email: z.string().trim().min(1, "We need an email to reply to.").email("That doesn't look like an email address."),
  topic: z.string(),
  message: z
    .string()
    .trim()
    .min(10, "A little more detail helps us route this to the right person.")
    .max(2000, "Please keep this under 2,000 characters."),
});

type Values = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", topic: "general", message: "" },
  });

  const topic = watch("topic");

  // Deep links from the site (/contact?topic=fundraising) preselect a topic.
  React.useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("topic");
    if (requested && topics.some((item) => item.value === requested)) {
      setValue("topic", requested);
    }
  }, [setValue]);

  async function onSubmit() {
    // TODO: POST to a route handler that forwards to the inbox / CRM.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-soft sm:p-10">
        <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-900">
          <Check aria-hidden className="size-7" strokeWidth={2.5} />
        </span>
        <h2 className="mt-6 font-display text-2xl font-extrabold tracking-[-0.025em] text-slate-900">
          Message sent.
        </h2>
        <p className="mt-3 text-[1.0625rem] leading-relaxed text-slate-600">
          A person will read this and reply, usually within two working days. If it is urgent and about a
          donation, email info@yourseva.org and put &ldquo;urgent&rdquo; in the subject.
        </p>
        <p className="mt-6 rounded-2xl bg-stone-100 p-5 text-sm leading-relaxed text-slate-600">
          <strong className="font-semibold text-slate-900">Developer note:</strong> this form is not connected
          to an inbox in this build. Point the submit handler at a route handler that forwards to the team
          inbox or CRM.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Your name</Label>
          <Input
            id="name"
            autoComplete="name"
            className="mt-2"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          {errors.name ? (
            <p role="alert" className="mt-1.5 text-xs font-semibold text-destructive">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="contact-email">Email address</Label>
          <Input
            id="contact-email"
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
          ) : null}
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-slate-800">What is it about?</legend>
        <div role="radiogroup" aria-label="Topic" className="mt-3 flex flex-wrap gap-2">
          {topics.map((item) => {
            const selected = topic === item.value;
            return (
              <button
                key={item.value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setValue("topic", item.value)}
                className={cn(
                  "inline-flex h-10 items-center rounded-full border-2 px-4 text-sm font-semibold transition-colors",
                  selected
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-stone-200 bg-white text-slate-700 hover:border-slate-400",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <Label htmlFor="message">Your message</Label>
        <Textarea
          id="message"
          className="mt-2"
          placeholder="Tell us what you need. Plain language is fine."
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
        {errors.message ? (
          <p role="alert" className="mt-1.5 text-xs font-semibold text-destructive">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div>
        <Button type="submit" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
          Send message
        </Button>
        <p className="mt-3 text-xs leading-relaxed text-slate-600">
          We use your details only to reply. We never sell or share them. See our{" "}
          <a href="/privacy" className="font-semibold text-slate-700 underline underline-offset-2">
            privacy policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
