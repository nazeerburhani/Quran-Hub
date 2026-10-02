import type { Metadata } from "next";
import LandingPage, { pageUrl } from "@/components/seo/LandingPage";
import { USA_PAGE, UK_PAGE, CANADA_PAGE, AUSTRALIA_PAGE } from "@/lib/landing-pages";
import { SITE } from "@/lib/site";

export function generateMetadata(): Metadata {
  return {
    title: AUSTRALIA_PAGE.metaTitle,
    description: AUSTRALIA_PAGE.metaDescription,
    keywords: AUSTRALIA_PAGE.keywords,
    alternates: {
      canonical: pageUrl(AUSTRALIA_PAGE),
      languages: {
        "x-default": SITE.url,
        "en-US": pageUrl(USA_PAGE),
        "en-GB": pageUrl(UK_PAGE),
        "en-CA": pageUrl(CANADA_PAGE),
        "en-AU": pageUrl(AUSTRALIA_PAGE),
      },
    },
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
