import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/content";

export default function NotFound() {
  return (
    <section className="relative isolate -mt-18 flex min-h-[80vh] items-center overflow-hidden bg-slate-950 pt-18 text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-[10%] top-[-25%] size-[55%] rounded-full bg-orange-600/25 blur-[120px]" />
        <div className="absolute bottom-[-35%] right-[-5%] size-[50%] rounded-full bg-orange-800/25 blur-[120px]" />
        <div className="grain-overlay absolute inset-0 opacity-[0.14] mix-blend-soft-light" />
      </div>

      <div className="container-page py-20">
        <p className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-orange-400">
          404
        </p>
        <h1 className="headline mt-5 max-w-3xl text-[2.4rem] sm:text-5xl lg:text-[3.6rem]">
          This page isn&apos;t here. <span className="text-white/70">The work still is.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          The link may be old or mistyped. Here is everything else.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="white" size="xl">
            <Link href="/">
              Back to home
              <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outline-light" size="xl">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/12 pt-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-semibold text-white/70 hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="font-semibold text-white/70 hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
