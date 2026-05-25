import { Award, Gem, Sparkles, ShieldCheck, Eye, Wallet } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Award, t: "Professional Craftsmanship", d: "Skilled artisans with decades of combined experience." },
  { icon: Gem, t: "Quality Materials", d: "We source only premium, durable materials for every project." },
  { icon: Sparkles, t: "Modern Designs", d: "Contemporary aesthetics tailored to your taste." },
  { icon: ShieldCheck, t: "Reliable Service", d: "On-time delivery, transparent communication." },
  { icon: Eye, t: "Attention to Detail", d: "It's the small details that elevate a great space." },
  { icon: Wallet, t: "Affordable Premium", d: "Luxury finishes at fair, honest pricing." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.74 0.13 75) 0%, transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.65 0.19 245) 0%, transparent 40%)" }} />
      <div className="container-prose relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Why Choose Us</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              Built on craft, trust <em className="text-gold not-italic">and refined detail</em>
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.t} delay={i * 70}>
                <div className="glass-dark p-7 rounded-2xl hover:border-gold/40 transition group h-full">
                  <Icon className="text-gold group-hover:scale-110 transition" size={28} />
                  <h3 className="mt-5 font-display text-xl">{it.t}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{it.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
