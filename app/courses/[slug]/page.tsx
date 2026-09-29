import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage, { pageUrl, type LandingPageData } from "@/components/seo/LandingPage";
import {
  KIDS_PAGE,
  FEMALE_TEACHER_PAGE,
  QAIDA_PAGE,
  TAJWEED_PAGE,
  HIFZ_PAGE,
  ADULTS_PAGE,
  SISTERS_PAGE,
  IJAZAH_PAGE,
} from "@/lib/landing-pages";

const PAGES: Record<string, LandingPageData> = {
  "online-quran-classes-for-kids": KIDS_PAGE,
  "female-quran-teacher-online": FEMALE_TEACHER_PAGE,
  "noorani-qaida-online": QAIDA_PAGE,
  "online-tajweed-course": TAJWEED_PAGE,
  "online-hifz-program": HIFZ_PAGE,
  "learn-quran-online-for-adults": ADULTS_PAGE,
  "online-quran-classes-for-sisters": SISTERS_PAGE,
  "online-ijazah-course": IJAZAH_PAGE,
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = PAGES[params.slug];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: pageUrl(data) },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: pageUrl(data),
      type: "article",
    },
  };
}

export default function CourseLandingPage({ params }: { params: { slug: string } }) {
  const data = PAGES[params.slug];
  if (!data) notFound();
  return <LandingPage data={data} />;
}
