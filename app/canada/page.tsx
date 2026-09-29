import type { Metadata } from "next";
import LandingPage, { pageUrl } from "@/components/seo/LandingPage";
import { CANADA_PAGE } from "@/lib/landing-pages";

export function generateMetadata(): Metadata {
  return {
    title: CANADA_PAGE.metaTitle,
    description: CANADA_PAGE.metaDescription,
    keywords: CANADA_PAGE.keywords,
    alternates: { canonical: pageUrl(CANADA_PAGE) },
    openGraph: {
      title: CANADA_PAGE.metaTitle,
      description: CANADA_PAGE.metaDescription,
      url: pageUrl(CANADA_PAGE),
      type: "article",
    },
  };
}

export default function Page() {
  return <LandingPage data={CANADA_PAGE} />;
}
