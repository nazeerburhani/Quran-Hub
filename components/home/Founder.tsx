"use client";

import Image from "next/image";
import { MessageCircle, Quote } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Founder profile — the academy's face. Personal and warm,
 * matching the premium theme.
 */
export default function Founder() {
  const { locale } = useLocale();
  const d = dict[locale];

  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="founder-heading"
          eyebrow={d.founderEyebrow}
          title={d.founderTitle}
          description={d.founderBioShort}
        />

        <div className="mx-auto mt-10 max-w-5xl">
          <Reveal>
            <div className="glass overflow-hidden rounded-[2rem] shadow-card-light dark:shadow-card">
              <div className="grid gap-0 md:grid-cols-[320px_1fr]">
                {/* Portrait */}
                <div className="relative min-h-[320px] md:min-h-full">
                  <Image
                    src="/images/founder.jpg"
                    alt={d.founderName}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover object-top"
                    loading="lazy"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-brand-950/20"
                  />
                </div>

                {/* Copy */}
                <div className="relative flex flex-col justify-center p-7 sm:p-10">
                  <Quote
                    aria-hidden="true"
                    className="absolute end-6 top-6 h-10 w-10 text-gold-400/25"
                  />
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-700 dark:text-gold-300">
                    {d.founderRole}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink dark:text-sand-100 sm:text-3xl">
                    {d.founderName}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft dark:text-night-muted">
                    {d.founderBio}
                  </p>
                  <p className="mt-5 border-s-2 border-gold-400 ps-4 font-display text-base italic text-brand-800 dark:text-gold-200">
                    {d.founderQuote}
                  </p>
                  <div className="mt-7">
                    <a
                      href={whatsappLink(
                        "Assalamu Alaikum, I read your message on the QuranHub website and want to know more."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-waDark px-6 py-3 text-sm font-bold text-white shadow-card transition-transform duration-300 hover:-translate-y-0.5"
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
