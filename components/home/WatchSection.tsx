"use client";

import { useState } from "react";
import Image from "next/image";
import { BadgeCheck, Clock3, Play, Sparkles } from "lucide-react";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";

/**
 * Watch — cinematic click-to-play promo video section.
 * No autoplay: the poster renders first and the <video> element
 * is only mounted after an explicit user tap (sound-safe).
 */
export default function WatchSection() {
  const { locale } = useLocale();
  const d = dict[locale];
  const [playing, setPlaying] = useState(false);

  const chips = [
    { icon: Clock3, label: "1:03" },
    { icon: BadgeCheck, label: d.guaranteeTrial },
    { icon: Sparkles, label: d.guaranteeNoCard },
  ];

  return (
    <section
      id="watch"
      aria-labelledby="watch-heading"
      className="relative scroll-mt-20 overflow-hidden bg-night-deep"
    >
      {/* teal/gold ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(217,164,65,0.14),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="geo-pattern-dark pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-300">
            {d.watchEyebrow}
          </p>
          <h2
            id="watch-heading"
            className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            {d.watchTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sand-100/75 sm:text-lg">
            {d.watchDesc}
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-gold-400/25 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <div className="relative aspect-video bg-night-soft">
              {playing ? (
                <video
                  className="absolute inset-0 h-full w-full"
                  src="/videos/quranhub-promo.mp4"
                  poster="/videos/quranhub-poster.jpg"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  aria-label={d.watchTitle}
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={d.watchPlay}
                  className="group absolute inset-0 h-full w-full cursor-pointer text-left"
                >
                  <Image
                    src="/videos/quranhub-poster.jpg"
                    alt={d.watchTitle}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-night-deep/80 via-transparent to-night-deep/30"
                  />
                  {/* play button */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gold-400 text-night-deep shadow-[0_0_0_10px_rgba(217,164,65,0.25)] transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
                      <Play className="h-9 w-9 fill-current sm:h-10 sm:w-10" />
                      <span className="absolute inset-0 animate-ping rounded-full bg-gold-400/30" />
                    </span>
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-full bg-night-deep/70 px-3 py-1 text-xs font-semibold text-sand-100 backdrop-blur">
                    {d.watchPlay}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-night-deep/70 px-3 py-1 text-xs font-semibold tabular-nums text-sand-100 backdrop-blur">
                    1:03
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {chips.map((c) => (
              <li
                key={c.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-sand-100/90"
              >
                <c.icon className="h-4 w-4 text-gold-300" aria-hidden="true" />
                {c.label}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <a href="#trial" className="btn-gold text-base">
              {d.watchCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
