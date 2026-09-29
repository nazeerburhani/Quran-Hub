import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import Hero from "@/components/home/Hero";
import GuaranteeStrip from "@/components/home/GuaranteeStrip";
import StatBand from "@/components/home/StatBand";
import Courses from "@/components/home/Courses";
import HowItWorks from "@/components/home/HowItWorks";
import Teachers from "@/components/home/Teachers";
import Pricing from "@/components/home/Pricing";
import Results from "@/components/home/Results";
import Reviews from "@/components/home/Reviews";
import FreeTrialForm from "@/components/home/FreeTrialForm";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: `${SITE.name} — Learn Quran Online with Certified Tutors`,
  description:
    "Live one-on-one online Quran classes for kids and adults: Noorani Qaida, Tajweed, Hifz, Tafseer, Arabic and more. Certified male & female tutors, 40+ countries, free 3-day trial — no credit card.",
  alternates: {
    canonical: SITE.url,
  },
};

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <Hero />
      <GuaranteeStrip />
      <StatBand />
      <Courses />
      <HowItWorks />
      <Teachers />
      <Pricing />
      <Results />
      <Reviews />
      <FreeTrialForm />
      <FAQ />
      <FinalCTA />
    </>
  );
}
