import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[background-color,color,box-shadow,transform] duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-px",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-soft hover:bg-saffron-400",
        ink: "bg-ink-900 text-ink-50 shadow-soft hover:bg-ink-800",
        pine: "bg-pine-800 text-white shadow-soft hover:bg-pine-600",
        outline: "border-2 border-ink-900/15 bg-transparent text-ink-900 hover:border-ink-900/40 hover:bg-ink-900/5",
        white: "bg-white text-ink-900 shadow-soft hover:bg-ink-50",
        "outline-light": "border-2 border-white/35 bg-transparent text-white hover:border-white hover:bg-white/10",
        ghost: "text-ink-700 hover:bg-ink-900/5 hover:text-ink-900",
        link: "rounded-none text-ink-900 underline decoration-saffron-400 decoration-2 underline-offset-4 hover:decoration-saffron-600",
      },
      size: {
        sm: "h-9 px-4 text-[0.8125rem] [&_svg]:size-4",
        default: "h-11 px-6 text-[0.9375rem] [&_svg]:size-4",
        lg: "h-13 px-7 text-base [&_svg]:size-5",
        xl: "h-14 px-8 text-base sm:text-lg [&_svg]:size-5",
        icon: "size-11 [&_svg]:size-5",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
