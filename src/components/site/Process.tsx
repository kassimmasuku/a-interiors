import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Consultation", d: "We listen to your vision, lifestyle and goals." },
  { n: "02", t: "Site Inspection", d: "Detailed assessment of your space and requirements." },
  { n: "03", t: "Design & Quotation", d: "Tailored concepts with transparent pricing." },
  { n: "04", t: "Project Execution", d: "Skilled craftsmen bring the design to life." },
  { n: "05", t: "Finishing & Handover", d: "Final touches, walkthrough, and a space you'll love." },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Process</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              From idea to <em className="text-primary not-italic">handover</em>
            </h2>
          </Reveal>
        </div>
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="text-center lg:text-left">
                  <div className="relative mx-auto lg:mx-0 inline-flex h-24 w-24 items-center justify-center rounded-full bg-background border border-gold/30 shadow-soft">
                    <span className="font-display text-2xl text-gold">{s.n}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
