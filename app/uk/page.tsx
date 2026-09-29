import type { Metadata } from "next";
import LandingPage, { pageUrl } from "@/components/seo/LandingPage";
import { UK_PAGE } from "@/lib/landing-pages";

export function generateMetadata(): Metadata {
  return {
    title: UK_PAGE.metaTitle,
    description: UK_PAGE.metaDescription,
    keywords: UK_PAGE.keywords,
    alternates: { canonical: pageUrl(UK_PAGE) },
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
