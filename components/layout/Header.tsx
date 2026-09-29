"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLocale } from "./LanguageSwitcher";
import { dict } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";


function LogoMark() {
  return (
    <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center">
      <Image
        src="/images/logo.png"
        alt=""
        width={44}
        height={44}
        className="h-10 w-10 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
        priority
      />
    </span>
  );
}

/**
 * Sticky glass header. Over the dark hero it starts transparent with light
 * text; once scrolled it gains a frosted theme-aware background.
 */
export default function Header() {
  const { locale } = useLocale();
  const d = dict[locale];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: d.navHome, href: "#top" },
    { label: d.navCourses, href: "#courses" },
    { label: d.navTeachers, href: "#teachers" },
    { label: d.navPricing, href: "#pricing" },
    { label: d.navFaq, href: "#faq" },
  ];

  const overHero = !scrolled && !open;
  const navLinkCls = overHero
    ? "text-sand-100/85 hover:bg-white/10 hover:text-white"
    : "text-ink-soft hover:bg-brand-800/5 hover:text-brand-800 dark:text-night-muted dark:hover:bg-white/10 dark:hover:text-gold-300";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-brand-800/10 bg-sand-50/85 shadow-card-light backdrop-blur-xl dark:border-white/10 dark:bg-night/85 dark:shadow-card"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="#top" className="flex items-center gap-2.5" aria-label={`${SITE.name} — home`}>
          <LogoMark />
          <span className="leading-tight">
            <span
              className={`block text-[15px] font-bold tracking-tight sm:text-base ${
                overHero ? "text-white" : "text-ink dark:text-sand-100"
              }`}
            >
              {SITE.name}
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-300 sm:block">
              Online Quran Academy
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${navLinkCls}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Live indicator */}
          <span
            className={`hidden items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold xl:inline-flex ${
              overHero
                ? "border-white/20 bg-white/10 text-sand-100 backdrop-blur-md"
                : "border-brand-800/15 bg-brand-800/5 text-brand-700 dark:border-white/15 dark:bg-white/5 dark:text-gold-300"
            }`}
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
            className="btn-gold hidden !min-h-[44px] px-5 py-2.5 text-sm md:inline-flex"
          >
            {d.headerCta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
              overHero
                ? "border-white/20 bg-white/10 text-white backdrop-blur-md"
                : "glass text-ink dark:text-sand-100"
            }`}
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
          className="border-t border-brand-800/10 bg-sand-50/95 px-4 pb-6 pt-3 backdrop-blur-xl dark:border-white/10 dark:bg-night/95 lg:hidden"
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
