"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

function Monogram({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <span
      aria-hidden="true"
      className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-emeralddeep to-emerald-600 text-sm font-bold text-white"
    >
      {initials}
    </span>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      6000
    );
    return () => window.clearInterval(id);
  }, [paused]);

  const t = TESTIMONIALS[index];
  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section aria-labelledby="testimonials-heading" className="relative overflow-hidden">
      <div className="geo-pattern-soft absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="Loved by families worldwide"
          description="Unedited words from parents and students across the USA, UK, Canada, Australia and the UAE."
        />

        <Reveal className="mt-12">
          <div
            className="glass relative min-h-[300px] rounded-3xl p-8 shadow-card sm:p-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <Quote className="absolute end-8 top-8 h-10 w-10 text-gold/25" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex gap-1" aria-label={`Rated ${t.rating} out of 5`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 text-lg leading-relaxed text-slate-800 dark:text-slate-100 sm:text-xl">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Monogram name={t.name} />
                  <span>
                    <span className="block text-sm font-bold text-slate-900 dark:text-white">
                      {t.name}
                    </span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">
                      Parent · {t.country}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-gold" : "w-2.5 bg-slate-300 hover:bg-gold/60 dark:bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="glass grid h-10 w-10 place-items-center rounded-full text-slate-600 transition-colors hover:border-gold/50 dark:text-slate-300"
                >
                  <ChevronLeft className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="glass grid h-10 w-10 place-items-center rounded-full text-slate-600 transition-colors hover:border-gold/50 dark:text-slate-300"
                >
                  <ChevronRight className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
