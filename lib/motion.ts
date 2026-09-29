import type { Variants } from "framer-motion";

/**
 * Shared motion tokens for QuranHub — Duolingo-grade motion system
 * (see design-research/phase-2-ux-animation-research.md, pattern 14).
 *
 * - Micro-interactions: 150–200ms
 * - Standard reveals: 200–350ms
 * - Complex sequences: 400–600ms
 * - Entrances: fade + 12–24px upward translation
 * - Playful overshoot: cubic-bezier(0.34, 1.56, 0.64, 1)
 *
 * All Framer Motion usage should go through these tokens so motion feels
 * designed, not random. `prefers-reduced-motion` is handled at the call
 * site (useReducedMotion) and globally in globals.css.
 */

/** Bouncy overshoot for buttons, badges, success states (Duolingo spec). */
export const EASE_SPRINGY: [number, number, number, number] = [0.34, 1.3, 0.64, 1];

/** Calm ease for scroll-triggered reveals. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Single fade-and-rise reveal (use with whileInView). */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

/** Parent for staggered children — pair with `staggerChild`. */
export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/** Child of `staggerParent`. */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

/** Gentle scale-in for icons, badges, avatars. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: EASE_SPRINGY },
  },
};

/** Duolingo success pop: 1.0 → 1.15 → 1.0. */
export const successPop: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: [1, 1.15, 1],
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/** Viewport defaults: reveal once, slightly before the element is centered. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
