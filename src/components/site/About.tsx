import bedroom from "@/assets/home-about.jpg";
import { Reveal } from "./Reveal";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container-prose grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elegant">
            <img src={bedroom} alt="Elegant master bedroom" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-10 glass-dark text-white p-6 rounded-2xl shadow-elegant max-w-[240px]">
            <div className="font-display text-4xl text-gold">10+</div>
            <p className="mt-1 text-sm text-white/80">Years crafting premium interiors across Zimbabwe.</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <span className="text-xs uppercase tracking-[0.3em] text-gold">About Us</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
            A trusted name in <em className="text-primary not-italic">interior craftsmanship</em> & renovation
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A-Interiors is an interior design, construction finishing, and renovations company dedicated to creating
            stylish, functional, and comfortable residential and commercial spaces. From new home developments to
            renovation projects, we combine creativity, quality craftsmanship, and attention to detail to deliver
            spaces tailored to our clients' vision and lifestyle.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            {["Attention to detail", "Customized solutions", "Residential & commercial", "Modern finishes"].map((i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {i}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8">
            {[
              { n: 250, s: "+", l: "Projects" },
              { n: 180, s: "+", l: "Happy Clients" },
              { n: 12, s: "", l: "Specialists" },
              { n: 10, s: "+", l: "Years" },
            ].map((x) => (
              <div key={x.l}>
                <div className="font-display text-3xl text-charcoal dark:text-foreground">
                  <Counter to={x.n} suffix={x.s} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{x.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
