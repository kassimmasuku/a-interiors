import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { useEffect, useState } from "react";

const reviews = [
  { name: "Tendai M.", role: "Homeowner, Harare", text: "A-Interiors transformed our outdated living room into a stunning, modern space. The attention to detail was incredible.", rating: 5 },
  { name: "Rumbi C.", role: "Restaurant Owner", text: "Our restaurant renovation was finished on time and beyond expectations. Our customers always compliment the new interior.", rating: 5 },
  { name: "Nigel S.", role: "Office Manager", text: "Professional from quote to handover. The team's craftsmanship and project management are second to none.", rating: 5 },
  { name: "Chipo D.", role: "Homeowner, Bulawayo", text: "Beautiful kitchen, beautiful experience. Honest pricing and a finish you'd expect from a luxury brand.", rating: 5 },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container-prose">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Client Voices</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              Trusted by people who <em className="text-primary not-italic">love their spaces</em>
            </h2>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="relative bg-card border border-border rounded-3xl p-10 md:p-14 shadow-soft">
              <Quote className="absolute -top-6 left-10 text-gold" size={48} />
              <div key={i} className="animate-in fade-in duration-700">
                <div className="flex gap-1">
                  {Array.from({ length: reviews[i].rating }).map((_, j) => (
                    <Star key={j} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-5 text-lg md:text-xl leading-relaxed text-foreground/90 font-display italic">
                  "{reviews[i].text}"
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="font-medium">{reviews[i].name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{reviews[i].role}</div>
                  </div>
                  <div className="flex gap-2">
                    {reviews.map((_, idx) => (
                      <button key={idx} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-2 bg-border"}`} aria-label={`review ${idx + 1}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
