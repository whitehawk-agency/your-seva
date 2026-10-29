import * as React from "react";

import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={cn(
              "eyebrow flex items-center gap-2.5",
              tone === "light" ? "text-orange-300" : "text-orange-900",
            )}
          >
            <span
              aria-hidden
              className={cn("h-px w-7", tone === "light" ? "bg-orange-300/60" : "bg-orange-500/60")}
            />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal index={1}>
        <h2
          className={cn(
            "headline max-w-3xl text-[2.1rem] sm:text-5xl lg:text-[3.4rem]",
            tone === "light" ? "text-white" : "text-slate-900",
            align === "center" && "mx-auto",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal index={2}>
          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed",
              tone === "light" ? "text-white/70" : "text-slate-600",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}

      {children ? <Reveal index={3}>{children}</Reveal> : null}
    </div>
  );
}
