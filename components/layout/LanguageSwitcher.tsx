"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Check, Globe } from "lucide-react";
import { LOCALES, type Locale } from "@/lib/i18n";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({ locale: "en", setLocale: () => {} });

export function useLocale() {
  return useContext(LocaleContext);
}

/** Provides the current locale + persists it, switching <html> lang/dir. */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("naq-locale");
    if (saved === "ar" || saved === "en") {
      setLocaleState(saved);
    } else if (saved === "ur") {
      // Urdu option removed — fall back to English
      setLocaleState("en");
    }
    setReady(true);
  }, []);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);

  useEffect(() => {
    if (!ready) return;
    const entry = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];
    document.documentElement.lang = locale;
    document.documentElement.dir = entry.dir;
    document.body.classList.toggle("font-arabic", locale !== "en");
    window.localStorage.setItem("naq-locale", locale);
  }, [locale, ready]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

/** EN / العربية switcher. */
export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-gold-400/60 dark:text-slate-200"
      >
        <Globe className="h-4 w-4 text-gold-500" aria-hidden="true" />
        <span>{current.label}</span>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label="Languages"
          className="glass absolute end-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-2xl p-1.5 shadow-card"
        >
          {LOCALES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === locale}>
              <button
                type="button"
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-gold-400/10 ${
                  l.code === locale
                    ? "font-semibold text-gold-700 dark:text-gold-300"
                    : "text-slate-700 dark:text-slate-200"
                }`}
              >
                <span>{l.label}</span>
                {l.code === locale ? (
                  <Check className="h-4 w-4" aria-hidden="true" />
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
