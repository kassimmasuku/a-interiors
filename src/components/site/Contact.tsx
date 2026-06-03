import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const mapsHref = "https://maps.app.goo.gl/fuV4voAzM56hbt8S8";
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-prose grid lg:grid-cols-2 gap-12">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Contact</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
            Let's start your <em className="text-primary not-italic">project</em>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Tell us about your space — our team will reach out with a tailored consultation.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Phone, t: "Phone", v: "+263 776 692 410", href: "tel:+263776692410" },
              { icon: Mail, t: "Email", v: "info@ainteriors.co.zw", href: "mailto:info@ainteriors.co.zw" },
              { icon: MessageCircle, t: "WhatsApp", v: "Chat with us instantly", href: "https://wa.me/263776692410" },
              { icon: MapPin, t: "Location", v: "6 Everett Cl, Mount Pleasant, Harare" },
              { icon: Clock, t: "Hours", v: "Mon–Sat · 8:00 AM – 6:00 PM" },
            ].map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-gold/50 hover:shadow-soft transition">
                  <div className="h-11 w-11 rounded-xl bg-charcoal text-gold inline-flex items-center justify-center flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="mt-0.5 font-medium">{c.v}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.t} href={c.href} target="_blank" rel="noreferrer" className="block">
                  {inner}
                </a>
              ) : (
                <div key={c.t}>{inner}</div>
              );
            })}
          </div>

          <div className="mt-8">
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft aspect-[16/9]">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=-17.7832316,31.0411116&z=18&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full border border-border bg-card font-medium hover:border-gold/50 hover:shadow-soft transition"
            >
              <MapPin size={16} />
              Open in Google Maps
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-elegant"
          >
            <h3 className="font-display text-2xl">Request a Quote</h3>
            <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" className="sm:col-span-2" required />
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Service</label>
                <select className="mt-2 w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-gold focus:outline-none transition">
                  <option>Window Coverings & Blinds</option>
                  <option>Ceiling Installations</option>
                  <option>Professional Painting</option>
                  <option>Kitchen Renovations</option>
                  <option>Flooring Solutions</option>
                  <option>Full Renovations</option>
                  <option>Space Planning</option>
                  <option>Aluminium & Glass Partitions</option>
                  <option>Window Branding</option>
                  <option>Fitted Kitchens & Walk-in Closets</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Project Details</label>
                <textarea rows={5} className="mt-2 w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-gold focus:outline-none transition resize-none" placeholder="Tell us about your space..." />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full gradient-gold text-charcoal font-medium shadow-soft hover:opacity-95 transition">
              <Send size={16} />
              {sent ? "Thank you — we'll be in touch!" : "Send Request"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-gold focus:outline-none transition" />
    </div>
  );
}
