"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useLocale } from "./LanguageSwitcher";
import { dict } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";


function LogoMark() {
  return (
    <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center">
      <Image
        src="/images/logo.png"
        alt=""
        width={48}
        height={48}
        className="h-11 w-11 object-contain drop-shadow-[0_2px_8px_rgba(22,68,73,0.28)]"
        priority
      />
    </span>
  );
}

/**
 * Sticky glass header. Always frosted with a light theme-aware background so
 * the dark logo stays clearly readable, including at the very top of the page.
 */
export default function Header() {
  const { locale } = useLocale();
  const d = dict[locale];
  const [open, setOpen] = useState(false);

  const nav = [
    { label: d.navHome, href: "#top" },
    { label: d.navCourses, href: "#courses" },
    { label: d.navTeachers, href: "#teachers" },
    { label: d.navPricing, href: "#pricing" },
    { label: d.navFaq, href: "#faq" },
  ];

  // Header keeps its frosted background from the very top of the page so the
  // dark logo is always clearly readable over the dark hero.
  // Nav links get an animated gold underline on hover for a premium feel.
  const navLinkCls =
    "relative text-ink-soft hover:text-brand-800 dark:text-night-muted dark:hover:text-gold-300 after:absolute after:-bottom-0.5 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-gold-300 after:to-gold-500 after:transition-all after:duration-300 hover:after:w-3/4";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-gold-500/30 bg-[#FBF8F1]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_12px_40px_rgba(18,51,50,0.12)] backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-night/85 dark:shadow-card"
    >
      {/* Gold hairline glow along the bottom edge */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/80 to-transparent"
      />
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="#top" className="flex items-center gap-2.5" aria-label={`${SITE.name} — home`}>
          <LogoMark />
          <span className="leading-tight">
            <span
              className="block text-[17px] font-bold tracking-tight text-ink dark:text-sand-100 sm:text-lg"
            >
              {SITE.name}
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-300 sm:block">
              Online Quran Academy
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-sm font-semibold transition-colors ${navLinkCls}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Live indicator */}
          <span
            className="hidden items-center gap-2 rounded-full border border-brand-800/15 bg-brand-800/5 px-3 py-1.5 text-xs font-semibold text-brand-700 dark:border-white/15 dark:bg-white/5 dark:text-gold-300 xl:inline-flex"
            role="status"
          >
            <span className="live-dot" aria-hidden="true" />
            {d.liveNow}
          </span>

          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
          <a
            href="#trial"
            className="btn-gold hidden !min-h-[42px] gap-1.5 px-5 py-2 text-sm md:inline-flex"
          >
            {d.headerCta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border glass text-ink transition-colors dark:text-sand-100 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <nav
          aria-label="Mobile"
          className="border-t border-gold-500/20 bg-[#FBF8F1]/95 px-4 pb-6 pt-3 backdrop-blur-xl dark:border-white/10 dark:bg-night/95 lg:hidden"
        >
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-brand-800/5 dark:text-sand-100 dark:hover:bg-white/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3 px-1">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-brand-800/15 bg-brand-800/5 px-3 py-1.5 text-xs font-semibold text-brand-700 dark:border-white/15 dark:bg-white/5 dark:text-gold-300"
              role="status"
            >
              <span className="live-dot" aria-hidden="true" />
              {d.liveNow}
            </span>
            <div className="sm:hidden">
              <LanguageSwitcher />
            </div>
            <a
              href="#trial"
              onClick={() => setOpen(false)}
              className="btn-gold !min-h-[44px] px-5 py-2.5 text-sm md:hidden"
            >
              {d.headerCta}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
