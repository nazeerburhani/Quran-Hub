import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const COURSE_SLUGS = [
  "online-quran-classes-for-kids",
  "female-quran-teacher-online",
  "noorani-qaida-online",
  "online-tajweed-course",
  "online-hifz-program",
  "learn-quran-online-for-adults",
  "online-quran-classes-for-sisters",
  "online-ijazah-course",
];

const TOP_PAGES = ["fees", "free-trial", "usa", "uk", "canada", "australia"];

/**
 * XML sitemap — homepage + all SEO landing pages (courses, fees, trial, geo).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...COURSE_SLUGS.map((slug) => ({
      url: `${SITE.url}/courses/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...TOP_PAGES.map((slug) => ({
      url: `${SITE.url}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: slug === "free-trial" || slug === "fees" ? 0.9 : 0.8,
    })),
  ];
}
