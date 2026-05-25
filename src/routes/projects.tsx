import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import { projects, projectCategories, projectMatchesCategory, type Project } from "@/lib/projects-data";
import { ProjectDetailModal } from "@/components/site/ProjectDetailModal";
import { Reveal } from "@/components/site/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — A-Interiors" },
      {
        name: "description",
        content:
          "Browse the full portfolio of A-Interiors — kitchens, ceilings, offices, window treatments and full renovations across Zimbabwe.",
      },
      { property: "og:title", content: "Projects — A-Interiors" },
      {
        property: "og:description",
        content: "Explore our complete portfolio of premium interior projects across Zimbabwe.",
      },
      { property: "og:url", content: "https://a-interiors.lovable.app/projects" },
    ],
    links: [{ rel: "canonical", href: "https://a-interiors.lovable.app/projects" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "A-Interiors — Project Portfolio",
          url: "https://a-interiors.lovable.app/projects",
          image: projects.map((p) => `https://a-interiors.lovable.app${p.img}`),
        }),
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = useMemo(
    () => projects.filter((p) => projectMatchesCategory(p, filter)),
    [filter],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container-prose">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
            >
              <ArrowLeft size={16} /> Back to home
            </Link>
            <span className="mt-8 block text-xs uppercase tracking-[0.3em] text-gold">Portfolio</span>
            <h1 className="mt-3 font-display text-4xl md:text-6xl leading-tight max-w-3xl">
              Every project, <em className="text-primary not-italic">crafted with care</em>
            </h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              A complete look at our recent residential, commercial and clinical interior work — from concept
              through to a finished, hand-over ready space.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-2">
              {projectCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest transition border ${
                    filter === c
                      ? "bg-charcoal text-white border-charcoal"
                      : "bg-transparent text-muted-foreground border-border hover:border-gold hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className="group block h-full w-full text-left overflow-hidden rounded-3xl bg-card border border-border hover:border-gold/50 hover:shadow-elegant transition-all duration-500 cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] bg-charcoal/85 text-gold backdrop-blur">
                      {p.cat}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl">{p.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      {p.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} /> {p.location}
                        </span>
                      )}
                      {p.year && (
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={12} /> {p.year}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.scope.map((s) => (
                        <li
                          key={s}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-20 rounded-3xl gradient-dark p-10 md:p-14 text-center text-white shadow-elegant">
              <h2 className="font-display text-3xl md:text-4xl">Ready to start your transformation?</h2>
              <p className="mt-3 text-white/70 max-w-xl mx-auto">
                Tell us about your space and we'll put together a tailored proposal.
              </p>
              <Link
                to="/"
                hash="contact"
                className="mt-6 inline-flex items-center justify-center px-7 py-3 rounded-full gradient-gold text-charcoal font-medium shadow-soft hover:opacity-90 transition"
              >
                Request a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
      <FloatingActions />

      {selected && <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
