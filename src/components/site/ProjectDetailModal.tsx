import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, Calendar, X } from "lucide-react";
import type { Project } from "@/lib/projects-data";

type ProjectDetailModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-charcoal/80 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto animate-in fade-in duration-300"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative my-8 w-full max-w-4xl bg-card rounded-3xl shadow-elegant animate-in zoom-in-95 duration-300"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/90 hover:bg-secondary transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl bg-muted">
            <img
              src={project.img}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">{project.cat}</span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">{project.title}</h2>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
            <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.scope.map((s) => (
                <li
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setLightbox(src)}
                  className={`group relative overflow-hidden rounded-2xl bg-muted ${
                    i === 0 && project.images.length > 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt={`${project.title} — image ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>

            <Link
              to="/"
              hash="contact"
              onClick={onClose}
              className="mt-8 inline-flex w-full items-center justify-center px-7 py-3 rounded-full gradient-gold text-charcoal font-medium shadow-soft hover:opacity-90 transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[70] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white p-2 rounded-full glass"
            aria-label="Close image"
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
    </>
  );
}
