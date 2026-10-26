import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** £1,250 → "£1,250". Whole pounds only; we never show pennies in impact copy. */
export function formatGBP(amount: number, options: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
    ...options,
  }).format(amount);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-GB").format(value);
}
