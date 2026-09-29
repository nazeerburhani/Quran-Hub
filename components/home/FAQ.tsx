"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/site";
import { useLocale } from "@/components/layout/LanguageSwitcher";
import { dict } from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FAQ() {
  const { locale } = useLocale();
  const d = dict[locale];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="faq-heading"
          eyebrow={d.faqEyebrow}
          title={d.faqTitle}
        />

        <div className="mt-10 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={Math.min(i * 0.04, 0.2)}>
                <div
                  className={`glass overflow-hidden rounded-2xl transition-colors duration-300 ${
                    isOpen ? "border-gold-400/50 shadow-card-light dark:shadow-card" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-start"
                  >
                    <span className="text-[15px] font-bold text-ink dark:text-sand-100">
                      {faq.q}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 bg-gold-400 text-brand-950"
                          : "bg-brand-800/10 text-brand-700 dark:bg-white/10 dark:text-gold-300"
                      }`}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-soft dark:text-night-muted">
                          {faq.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
