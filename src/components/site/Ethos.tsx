import { Eye, Target, Compass, Heart } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Eye,
    title: "Vision",
    body: "To provide quality services and products that exceed the expectations of our esteemed customers.",
  },
  {
    icon: Target,
    title: "Mission",
    body: "To build long-term relationships with our customers and clients and provide exceptional service by pursuing business through innovation and advanced technology.",
  },
  {
    icon: Compass,
    title: "Purpose",
    body: "To be a leader in the interior designing industry by providing enhanced services, products, relationships and profitability.",
  },
  {
    icon: Heart,
    title: "Core Values",
    body: "We treat customers with respect and faith, grow through creativity and innovation, and integrate honesty, integrity and business ethics into everything we do.",
  },
];

export function Ethos() {
  return (
    <section id="ethos" className="py-24 md:py-32 bg-background">
      <div className="container-prose">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Who We Are</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              The principles behind <em className="text-primary not-italic">every project</em>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trading as A-Interiors under <span className="font-medium text-foreground">MILNECH</span>, we were founded to do business globally — keeping pace with modern lifestyles while honouring traditional, contemporary and classical design.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full p-7 rounded-3xl bg-card border border-border hover:border-gold/50 hover:shadow-elegant transition-all duration-500">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold text-charcoal">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
