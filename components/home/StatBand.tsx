"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { STATS } from "@/lib/site";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";

/** Animated number that counts up when scrolled into view. */
function Counter({
  value,
  suffix,
  decimals = 0,
  start,
}: {
  value: number;
  suffix: string;
  decimals?: number;
  start: boolean;
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!start) return;
    if (reduce) {
      setDisplay(
        decimals > 0
          ? value.toFixed(decimals)
          : Math.round(value).toLocaleString("en-US")
      );
      return;
    }
    const duration = 1800;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = value * eased;
      setDisplay(
        decimals > 0
          ? current.toFixed(decimals)
          : Math.round(current).toLocaleString("en-US")
      );
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value, decimals, reduce]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function StatBand() {
  const { locale } = useLocale();
  const d = dict[locale];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const labels = [d.statTutors, d.statLessons, d.statRating, d.statCountries];

  return (
    <section
      aria-label="QuranHub in numbers"
      className="geo-pattern-dark relative overflow-hidden bg-night-deep"
    >
      {/* soft gold glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        ref={ref}
        className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4"
      >
        {STATS.map((s, i) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-semibold tracking-tight text-gold-300 sm:text-5xl">
              <Counter
                value={s.value}
                suffix={s.suffix}
                decimals={s.decimals ?? 0}
                start={inView}
              />
            </p>
            <p className="mt-2 text-sm font-medium text-sand-100/75">
              {labels[i]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
