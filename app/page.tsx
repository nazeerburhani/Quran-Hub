import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { USA_PAGE, UK_PAGE, CANADA_PAGE, AUSTRALIA_PAGE } from "@/lib/landing-pages";
import { pageUrl } from "@/components/seo/LandingPage";
import { FaqJsonLd, CoursesJsonLd } from "@/components/seo/JsonLd";
import Hero from "@/components/home/Hero";
import GuaranteeStrip from "@/components/home/GuaranteeStrip";
import StatBand from "@/components/home/StatBand";
import Courses from "@/components/home/Courses";
import HowItWorks from "@/components/home/HowItWorks";
import Teachers from "@/components/home/Teachers";
import Founder from "@/components/home/Founder";
import Pricing from "@/components/home/Pricing";
import Results from "@/components/home/Results";
import Reviews from "@/components/home/Reviews";
import FreeTrialForm from "@/components/home/FreeTrialForm";
import FAQ from "@/components/home/FAQ";
import GlobalReach from "@/components/home/GlobalReach";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: `${SITE.name} — Online Quran Academy | Learn Quran Online`,
  description:
    "Live 1-on-1 online Quran classes for kids & adults: Noorani Qaida, Tajweed, Hifz, Tafseer, Arabic & more. Qualified male & female tutors, 10+ countries, free 3-day trial — no credit card.",
  alternates: {
    canonical: SITE.url,
    languages: {
      "x-default": SITE.url,
      "en-US": pageUrl(USA_PAGE),
      "en-GB": pageUrl(UK_PAGE),
      "en-CA": pageUrl(CANADA_PAGE),
      "en-AU": pageUrl(AUSTRALIA_PAGE),
    },
  },
};

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <CoursesJsonLd />
      <Hero />
      <GuaranteeStrip />
      <Reviews />
      <StatBand />
      <Courses />
      <HowItWorks />
      <Teachers />
      <Founder />
      <Pricing />
      <Results />
      <FreeTrialForm />
      <FAQ />
      <GlobalReach />
      <FinalCTA />
    </>
  );
}
