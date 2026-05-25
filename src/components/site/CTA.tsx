import hero from "@/assets/project-ceiling.jpg";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>
      <div className="relative container-prose text-center text-white">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Get in Touch</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">
            Ready to transform <em className="text-gold not-italic">your space?</em>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-white/75">
            Let's design something extraordinary together. Reach out and we'll get back within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="tel:+263776692410" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full gradient-gold text-charcoal font-medium shadow-elegant">
              <Phone size={18} /> Call Now
            </a>
            <a href="https://wa.me/263776692410" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-medium hover:opacity-90 transition">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-white font-medium hover:bg-white/15 transition">
              <Mail size={18} /> Contact Form
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
