"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Globe,
  Hourglass,
  MessageCircle,
  UserCheck,
  Video,
  X,
} from "lucide-react";
import { whatsappLink, type Course } from "@/lib/site";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import MagneticButton from "@/components/ui/MagneticButton";

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  /** Open the enrollment form for this course. */
  onEnroll: (course: Course) => void;
}

export default function CourseDetailModal({
  course,
  onClose,
  onEnroll,
}: CourseDetailModalProps) {
  const { locale } = useLocale();
  const d = dict[locale];

  /* Lock scroll while open; close on Escape */
  useEffect(() => {
    if (!course) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [course, onClose]);

  const chips = course
    ? [
        { icon: Video, label: d.chipOneOnOne },
        { icon: Clock3, label: `${course.classMinutes} ${d.minShort}` },
        { icon: CalendarDays, label: `${course.daysPerWeek} ${d.daysPerWeekShort}` },
        { icon: Globe, label: d.chipFlexible },
      ]
    : [];

  return (
    <AnimatePresence>
      {course ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-night-deep/70 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={course.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="glass my-8 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-card dark:bg-night-soft"
          >
            {/* Photo header */}
            <div className="photo-duotone relative h-44 sm:h-56">
              <Image
                src={course.image}
                alt={course.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-night-deep/85 via-night-deep/30 to-transparent"
                aria-hidden="true"
              />
              <span
                aria-hidden="true"
                className="absolute end-5 top-5 grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-night-deep/70 font-arabic text-3xl text-gold-300 backdrop-blur-md"
              >
                {course.glyph}
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                <div>
                  <span className="rounded-full bg-gold-400/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-950">
                    {course.level}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                    {course.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close course details"
                className="absolute start-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-night-deep/60 text-white backdrop-blur-md transition-colors hover:bg-night-deep/85"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Body */}
            <div className="max-h-[62vh] overflow-y-auto p-5 sm:p-7">
              <p className="text-sm leading-relaxed text-ink-soft dark:text-night-muted sm:text-base">
                {course.description}
              </p>

              {/* Who it's for */}
              <div className="mt-5 flex items-center gap-2.5 rounded-2xl border border-brand-800/10 bg-brand-800/[0.04] px-4 py-3 dark:border-white/10 dark:bg-white/[0.04]">
                <UserCheck className="h-5 w-5 shrink-0 text-brand-700 dark:text-gold-300" aria-hidden="true" />
                <p className="text-sm text-ink dark:text-sand-100">
                  <span className="font-bold">{d.whoFor}: </span>
                  {course.whoFor}
                </p>
              </div>

              {/* What you'll learn */}
              <h4 className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-gold-700 dark:text-gold-300">
                {d.whatYouLearn}
              </h4>
              <ul className="mt-3 space-y-2.5">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink dark:text-sand-100">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-gold-300" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>

              {/* Lesson format */}
              <h4 className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-gold-700 dark:text-gold-300">
                {d.lessonFormatTitle}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {chips.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-800/12 bg-white/60 px-3 py-1.5 text-xs font-semibold text-ink dark:border-white/12 dark:bg-white/[0.05] dark:text-sand-100"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-700 dark:text-gold-300" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
              <p className="mt-3 flex items-center gap-2 text-sm text-ink-soft dark:text-night-muted">
                <Hourglass className="h-4 w-4 shrink-0 text-brand-600 dark:text-gold-300" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-ink dark:text-sand-100">{d.timeToComplete}: </span>
                  {course.duration}
                </span>
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <MagneticButton
                  href={whatsappLink(
                    `Assalamu Alaikum, I want to claim the free trial for the ${course.title} course.`
                  )}
                  external
                  className="btn-gold flex-1 justify-center text-sm"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {d.claimFreeTrial}
                </MagneticButton>
                <button
                  type="button"
                  onClick={() => onEnroll(course)}
                  className="glass inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-brand-800 transition-colors hover:border-gold-400/60 dark:text-gold-300"
                >
                  {d.bookInForm}
                </button>
              </div>
              <p className="mt-3 text-center text-xs text-ink-soft dark:text-night-muted">
                {course.lessonFormat}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
