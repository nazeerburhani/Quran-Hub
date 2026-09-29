"use client";

import { useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";
import { REVIEWS, type Review } from "@/lib/site";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

function StarRow({ rating, label }: { rating: number; label: string }) {
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex items-center gap-0.5 text-gold-500 dark:text-gold-300"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-current" : "opacity-30"}`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="glass w-[300px] shrink-0 rounded-3xl p-6 shadow-card-light dark:shadow-card sm:w-[360px]"
      aria-label={`Review by ${review.name}`}
    >
      <div className="flex items-center justify-between gap-2">
        <StarRow rating={review.rating} label={`${review.rating} out of 5 stars`} />
        <span className="rounded-full bg-brand-800/10 px-3 py-1 text-[11px] font-semibold text-brand-700 dark:bg-gold-400/15 dark:text-gold-300">
          {review.course}
        </span>
      </div>
      <blockquote className="mt-4 text-[15px] leading-relaxed text-ink dark:text-sand-100">
        “{review.text}”
      </blockquote>
      <footer className="mt-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="text-2xl"
          role="img"
          aria-label={`Flag of ${review.country}`}
        >
          {review.flag}
        </span>
        <div>
          <p className="text-sm font-bold text-ink dark:text-sand-100">{review.name}</p>
          <p className="text-xs text-ink-soft dark:text-night-muted">{review.country}</p>
        </div>
      </footer>
    </article>
  );
}

export default function Reviews() {
  const { locale } = useLocale();
  const d = dict[locale];
  const marqueeRef = useRef<HTMLDivElement>(null);

  /* Pause marquee while touched (mobile) — hover pause is CSS */
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const track = el.querySelector<HTMLElement>(".marquee-track");
    if (!track) return;
    const pause = () => (track.style.animationPlayState = "paused");
    const play = () => (track.style.animationPlayState = "");
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", play, { passive: true });
    return () => {
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", play);
    };
  }, []);

  const featured = REVIEWS.find((r) => r.featured) ?? REVIEWS[0];
  const marqueeItems = REVIEWS.filter((r) => r.id !== featured.id);
  /* Duplicate for a seamless loop */
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative scroll-mt-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="reviews-heading"
          eyebrow={d.reviewsEyebrow}
          title={d.reviewsTitle}
        />

        {/* Summary bar */}
        <Reveal className="mt-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-3xl border border-gold-400/30 bg-white/60 px-6 py-7 text-center shadow-card-light backdrop-blur-xl dark:bg-white/[0.04] dark:shadow-card sm:flex-row sm:justify-center sm:gap-8">
            <p className="font-display text-6xl font-semibold text-ink dark:text-sand-100">
              4.9<span className="text-2xl text-ink-soft dark:text-night-muted">/5</span>
            </p>
            <div className="sm:text-start">
              <StarRow rating={5} label="4.9 out of 5 stars" />
              <p className="mt-1.5 text-sm text-ink-soft dark:text-night-muted">
                {d.reviewsFrom}
              </p>
              <p className="mt-2 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-soft/80 dark:text-night-muted/80 sm:justify-start">
                <span className="rounded-md border border-brand-800/15 px-2 py-1 dark:border-white/15">Google</span>
                <span className="rounded-md border border-brand-800/15 px-2 py-1 dark:border-white/15">Trustpilot</span>
                <span className="rounded-md border border-brand-800/15 px-2 py-1 dark:border-white/15">Facebook</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Featured spotlight */}
        <Reveal className="mt-8">
          <article
            className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-8 shadow-card sm:p-10"
            aria-label={`${d.featuredReview}: ${featured.name}`}
          >
            <Quote className="absolute end-6 top-6 h-16 w-16 text-gold-400/20" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">
              {d.featuredReview}
            </p>
            <blockquote className="mt-4 font-display text-xl italic leading-relaxed text-white sm:text-2xl">
              “{featured.text}”
            </blockquote>
            <footer className="mt-6 flex items-center gap-3">
              <span className="text-3xl" role="img" aria-label={`Flag of ${featured.country}`}>
                {featured.flag}
              </span>
              <div>
                <p className="font-bold text-white">{featured.name}</p>
                <p className="text-sm text-sand-100/70">
                  {featured.country} · {featured.course}
                </p>
              </div>
              <span className="ms-auto">
                <StarRow rating={featured.rating} label={`${featured.rating} out of 5 stars`} />
              </span>
            </footer>
          </article>
        </Reveal>
      </div>

      {/* Auto-scrolling marquee */}
      <div
        ref={marqueeRef}
        className="marquee relative pb-20"
        role="region"
        aria-label="Parent reviews carousel"
      >
        <div
          className="marquee-track flex w-max gap-5 px-4"
          style={{ direction: "ltr" }}
        >
          {loop.map((r, i) => (
            <ReviewCard key={`${r.id}-${i}`} review={r} />
          ))}
        </div>
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 start-0 w-16 bg-gradient-to-r from-sand-50 to-transparent dark:from-night"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 end-0 w-16 bg-gradient-to-l from-sand-50 to-transparent dark:from-night"
          aria-hidden="true"
        />
      </div>

      <p className="sr-only">
        Sample reviews shown for design purposes — replace with verified parent reviews before launch.
      </p>
    </section>
  );
}
