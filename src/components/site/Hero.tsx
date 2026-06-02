import hero from "@/assets/home-hero.jpg";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Luxury modern interior" width={1920} height={1080} fetchPriority="high" decoding="async" className="h-full w-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/85" />
      </div>
      <div className="relative container-prose flex min-h-[100svh] flex-col justify-center pt-32 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white/90 text-xs uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Premium Interior Specialists · Zimbabwe
          </span>
          <h1 className="mt-6 text-white font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02]">
            Transforming <em className="text-gold not-italic font-normal">Spaces</em>
            <br />With Style & Comfort
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-gold text-charcoal font-medium shadow-elegant hover:opacity-95 transition">
              Request a Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-white font-medium hover:bg-white/15 transition">
              <Play size={16} className="fill-white" />
              View Our Projects
            </a>
          </div>
        </div>

        <div className="mt-16 hidden md:grid grid-cols-3 gap-6 max-w-2xl">
          {[
            { k: "10+", v: "Years of Craft" },
            { k: "250+", v: "Projects Delivered" },
            { k: "100%", v: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl px-6 py-5">
              <div className="font-display text-3xl text-white">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-white/70 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.3em] uppercase animate-bounce">scroll</div>
    </section>
  );
}
