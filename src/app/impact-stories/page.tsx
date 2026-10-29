import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { StoriesExplorer } from "@/components/sections/stories-explorer";

export const metadata: Metadata = {
  title: "Impact Stories",
  description:
    "How Your Seva's programmes work in Panjab — Ration Panee, home rebuilding, winter care and education, with the costs behind them.",
  alternates: { canonical: "/impact-stories" },
};

export default function ImpactStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact stories"
        title={
          <>
How the work actually runs, <span className="text-orange-400">told plainly.</span>
          </>
        }
        lede="No composite characters and no stock photography. These are programme accounts — what each one does, who carries it out in Panjab, and the costs behind it. Family stories will be added here with written consent."
      />
      <StoriesExplorer />
      <CtaBand
        title={
          <>
            The next story <span className="text-orange-400">has not been written yet.</span>
          </>
        }
        body="A roof before the next monsoon, a cataract surgery, a school year that does not end early. Each one starts with a donation that arrives whole."
      />
    </>
  );
}
