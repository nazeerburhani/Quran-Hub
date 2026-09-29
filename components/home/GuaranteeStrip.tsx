"use client";

import { CalendarClock, CreditCard, FileBarChart, UserCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";

const ICONS = [CalendarClock, CreditCard, UserCheck, FileBarChart];

export default function GuaranteeStrip() {
  const { locale } = useLocale();
  const d = dict[locale];
  const items = [
    d.guaranteeTrial,
    d.guaranteeNoCard,
    d.guaranteeSameTutor,
    d.guaranteeReports,
  ];

  return (
    <section
      id="guarantee"
      aria-label="Our guarantees"
      className="relative overflow-hidden border-b border-gold-500/20 bg-sand-50 dark:border-white/10 dark:bg-night"
    >
      {/* Ambient gold glow + fine dot texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,175,55,0.10), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(22,68,73,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14">
        {/* Eyebrow */}
        <Reveal className="flex items-center justify-center gap-3">
          <span
            aria-hidden="true"
            className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500/70 sm:w-16"
          />
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-700 dark:text-gold-300">
            {d.guaranteeEyebrow}
          </p>
          <span
            aria-hidden="true"
            className="h-px w-10 bg-gradient-to-l from-transparent to-gold-500/70 sm:w-16"
          />
        </Reveal>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {items.map((label, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={label} delay={Math.min(i * 0.08, 0.24)}>
                <li className="group relative flex h-full flex-col items-center overflow-hidden rounded-[1.75rem] border border-gold-500/25 bg-white/90 px-4 py-6 text-center shadow-[0_18px_45px_-18px_rgba(18,51,50,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/70 hover:shadow-[0_28px_60px_-16px_rgba(212,175,55,0.45)] dark:border-white/10 dark:bg-white/[0.05] dark:shadow-card sm:px-5 sm:py-7">
                  {/* Gold hairline sweep on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 text-brand-950 shadow-[0_12px_25px_-8px_rgba(212,175,55,0.7)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span className="mt-4 text-sm font-bold leading-snug tracking-tight text-ink dark:text-sand-100 sm:text-[15px]">
                    {label}
                  </span>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
