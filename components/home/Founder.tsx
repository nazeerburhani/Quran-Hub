"use client";

import Image from "next/image";
import { MessageCircle, Quote, BadgeCheck } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Founder spotlight — a premium dark showcase card for Nazeer Ahmad.
 * Portrait in a gold-ringed frame, personal promise badge, verified
 * academy stats, and the WhatsApp CTA.
 */
const stats = [
  { value: "20+", label: "Qualified tutors" },
  { value: "1,000+", label: "Lessons delivered" },
  { value: "10+", label: "Countries served" },
];

export default function Founder() {
  const { locale } = useLocale();
  const d = dict[locale];

  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="relative scroll-mt-20 overflow-hidden"
    >
      {/* Ambient glows behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -end-24 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="founder-heading"
          eyebrow={d.founderEyebrow}
          title={d.founderTitle}
          description={d.founderBioShort}
        />

        <div className="mx-auto mt-12 max-w-5xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-night-soft via-brand-950 to-night-deep shadow-glow-lg ring-1 ring-gold-400/30">
              {/* Top gold hairline */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
              />
              {/* Subtle dot texture */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(rgba(217,164,65,0.08)_1px,transparent_1px)] bg-[size:22px_22px]"
              />

              <div className="relative grid gap-0 md:grid-cols-[340px_1fr]">
                {/* Portrait */}
                <div className="relative p-5 sm:p-7">
                  <div className="relative h-full min-h-[340px] overflow-hidden rounded-[1.5rem] ring-1 ring-gold-400/50 sm:min-h-[420px] md:min-h-full">
                    <Image
                      src="/images/founder.jpg"
                      alt={d.founderName}
                      fill
                      sizes="(max-width: 768px) 100vw, 340px"
                      className="object-cover object-top"
                      loading="lazy"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-night-deep/70 via-transparent to-transparent"
                    />
                  </div>
                  {/* Floating promise badge */}
                  <div className="absolute bottom-9 left-1/2 flex w-max max-w-[90%] -translate-x-1/2 items-center gap-2 rounded-full border border-gold-400/40 bg-night-deep/85 py-2 pe-4 ps-3 shadow-glow backdrop-blur">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" />
                    </span>
                    <span className="text-xs font-bold tracking-wide text-sand-100">
                      My personal promise to you
                    </span>
                  </div>
                </div>

                {/* Copy */}
                <div className="relative flex flex-col justify-center p-6 pt-2 sm:p-10 md:py-12 md:pe-12 md:ps-4">
                  <Quote
                    aria-hidden="true"
                    className="absolute end-6 top-4 h-12 w-12 text-gold-400/20"
                  />
                  <p className="inline-flex w-fit items-center gap-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300">
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    {d.founderRole}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-sand-100 sm:text-4xl">
                    {d.founderName}
                  </h3>
                  <div
                    aria-hidden="true"
                    className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-gold-400 to-gold-400/20"
                  />
                  <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-night-muted">
                    {d.founderBio}
                  </p>
                  <blockquote className="mt-6 max-w-xl border-s-2 border-gold-400 ps-4">
                    <p className="font-display text-lg italic leading-relaxed text-gold-200">
                      “{d.founderQuote}”
                    </p>
                  </blockquote>

                  {/* Verified stats */}
                  <dl className="mt-7 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    {stats.map((s, i) => (
                      <div
                        key={s.label}
                        className={
                          "flex flex-col" +
                          (i > 0 ? " border-s border-white/10 ps-4" : "")
                        }
                      >
                        <dt className="order-2 mt-1 text-[11px] font-medium uppercase tracking-wider text-night-muted">
                          {s.label}
                        </dt>
                        <dd className="order-1 font-display text-2xl font-bold text-gold-400 sm:text-[1.7rem]">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8">
                    <a
                      href={whatsappLink(
                        "Assalamu Alaikum, I read your message on the QuranHub website and want to know more."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-waDark px-7 py-3 text-sm font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      {d.founderCta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
