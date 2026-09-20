"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative scroll-mt-20">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything parents and students usually ask before starting. Still unsure? Message us on WhatsApp any time."
        />

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div
                  className={`glass overflow-hidden rounded-2xl transition-shadow duration-300 ${
                    isOpen ? "shadow-glow" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                  >
                    <span className="text-[15px] font-semibold text-slate-900 dark:text-white">
                      {f.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 bg-gradient-to-r from-gold-dark to-gold text-navy-950"
                          : "bg-gold/10 text-gold-dark dark:text-gold-light"
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
                        <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {f.a}
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
