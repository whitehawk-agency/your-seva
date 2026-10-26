import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { StoriesExplorer } from "@/components/sections/stories-explorer";

export const metadata: Metadata = {
  title: "Impact Stories",
  description:
    "Families, elders and children supported by YourSeva — each story published with what it cost, who was paid and what the follow-up visit found.",
  alternates: { canonical: "/impact-stories" },
};

export default function ImpactStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact stories"
        title={
          <>
            What actually happened, <span className="text-saffron-400">told plainly.</span>
          </>
        }
        lede="No composite characters and no stock photography. Every story below is published with its cost, the tradespeople paid, and what we found when we went back."
      />
      <StoriesExplorer />
      <CtaBand
        title={
          <>
            The next story <span className="text-saffron-400">has not been written yet.</span>
          </>
        }
        body="A roof before the next monsoon, a cataract surgery, a school year that does not end early. Each one starts with a donation that arrives whole."
      />
    </>
  );
}
