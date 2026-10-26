"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Heart, Menu, X } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/utils";

const secondary = [
  { label: "Get Involved", href: "/get-involved" },
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
              : "border-ink-900/15 text-ink-900 hover:bg-ink-900/5",
          )}
        >
          <Menu className="size-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-950/60 backdrop-blur-sm data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in lg:hidden" />
        <Dialog.Content className="fixed inset-x-3 top-3 z-50 overflow-hidden rounded-3xl bg-ink-50 shadow-lift data-[state=closed]:animate-panel-out data-[state=open]:animate-panel-in lg:hidden">
          <Dialog.Title className="sr-only">Site menu</Dialog.Title>

          <div className="flex items-center justify-between border-b border-ink-200 px-5 py-4">
            <Logo />
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition-colors hover:bg-ink-900/5"
              >
                <X className="size-5" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="px-5 py-3">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between border-b border-ink-200/70 py-4 font-display text-2xl font-bold tracking-[-0.02em] text-ink-900"
                  >
                    {link.label}
                    <span aria-hidden className="text-saffron-500">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 py-5">
              {secondary.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-semibold text-ink-600 hover:text-ink-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-ink-200 bg-white p-5">
            <Button asChild size="lg" className="w-full">
              <Link href="/donate">
                <Heart className="fill-current" />
                Donate
              </Link>
            </Button>
            <p className="mt-3 text-center text-xs font-medium text-ink-500">
              100% of public donations reach the field · {site.domain}
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
