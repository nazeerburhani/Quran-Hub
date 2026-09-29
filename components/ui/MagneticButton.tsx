"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

/**
 * MagneticButton — primary CTA with cursor-magnetic drift and a light
 * shine sweep on hover. Disabled automatically for users who prefer
 * reduced motion. Render as <a> with `href`, otherwise <button>.
 *
 * Pair with the .btn-gold / .btn-teal / .btn-glass utility classes.
 */
interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  /** open link in a new tab (for WhatsApp etc.) */
  external?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit";
  /** magnetic pull strength, 0–1 (default 0.18) */
  strength?: number;
}

export default function MagneticButton({
  children,
  href,
  external,
  onClick,
  className = "",
  ariaLabel,
  type = "button",
  strength = 0.18,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.35 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength * 1.4);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const shared = {
    className: `group/btn relative ${className}`,
    style: { x: reduce ? 0 : sx, y: reduce ? 0 : sy },
    onMouseMove: handleMove,
    onMouseLeave: reset,
    onClick,
    "aria-label": ariaLabel,
  };

  const shine = (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      <span className="absolute inset-0 -translate-x-[110%] bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-[110%]" />
    </span>
  );

  if (href) {
    return (
      <motion.a
        {...shared}
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {shine}
      </motion.a>
    );
  }

  return (
    <motion.button {...shared} type={type}>
      {children}
      {shine}
    </motion.button>
  );
}
