"use client";

import Image from "next/image";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";

/** Final CTA — cinematic photo background (Quran with lantern, dark). */
export default function FinalCTA() {
  const { locale } = useLocale();
  const d = dict[locale];

  return (
    <section aria-labelledby="final-cta-heading" className="relative overflow-hidden">
      <div className="photo-duotone absolute inset-0" aria-hidden="true">
        <Image
          src="/images/final-cta.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
      </div>
      {/* Deep teal overlay for AA text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-night-deep/90 via-night-deep/80 to-night-deep/95"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <Reveal>
          <p
            aria-hidden="true"
            className="font-arabic text-4xl text-gold-300/90 sm:text-5xl"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <h2
            id="final-cta-heading"
            className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-5xl"
          >
            {d.finalTitle}
          </h2>
          <p className="mt-4 text-base text-sand-100/80 sm:text-lg">{d.finalSub}</p>
          <div className="mt-9">
            <a href="#trial" className="btn-gold text-base">
              {d.finalCta}
            </a>
          </div>
          <p className="mt-4 text-sm text-sand-100/60">
            {d.guaranteeNoCard}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
