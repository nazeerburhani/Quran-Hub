"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, MessageCircle, Star, UserCheck } from "lucide-react";
import { TEACHERS, whatsappLink, type Teacher } from "@/lib/site";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

function badgeFor(qualification: string): string | null {
  const q = qualification.toLowerCase();
  if (q.includes("ijazah")) return "Ijazah";
  if (q.includes("al-azhar")) return "Al-Azhar";
  if (q.includes("hafiz")) return "Hafiz";
  return null;
}

function initials(name: string): string {
  return name
    .replace(/^(Qari|Ustadha|Sheikh)\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function TeacherCard({ teacher, index }: { teacher: Teacher; index: number }) {
  const { locale } = useLocale();
  const d = dict[locale];
  const badge = badgeFor(teacher.qualification);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="glass flex h-full flex-col rounded-3xl p-6 shadow-card-light transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card dark:shadow-card"
    >
      <div className="flex items-start gap-4">
        {/* Monogram avatar — no face photos, per brand rules */}
        <span
          aria-hidden="true"
          className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-950 font-display text-2xl font-semibold text-gold-300 shadow-card"
        >
          {initials(teacher.name)}
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold leading-tight text-ink dark:text-sand-100">
            {teacher.name}
          </h3>
          <p className="mt-0.5 text-[13px] text-ink-soft dark:text-night-muted">
            {teacher.country}
          </p>
          {teacher.rating != null && teacher.experienceYears != null ? (
            <p className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold text-gold-700 dark:text-gold-300">
              <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              {teacher.rating.toFixed(1)}
              <span className="font-normal text-ink-soft dark:text-night-muted">
                · {teacher.experienceYears} {d.yearsExp}
              </span>
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {badge ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-800/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-700 dark:bg-gold-400/15 dark:text-gold-300">
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
            {badge}
          </span>
        ) : null}
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-800/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-700 dark:bg-gold-400/15 dark:text-gold-300">
          <UserCheck className="h-3.5 w-3.5" aria-hidden="true" />
          Qualified Tutor
        </span>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-ink-soft dark:text-night-muted">
        {teacher.qualification}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {teacher.subjects.map((s) => (
          <span
            key={s}
            className="rounded-full border border-brand-800/15 px-2.5 py-1 text-[11px] font-medium text-ink-soft dark:border-white/15 dark:text-night-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs text-ink-soft dark:text-night-muted">
        {teacher.languages.join(" · ")}
      </p>

      <div className="mt-auto pt-4">
        {/* Enrollment CTA — request this specific tutor on WhatsApp */}
        <a
          href={whatsappLink(
            `Assalamu Alaikum, I want to book a FREE trial class with ${teacher.name}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-waDark px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-wa"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          {d.requestTutor}
        </a>
      </div>
    </motion.article>
  );
}

export default function Teachers() {
  const { locale } = useLocale();
  const d = dict[locale];
  const [gender, setGender] = useState<"All" | "Male" | "Female">("All");

  const visible =
    gender === "All" ? TEACHERS : TEACHERS.filter((t) => t.gender === gender);

  return (
    <section id="teachers" aria-labelledby="teachers-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="teachers-heading"
          eyebrow={d.teachersEyebrow}
          title={d.teachersTitle}
          description={d.teachersDesc}
        />

        <Reveal className="mt-5">
          <p className="mx-auto max-w-2xl text-center text-sm font-medium text-ink-soft dark:text-night-muted">
            {d.teachersTeamNote}
          </p>
        </Reveal>

        {/* Gender filter */}
        <Reveal className="mt-8 flex justify-center gap-2">
          {(["All", "Male", "Female"] as const).map((g) => {
            const active = gender === g;
            const label = g === "All" ? d.filterAll : g === "Male" ? d.filterMale : d.filterFemale;
            return (
              <button
                key={g}
                type="button"
                onClick={() => setGender(g)}
                aria-pressed={active}
                className={`min-h-[44px] rounded-full px-6 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-brand-800 text-white shadow-card dark:bg-gold-400 dark:text-brand-950"
                    : "glass text-ink-soft hover:border-gold-400/60 hover:text-ink dark:text-night-muted dark:hover:text-sand-100"
                }`}
              >
                {label}
              </button>
            );
          })}
        </Reveal>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((t, i) => (
              <TeacherCard key={t.id} teacher={t} index={i} />
            ))}
            {/* "+ more" card — the team is 20–25 tutors, only some are profiled */}
            {gender === "All" ? (
              <motion.div
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 p-6 text-center shadow-card"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 20%, rgba(212,175,55,0.5), transparent 60%)",
                  }}
                />
                <span
                  aria-hidden="true"
                  className="grid h-16 w-16 place-items-center rounded-2xl border border-gold-300/40 bg-white/10 font-display text-xl font-semibold text-gold-300 backdrop-blur-sm"
                >
                  +
                </span>
                <p className="mt-4 font-display text-2xl font-semibold text-white">
                  {d.teachersMoreTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-sand-100/80">
                  {d.teachersMoreDesc}
                </p>
                <a
                  href={whatsappLink(
                    "Assalamu Alaikum, I want to meet my Quran tutor and book a FREE trial class."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-5 inline-flex min-h-[44px] items-center text-sm"
                >
                  {d.teachersMoreCta}
                </a>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>

        {/* Same-tutor guarantee strip */}
        <Reveal className="mt-10">
          <p className="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-gold-400/30 bg-gold-400/10 px-6 py-4 text-center text-sm font-semibold text-gold-700 dark:text-gold-300">
            <BadgeCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
            {d.sameTutorStrip}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
