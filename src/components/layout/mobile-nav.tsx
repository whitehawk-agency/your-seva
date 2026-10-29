"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Heart, Menu, X } from "lucide-react";

import { CharityBadge } from "@/components/shared/charity-badge";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/utils";

const secondary = [
  { label: "Impact Stories", href: "/impact-stories" },
  { label: "Reports & Accounts", href: "/transparency" },
  { label: "Contact", href: "/contact" },
];

export function MobileNav({ tone }: { tone: "dark" | "light" }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border transition-colors lg:hidden",
            tone === "light"
              ? "border-white/25 text-white hover:bg-white/10"
              : "border-slate-900/15 text-slate-900 hover:bg-slate-900/5",
          )}
        >
          <Menu className="size-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in lg:hidden" />
        <Dialog.Content className="fixed inset-x-3 top-3 z-50 overflow-hidden rounded-3xl bg-stone-50 shadow-lift data-[state=closed]:animate-panel-out data-[state=open]:animate-panel-in lg:hidden">
          <Dialog.Title className="sr-only">Site menu</Dialog.Title>

          <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
            <Logo />
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center rounded-full border border-slate-900/15 text-slate-900 transition-colors hover:bg-slate-900/5"
              >
                <X className="size-5" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="max-h-[70vh] overflow-y-auto px-5 py-3">
            <ul>
              {navLinks.map((link) => (
                <li key={link.label} className="border-b border-stone-200/70 py-4">
                  <Link
                    href={link.href}
                    className="flex items-center justify-between font-display text-2xl text-slate-900"
                  >
                    {link.label}
                    <span aria-hidden className="text-orange-700">
                      →
                    </span>
                  </Link>
                  {link.children ? (
                    <ul className="mt-2 space-y-1">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-stone-100 hover:text-slate-900"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 py-5">
              {secondary.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-semibold text-slate-600 hover:text-slate-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-stone-200 bg-white p-5">
            <Button asChild size="lg" className="w-full">
              <Link href="/donate">
                <Heart className="fill-current" />
                Donate
              </Link>
            </Button>
            <div className="mt-3 flex flex-col items-center gap-2">
              <CharityBadge />
              <p className="text-center text-xs font-medium text-slate-600">
                100% of public donations reach the field · {site.domain}
              </p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
