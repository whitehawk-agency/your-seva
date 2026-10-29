import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-center font-semibold transition-[background-color,color,box-shadow,transform] duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-px",
  {
    variants: {
      variant: {
        /** The site's workhorse CTA — uppercase, letterspaced, orange. */
        cta: "rounded-lg bg-orange-700 uppercase tracking-[0.12em] text-white shadow-soft hover:bg-orange-800",
        /** Exact mockup hue. White on orange-600 is 3.6:1 — large text only. */
        brand: "rounded-lg bg-orange-600 uppercase tracking-[0.12em] text-white shadow-soft hover:bg-orange-700",
        /** Pill form, for the header and inline links. */
        default: "rounded-full bg-orange-700 text-white shadow-soft hover:bg-orange-800",
        ink: "rounded-full bg-slate-900 text-white shadow-soft hover:bg-slate-800",
        pine: "rounded-full bg-emerald-800 text-white shadow-soft hover:bg-emerald-700",
        outline:
          "rounded-lg border-2 border-slate-900/20 bg-transparent uppercase tracking-[0.12em] text-slate-900 hover:border-slate-900/50 hover:bg-slate-900/5",
        white: "rounded-lg bg-white uppercase tracking-[0.12em] text-slate-900 shadow-soft hover:bg-stone-100",
        "outline-light":
          "rounded-lg border-2 border-white/50 bg-transparent uppercase tracking-[0.12em] text-white hover:border-white hover:bg-white/15",
        ghost: "rounded-full text-slate-700 hover:bg-slate-900/5 hover:text-slate-900",
        link: "text-slate-900 underline decoration-orange-600 decoration-2 underline-offset-4 hover:decoration-orange-800",
      },
      size: {
        sm: "min-h-9 px-4 py-2 text-[0.75rem] [&_svg]:size-4",
        default: "min-h-11 px-6 py-2.5 text-[0.8125rem] [&_svg]:size-4",
        lg: "min-h-12 px-7 py-3 text-[0.875rem] sm:px-8 [&_svg]:size-4",
        xl: "min-h-14 px-8 py-3.5 text-[0.9375rem] sm:px-10 [&_svg]:size-5",
        icon: "size-11 rounded-full [&_svg]:size-5",
      },
    },
    defaultVariants: { variant: "cta", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * Orange fills top out at 5.22:1 with white text. That clears WCAG AA but not
 * AAA — no vivid orange can reach 7:1. These are tagged so the contrast audit
 * holds them to AA and everything else on the site to AAA.
 */
const BRAND_FILLS = new Set(["cta", "brand", "default"]);

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-contrast={BRAND_FILLS.has(variant ?? "cta") ? "brand" : undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
