"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import Button from "@/components/ui/Button";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

const QUICK_REPLIES = ["Fees", "Free trial", "Courses", "Female teachers", "Timings"];

function botReply(input: string): string {
  const s = input.toLowerCase();

  if (/fee|price|cost|charge|payment/.test(s)) {
    return "Our plans are based on classes per week — 2, 3, 5 or 7 days — with monthly, quarterly and yearly billing. Prices on the site are placeholders for now; message us on WhatsApp and we will share the exact fee for your country, including sibling discounts.";
  }
  if (/trial|free|demo/.test(s)) {
    return "The free trial is 3 days, completely free, no credit card needed. It includes a level assessment and a live demo class with a real tutor. Scroll to the Free Trial section or tap the button below and we will contact you within a few hours.";
  }
  if (/course|class|learn|study|subject/.test(s)) {
    return "We offer 12 courses: Noorani Qaida, Quran Reading with Tajweed, Hifz, Translation & Tafseer, Arabic Language, Islamic Studies, Daily Duas & Namaz, and dedicated tracks for Kids, Adults, Sisters and New Muslims — plus an Ijazah program.";
  }
  if (/female|woman|sister|lady|girl/.test(s)) {
    return "Yes! We have qualified, qualified female teachers from several countries. Just mention your preference when booking your trial and we will match you with a Qariah or Hafiza.";
  }
  if (/time|schedule|when|hour|timezone/.test(s)) {
    return "We teach 24/7 across all timezones — USA, UK, Canada, Australia, UAE, Europe, Pakistan and more. You choose the days and times; we match a teacher to your schedule.";
  }
  if (/teacher|tutor|qari|male/.test(s)) {
    return "All our tutors are qualified — many hold Ijazah with an unbroken chain. We have both male and female teachers, and you can switch tutors any time if you wish.";
  }
  if (/refund|money back|cancel/.test(s)) {
    return "We offer a money-back guarantee: if you are not happy after your first paid week, we refund you. You can pause or cancel your plan at any time.";
  }
  if (/salam|assalam|hello|hi\b/.test(s)) {
    return "Wa Alaikum Assalam! Welcome to QuranHub. Ask me about fees, the free trial, courses, teachers or timings — or tap below to chat with our admin directly.";
  }
  return "JazakAllahu Khairan for your question. I can help with fees, the free trial, courses, teachers and timings — or tap the button below and our admin will reply personally on WhatsApp.";
}

let nextId = 1;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  const pushBot = (text: string) => {
    setTyping(true);
    window.setTimeout(() => {
      setMessages((m) => [...m, { id: nextId++, from: "bot", text }]);
      setTyping(false);
    }, 650);
  };

  const handleOpen = () => {
    const willOpen = !open;
    setOpen(willOpen);
    if (willOpen && messages.length === 0) {
      pushBot(
        "Assalamu Alaikum! I am the QuranHub assistant. Ask me about fees, the free trial, courses, teachers or timings."
      );
    }
  };

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    setMessages((m) => [...m, { id: nextId++, from: "user", text }]);
    setInput("");
    pushBot(botReply(text));
  };

  return (
    <div className="fixed bottom-24 left-5 z-40 flex flex-col items-start gap-3 md:bottom-5">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-label="Website chat assistant"
            className="glass flex h-[440px] w-[320px] flex-col overflow-hidden rounded-3xl shadow-card sm:w-[360px]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-brand-800/10 bg-brand-800/5 px-4 py-3 dark:border-white/10 dark:bg-night-deep/60">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-700 to-brand-950">
                <Bot className="h-5 w-5 text-gold-300" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink dark:text-sand-100">
                  QuranHub Assistant
                </p>
                <p className="flex items-center gap-1.5 text-xs text-brand-600 dark:text-gold-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-wa" aria-hidden="true" />
                  Online — replies instantly
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1.5 text-ink-soft transition-colors hover:bg-black/5 dark:text-night-muted dark:hover:bg-white/10"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === "bot"
                      ? "bg-brand-800/5 text-ink dark:bg-white/10 dark:text-sand-100"
                      : "ml-auto bg-gradient-to-r from-gold-500 to-gold-400 text-brand-950"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {typing ? (
                <div className="w-fit rounded-2xl bg-brand-800/5 px-4 py-3 dark:bg-white/10" aria-label="Assistant is typing">
                  <span className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </span>
                </div>
              ) : null}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div className="flex gap-2 overflow-x-auto px-4 pb-2">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="shrink-0 rounded-full border border-gold-400/40 px-3 py-1.5 text-xs font-medium text-gold-700 transition-colors hover:bg-gold-400/10 dark:text-gold-300"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              className="flex items-center gap-2 border-t border-brand-800/10 p-3 dark:border-white/10"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <label htmlFor="chat-input" className="sr-only">
                Type your message
              </label>
              <input
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                className="h-11 flex-1 rounded-full border border-brand-800/15 bg-white/80 px-4 text-sm text-ink outline-none placeholder:text-ink-soft/60 focus:border-gold-400 dark:border-white/15 dark:bg-white/[0.06] dark:text-sand-100 dark:placeholder:text-night-muted/60"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-brand-950 shadow-glow transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>

            {/* Handoff */}
            <div className="border-t border-brand-800/10 p-3 dark:border-white/10">
              <Button
                href={whatsappLink("Assalamu Alaikum, I chatted with the website assistant and have a question.")}
                external
                variant="whatsapp"
                size="sm"
                className="w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat with Admin on WhatsApp
              </Button>
              <p className="mt-1.5 text-center text-[11px] text-ink-soft dark:text-night-muted">
                {SITE.whatsappDisplay} — usually replies within minutes
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={handleOpen}
        aria-expanded={open}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="grid h-14 w-14 place-items-center rounded-full border border-gold-400/40 bg-brand-800 text-gold-300 shadow-glow transition-transform duration-300 hover:scale-110 dark:bg-night-soft"
      >
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <MessageCircle className="h-6 w-6" aria-hidden="true" />}
      </button>
    </div>
  );
}
