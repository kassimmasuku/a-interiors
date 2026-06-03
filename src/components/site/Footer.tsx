import logo from "@/assets/logo.png";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const mapsHref = "https://maps.app.goo.gl/fuV4voAzM56hbt8S8";
  return (
    <footer className="bg-charcoal text-white/80 pt-20 pb-8">
      <div className="container-prose">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="A-Interiors" width={40} height={40} className="h-10 w-10 rounded-full bg-white" />
              <span className="font-display text-xl text-white">A-Interiors</span>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              A-Interiors — premium interior finishing, window styling and renovation specialists transforming residential and commercial spaces across Zimbabwe.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((I, i) => (
                <a key={i} href="#" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/5 hover:bg-gold hover:text-charcoal transition">
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-white text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["About", "Services", "Projects", "Process", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-white text-lg">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["Window Coverings","Ceiling Installations","Professional Painting","Kitchen Renovations","Flooring","Full Renovations"].map((l) => (
                <li key={l}><a href="#services" className="hover:text-gold transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-white text-lg">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> <a href="tel:+263776692410" className="hover:text-white">+263 776 692 410</a></li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-gold" /> <a href="mailto:info@ainteriors.co.zw" className="hover:text-white">info@ainteriors.co.zw</a></li>
              <li className="text-white/60">
                <a href={mapsHref} target="_blank" rel="noreferrer" className="hover:text-white">
                  6 Everett Cl, Mount Pleasant, Harare, Zimbabwe
                </a>
              </li>
              <li className="text-white/60">Mon–Sat · 8 AM – 6 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} A-Interiors. All rights reserved.</div>
          <div>Crafted with care · Transforming Spaces With Style & Comfort</div>
        </div>
      </div>
    </footer>
  );
}
