import type { SVGProps } from "react";

/** Brand glyphs are no longer shipped by lucide, so we inline the four we use. */

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.2 3h3.3l-7.2 8.2L21.8 21h-6.6l-5.2-6.6L4.1 21H.8l7.7-8.8L.4 3H7l4.7 6.1L17.2 3Zm-1.2 16h1.8L7.9 4.8H6L16 19Z" />
    </svg>
  );
}
