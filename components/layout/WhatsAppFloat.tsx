import { MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

/**
 * WhatsApp float — WhatsApp green (#25D366 family) is reserved for this
 * action and the sticky bar only, never for site theming.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${SITE.name} on WhatsApp (${SITE.whatsappDisplay})`}
      className="fixed bottom-24 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-waDark text-white shadow-[0_0_28px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:bg-wa md:bottom-5"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-wa opacity-20" aria-hidden="true" />
      <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
    </a>
  );
}
