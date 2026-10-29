"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Heart, ShieldCheck } from "lucide-react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { CharityBadge } from "@/components/shared/charity-badge";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { navLinks, type NavLink } from "@/lib/content";
import { cn } from "@/lib/utils";

function NavItem({ link, active }: { link: NavLink; active: boolean }) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const id = React.useId();

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  // A short delay keeps the menu open while the pointer crosses the gap.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  React.useEffect(() => () => cancelClose(), []);

  if (!link.children) {
    return (
      <Link
        href={link.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "relative inline-flex min-h-11 items-center px-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-700 transition-colors hover:text-orange-800",
          active && "text-orange-800",
        )}
      >
        {link.label}
        {active ? (
          <span aria-hidden className="absolute inset-x-3 bottom-2 h-0.5 rounded-full bg-orange-600" />
        ) : null}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        onFocus={() => {
          cancelClose();
          setOpen(true);
        }}
        className={cn(
          "relative inline-flex min-h-11 items-center gap-1.5 px-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-700 transition-colors hover:text-orange-800",
          (active || open) && "text-orange-800",
        )}
      >
        {link.label}
        <ChevronDown
          aria-hidden
          className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
        />
        {active ? (
          <span aria-hidden className="absolute inset-x-3 bottom-2 h-0.5 rounded-full bg-orange-600" />
        ) : null}
      </button>

      <div
        id={id}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
        }}
        className={cn(
          "absolute left-0 top-full z-50 w-72 origin-top-left pt-2 transition-[opacity,transform] duration-200",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <ul className="overflow-hidden rounded-2xl border border-stone-200 bg-white p-2 shadow-lift">
          {link.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 transition-colors hover:bg-stone-100"
              >
                <span className="block text-sm font-bold text-slate-900">{child.label}</span>
                {child.description ? (
                  <span className="mt-0.5 block text-xs text-slate-600">{child.description}</span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Standing trust line — the one thing we want seen before anything else */}
      <div className="relative z-50 bg-slate-900 text-white">
        <div className="container-page flex min-h-10 min-w-0 items-center justify-center gap-2 py-2 text-center text-[0.75rem]">
          <ShieldCheck aria-hidden className="size-4 shrink-0 text-orange-400" />
          <p className="min-w-0">
            <span className="font-bold">100% of public donations</span> go directly to projects.
          </p>
          <Link
            href="/100-percent-model"
            className="hidden shrink-0 font-bold uppercase tracking-[0.12em] text-orange-400 underline-offset-4 hover:underline sm:inline"
          >
            See how
          </Link>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 bg-white/90 backdrop-blur-xl backdrop-saturate-150 transition-shadow duration-300",
          scrolled ? "shadow-[0_1px_0_0_rgb(15_23_42/0.08),0_8px_24px_-16px_rgb(15_23_42/0.25)]" : "shadow-none",
        )}
      >
        <div className="container-page flex min-h-18 items-center gap-3 py-2.5 sm:gap-4">
          {/* Mobile puts the menu on the left and centres the logo, as in the design */}
          <MobileNav tone="dark" />

          <div className="flex min-w-0 flex-1 items-center justify-center gap-3 lg:justify-start">
            <Logo />
            <CharityBadge className="hidden lg:inline-flex" />
          </div>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavItem
                    link={link}
                    active={pathname === link.href || pathname.startsWith(`${link.href}/`)}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <Button asChild variant="default" size="default" className="shrink-0">
            <Link href="/donate">
              <Heart aria-hidden className="fill-current" />
              <span className="font-bold uppercase tracking-[0.12em]">Donate</span>
            </Link>
          </Button>
        </div>
      </header>
    </>
  );
}
