"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  HelpCircle,
  Home,
  Menu,
  MessageCircle,
  Tag,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "./LanguageSwitcher";
import { dict } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

/** Logo in a crisp white tile — readable on any background. */
function LogoMark() {
  return (
    <span
      aria-hidden="true"
      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white shadow-[0_2px_10px_rgba(18,51,50,0.16)] ring-1 ring-brand-900/10"
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={36}
        height={36}
        className="h-8 w-8 object-contain"
        priority
      />
    </span>
  );
}

/** Wordmark lockup: serif name + always-visible tagline. */
function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="leading-none">
      <span
        className={`block font-display font-bold tracking-tight text-ink dark:text-sand-100 ${
          compact ? "text-base" : "text-[19px]"
        }`}
      >
        {SITE.name}
      </span>
      <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.24em] text-gold-600 dark:text-gold-300">
        Online Quran Academy
      </span>
    </span>
  );
}

/**
 * Sticky glass header. Compacts on scroll; logo sits in a white tile so it
 * stays crisp over the hero, and the menu button is a solid brand tile.
 */
export default function Header() {
  const { locale } = useLocale();
  const d = dict[locale];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav: { label: string; href: string; Icon: LucideIcon }[] = [
    { label: d.navHome, href: "#top", Icon: Home },
    { label: d.navCourses, href: "#courses", Icon: BookOpen },
    { label: d.navTeachers, href: "#teachers", Icon: Users },
    { label: d.navPricing, href: "#pricing", Icon: Tag },
    { label: d.navFaq, href: "#faq", Icon: HelpCircle },
  ];

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  // Compact the bar once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Nav links get an animated gold underline on hover for a premium feel.
  const navLinkCls =
    "relative text-ink-soft hover:text-brand-800 dark:text-night-muted dark:hover:text-gold-300 after:absolute after:-bottom-0.5 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-gold-300 after:to-gold-500 after:transition-all after:duration-300 hover:after:w-3/4";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-gold-500/25 bg-[#FBF8F1]/95 shadow-[0_10px_36px_rgba(18,51,50,0.14)] dark:border-white/10 dark:bg-night/90"
          : "border-gold-500/15 bg-[#FBF8F1]/80 shadow-[0_8px_28px_rgba(18,51,50,0.08)] dark:border-white/5 dark:bg-night/70"
      }`}
    >
      {/* Gold hairline glow along the bottom edge */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/80 to-transparent"
      />
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "h-[60px]" : "h-[68px]"
        }`}
      >
        <Link
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label={`${SITE.name} — home`}
        >
          <span className="transition-transform duration-300 group-hover:scale-105">
            <LogoMark />
          </span>
          <Wordmark />
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-800 text-sand-100 shadow-[0_4px_14px_rgba(22,68,73,0.35)] transition-all hover:bg-brand-900 active:scale-95 dark:bg-gold-400 dark:text-night dark:shadow-[0_4px_14px_rgba(217,164,65,0.35)] lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu — premium full-screen overlay.
          Rendered in a portal because the header's backdrop-blur would
          otherwise trap `fixed` positioning inside the header box. */}
      {open
        ? createPortal(
            <div
              className="fixed inset-0 z-[70] lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
            >
          <div
            aria-hidden="true"
            className="animate-menu-fade absolute inset-0 bg-sand-50/[0.98] backdrop-blur-2xl dark:bg-night-deep/[0.98]"
          />
          <div className="relative flex h-full flex-col">
            {/* Top bar mirrors the header */}
            <div className="flex h-[60px] shrink-0 items-center justify-between border-b border-gold-500/25 px-4 sm:px-6">
              <Link
                href="#top"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5"
                aria-label={`${SITE.name} — home`}
              >
                <LogoMark />
                <Wordmark compact />
              </Link>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-800 text-sand-100 shadow-[0_4px_14px_rgba(22,68,73,0.35)] transition-transform hover:scale-105 active:scale-95 dark:bg-gold-400 dark:text-night"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Nav links */}
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
              <ul className="mx-auto w-full max-w-md space-y-1">
                {nav.map((item, i) => (
                  <li
                    key={item.href}
                    className="animate-menu-item"
                    style={{ animationDelay: `${60 + i * 50}ms` }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-2.5 transition-all duration-200 hover:border-gold-500/30 hover:bg-white/70 hover:shadow-[0_8px_24px_rgba(18,51,50,0.08)] dark:hover:border-gold-400/20 dark:hover:bg-white/5"
                    >
                      <span className="w-6 shrink-0 font-display text-[13px] font-semibold text-gold-600 dark:text-gold-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-800/10 text-brand-800 transition-colors duration-200 group-hover:bg-brand-800 group-hover:text-sand-100 dark:bg-gold-400/10 dark:text-gold-300 dark:group-hover:bg-gold-400 dark:group-hover:text-night">
                        <item.Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="flex-1 text-lg font-bold tracking-tight text-ink dark:text-sand-100">
                        {item.label}
                      </span>
                      <ChevronRight
                        className="h-5 w-5 shrink-0 text-ink-soft/40 transition-all duration-200 group-hover:translate-x-1 group-hover:text-gold-600 dark:text-sand-100/40 dark:group-hover:text-gold-300"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Trial CTA card */}
              <div
                className="animate-menu-item relative mx-auto mt-4 w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-900 to-night-deep p-5 text-sand-100 shadow-[0_20px_50px_rgba(10,31,30,0.35)]"
                style={{ animationDelay: "340ms" }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-400/20 blur-2xl"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-gold-300/10 blur-2xl"
                />
                <p className="relative text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">
                  {d.guaranteeTrial}
                </p>
                <p className="relative mt-2 font-display text-xl font-bold leading-snug">
                  {d.heroCtaPrimary}
                </p>
                <p className="relative mt-2 flex items-center gap-2 text-sm text-sand-100/75">
                  <Check className="h-4 w-4 text-gold-300" aria-hidden="true" />
                  {d.guaranteeNoCard}
                </p>
                <a
                  href="#trial"
                  onClick={() => setOpen(false)}
                  className="btn-gold relative mt-4 w-full !min-h-[48px] text-[15px]"
                >
                  {d.headerCta}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-2.5 flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[13px] font-semibold text-sand-100/90 transition-colors hover:border-wa/60 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-wa" aria-hidden="true" />
                  WhatsApp: {SITE.whatsappDisplay}
                </a>
              </div>
            </nav>

            {/* Bottom bar */}
            <div className="shrink-0 border-t border-gold-500/25 px-4 py-3 sm:px-6">
              <div className="mx-auto flex w-full max-w-md items-center justify-between gap-3">
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-brand-800/15 bg-brand-800/5 px-3 py-1.5 text-xs font-semibold text-brand-700 dark:border-white/15 dark:bg-white/5 dark:text-gold-300"
                  role="status"
                >
                  <span className="live-dot" aria-hidden="true" />
                  {d.liveNow}
                </span>
                <ThemeToggle />
              </div>
            </div>
          </div>
            </div>,
            document.body
          )
        : null}
    </header>
  );
}
