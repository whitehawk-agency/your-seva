import Link from "next/link";
import { BadgeCheck } from "lucide-react";

import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * UK charity registration badge. Links straight to the public register entry,
 * because a registration number nobody can check is just decoration.
 */
export function CharityBadge({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="https://register-of-charities.charitycommission.gov.uk/charity-details/?regid=1162477&subid=0"
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.6875rem] font-semibold leading-none transition-colors",
        tone === "light"
          ? "border-white/30 text-white hover:border-white hover:bg-white/10"
          : "border-slate-300 text-slate-700 hover:border-slate-500 hover:bg-slate-900/5",
        className,
      )}
    >
      <BadgeCheck aria-hidden className={cn("size-3.5", tone === "light" ? "text-orange-400" : "text-emerald-800")} />
      <span>
        <span className="sr-only">Registered UK charity, number </span>
        <span aria-hidden>UK Charity</span> No. {site.charityNumber}
      </span>
    </Link>
  );
}
