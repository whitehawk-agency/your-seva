import type { MetadataRoute } from "next";

import { site, stories } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: "", priority: 1 },
    { path: "/donate", priority: 0.95 },
    { path: "/100-percent-model", priority: 0.9 },
    { path: "/our-work", priority: 0.9 },
    { path: "/impact-stories", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/get-involved", priority: 0.7 },
    { path: "/transparency", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
  ].map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));

  const storyRoutes = stories.map((story) => ({
    url: `${site.url}/impact-stories/${story.slug}`,
    lastModified: new Date(story.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...routes, ...storyRoutes];
}
