"use client";

import { useRef, useState, type MouseEvent } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { COURSES, type Course } from "@/lib/site";
import EnrollModal from "./EnrollModal";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

function TiltCard({
  course,
  index,
  onEnroll,
}: {
  course: Course;
  index: number;
  onEnroll: (c: Course) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 10, ry: px * 10 });
  };

  const Icon = course.icon;

  return (
    <Reveal delay={(index % 4) * 0.07} className="h-full">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
        style={{
          transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: "transform 0.25s ease-out",
        }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/60 p-6 shadow-card backdrop-blur-xl transition-shadow duration-300 hover:shadow-glow dark:bg-white/[0.04]"
      >
        {/* glowing border on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,162,39,0.35), transparent 40%, transparent 60%, rgba(16,185,129,0.25))",
            padding: "1px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emeralddeep to-emerald-600 shadow-glow transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-gold-light" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
          {course.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {course.description}
        </p>
        <p className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="rounded-full bg-gold/10 px-2.5 py-1 text-gold-dark dark:text-gold-light">
            {course.level}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {course.duration}
          </span>
        </p>
        <button
          type="button"
          onClick={() => onEnroll(course)}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-semibold text-gold-dark transition-all duration-300 hover:bg-gradient-to-r hover:from-gold-dark hover:via-gold hover:to-gold-light hover:text-navy-950 hover:shadow-glow dark:text-gold-light"
        >
          Enroll Now
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
        </button>
      </div>
    </Reveal>
  );
}

export default function CourseShowcase() {
  const [selected, setSelected] = useState<Course | null>(null);

  return (
    <section id="courses" aria-labelledby="courses-heading" className="relative scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          id="courses-heading"
          eyebrow="Our Courses"
          title="Twelve paths, one destination"
          description="From your very first letter to Ijazah certification — every course is taught live, one-on-one, by a certified tutor matched to your level and schedule."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {COURSES.map((c, i) => (
            <TiltCard key={c.id} course={c} index={i} onEnroll={setSelected} />
          ))}
        </div>
      </div>
      <EnrollModal course={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
