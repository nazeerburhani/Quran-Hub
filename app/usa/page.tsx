import type { Metadata } from "next";
import LandingPage, { pageUrl } from "@/components/seo/LandingPage";
import { USA_PAGE, UK_PAGE, CANADA_PAGE, AUSTRALIA_PAGE } from "@/lib/landing-pages";
import { SITE } from "@/lib/site";

export function generateMetadata(): Metadata {
  return {
    title: USA_PAGE.metaTitle,
    description: USA_PAGE.metaDescription,
    keywords: USA_PAGE.keywords,
    alternates: {
      canonical: pageUrl(USA_PAGE),
      languages: {
        "x-default": SITE.url,
        "en-US": pageUrl(USA_PAGE),
        "en-GB": pageUrl(UK_PAGE),
        "en-CA": pageUrl(CANADA_PAGE),
        "en-AU": pageUrl(AUSTRALIA_PAGE),
      },
    },
    openGraph: {
      title: USA_PAGE.metaTitle,
      description: USA_PAGE.metaDescription,
      url: pageUrl(USA_PAGE),
      type: "article",
    },
  };
}

export default function Page() {
  return <LandingPage data={USA_PAGE} />;
}
