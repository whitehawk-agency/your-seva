import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { EthosSection } from "@/components/sections/ethos-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { ImpactCounters } from "@/components/sections/impact-counters";
import { PartnersMarquee } from "@/components/sections/partners-marquee";
import { ProgrammesGrid } from "@/components/sections/programmes-grid";
import { QuoteBand } from "@/components/sections/quote-band";
import { StoryCards } from "@/components/sections/story-cards";
import { TransparencyTeaser } from "@/components/sections/transparency-teaser";
import { TrustBanner } from "@/components/sections/trust-banner";
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
      <TrustBanner />
      <ProgrammesGrid limit={4} />
      <ImpactCounters />
      <EthosSection />
      <StoryCards limit={3} />
      <QuoteBand />
      <TransparencyTeaser />
      <PartnersMarquee />
      <FaqSection limit={5} />
      <CtaBand />
    </>
  );
}
