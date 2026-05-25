import { useState } from "react";
import { Blinds, Layers, PaintRoller, ChefHat, Grid3x3, Hammer, ArrowUpRight, X, CheckCircle2, LayoutGrid, Columns3, DoorOpen } from "lucide-react";
import { Reveal } from "./Reveal";
import imgBlinds from "@/assets/project-roman-blinds.jpg";
import imgCeiling from "@/assets/project-ceiling.jpg";
import imgPainting from "@/assets/project-bedroom.jpg";
import imgKitchen from "@/assets/project-kitchen-build.jpg";
import imgFlooring from "@/assets/project-newlands-flooring-lounge.png";
import imgRenovation from "@/assets/project-living-room.jpg";
import imgSpacePlanning from "@/assets/project-office.jpg";
import imgPartitions from "@/assets/project-murambi-glass-partition.png";
import imgFitted from "@/assets/project-kitchen-shelving.jpg";

type Service = {
  icon: typeof Blinds;
  title: string;
  desc: string;
  points: string[];
  details: string;
  features: string[];
  image: string;
};

const services: Service[] = [
  {
    icon: Blinds,
    title: "Window Treatments",
    desc: "Made-to-measure blinds, curtains and glass frosting — including motorised solutions for blinds and curtains.",
    points: ["Blinds", "Curtains", "Frosting"],
    details:
      "A complete window treatment offering — blinds, curtains and decorative glass frosting. Choose from Zimbabwe's widest custom blind and curtain catalogue, with motorised options for both blinds and curtains in association with Mastervue and Somfy for full home-automation integration.",
    features: [
      "Blinds — Aluminium Venetian (25mm & 50mm), Wooden, Simuwood & Custom Wood Venetians",
      "Blinds — Vertical, Wooden Vertical & PVC Insert Verticals",
      "Blinds — Roller, Roller Roman, A-Wave, Panel, Panel Vertical & A-Vela",
      "Blinds — A-Voile, A-Voile Delux & Verti Voile sheers; A-Cel cellular; A-Plissé pleated; A-Doppio day-and-night; bamboo & woven wood",
      "Curtains — bespoke drapery, sheers, linings and decorative hardware",
      "Motorised blinds & curtains — remote, wall-switch and smart-home control",
      "Frosting — frosted vinyl, geometric patterns and privacy films",
      "Frosting — corporate branding, logo decals & shopfront window graphics",
    ],
    image: imgBlinds,
  },
  {
    icon: Layers,
    title: "Ceiling Installations",
    desc: "Suspended, PVC and decorative ceilings designed to define your space.",
    points: ["Suspended", "PVC", "Decorative"],
    details:
      "Ceilings are the unsung hero of great interiors. We design and install ceiling systems that conceal services, integrate lighting and add architectural character.",
    features: [
      "Suspended gypsum ceilings",
      "PVC ceiling panels",
      "Decorative coffers & cove lighting",
      "Bulkheads & feature drops",
      "Integrated downlight installation",
    ],
    image: imgCeiling,
  },
  {
    icon: PaintRoller,
    title: "Professional Painting",
    desc: "Interior, exterior and decorative finishes using premium-grade coatings.",
    points: ["Interior", "Exterior", "Decorative"],
    details:
      "Flawless paintwork is in the prep. Our team delivers a smooth, durable finish using premium paints, taking care of surfaces from priming through to the final coat.",
    features: [
      "Interior & exterior painting",
      "Decorative & textured finishes",
      "Wall preparation & priming",
      "Roof & metalwork coatings",
      "Eco-friendly low-VOC options",
    ],
    image: imgPainting,
  },
  {
    icon: ChefHat,
    title: "Kitchen Renovations",
    desc: "Modern kitchens with built-in cupboards, countertops and smart space planning.",
    points: ["Built-ins", "Countertops", "Layout"],
    details:
      "We design and build kitchens that look beautiful and work hard — pairing intelligent layouts with quality cabinetry and stone surfaces.",
    features: [
      "Custom built-in cupboards",
      "Granite, quartz & marble countertops",
      "Splashbacks & backsplashes",
      "Kitchen islands & breakfast bars",
      "Plumbing & electrical coordination",
    ],
    image: imgKitchen,
  },
  {
    icon: Grid3x3,
    title: "Flooring Solutions",
    desc: "Tiling, laminate and vinyl flooring installed to flawless professional finish.",
    points: ["Tiling", "Laminate", "Vinyl"],
    details:
      "The right floor anchors a room. We supply and install a full range of flooring options with crisp lines, level surfaces and clean finishing.",
    features: [
      "Porcelain & ceramic tiling",
      "Marble & natural stone",
      "Laminate wood flooring",
      "Vinyl & SPC click flooring",
      "Skirting & trim finishing",
    ],
    image: imgFlooring,
  },
  {
    icon: Hammer,
    title: "Full Renovations",
    desc: "Turnkey residential and office transformations — managed end to end.",
    points: ["Residential", "Office", "Turnkey"],
    details:
      "Whole-space transformations managed by a single team. From concept and budget through to hand-over, we coordinate every trade so you don't have to.",
    features: [
      "Concept design & space planning",
      "Project & trade management",
      "Residential remodels",
      "Office & retail fit-outs",
      "Snagging & hand-over",
    ],
    image: imgRenovation,
  },
  {
    icon: LayoutGrid,
    title: "Space Planning",
    desc: "Room-by-room layouts that maximise function, flow and visual impact.",
    points: ["Layout", "Flow", "Custom pieces"],
    details:
      "We craft room-by-room layouts, optimise furniture positioning, recommend structural changes and define circulation patterns for favourable energy and design flow — including custom pieces with both practical and visual purpose.",
    features: [
      "Room-by-room layout planning",
      "Furniture positioning & sizing",
      "Multi-use area design",
      "Structural change recommendations",
      "Custom furniture & art integration",
    ],
    image: imgSpacePlanning,
  },
  {
    icon: Columns3,
    title: "Aluminium & Glass Partitions",
    desc: "Modern aluminium and glass partitioning for offices and commercial spaces.",
    points: ["Office", "Glass", "Aluminium"],
    details:
      "Define spaces without losing light. Our aluminium and glass partition systems create elegant, functional zones for boardrooms, offices and reception areas.",
    features: [
      "Full-height glass partitions",
      "Aluminium framed systems",
      "Frosted & branded glass options",
      "Sliding & hinged glass doors",
      "Acoustic & privacy solutions",
    ],
    image: imgPartitions,
  },
  {
    icon: DoorOpen,
    title: "Fitted Kitchens & Walk-in Closets",
    desc: "Bespoke fitted kitchens, wardrobes and walk-in closet systems.",
    points: ["Fitted", "Bespoke", "Storage"],
    details:
      "Tailored joinery designed around how you live — from hard-working modern kitchens to luxury walk-in closets with intelligent storage and beautiful finishes.",
    features: [
      "Custom fitted kitchen cabinetry",
      "Walk-in closet systems",
      "Built-in wardrobes",
      "Soft-close hardware & smart storage",
      "Premium veneers, melamine & paint finishes",
    ],
    image: imgFitted,
  },
];

export function Services() {
  const [open, setOpen] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-prose">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">What We Do</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              Premium services for refined <em className="text-primary not-italic">interiors</em>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Six specialised disciplines, one seamless experience — delivered by a team obsessed with finish.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <article className="group relative h-full rounded-3xl bg-card border border-border hover:border-gold/50 hover:shadow-elegant transition-all duration-500 overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>
                  <div className="relative p-8">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 group-hover:bg-gold/10 transition-colors duration-700 pointer-events-none" />
                    <div className="relative">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-charcoal text-gold group-hover:gradient-gold group-hover:text-charcoal transition-all duration-500">
                        <Icon size={24} />
                      </div>
                      <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {s.points.map((p) => (
                          <li key={p} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">{p}</li>
                        ))}
                      </ul>
                      <button
                        onClick={() => setOpen(s)}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                      >
                        Learn more <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xl w-full bg-card rounded-3xl shadow-elegant overflow-hidden animate-in zoom-in-95 duration-300"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/90 hover:bg-secondary transition"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <img src={open.image} alt={open.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-8 md:p-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-charcoal">
                <open.icon size={24} />
              </div>
              <h3 className="mt-5 font-display text-3xl">{open.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{open.details}</p>
              <ul className="mt-6 space-y-2.5">
                {open.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(null)}
                className="mt-8 inline-flex items-center justify-center w-full px-6 py-3 rounded-full gradient-gold text-charcoal font-medium shadow-soft hover:opacity-90 transition"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
