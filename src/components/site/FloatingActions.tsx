import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/263774738196"
        target="_blank"
        rel="noreferrer"
        className="h-14 w-14 inline-flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="tel:+263774738196"
        className="h-14 w-14 inline-flex items-center justify-center rounded-full gradient-gold text-charcoal shadow-elegant hover:scale-110 transition-transform"
        aria-label="Call"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}
