import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Long-form text styling for policy pages. Deliberately narrow and plain —
 * these pages exist to be read, not admired.
 */
export function Prose({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "max-w-2xl text-[1.0625rem] leading-[1.75] text-slate-700",
        "[&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-[-0.02em] [&_h2]:text-slate-900",
        "[&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-slate-900",
        "[&_p]:mt-4 [&_ul]:mt-4 [&_ul]:space-y-2 [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1",
        "[&_a]:font-semibold [&_a]:text-slate-900 [&_a]:underline [&_a]:decoration-orange-400 [&_a]:decoration-2 [&_a]:underline-offset-4",
        "[&_strong]:font-bold [&_strong]:text-slate-900",
        className,
      )}
    >
      {children}
    </div>
  );
}
