import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, MapPin, Calendar, X } from "lucide-react";
import { projects, type Project } from "@/lib/projects-data";
import { Reveal } from "@/components/site/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — A-Interiors` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.description },
          { property: "og:image", content: `https://a-interiors.lovable.app${loaderData.project.img}` },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `https://a-interiors.lovable.app/projects/${params.projectId}` },
        ]
      : [{ title: "Project — A-Interiors" }],
    links: [
      { rel: "canonical", href: `https://a-interiors.lovable.app/projects/${params.projectId}` },
    ],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: loaderData.project.title,
              description: loaderData.project.description,
              image: loaderData.project.images.map((i) => `https://a-interiors.lovable.app${i}`),
              creator: { "@type": "Organization", name: "A-Interiors" },
              locationCreated: loaderData.project.location,
              dateCreated: loaderData.project.year,
            }),
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="font-display text-3xl">Project not found</h1>
      <Link to="/projects" className="text-primary underline">Back to all projects</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="text-muted-foreground">{error.message}</p>
      <Link to="/projects" className="text-primary underline">Back to all projects</Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container-prose">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
            >
              <ArrowLeft size={16} /> Back to all projects
            </Link>
            <span className="mt-8 block text-xs uppercase tracking-[0.3em] text-gold">{project.cat}</span>
            <h1 className="mt-3 font-display text-4xl md:text-6xl leading-tight max-w-3xl">
              {project.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              {project.location && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} /> {project.location}
                </span>
              )}
              {project.year && (
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} /> {project.year}
                </span>
              )}
            </div>
            <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">{project.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.scope.map((s) => (
                <li
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((src, i) => (
              <Reveal
                key={src}
                delay={i * 80}
                className={i === 0 && project.images.length > 1 ? "md:col-span-2" : ""}
              >
                <button
                  onClick={() => setLightbox(src)}
                  className="group relative block w-full overflow-hidden rounded-3xl bg-muted"
                >
                  <img
                    src={src}
                    alt={`${project.title} — image ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-20 rounded-3xl gradient-dark p-10 md:p-14 text-center text-white shadow-elegant">
              <h2 className="font-display text-3xl md:text-4xl">Like what you see?</h2>
              <p className="mt-3 text-white/70 max-w-xl mx-auto">
                Let's create something equally exceptional for your space.
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

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white p-2 rounded-full glass"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <img
            src={lightbox}
            alt={project.title}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-2xl shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
