import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { NewsletterForm } from "@/components/shared/newsletter-form";
import { LogoMark } from "@/components/shared/logo";
import { InstagramIcon, XIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { footerNav, site } from "@/lib/content";

const socials = [
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "X", href: site.social.x, Icon: XIcon },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1.6fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-10 text-saffron-500" />
              <span className="font-display text-2xl font-extrabold tracking-[-0.035em] text-white">
                Your <span className="text-saffron-500">Seva</span>
              </span>
            </div>

            <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-400">
              Selfless service, carried faithfully. 100% of public donations fund poverty relief, home
              rebuilding, senior care and education in Panjab and beyond.
            </p>

            <div className="mt-7">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
                Field updates, not fundraising noise
              </h3>
              <div className="mt-4">
                <NewsletterForm tone="dark" />
              </div>
            </div>

            <ul className="mt-8 flex gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 text-ink-300 transition-colors hover:border-saffron-400 hover:text-saffron-400"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {footerNav.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-[0.9375rem] text-ink-400 underline-offset-4 transition-colors hover:text-white hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1.1fr_1.6fr]">
          <div className="rounded-2xl border border-saffron-500/25 bg-saffron-500/8 p-6">
            <p className="font-display text-lg font-bold text-white">Give today, in full</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-400">
              Your gift is allocated to a vetted project. Our running costs are paid from Gift Aid and private
              donors — never from your donation.
            </p>
            <Button asChild size="lg" className="mt-5 w-full sm:w-auto">
              <Link href="/donate">Donate now</Link>
            </Button>
          </div>

          <ul className="grid gap-4 text-sm sm:grid-cols-3">
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-saffron-400" />
              <span className="text-ink-400">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city} {site.address.postcode}
                <br />
                {site.address.country}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-saffron-400" />
              <span className="text-ink-400">
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
                <br />
                <a href={`mailto:${site.donationsEmail}`} className="hover:text-white">
                  {site.donationsEmail}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-saffron-400" />
              <span className="text-ink-400">{site.phone}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Registered charity number {site.charityNumber}. Company number {site.companyNumber}.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy" className="hover:text-ink-200">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-ink-200">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/transparency" className="hover:text-ink-200">
                Reports & accounts
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ink-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
