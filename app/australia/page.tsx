import type { Metadata } from "next";
import LandingPage, { pageUrl } from "@/components/seo/LandingPage";
import { AUSTRALIA_PAGE } from "@/lib/landing-pages";

export function generateMetadata(): Metadata {
  return {
    title: AUSTRALIA_PAGE.metaTitle,
    description: AUSTRALIA_PAGE.metaDescription,
    keywords: AUSTRALIA_PAGE.keywords,
    alternates: { canonical: pageUrl(AUSTRALIA_PAGE) },
    openGraph: {
      title: AUSTRALIA_PAGE.metaTitle,
      description: AUSTRALIA_PAGE.metaDescription,
      url: pageUrl(AUSTRALIA_PAGE),
      type: "article",
    },
  };
}

export default function Page() {
  return <LandingPage data={AUSTRALIA_PAGE} />;
}
