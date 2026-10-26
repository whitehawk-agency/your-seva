import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

/** Shared dark hero for inner pages — keeps the overlaid header legible everywhere. */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  align = "left",
  tone = "ink",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "pine";
}) {
  return (
    <section
      className={cn(
        "relative isolate -mt-18 overflow-hidden pt-18",
        tone === "pine" ? "bg-pine-900" : "bg-ink-950",
      )}
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-[10%] top-[-30%] size-[55%] rounded-full bg-saffron-600/30 blur-[120px]" />
        <div className="absolute right-[-8%] top-[-10%] size-[48%] rounded-full bg-pine-600/35 blur-[120px]" />
        <div className="absolute bottom-[-40%] left-[30%] size-[55%] rounded-full bg-clay/25 blur-[130px]" />
        <div className="grain-overlay absolute inset-0 opacity-[0.14] mix-blend-soft-light" />
      </div>

      <div
        className={cn(
          "container-page pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24",
          align === "center" && "text-center",
        )}
      >
        <Reveal>
          <Badge variant="light" className="px-3.5 py-1.5">
            <span aria-hidden className="size-1.5 rounded-full bg-saffron-400" />
            {eyebrow}
          </Badge>
        </Reveal>

        <Reveal index={1}>
          <h1
            className={cn(
              "headline mt-6 max-w-4xl text-[2.4rem] text-white sm:text-5xl lg:text-[3.9rem]",
              align === "center" && "mx-auto",
            )}
          >
            {title}
          </h1>
        </Reveal>

        {lede ? (
          <Reveal index={2}>
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl",
                align === "center" && "mx-auto",
              )}
            >
              {lede}
            </p>
          </Reveal>
        ) : null}

        {children ? <Reveal index={3}>{children}</Reveal> : null}
      </div>
    </section>
  );
}
