import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, site } from "@/lib/content";

export function FaqSection({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Questions, answered"
            title={
              <>
                The questions <span className="text-ink-400">we would ask too.</span>
              </>
            }
          />
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink-600">
            Something not covered here? Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-ink-900 underline decoration-saffron-400 decoration-2 underline-offset-4"
            >
              {site.email}
            </a>{" "}
            and a person — not a ticketing system — will reply.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex text-sm font-bold text-ink-900 underline decoration-saffron-400 decoration-2 underline-offset-4"
          >
            Contact the team
          </Link>
        </div>

        <Reveal index={1}>
          <Accordion type="single" collapsible className="border-t border-ink-200">
            {items.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
