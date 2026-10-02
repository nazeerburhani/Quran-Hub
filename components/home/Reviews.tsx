"use client";

import { useEffect, useRef } from "react";
import { BadgeCheck, ExternalLink, Facebook, Quote, ThumbsUp } from "lucide-react";
import { REVIEWS, SITE, type Review } from "@/lib/site";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1877F2]/10 px-3 py-1 text-[11px] font-bold text-[#1877F2] dark:bg-[#1877F2]/20 dark:text-sky-300">
      <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
      Verified Facebook review
    </span>
  );
}

function RecommendsPill() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/10 px-3 py-1 text-[11px] font-bold text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
      <ThumbsUp className="h-3.5 w-3.5" aria-hidden="true" />
      Recommends
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="glass w-[300px] shrink-0 rounded-3xl p-6 shadow-card-light dark:shadow-card sm:w-[360px]"
      aria-label={`Facebook review by ${review.name}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <VerifiedBadge />
        {review.recommends ? <RecommendsPill /> : null}
      </div>
      <blockquote className="mt-4 text-[15px] leading-relaxed text-ink dark:text-sand-100">
        “{review.text}”
      </blockquote>
      <footer className="mt-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2] dark:bg-[#1877F2]/20 dark:text-sky-300"
        >
          <Facebook className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-bold text-ink dark:text-sand-100">{review.name}</p>
          <p className="text-xs text-ink-soft dark:text-night-muted">
            Posted on Facebook · {review.date}
          </p>
        </div>
      </footer>
      <a
        href={SITE.facebookReviews}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#1877F2] transition hover:underline dark:text-sky-300"
        aria-label={`View ${review.name}'s review on Facebook`}
      >
        <Facebook className="h-3.5 w-3.5" aria-hidden="true" />
        View on Facebook
        <ExternalLink className="h-3 w-3" aria-hidden="true" />
      </a>
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

        {/* Summary bar — genuine Facebook page rating */}
        <Reveal className="mt-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-gold-400/30 bg-white/60 px-6 py-7 text-center shadow-card-light backdrop-blur-xl dark:bg-white/[0.04] dark:shadow-card sm:flex-row sm:justify-center sm:gap-8 sm:text-start">
            <p className="font-display text-5xl font-semibold text-ink dark:text-sand-100 sm:text-6xl">
              100%
            </p>
            <div>
              <p className="text-lg font-bold text-ink dark:text-sand-100">
                recommend on Facebook
              </p>
              <p className="mt-1 text-sm text-ink-soft dark:text-night-muted">
                {d.reviewsFrom}
              </p>
              <p className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-brand-800/15 px-2 py-1 text-xs font-bold text-ink-soft dark:border-white/15 dark:text-night-muted">
                  <Facebook className="h-3.5 w-3.5 text-[#1877F2]" aria-hidden="true" />
                  Facebook
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-brand-800/15 px-2 py-1 text-xs font-bold text-ink-soft dark:border-white/15 dark:text-night-muted">
                  <BadgeCheck className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                  Verified reviews
                </span>
                <a
                  href={SITE.facebookReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-[#1877F2] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-[#1464cc]"
                >
                  Read all reviews
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Featured spotlight — genuine review */}
        <Reveal className="mt-8">
          <article
            className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl bg-gradient-to-br from-brand-800 to-brand-950 p-5 shadow-card sm:rounded-3xl sm:p-10"
            aria-label={`${d.featuredReview}: ${featured.name}`}
          >
            <Quote className="absolute end-4 top-4 h-10 w-10 text-gold-400/20 sm:end-6 sm:top-6 sm:h-16 sm:w-16" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300 sm:text-xs">
                {d.featuredReview}
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold text-sky-200 sm:px-3 sm:text-[11px]">
                <BadgeCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                Verified Facebook review
              </span>
            </div>
            <blockquote className="mt-3 font-display text-base italic leading-relaxed text-white sm:mt-4 sm:text-2xl">
              “{featured.text}”
            </blockquote>
            <footer className="mt-4 flex items-center gap-2.5 sm:mt-6 sm:gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sky-200 sm:h-11 sm:w-11"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-white sm:text-base">{featured.name}</p>
                <p className="text-xs text-sand-100/70 sm:text-sm">
                  Posted on Facebook · {featured.date}
                </p>
              </div>
              {featured.recommends ? (
                <span className="ms-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-bold text-emerald-200 sm:px-3 sm:text-[11px]">
                  <ThumbsUp className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                  Recommends
                </span>
              ) : null}
            </footer>
            <a
              href={SITE.facebookReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 text-[11px] font-bold text-white transition hover:border-gold-400/60 hover:text-gold-300 sm:mt-6 sm:px-4 sm:py-2 sm:text-xs"
              aria-label={`View ${featured.name}'s review on Facebook`}
            >
              <Facebook className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              View on Facebook
              <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
            </a>
          </article>
        </Reveal>
      </div>

      {/* Auto-scrolling marquee */}
      <div
        ref={marqueeRef}
        className="marquee relative pb-20"
        role="region"
        aria-label="Facebook reviews carousel"
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
    </section>
  );
}
