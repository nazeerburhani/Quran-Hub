"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost";
type Size = "md" | "lg" | "sm";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  /** open link in a new tab (for WhatsApp etc.) */
  external?: boolean;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  type?: "button" | "submit";
}

const variantCls: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-brand-950 shadow-glow hover:shadow-glow-lg",
  secondary:
    "glass text-ink hover:border-gold-400/60 dark:text-sand-100",
  whatsapp:
    "bg-waDark text-white shadow-[0_0_24px_rgba(37,211,102,0.35)] hover:bg-wa",
  ghost: "text-ink-soft hover:text-brand-700 dark:text-night-muted dark:hover:text-gold-300",
};

const sizeCls: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/**
 * Magnetic button — drifts slightly toward the cursor on hover.
 * Disabled automatically for users who prefer reduced motion.
 */
export default function Button({
  children,
  href,
  external,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const [magnetic, setMagnetic] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMagnetic(!mq.matches);
    const onChange = (e: MediaQueryListEvent) => setMagnetic(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (!magnetic) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.16);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.24);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cls = `inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full font-semibold transition-shadow duration-300 ${variantCls[variant]} ${sizeCls[size]} ${className}`;
  const motionProps = {
    className: cls,
    style: { x: sx, y: sy },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
    "aria-label": ariaLabel,
  };

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button {...motionProps} type={type}>
      {children}
    </motion.button>
  );
}
