import * as React from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const toneStyles = {
  warm: {
    wrap: "bg-orange-200",
    a: "bg-orange-400/70",
    b: "bg-orange-800/40",
    c: "bg-orange-100/80",
    glyph: "text-orange-900/25",
  },
  ink: {
    wrap: "bg-slate-900",
    a: "bg-orange-500/35",
    b: "bg-emerald-600/45",
    c: "bg-slate-700/70",
    glyph: "text-orange-200/25",
  },
  pine: {
    wrap: "bg-emerald-800",
    a: "bg-emerald-600/70",
    b: "bg-orange-400/30",
    c: "bg-emerald-950/60",
    glyph: "text-orange-100/25",
  },
  clay: {
    wrap: "bg-orange-800",
    a: "bg-orange-400/50",
    b: "bg-slate-900/35",
    c: "bg-orange-200/35",
    glyph: "text-orange-100/25",
  },
  sand: {
    wrap: "bg-stone-100",
    a: "bg-orange-200/80",
    b: "bg-stone-300/60",
    c: "bg-white/70",
    glyph: "text-slate-600/25",
  },
} as const;

export type MediaTone = keyof typeof toneStyles;

export type MediaFrameProps = {
  /**
   * Real photography. Drop in a path under /public or a configured remote host
   * and the art-directed placeholder is replaced automatically.
   */
  src?: string;
  alt: string;
  tone?: MediaTone;
  icon?: LucideIcon;
  /** Brief note for whoever sources the photography for this slot. */
  note?: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Every image on the site goes through one frame so the art direction stays
 * consistent and photography can be swapped in slot by slot.
 */
export function MediaFrame({
  src,
  alt,
  tone = "warm",
  icon: Icon,
  note,
  caption,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  children,
}: MediaFrameProps) {
  const t = toneStyles[tone];

  return (
    <figure className={cn("relative isolate overflow-hidden rounded-3xl", t.wrap, className)}>
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      ) : (
        <div aria-label={alt} role="img" className="absolute inset-0">
          <span className={cn("absolute -left-16 -top-20 size-[62%] rounded-full blur-3xl", t.a)} />
          <span className={cn("absolute -bottom-24 right-[-10%] size-[70%] rounded-full blur-3xl", t.b)} />
          <span className={cn("absolute left-[22%] top-[38%] size-[44%] rounded-full blur-2xl", t.c)} />
          {Icon ? (
            <Icon
              aria-hidden
              strokeWidth={1.1}
              className={cn("absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2", t.glyph)}
            />
          ) : null}
          <span aria-hidden className="grain-overlay absolute inset-0 opacity-[0.22] mix-blend-soft-light" />
          {note ? (
            <span className="absolute left-3 right-3 top-3 rounded-lg bg-slate-950/80 px-2.5 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              {note}
            </span>
          ) : null}
        </div>
      )}

      {children}

      {caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-6 pt-16 text-sm font-medium text-white/90">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
