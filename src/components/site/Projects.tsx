import { Reveal } from "./Reveal";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { featuredOnHomeProjects, projectCategories, projectMatchesCategory, type Project } from "@/lib/projects-data";
import { ProjectDetailModal } from "./ProjectDetailModal";

const featured = featuredOnHomeProjects;

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = featured.filter((i) => projectMatchesCategory(i, filter));

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container-prose">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Featured Work</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight max-w-2xl">
              Recent <em className="text-primary not-italic">transformations</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-wrap gap-2">
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
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] gap-4">
          {filtered.map((it, i) => (
            <Reveal key={it.id} delay={i * 60} className={it.span}>
              <button
                type="button"
                onClick={() => setSelected(it)}
                className="group relative h-full w-full overflow-hidden rounded-3xl bg-muted text-left block cursor-pointer"
              >
                <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent opacity-90 group-hover:opacity-100 transition" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="text-xs uppercase tracking-[0.25em] text-gold">{it.cat}</div>
                  <div className="mt-1 font-display text-xl">{it.title}</div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-charcoal text-white font-medium shadow-elegant hover:bg-primary transition-all"
            >
              View All Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>

      {selected && <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
