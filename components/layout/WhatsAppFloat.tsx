import { MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

/**
 * Floating WhatsApp button — visible on every page, bottom-right,
 * with a soft pulsing ring. Opens a chat with the admin.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp (${SITE.whatsappDisplay})`}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-25"
      />
      <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
    </a>
  );
}
