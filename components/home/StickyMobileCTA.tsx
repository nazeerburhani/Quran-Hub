"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

/**
 * Sticky mobile bottom CTA bar — appears after scrolling past the hero.
 * WhatsApp green is reserved for the WhatsApp action only.
 */
export default function StickyMobileCTA() {
  const { locale } = useLocale();
  const d = dict[locale];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show after ~85% of one viewport scrolled (past the hero)
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-800/10 bg-white/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl dark:border-white/10 dark:bg-night-deep/90 md:hidden"
        >
          <div className="grid grid-cols-2 gap-2.5 px-4 py-3">
            <a
              href="#trial"
              className="btn-gold min-h-[48px] px-4 py-3 text-sm"
            >
              {d.stickyTrial}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-waDark px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-wa"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {d.stickyWhatsapp}
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
