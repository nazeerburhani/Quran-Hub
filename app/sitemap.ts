import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * XML sitemap. Future pages (courses, teachers, pricing, trial, about,
 * blog, contact, legal, portals) get added here as they are built.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
