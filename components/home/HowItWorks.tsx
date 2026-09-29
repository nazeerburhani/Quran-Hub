"use client";

import { CalendarCheck, MessageCircle, Repeat } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

export default function HowItWorks() {
  const { locale } = useLocale();
  const d = dict[locale];

  const steps = [
    {
      icon: CalendarCheck,
      title: d.step1Title,
      desc: d.step1Desc,
    },
    {
      icon: MessageCircle,
      title: d.step2Title,
      desc: d.step2Desc,
    },
    {
      icon: Repeat,
      title: d.step3Title,
      desc: d.step3Desc,
    },
  ];

  const lessonFlow = [
    d.lessonStep1,
    d.lessonStep2,
    d.lessonStep3,
    d.lessonStep4,
    d.lessonStep5,
  ];

  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="geo-pattern-adaptive relative scroll-mt-20 border-y border-brand-800/10 bg-sand-100/60 dark:border-white/10 dark:bg-night-soft/60"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="how-heading"
          eyebrow={d.howEyebrow}
          title={d.howTitle}
          description={d.howDesc}
        />

        {/* 3 steps */}
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <li className="glass relative h-full rounded-3xl p-6 shadow-card-light dark:shadow-card sm:p-8">
                <span
                  aria-hidden="true"
                  className="absolute end-5 top-5 font-display text-6xl font-semibold text-brand-800/10 dark:text-gold-400/15"
                >
                  {i + 1}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-800 text-white shadow-card-light dark:bg-gold-400 dark:text-brand-950">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink dark:text-sand-100">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-night-muted">
                  {s.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* Published lesson structure */}
        <Reveal className="mt-10">
          <div className="rounded-3xl border border-gold-400/30 bg-gradient-to-br from-brand-800 to-brand-950 p-6 shadow-card sm:p-8 dark:from-night-soft dark:to-night-deep">
            <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-gold-300">
              {d.lessonStructure}
            </p>
            <ol className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {lessonFlow.map((step, i) => (
                <li key={step} className="flex items-center gap-2 sm:gap-3">
                  <span className="inline-flex min-h-[44px] items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-sand-100 backdrop-blur-sm">
                    <span aria-hidden="true" className="me-2 font-display text-gold-300">
                      {i + 1}
                    </span>
                    {step}
                  </span>
                  {i < lessonFlow.length - 1 ? (
                    <span aria-hidden="true" className="text-gold-400/70">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
            <div className="mt-6 text-center">
              <a
                href={whatsappLink("Assalamu Alaikum, I want to book a free trial class.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm"
              >
                {d.step1Title}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
