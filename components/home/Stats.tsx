"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value.toLocaleString("en-US"));
      return;
    }
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased).toLocaleString("en-US"));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Academy in numbers" className="relative overflow-hidden">
      <div className="geo-pattern-soft absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass rounded-3xl px-6 py-8 text-center shadow-card">
                <dd className="text-gold-gradient text-4xl font-extrabold tabular-nums sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                  {s.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
