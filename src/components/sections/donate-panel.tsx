"use client";

import * as React from "react";

import { DonateForm } from "@/components/sections/donate-form";
import { defaultAmount, donationTiers, type Frequency } from "@/lib/content";

/**
 * Reads the deep-link parameters the quick-donate widget sets
 * (?frequency=&amount=&programme=) on the client, so the donate page can be
 * statically rendered and served straight from a CDN.
 */
function useGivingParams() {
  const [params, setParams] = React.useState<{
    frequency: Frequency;
    amount: number;
    designation: string;
  }>({ frequency: "monthly", amount: defaultAmount, designation: "unrestricted" });

  React.useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const parsed = Number.parseFloat(search.get("amount") ?? "");
    setParams({
      frequency: search.get("frequency") === "once" ? "once" : "monthly",
      amount: Number.isFinite(parsed) && parsed >= 1 ? parsed : defaultAmount,
      designation: search.get("programme") ?? "unrestricted",
    });
  }, []);

  return params;
}

export function DonatePanel() {
  const { frequency, amount, designation } = useGivingParams();

  return (
    <DonateForm
      key={`${frequency}-${amount}-${designation}`}
      defaultFrequency={frequency}
      defaultAmount={amount}
      defaultDesignation={designation}
    />
  );
}

export function DonateTiers() {
  const { frequency } = useGivingParams();

  return (
    <ul className="mt-5 space-y-4">
      {donationTiers[frequency].map((tier) => (
        <li key={tier.amount} className="border-t border-white/12 pt-4 first:border-0 first:pt-0">
          <span className="font-display text-2xl font-extrabold tracking-[-0.02em] text-saffron-400">
            £{tier.amount}
            {frequency === "monthly" ? "/mo" : ""}
          </span>
          <p className="mt-1.5 text-sm leading-relaxed text-white/70">{tier.detail}</p>
        </li>
      ))}
    </ul>
  );
}
