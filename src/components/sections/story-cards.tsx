import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MediaFrame } from "@/components/shared/media-frame";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { stories, type Story } from "@/lib/content";

function StoryCard({ story, index, featured = false }: { story: Story; index: number; featured?: boolean }) {
  return (
    <Reveal index={index} className="h-full">
      <Link
        href={`/impact-stories/${story.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-stone-200 transition-all duration-300 hover:-translate-y-1 hover:ring-orange-300 hover:shadow-lift"
      >
        <MediaFrame
          alt={story.title}
          tone={story.tone}
          icon={story.icon}
          note={story.photoNote}
          className={featured ? "aspect-[16/11] rounded-none" : "aspect-[16/10] rounded-none"}
        />
        <div className="flex flex-1 flex-col p-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{story.programme}</Badge>
            <span className="text-xs font-medium text-slate-600">{story.readingTime}</span>
          </div>
          <h3
            className={
              featured
                ? "mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl"
                : "mt-4 font-display text-2xl font-extrabold tracking-[-0.025em] text-slate-900"
            }
          >
            {story.title}
          </h3>
          <p className="mt-3 flex-1 text-[1.0625rem] leading-relaxed text-slate-600">{story.excerpt}</p>
          <div className="mt-6 flex items-center justify-between gap-4 border-t border-stone-200 pt-5">
            <span className="text-sm font-semibold text-slate-700">{story.location}</span>
            <ArrowRight
              aria-hidden
              className="size-5 text-orange-600 transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function StoryCards({ limit = 3, heading = true }: { limit?: number; heading?: boolean }) {
  const items = stories.slice(0, limit);
  const [lead, ...rest] = items;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-page">
        {heading ? (
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Impact stories"
              title={
                <>
                  What the work is. <span className="text-slate-500">What it costs.</span>
                </>
              }
              description="How each programme actually runs in Panjab — who assesses the need, who gets paid, and what a pound buys."
              className="max-w-3xl"
            />
            <Reveal index={2}>
              <Button asChild variant="outline" size="lg">
                <Link href="/impact-stories">
                  All stories
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </Reveal>
          </div>
        ) : null}

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {lead ? <StoryCard story={lead} index={0} featured /> : null}
          <div className="grid gap-6">
            {rest.map((story, index) => (
              <StoryCard key={story.slug} story={story} index={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { StoryCard };
