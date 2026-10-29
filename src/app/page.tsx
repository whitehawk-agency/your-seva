import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { ImpactBand } from "@/components/sections/impact-band";
import { PartnersMarquee } from "@/components/sections/partners-marquee";
import { ProgrammesGrid } from "@/components/sections/programmes-grid";
import { StatementBlock } from "@/components/sections/statement-block";
import { StoryCards } from "@/components/sections/story-cards";
import { TakeAction } from "@/components/sections/take-action";
import { TransparencyTeaser } from "@/components/sections/transparency-teaser";
import { WhySection } from "@/components/sections/why-section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhySection />
      <StatementBlock />
      <ImpactBand />
      <TakeAction />
      <ProgrammesGrid limit={4} />
      <StoryCards limit={3} />
      <TransparencyTeaser />
      <PartnersMarquee />
      <FaqSection limit={5} />
      <CtaBand />
    </>
  );
}
