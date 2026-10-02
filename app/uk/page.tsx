import type { Metadata } from "next";
import LandingPage, { pageUrl } from "@/components/seo/LandingPage";
import { USA_PAGE, UK_PAGE, CANADA_PAGE, AUSTRALIA_PAGE } from "@/lib/landing-pages";
import { SITE } from "@/lib/site";

export function generateMetadata(): Metadata {
  return {
    title: UK_PAGE.metaTitle,
    description: UK_PAGE.metaDescription,
    keywords: UK_PAGE.keywords,
    alternates: {
      canonical: pageUrl(UK_PAGE),
      languages: {
        "x-default": SITE.url,
        "en-US": pageUrl(USA_PAGE),
        "en-GB": pageUrl(UK_PAGE),
        "en-CA": pageUrl(CANADA_PAGE),
        "en-AU": pageUrl(AUSTRALIA_PAGE),
      },
    },
    openGraph: {
      title: UK_PAGE.metaTitle,
      description: UK_PAGE.metaDescription,
      url: pageUrl(UK_PAGE),
      type: "article",
    },
  };
}

export default function Page() {
  return <LandingPage data={UK_PAGE} />;
}
