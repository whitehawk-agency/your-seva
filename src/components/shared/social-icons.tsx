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

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <path d="M14.5 8.5h2.3V5.3h-2.6c-2.3 0-3.9 1.6-3.9 4v2.2H8v3.2h2.3V21h3.3v-6.3h2.4l.5-3.2h-2.9V9.6c0-.7.3-1.1.9-1.1Z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M7.5 10.5V17M7.5 7.6v.1M11.5 17v-3.6c0-1.3.9-2.2 2.1-2.2s2.1.9 2.1 2.2V17" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.8l4.5 2.7-4.5 2.7V9.8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
