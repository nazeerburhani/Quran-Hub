"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import gsap from "gsap";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Globe2, Sparkles, Users } from "lucide-react";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";

/** 3D particle layer — client-only, restyled teal/gold */
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function FloatingChip({
  className,
  children,
  depth,
  scrollY,
  reduce,
}: {
  className?: string;
  children: React.ReactNode;
  depth: number;
  scrollY: ReturnType<typeof useScroll>["scrollY"];
  reduce: boolean;
}) {
  const y = useTransform(scrollY, [0, 600], [0, depth * 60]);
  return (
    <motion.div
      style={reduce ? undefined : { y }}
      className={`glass pointer-events-none absolute z-20 hidden items-center gap-2 rounded-2xl px-4 py-3 shadow-card md:inline-flex ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const { locale } = useLocale();
  const d = dict[locale];
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  /* GSAP entrance — skipped entirely under prefers-reduced-motion */
  useEffect(() => {
    if (reduce || !rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-enter]",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={rootRef}
      id="top"
      aria-label="QuranHub — online Quran classes"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-night-deep"
    >
      {/* Cinematic background photo: open Quran on a rehal, no people */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-quran.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Deep-teal gradient overlay: left 85% → transparent right */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(100deg, rgba(7,33,31,0.96) 0%, rgba(7,33,31,0.88) 45%, rgba(7,33,31,0.55) 68%, rgba(7,33,31,0.15) 88%, rgba(7,33,31,0.05) 100%)",
        }}
      />
      {/* Bottom blend into page */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night-deep/90 to-transparent"
        aria-hidden="true"
      />

      {/* 3D particle atmosphere */}
      <HeroScene />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-36 sm:px-6 md:pb-28 md:pt-40">
        <div className="max-w-2xl">
          <p
            data-hero-enter
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-semibold text-sand-100 backdrop-blur-md"
          >
            <span className="live-dot" aria-hidden="true" />
            {d.heroEyebrow}
          </p>

          <h1
            data-hero-enter
            className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]"
          >
            Your child reciting the Quran{" "}
            <em className="text-gold-gradient">beautifully</em> — within
            months.
          </h1>

          <p
            data-hero-enter
            className="mt-6 max-w-xl text-base leading-relaxed text-sand-100/85 sm:text-lg"
          >
            {d.heroSubtitle}
          </p>

          <div
            data-hero-enter
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#trial" className="btn-gold text-base">
              {d.heroCtaPrimary}
            </a>
            <a
              href="#how"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
            >
              {d.heroCtaSecondary}
            </a>
          </div>

          <p data-hero-enter className="mt-5 text-sm text-sand-100/70">
            Free 3-day trial · No credit card · Confirmed on WhatsApp
          </p>
        </div>
      </div>

      {/* Floating glass stat chips with slow parallax drift */}
      <FloatingChip
        className="right-[8%] top-[24%] animate-float"
        depth={0.8}
        scrollY={scrollY}
        reduce={!!reduce}
      >
        <Sparkles className="h-4 w-4 text-gold-300" aria-hidden="true" />
        <span className="text-sm font-semibold text-white">{d.heroChipRating}</span>
      </FloatingChip>
      <FloatingChip
        className="right-[16%] top-[52%] animate-float-slow"
        depth={1.3}
        scrollY={scrollY}
        reduce={!!reduce}
      >
        <Users className="h-4 w-4 text-gold-300" aria-hidden="true" />
        <span className="text-sm font-semibold text-white">{d.heroChipStudents}</span>
      </FloatingChip>
      <FloatingChip
        className="right-[6%] top-[74%] animate-float"
        depth={1.8}
        scrollY={scrollY}
        reduce={!!reduce}
      >
        <Globe2 className="h-4 w-4 text-gold-300" aria-hidden="true" />
        <span className="text-sm font-semibold text-white">{d.heroChipCountries}</span>
      </FloatingChip>

      {/* Scroll cue */}
      <a
        href="#guarantee"
        aria-label="Scroll to see more"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-sand-100/60 transition-colors hover:text-sand-100 md:block"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
