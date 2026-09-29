"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Clock3, Users } from "lucide-react";
import { COURSES, type Course, type CourseCategory } from "@/lib/site";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import EnrollModal from "./EnrollModal";

/** Course id → dedicated SEO landing page (internal linking web). */
const COURSE_PAGE_LINKS: Record<string, string> = {
  "quran-for-kids": "/courses/online-quran-classes-for-kids",
  "quran-for-sisters": "/courses/online-quran-classes-for-sisters",
  "noorani-qaida": "/courses/noorani-qaida-online",
  "quran-reading-tajweed": "/courses/online-tajweed-course",
  hifz: "/courses/online-hifz-program",
  "quran-for-adults": "/courses/learn-quran-online-for-adults",
  "ijazah-program": "/courses/online-ijazah-course",
};

const FILTERS: { id: "all" | CourseCategory; labelKey: "filterAll" | "filterKids" | "filterAdults" | "filterMemorization" | "filterLanguage" }[] = [
  { id: "all", labelKey: "filterAll" },
  { id: "kids", labelKey: "filterKids" },
  { id: "adults", labelKey: "filterAdults" },
  { id: "memorization", labelKey: "filterMemorization" },
  { id: "language", labelKey: "filterLanguage" },
];

function CourseCard({
  course,
  index,
  onEnroll,
}: {
  course: Course;
  index: number;
  onEnroll: (c: Course) => void;
}) {
  const { locale } = useLocale();
  const d = dict[locale];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-brand-800/10 bg-white shadow-card-light transition-all duration-300 hover:-translate-y-2 hover:border-gold-400/60 hover:shadow-[0_28px_60px_-16px_rgba(212,175,55,0.35)] dark:border-white/10 dark:bg-night-soft dark:shadow-card"
    >
      {/* Gold top hairline that sweeps in on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />
      {/* Photo + glyph art */}
      <div className="photo-duotone relative aspect-[16/10] shrink-0 overflow-hidden">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-night-deep/70 via-night-deep/10 to-transparent"
        />
        <span
          aria-hidden="true"
          className="absolute end-4 top-4 grid h-14 w-14 place-items-center rounded-2xl border border-gold-300/40 bg-night-deep/70 font-arabic text-3xl text-gold-300 shadow-lg backdrop-blur-md"
        >
          {course.glyph}
        </span>
        <span className="absolute bottom-3 start-4 rounded-full bg-gold-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-950 shadow-md">
          {course.level}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink dark:text-sand-100">
          {course.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-night-muted">
          {course.description}
        </p>

        {/* Meta chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-800/10 bg-brand-800/[0.04] px-3 py-1.5 text-xs font-semibold text-ink-soft dark:border-white/10 dark:bg-white/[0.05] dark:text-night-muted">
            <Users className="h-3.5 w-3.5 text-brand-600 dark:text-gold-300" aria-hidden="true" />
            {course.whoFor}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-800/10 bg-brand-800/[0.04] px-3 py-1.5 text-xs font-semibold text-ink-soft dark:border-white/10 dark:bg-white/[0.05] dark:text-night-muted">
            <Clock3 className="h-3.5 w-3.5 text-brand-600 dark:text-gold-300" aria-hidden="true" />
            {course.duration}
          </span>
        </div>
        <p className="mt-3 flex items-start gap-2 text-[13px] leading-relaxed text-ink-soft dark:text-night-muted">
          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-600 dark:text-gold-300" aria-hidden="true" />
          {course.outcome}
        </p>

        {/* CTAs */}
        <div className="mt-5 border-t border-brand-800/10 pt-5 dark:border-white/10">
          <button
            type="button"
            onClick={() => onEnroll(course)}
            className="btn-gold inline-flex w-full items-center justify-center gap-2 text-sm"
            aria-label={`${d.enroll} — ${course.title}`}
          >
            {d.enroll}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </button>
          {COURSE_PAGE_LINKS[course.id] ? (
            <Link
              href={COURSE_PAGE_LINKS[course.id]}
              className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center gap-1 text-sm font-semibold text-ink-soft underline decoration-gold-400/60 decoration-2 underline-offset-4 transition-colors hover:text-brand-700 dark:text-night-muted dark:hover:text-gold-300"
            >
              Course details
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function Courses() {
  const { locale } = useLocale();
  const d = dict[locale];
  const [filter, setFilter] = useState<"all" | CourseCategory>("all");
  const [selected, setSelected] = useState<Course | null>(null);

  const visible =
    filter === "all"
      ? COURSES
      : COURSES.filter((c) => c.categories.includes(filter));

  return (
    <section id="courses" aria-labelledby="courses-heading" className="relative scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="courses-heading"
          eyebrow={d.coursesEyebrow}
          title={d.coursesTitle}
          description={d.coursesDesc}
        />

        {/* Filter chips */}
        <Reveal className="mt-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={active}
                className={`min-h-[44px] rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-brand-800 text-white shadow-card dark:bg-gold-400 dark:text-brand-950"
                    : "glass text-ink-soft hover:border-gold-400/60 hover:text-ink dark:text-night-muted dark:hover:text-sand-100"
                }`}
              >
                {d[f.labelKey]}
              </button>
            );
          })}
        </Reveal>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-live="polite"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((course, i) => (
              <CourseCard
                key={course.id}
                course={course}
                index={i}
                onEnroll={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <EnrollModal course={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
