import type { Metadata } from "next";
import LandingPage, { pageUrl } from "@/components/seo/LandingPage";
import { USA_PAGE } from "@/lib/landing-pages";

export function generateMetadata(): Metadata {
  return {
    title: USA_PAGE.metaTitle,
    description: USA_PAGE.metaDescription,
    keywords: USA_PAGE.keywords,
    alternates: { canonical: pageUrl(USA_PAGE) },
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
