"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MessageCircle, Sparkles } from "lucide-react";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import Button from "@/components/ui/Button";

/** 3D scene loads only in the browser (never on the server). */
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="geo-pattern absolute inset-0 opacity-40" aria-hidden="true" />,
});

export default function Hero() {
  const { locale } = useLocale();
  const d = dict[locale];
  const rootRef = useRef<HTMLElement>(null);

  /* Gentle GSAP entrance for the headline block (skipped for reduced motion). */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || !rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-anim]",
        { opacity: 0, y: 34 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.15 }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* 3D particle background */}
      <HeroScene />

      {/* Readability overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-navy-950/80 dark:via-navy-950/50 dark:to-navy-950" aria-hidden="true" />
      <div className="geo-pattern-soft pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-36 sm:px-6">
        <div className="max-w-3xl">
          <p
            data-hero-anim
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark dark:text-gold-light"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {d.heroBadge}
          </p>

          {/* The single H1 of the page */}
          <h1
            id="hero-heading"
            data-hero-anim
            className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Learn the Quran Online{" "}
            <span className="text-gold-gradient">with Certified Tutors</span>
            <span className="sr-only"> — {d.heroTitle}</span>
          </h1>
          {locale !== "en" ? (
            <p data-hero-anim className="mt-3 text-xl font-semibold text-slate-700 dark:text-slate-200" lang={locale}>
              {d.heroTitle}
            </p>
          ) : null}

          <p data-hero-anim className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {d.heroSubtitle}
          </p>

          <div data-hero-anim className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#trial" size="lg">
              {d.heroCtaTrial}
            </Button>
            <Button href={whatsappLink()} external size="lg" variant="secondary">
              <MessageCircle className="h-5 w-5 text-[#25d366]" aria-hidden="true" />
              {d.heroCtaWhatsapp}
            </Button>
          </div>

          <figure data-hero-anim className="mt-10 max-w-xl border-s-2 border-gold/60 ps-4">
            <blockquote
              className="font-arabic text-2xl leading-loose text-slate-800 dark:text-gold-light"
              lang="ar"
              dir="rtl"
            >
              ﴿ خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ ﴾
            </blockquote>
            <figcaption className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              “{d.heroHadith}” — {d.heroHadithSource}
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2" aria-hidden="true">
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-gold/50 p-1.5">
          <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
