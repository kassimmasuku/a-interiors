import { Building2, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const clients = [
  { name: "Turnbury Property Developers", location: "9 Maiden Road, Newlands" },
  { name: "Lucile Real Estate", location: "35 Quorn Avenue, Mount Pleasant" },
  { name: "TDW", location: "9 Maiden Road, Newlands" },
  { name: "ChimukaMafunga Commercial Attorneys", location: "38 Argyll Drive, Newlands" },
  { name: "New Sahara Ventures", location: "43 Coull Drive, Mount Pleasant" },
  { name: "Colenbrander Medical Center", location: "19 Colenbrander, Milton Park" },
  { name: "Exquisite Car Dealers", location: "29 Mazowe Street, Harare" },
  { name: "Tait Medical Center", location: "229 Tait Avenue, Mutare" },
];

export function Clients() {
  return (
    <section id="clients" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-prose">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Trusted By</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              Clients & <em className="text-primary not-italic">references</em>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A selection of property developers, law firms, medical centres and commercial brands across Zimbabwe who trust us with their interiors.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-gold/50 hover:shadow-soft transition group">
                <div className="h-11 w-11 rounded-xl bg-charcoal text-gold inline-flex items-center justify-center group-hover:gradient-gold group-hover:text-charcoal transition-all">
                  <Building2 size={18} />
                </div>
                <h3 className="mt-5 font-display text-base leading-snug">{c.name}</h3>
                <p className="mt-2 flex items-start gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={12} className="mt-0.5 shrink-0 text-gold" />
                  {c.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
