"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { PLANS, SITE, whatsappLink, type Course } from "@/lib/site";

interface EnrollModalProps {
  course: Course | null;
  onClose: () => void;
}

export default function EnrollModal({ course, onClose }: EnrollModalProps) {
  const [sent, setSent] = useState(false);

  /* Reset + lock scroll while open; close on Escape */
  useEffect(() => {
    if (!course) return;
    setSent(false);
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [course, onClose]);

  return (
    <AnimatePresence>
      {course ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] grid place-items-center bg-navy-950/70 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Enroll in ${course.title}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-md rounded-3xl bg-white p-6 shadow-card dark:bg-navy-900 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark dark:text-gold-light">
                  One-click enrollment
                </p>
                <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                  {course.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close enrollment dialog"
                className="rounded-full p-1.5 text-slate-500 transition-colors hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/10"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {sent ? (
              <div className="mt-6 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" aria-hidden="true" />
                <p className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  Request received!
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Our admin team will contact you shortly to schedule your free
                  trial class for <strong>{course.title}</strong>.
                </p>
                <a
                  href={whatsappLink(`Assalamu Alaikum, I want to enroll in ${course.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1faa53] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#25d366]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Confirm faster on WhatsApp
                </a>
                <p className="mt-2 text-[11px] text-slate-500">
                  {SITE.whatsappDisplay} — demo mode, connects to the database at launch
                </p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label htmlFor="enroll-plan" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Choose your plan
                  </label>
                  <select
                    id="enroll-plan"
                    required
                    defaultValue={PLANS[1].id}
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/70 px-3 text-sm text-slate-900 outline-none focus:border-gold/60 dark:bg-white/5 dark:text-white"
                  >
                    {PLANS.map((p) => (
                      <option key={p.id} value={p.id} className="text-slate-900">
                        {p.name} — {p.classesPerWeek} classes/week
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="enroll-name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Full name
                  </label>
                  <input
                    id="enroll-name"
                    required
                    autoFocus
                    placeholder="Your name"
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/70 px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-gold/60 dark:bg-white/5 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="enroll-contact" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Email or WhatsApp number
                  </label>
                  <input
                    id="enroll-contact"
                    required
                    placeholder="you@example.com or +1 555 000 1234"
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/70 px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-gold/60 dark:bg-white/5 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold w-full text-sm"
                >
                  Enroll Now — Start Free Trial
                </button>
                <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                  Free 3-day trial included. No credit card required.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
