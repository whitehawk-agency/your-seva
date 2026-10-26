import { Quote } from "lucide-react";

import { MediaFrame } from "@/components/shared/media-frame";
import { Reveal } from "@/components/shared/reveal";

export function QuoteBand() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <MediaFrame
              alt="A volunteer and an elder sitting together in a doorway in Ludhiana district"
              tone="sand"
              icon={Quote}
              note="Photo slot — portrait, volunteer with elder, natural light"
              className="aspect-[4/5]"
            />
          </Reveal>

          <Reveal index={1}>
            <figure>
              <Quote aria-hidden className="size-10 text-saffron-400" />
              <blockquote className="mt-6">
                <p className="headline text-[1.9rem] text-ink-900 sm:text-4xl lg:text-[2.9rem]">
                  &ldquo;Seva is not something you give when you have spare. It is the thing you do because
                  someone else cannot.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-8 border-t border-ink-200 pt-6">
                <span className="block font-display text-lg font-bold text-ink-900">
                  Guru Nanak Dev Ji&apos;s teaching, in our volunteers&apos; words
                </span>
                <span className="mt-1 block text-sm text-ink-500">
                  Vand Chhako — share what you have. It is the whole organisation, in two words.
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
