"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Heart, ShieldCheck } from "lucide-react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Overlaid on the dark page hero until the user scrolls. */
  const tone: "dark" | "light" = scrolled ? "dark" : "light";

  return (
    <>
      {/* Standing trust line — the one thing we want seen before anything else */}
      <div className="relative z-50 bg-ink-950 text-ink-50">
        <div className="container-page flex h-10 items-center justify-center gap-2 text-center text-[0.8125rem]">
          <ShieldCheck aria-hidden className="size-4 shrink-0 text-saffron-400" />
          <p className="truncate">
            <span className="font-semibold">100% of public donations</span> go directly to projects.
          </p>
          <Link
            href="/100-percent-model"
            className="group hidden shrink-0 items-center gap-1 font-semibold text-saffron-400 underline-offset-4 hover:underline sm:inline-flex"
          >
            See how
            <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300",
          scrolled
            ? "border-b border-ink-900/8 bg-ink-50/85 shadow-[0_1px_0_0_rgb(15_14_12/0.04)] backdrop-blur-xl backdrop-saturate-150"
            : "bg-transparent",
        )}
      >
        <div className="container-page flex h-18 items-center justify-between gap-6">
          <Logo tone={tone} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative inline-flex h-10 items-center rounded-full px-4 text-[0.9375rem] font-semibold transition-colors",
                        tone === "light"
                          ? "text-white/80 hover:bg-white/10 hover:text-white"
                          : "text-ink-700 hover:bg-ink-900/5 hover:text-ink-900",
                        active && (tone === "light" ? "text-white" : "text-ink-900"),
                      )}
                    >
                      {link.label}
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute inset-x-4 bottom-1.5 h-0.5 rounded-full bg-saffron-500"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <Button
              asChild
              variant={tone === "light" ? "outline-light" : "ghost"}
              className="hidden sm:inline-flex lg:hidden xl:inline-flex"
            >
              <Link href="/get-involved">Get involved</Link>
            </Button>
            <Button asChild size="lg" className="hidden sm:inline-flex">
              <Link href="/donate">
                <Heart aria-hidden className="fill-current" />
                Donate
              </Link>
            </Button>
            <Button asChild size="default" className="sm:hidden">
              <Link href="/donate">Donate</Link>
            </Button>
            <MobileNav tone={tone} />
          </div>
        </div>
      </header>
    </>
  );
}
