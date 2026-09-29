"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { BookOpenCheck, Clock3, Globe2, Users } from "lucide-react";
import { STATS } from "@/lib/site";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";

/** Animated number that counts up when scrolled into view; strings render as-is. */
function Counter({
  value,
  suffix,
  decimals = 0,
  start,
}: {
  value: number | string;
  suffix: string;
  decimals?: number;
  start: boolean;
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (typeof value !== "number") return;
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

  if (typeof value !== "number") {
    return (
      <span>
        {value}
        {suffix}
      </span>
    );
  }
  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

const ICONS = [Users, BookOpenCheck, Clock3, Globe2];

export default function StatBand() {
  const { locale } = useLocale();
  const d = dict[locale];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const labels = [d.statTutors, d.statLessons, d.stat247, d.statCountries];

  return (
    <section
      aria-label="QuranHub in numbers"
      className="relative overflow-hidden bg-night-deep"
    >
      {/* gold glow + fine pattern */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[46rem] -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(217,164,65,0.9) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* hairline gold rules top + bottom */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
        aria-hidden="true"
      />

      <div
        ref={ref}
        className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:py-16"
      >
        {STATS.map((s, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div
              key={s.label}
              className="relative flex flex-col items-center px-4 text-center"
            >
              {/* vertical divider */}
              {i > 0 ? (
                <span
                  className="absolute inset-y-2 left-0 hidden w-px bg-gradient-to-b from-transparent via-gold-400/25 to-transparent lg:block"
                  aria-hidden="true"
                />
              ) : null}
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gold-400/25 bg-gold-400/10 shadow-[0_0_24px_rgba(217,164,65,0.15)]">
                <Icon className="h-5 w-5 text-gold-300" aria-hidden="true" />
              </span>
              <p className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="bg-gradient-to-b from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(217,164,65,0.25)]">
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                    start={inView}
                  />
                </span>
              </p>
              <p className="mt-2 max-w-[12rem] text-[13px] font-semibold uppercase tracking-[0.14em] text-sand-100/70">
                {labels[i]}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
