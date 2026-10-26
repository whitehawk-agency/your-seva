import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Quote } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { MediaFrame } from "@/components/shared/media-frame";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site, stories } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!story) return { title: "Story not found" };

  return {
    title: story.title,
    description: story.excerpt,
    alternates: { canonical: `/impact-stories/${story.slug}` },
    openGraph: {
      type: "article",
      title: `${story.title} · ${site.name}`,
      description: story.excerpt,
      publishedTime: story.date,
    },
  };
}

export default async function StoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!story) notFound();

  const others = stories.filter((item) => item.slug !== story.slug).slice(0, 2);
  const published = new Date(story.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <article>
        <header className="relative isolate -mt-18 overflow-hidden bg-ink-950 pt-18 text-white">
          <div aria-hidden className="absolute inset-0 -z-10">
            <div className="absolute -left-[10%] top-[-30%] size-[55%] rounded-full bg-saffron-600/25 blur-[120px]" />
            <div className="absolute bottom-[-40%] right-[-5%] size-[50%] rounded-full bg-clay/30 blur-[120px]" />
            <div className="grain-overlay absolute inset-0 opacity-[0.14] mix-blend-soft-light" />
          </div>

          <div className="container-page pb-16 pt-12 sm:pt-16">
            <Link
              href="/impact-stories"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft aria-hidden className="size-4" />
              All impact stories
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Badge variant="light">{story.programme}</Badge>
              <span className="flex items-center gap-1.5 text-sm text-white/55">
                <MapPin aria-hidden className="size-4" />
                {story.location}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/55">
                <CalendarDays aria-hidden className="size-4" />
                {published}
              </span>
              <span className="text-sm text-white/55">{story.readingTime}</span>
            </div>

            <h1 className="headline mt-6 max-w-4xl text-[2.4rem] sm:text-5xl lg:text-[3.9rem]">
              {story.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">{story.excerpt}</p>
          </div>
        </header>

        <div className="bg-white pb-20 lg:pb-28">
          <div className="container-page">
            <Reveal>
              <MediaFrame
                alt={`${story.title} — ${story.location}`}
                tone={story.tone}
                icon={story.icon}
                note={story.photoNote}
                priority
                className="-mt-10 aspect-[16/9] lg:-mt-14"
              />
            </Reveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
              <div>
                <Reveal>
                  <div className="space-y-6 text-[1.1875rem] leading-[1.75] text-ink-700">
                    {story.body.map((paragraph, index) => (
                      <p
                        key={paragraph.slice(0, 32)}
                        className={
                          index === 0
                            ? "text-[1.3125rem] leading-[1.65] text-ink-800 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[4.2rem] first-letter:font-extrabold first-letter:leading-[0.8] first-letter:text-saffron-600"
                            : undefined
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>

                <Reveal index={1}>
                  <figure className="my-12 rounded-3xl bg-ink-950 p-8 text-white sm:p-10">
                    <Quote aria-hidden className="size-8 text-saffron-400" />
                    <blockquote className="mt-5">
                      <p className="font-display text-2xl font-bold leading-[1.3] tracking-[-0.02em] sm:text-3xl">
                        &ldquo;{story.quote.text}&rdquo;
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 text-sm font-semibold text-saffron-300">
                      — {story.quote.attribution}
                    </figcaption>
                  </figure>
                </Reveal>

                <Reveal index={2}>
                  <div className="rounded-2xl border border-ink-200 bg-ink-50 p-6">
                    <p className="text-sm leading-relaxed text-ink-600">
                      <strong className="font-bold text-ink-900">On consent:</strong> every person in our
                      stories has given written permission for their name, photograph and circumstances to be
                      published. Where a family prefers anonymity, we change the name and say so.
                    </p>
                  </div>
                </Reveal>
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start">
                <Reveal index={1}>
                  <div className="rounded-3xl border border-ink-200 bg-white p-7 shadow-soft">
                    <h2 className="font-display text-lg font-extrabold tracking-[-0.02em] text-ink-900">
                      The numbers
                    </h2>
                    <dl className="mt-6 space-y-5">
                      {story.facts.map((fact) => (
                        <div key={fact.label} className="border-b border-ink-200 pb-5 last:border-0 last:pb-0">
                          <dd className="font-display text-3xl font-extrabold tracking-[-0.03em] text-ink-900">
                            {fact.value}
                          </dd>
                          <dt className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-ink-500">
                            {fact.label}
                          </dt>
                        </div>
                      ))}
                    </dl>

                    <Button asChild size="lg" className="mt-7 w-full">
                      <Link href="/donate">
                        Fund work like this
                        <ArrowRight aria-hidden />
                      </Link>
                    </Button>
                    <p className="mt-3 text-center text-xs text-ink-500">
                      100% of your gift reaches the field.
                    </p>
                  </div>
                </Reveal>
              </aside>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-ink-50 py-20 lg:py-24">
        <div className="container-page">
          <h2 className="headline text-3xl text-ink-900 sm:text-4xl">Read next</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {others.map((other, index) => (
              <Reveal key={other.slug} index={index}>
                <Link
                  href={`/impact-stories/${other.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-saffron-300"
                >
                  <MediaFrame
                    alt={other.title}
                    tone={other.tone}
                    icon={other.icon}
                    note={other.photoNote}
                    className="aspect-[16/9] rounded-none"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <Badge className="self-start">{other.programme}</Badge>
                    <h3 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.025em] text-ink-900">
                      {other.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[1.0625rem] leading-relaxed text-ink-600">
                      {other.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ink-900">
                      Read the story
                      <ArrowRight
                        aria-hidden
                        className="size-4 text-saffron-600 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
