"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/** Dark / light mode toggle. */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="glass inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-colors hover:border-gold/50 dark:text-slate-200"
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px] text-gold" aria-hidden="true" />
      ) : (
        <Moon className="h-[18px] w-[18px] text-navy" aria-hidden="true" />
      )}
    </button>
  );
}
