import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * The mark is a sun rising over two field rows — Panjab's land, and the
 * morning after help arrives. Saffron disc, ink detail, legible at 16px.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={cn("size-9", className)}>
      <circle cx="20" cy="20" r="20" fill="currentColor" />
      <path d="M11.6 20.2a8.4 8.4 0 0 1 16.8 0Z" fill="var(--ink-950)" opacity="0.92" />
      <rect x="7.8" y="22.7" width="24.4" height="2.9" rx="1.45" fill="var(--ink-950)" opacity="0.92" />
      <rect x="12.8" y="28" width="14.4" height="2.6" rx="1.3" fill="var(--ink-950)" opacity="0.45" />
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
  href = "/",
}: {
  className?: string;
  tone?: "dark" | "light";
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-2.5 rounded-full", className)}
      aria-label="Your Seva — home"
    >
      <LogoMark className="size-9 text-saffron-500 transition-transform duration-300 group-hover:-rotate-6" />
      <span
        className={cn(
          "font-display text-[1.35rem] font-extrabold tracking-[-0.035em]",
          tone === "light" ? "text-white" : "text-ink-900",
        )}
      >
        Your <span className="text-saffron-500">Seva</span>
      </span>
    </Link>
  );
}
