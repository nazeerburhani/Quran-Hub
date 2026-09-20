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
import Button from "@/components/ui/Button";

function LogoMark() {
  return (
    <span
      aria-hidden="true"
      className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white shadow-glow"
    >
      <Image src="/logo.jpg" alt="" width={40} height={40} className="h-10 w-10 object-cover" priority />
    </span>
  );
}

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-white/80 shadow-card backdrop-blur-xl dark:bg-navy-950/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="#top" className="flex items-center gap-2.5" aria-label={`${SITE.name} — home`}>
          <LogoMark />
          <span className="leading-tight">
            <span className="block text-[15px] font-bold tracking-tight text-slate-900 dark:text-white sm:text-base">
              {SITE.name}
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-gold-dark dark:text-gold-light sm:block">
              Online Quran Academy
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-gold/10 hover:text-gold-dark dark:text-slate-200 dark:hover:text-gold-light"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href="#trial" size="sm">
              {d.bookTrial}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 dark:text-slate-200 lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <nav
          aria-label="Mobile"
          className="border-t border-white/10 bg-white/95 px-4 pb-6 pt-3 backdrop-blur-xl dark:bg-navy-950/95 lg:hidden"
        >
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[15px] font-medium text-slate-800 transition-colors hover:bg-gold/10 dark:text-slate-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3 px-1">
            <div className="sm:hidden">
              <LanguageSwitcher />
            </div>
            <Button href="#trial" size="sm" className="md:hidden" onClick={() => setOpen(false)}>
              {d.bookTrial}
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
