"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
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
    if (saved === "en") {
      setLocaleState(saved);
    } else if (saved === "ar" || saved === "ur") {
      // Arabic and Urdu options removed — fall back to English
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
