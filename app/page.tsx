import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import Stats from "@/components/home/Stats";
import CourseShowcase from "@/components/home/CourseShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import TeacherCarousel from "@/components/home/TeacherCarousel";
import PricingPreview from "@/components/home/PricingPreview";
import Results from "@/components/home/Results";
import Testimonials from "@/components/home/Testimonials";
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
      <TrustBadges />
      <Stats />
      <CourseShowcase />
      <HowItWorks />
      <TeacherCarousel />
      <PricingPreview />
      <Results />
      <Testimonials />
      <FreeTrialForm />
      <FAQ />
      <FinalCTA />
    </>
  );
}
