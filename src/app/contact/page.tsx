import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to a person at Your Seva — about a donation, fundraising, volunteering or partnering.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            A person reads every message. <span className="text-saffron-400">Usually within two days.</span>
          </>
        }
        lede="No ticketing system, no chatbot. If it is about a donation and it is urgent, say so and we will move it to the front."
      />

      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <Reveal>
            <div className="rounded-3xl border border-ink-200 bg-white p-7 shadow-soft sm:p-10">
              <ContactForm />
            </div>
          </Reveal>

          <aside className="space-y-6">
            <Reveal index={1}>
              <div className="rounded-3xl border border-ink-200 bg-white p-7">
                <h2 className="font-display text-xl font-extrabold tracking-[-0.02em] text-ink-900">
                  Direct lines
                </h2>
                <ul className="mt-6 space-y-5 text-[0.9375rem]">
                  <li className="flex gap-3">
                    <Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-saffron-600" />
                    <span>
                      <span className="block font-semibold text-ink-900">General</span>
                      <a href={`mailto:${site.email}`} className="text-ink-600 underline underline-offset-2">
                        {site.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-saffron-600" />
                    <span>
                      <span className="block font-semibold text-ink-900">Donations &amp; Gift Aid</span>
                      <a
                        href={`mailto:${site.donationsEmail}`}
                        className="text-ink-600 underline underline-offset-2"
                      >
                        {site.donationsEmail}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-saffron-600" />
                    <span>
                      <span className="block font-semibold text-ink-900">Phone</span>
                      <span className="text-ink-600">{site.phone}</span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-saffron-600" />
                    <span>
                      <span className="block font-semibold text-ink-900">Hours</span>
                      <span className="text-ink-600">Monday to Friday, 9am–5pm UK time</span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-saffron-600" />
                    <span>
                      <span className="block font-semibold text-ink-900">Post</span>
                      <span className="text-ink-600">
                        {site.address.line1}, {site.address.line2}
                        <br />
                        {site.address.city} {site.address.postcode}, {site.address.country}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal index={2}>
              <div className="rounded-3xl bg-ink-950 p-7 text-white">
                <h2 className="font-display text-lg font-extrabold tracking-[-0.02em]">
                  Cancelling a monthly gift?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Email {site.donationsEmail} and it is done the same working day. No retention call, no
                  questions. We would rather keep your trust than your direct debit.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
