"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Brain, Clock3, Languages, LayoutGrid, Smile, Users, type LucideIcon } from "lucide-react";
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

const FILTERS: { id: "all" | CourseCategory; labelKey: "filterAll" | "filterKids" | "filterAdults" | "filterMemorization" | "filterLanguage"; icon: LucideIcon }[] = [
  { id: "all", labelKey: "filterAll", icon: LayoutGrid },
  { id: "kids", labelKey: "filterKids", icon: Smile },
  { id: "adults", labelKey: "filterAdults", icon: Users },
  { id: "memorization", labelKey: "filterMemorization", icon: Brain },
  { id: "language", labelKey: "filterLanguage", icon: Languages },
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
      className="group relative flex flex-row items-center gap-2.5 overflow-hidden rounded-2xl border border-brand-800/10 bg-white p-2 shadow-card-light transition-all duration-300 hover:-translate-y-2 hover:border-gold-400/60 hover:shadow-[0_28px_60px_-16px_rgba(212,175,55,0.35)] dark:border-white/10 dark:bg-night-soft dark:shadow-card sm:flex-col sm:items-stretch sm:gap-0 sm:rounded-[1.75rem] sm:p-0"
    >
      {/* Gold top hairline that sweeps in on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />
      {/* Photo + glyph art — left thumbnail on mobile, top banner on desktop */}
      <div className="photo-duotone relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl sm:h-auto sm:w-auto sm:rounded-none sm:aspect-[16/10]">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(max-width: 639px) 112px, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-night-deep/85 via-night-deep/25 to-night-deep/5"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gold-400/0 mix-blend-overlay transition-colors duration-700 group-hover:bg-gold-400/15"
        />
        <span
          aria-hidden="true"
          className="absolute end-1.5 top-1.5 grid h-7 w-7 place-items-center rounded-lg border border-gold-300/40 bg-night-deep/70 font-arabic text-base text-gold-300 shadow-lg backdrop-blur-md sm:end-4 sm:top-4 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl"
        >
          {course.glyph}
        </span>
        <span className="absolute bottom-2.5 start-3 hidden rounded-full bg-gold-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-950 shadow-md sm:bottom-3 sm:start-4 sm:inline-flex">
          {course.level}
        </span>
      </div>

      {/* Body — compact row on mobile, full card on desktop */}
      <div className="flex min-w-0 flex-1 flex-col justify-center px-1 py-1.5 sm:p-6">
        <h3 className="font-display text-sm font-semibold leading-snug tracking-tight text-ink dark:text-sand-100 sm:text-xl">
          {course.title}
        </h3>
        <p className="mt-0.5 truncate text-[10px] text-ink-soft dark:text-night-muted sm:hidden">
          {course.level} · {course.whoFor} · {course.duration}
        </p>
        <p className="mt-1.5 hidden text-[13px] leading-relaxed text-ink-soft dark:text-night-muted sm:mt-2 sm:block sm:text-sm">
          {course.description}
        </p>

        {/* Meta chips — desktop only */}
        <div className="mt-3 hidden flex-wrap gap-2 sm:mt-4 sm:flex">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-800/10 bg-brand-800/[0.04] px-2.5 py-1 text-xs font-semibold text-ink-soft dark:border-white/10 dark:bg-white/[0.05] dark:text-night-muted sm:px-3 sm:py-1.5">
            <Users className="h-3.5 w-3.5 text-brand-600 dark:text-gold-300" aria-hidden="true" />
            {course.whoFor}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-800/10 bg-brand-800/[0.04] px-2.5 py-1 text-xs font-semibold text-ink-soft dark:border-white/10 dark:bg-white/[0.05] dark:text-night-muted sm:px-3 sm:py-1.5">
            <Clock3 className="h-3.5 w-3.5 text-brand-600 dark:text-gold-300" aria-hidden="true" />
            {course.duration}
          </span>
        </div>
        <p className="mt-2.5 hidden items-start gap-2 text-xs leading-relaxed text-ink-soft dark:text-night-muted sm:mt-3 sm:flex sm:text-[13px]">
          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-600 dark:text-gold-300" aria-hidden="true" />
          {course.outcome}
        </p>

        {/* CTAs — compact inline row on mobile, stacked on desktop */}
        <div className="mt-1.5 flex items-center gap-2 sm:mt-5 sm:block sm:border-t sm:border-brand-800/10 sm:pt-5 sm:dark:border-white/10">
          <button
            type="button"
            onClick={() => onEnroll(course)}
            className="btn-gold inline-flex min-h-0 shrink-0 items-center justify-center gap-1 px-3 py-1.5 text-[11px] sm:w-full sm:gap-2 sm:px-7 sm:py-3.5 sm:text-sm"
            aria-label={`${d.enroll} — ${course.title}`}
          >
            {d.enroll}
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180 sm:h-4 sm:w-4" aria-hidden="true" />
          </button>
          {COURSE_PAGE_LINKS[course.id] ? (
            <Link
              href={COURSE_PAGE_LINKS[course.id]}
              className="shrink-0 text-[11px] font-semibold text-ink-soft underline decoration-gold-400/60 decoration-2 underline-offset-4 transition-colors hover:text-brand-700 dark:text-night-muted dark:hover:text-gold-300 sm:mt-3 sm:inline-flex sm:min-h-[44px] sm:w-full sm:items-center sm:justify-center sm:gap-1 sm:text-sm"
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
    <section id="courses" aria-labelledby="courses-heading" className="relative scroll-mt-20 overflow-hidden">
      {/* Premium ambient backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-[46rem] max-w-none -translate-x-1/2 rounded-full bg-gold-400/15 blur-3xl dark:bg-gold-400/[0.08]" />
        <div className="absolute -bottom-32 -start-24 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl dark:bg-brand-400/[0.06]" />
        <div className="absolute -end-24 top-1/3 h-80 w-80 rounded-full bg-emerald-500/[0.07] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24">
        <SectionHeading
          id="courses-heading"
          eyebrow={d.coursesEyebrow}
          title={d.coursesTitle}
          description={d.coursesDesc}
        />

        {/* Premium segmented filter bar */}
        <Reveal className="mt-6 flex justify-center sm:mt-8">
          <div
            role="tablist"
            aria-label="Filter courses"
            className="glass no-scrollbar flex max-w-full items-center gap-1 overflow-x-auto rounded-full p-1.5 shadow-card-light dark:shadow-card"
          >
            {FILTERS.map((f) => {
              const active = filter === f.id;
              const Icon = f.icon;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.id)}
                  className={`relative flex min-h-[38px] shrink-0 items-center gap-2 rounded-full px-3.5 text-[13px] font-semibold transition-colors duration-300 sm:min-h-[44px] sm:px-5 sm:text-sm ${
                    active
                      ? "text-white dark:text-brand-950"
                      : "text-ink-soft hover:text-ink dark:text-night-muted dark:hover:text-sand-100"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="course-filter-active"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-800 to-brand-600 shadow-card dark:from-gold-300 dark:to-gold-500"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  <Icon className="relative z-10 h-4 w-4" aria-hidden="true" />
                  <span className="relative z-10 whitespace-nowrap">{d[f.labelKey]}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div
          layout
          className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
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
