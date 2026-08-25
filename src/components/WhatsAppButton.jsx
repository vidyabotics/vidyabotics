import { MessageCircle } from "lucide-react";
import { siteConfig } from "../data/data.js";

export default function WhatsAppButton() {
  const { whatsappNumber } = siteConfig.contact;
  const message = encodeURIComponent(siteConfig.whatsappDefaultMessage);
  const href = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with vidyabotics on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-all duration-300 hover:gap-2 hover:pr-4"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        <MessageCircle size={26} strokeWidth={2} />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs">
        Chat with us
      </span>
    </a>
  );
}
