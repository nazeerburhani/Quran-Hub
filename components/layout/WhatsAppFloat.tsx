"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

/**
 * WhatsApp float — WhatsApp green (#25D366 family) is reserved for this
 * action and the sticky bar only, never for site theming.
 * Stacked bottom-right under the chat launcher; lifts above the sticky
 * mobile CTA bar once it appears (mobile only — the bar is md:hidden).
 */
export default function WhatsAppFloat() {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setLifted(
        window.scrollY > window.innerHeight * 0.85 && window.innerWidth < 768
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${SITE.name} on WhatsApp (${SITE.whatsappDisplay})`}
      className={`fixed right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-waDark text-white shadow-[0_0_28px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:bg-wa ${
        lifted ? "bottom-24" : "bottom-6"
      }`}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-wa opacity-20" aria-hidden="true" />
      <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
    </a>
  );
}
