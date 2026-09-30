import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage, { pageUrl, type LandingPageData } from "@/components/seo/LandingPage";
import { GUIDES } from "@/lib/guides";

export function generateStaticParams() {
  return Object.keys(GUIDES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data: LandingPageData | undefined = GUIDES[params.slug];
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

export default function GuidePage({ params }: { params: { slug: string } }) {
  const data: LandingPageData | undefined = GUIDES[params.slug];
  if (!data) notFound();
  return <LandingPage data={data} />;
}
