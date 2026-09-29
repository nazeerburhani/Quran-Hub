"use client";

import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  ListChecks,
  MessageCircle,
  Mic,
  PenLine,
  Repeat,
  RotateCcw,
} from "lucide-react";
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
    { label: d.lessonStep1, icon: RotateCcw },
    { label: d.lessonStep2, icon: PenLine },
    { label: d.lessonStep3, icon: BookOpen },
    { label: d.lessonStep4, icon: Mic },
    { label: d.lessonStep5, icon: ListChecks },
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
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-400/30 bg-gradient-to-br from-brand-800 via-[#10302c] to-night-deep p-6 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)] sm:p-10">
            {/* Ambient gold glow + dot texture */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-400/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(212,175,55,0.25) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative flex items-center justify-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400/70 sm:w-20"
              />
              <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
                {d.lessonStructure}
              </p>
              <span
                aria-hidden="true"
                className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400/70 sm:w-20"
              />
            </div>

            <ol className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {lessonFlow.map((step, i) => (
                <Reveal
                  key={step.label}
                  delay={Math.min(i * 0.08, 0.32)}
                  className={i === lessonFlow.length - 1 ? "col-span-2 sm:col-span-1" : ""}
                >
                  <li className="group relative flex h-full flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] px-3 py-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:bg-white/[0.09] hover:shadow-[0_20px_45px_-14px_rgba(212,175,55,0.45)] sm:px-4 sm:py-6">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
                    />
                    <span className="relative">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 p-3 text-brand-950 shadow-[0_12px_25px_-8px_rgba(212,175,55,0.7)] transition-transform duration-300 group-hover:scale-110">
                        <step.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute -end-2 -top-2 grid h-6 w-6 place-items-center rounded-full border border-gold-300/50 bg-brand-950 font-display text-[11px] font-bold text-gold-300"
                      >
                        {i + 1}
                      </span>
                    </span>
                    <span className="mt-3 text-sm font-bold leading-snug text-white">
                      {step.label}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>

            <div className="relative mt-8 text-center">
              <a
                href={whatsappLink("Assalamu Alaikum, I want to book a free trial class.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold group inline-flex items-center gap-2 text-sm shadow-[0_15px_35px_-10px_rgba(212,175,55,0.7)]"
              >
                {d.step1Title}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
