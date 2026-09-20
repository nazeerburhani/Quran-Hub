"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import { TEACHERS, type Teacher } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

/** Elegant monogram avatar — no photos needed. */
function Monogram({ name, female }: { name: string; female: boolean }) {
  const initials = name
    .replace(/^(Qari|Sheikh|Ustadha)\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <span
      aria-hidden="true"
      className={`grid h-16 w-16 shrink-0 place-items-center rounded-full text-xl font-bold text-white shadow-card ${
        female
          ? "bg-gradient-to-br from-gold-dark via-gold to-gold-light text-navy-950"
          : "bg-gradient-to-br from-emeralddeep via-emerald-600 to-teal-500"
      }`}
    >
      {initials}
    </span>
  );
}

function TeacherCard({ teacher }: { teacher: Teacher }) {
  const female = teacher.gender === "Female";
  return (
    <article className="glass flex h-full w-[280px] shrink-0 snap-start flex-col rounded-3xl p-6 shadow-card sm:w-[320px]">
      <div className="flex items-center gap-4">
        <Monogram name={teacher.name} female={female} />
        <div>
          <h3 className="text-base font-bold leading-tight text-slate-900 dark:text-white">
            {teacher.name}
          </h3>
          <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {teacher.country}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-gold-dark dark:text-gold-light">
        {teacher.qualification}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {teacher.languages.map((l) => (
          <span
            key={l}
            className="rounded-full bg-navy-950/5 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300"
          >
            {l}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="text-slate-600 dark:text-slate-300">
          {teacher.experienceYears} yrs experience
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-slate-900 dark:text-white">
          <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
          {teacher.rating.toFixed(1)}
          <span className="sr-only">out of 5</span>
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {teacher.subjects.map((s) => (
          <span key={s} className="text-xs text-slate-500 dark:text-slate-400">
            {s}
            <span aria-hidden="true"> · </span>
          </span>
        ))}
      </div>
      <Button href="#trial" size="sm" variant="secondary" className="mt-5 w-full">
        Book a class
      </Button>
    </article>
  );
}

export default function TeacherCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="teachers" aria-labelledby="teachers-heading" className="relative scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="teachers-heading"
            align="start"
            eyebrow="Our Tutors"
            title="Certified teachers, worldwide"
            description="Hand-picked Qaris, Qariahs and Huffaz — background-checked, trained in online teaching, and rated by students after every class."
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll teachers backward"
              className="glass grid h-11 w-11 place-items-center rounded-full text-slate-700 transition-colors hover:border-gold/50 dark:text-slate-200"
            >
              <ChevronLeft className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll teachers forward"
              className="glass grid h-11 w-11 place-items-center rounded-full text-slate-700 transition-colors hover:border-gold/50 dark:text-slate-200"
            >
              <ChevronRight className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <Reveal className="pb-4">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
        >
          {TEACHERS.map((t) => (
            <TeacherCard key={t.id} teacher={t} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
