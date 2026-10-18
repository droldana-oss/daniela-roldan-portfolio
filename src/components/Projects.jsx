import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  FolderKanban,
} from "lucide-react";
import { projects } from "../data/projects";
import { SectionHeading } from "./SectionHeading";

function ProjectMedia({ project }) {
  const media = project.images ?? [
    {
      src: project.image,
      alt: project.imageAlt,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = media.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % media.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [hasMultipleImages, media.length]);

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex - 1 + media.length) % media.length,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % media.length);
  };

  return (
    <div
      className="project-carousel"
      aria-label={`Galería del proyecto ${project.title}`}
      aria-roledescription="carrusel"
    >
      <img
        className="project-image"
        src={media[activeIndex].src}
        alt={media[activeIndex].alt}
        loading="lazy"
      />
      {hasMultipleImages && (
        <>
          <button
            className="carousel-control carousel-control-previous"
            type="button"
            onClick={showPrevious}
            aria-label="Ver imagen anterior"
          >
            <ArrowLeft size={17} aria-hidden="true" />
          </button>
          <button
            className="carousel-control carousel-control-next"
            type="button"
            onClick={showNext}
            aria-label="Ver imagen siguiente"
          >
            <ArrowRight size={17} aria-hidden="true" />
          </button>
          <div className="carousel-dots" aria-label="Seleccionar imagen">
            {media.map((item, index) => (
              <button
                className={index === activeIndex ? "active" : ""}
                key={item.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver ${item.label ?? `imagen ${index + 1}`}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            Imagen {activeIndex + 1} de {media.length}: {media[activeIndex].label}
          </p>
        </>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos seleccionados"
          description="Dashboards y análisis publicados que conectan datos, visualización y preguntas de negocio a través de Power BI, Python y machine learning."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.featured ? "featured" : ""}`}
              key={project.title}
            >
              <div className="project-head">
                <div className="folder-icon">
                  <FolderKanban size={22} />
                </div>
                <span
                  className={`project-status ${project.href ? "live" : "pending"}`}
                >
                  {project.href ? null : <Clock3 size={13} />}
                  {project.status}
                </span>
              </div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {(project.image || project.images) && <ProjectMedia project={project} />}
              <p className="project-metric">{project.metric}</p>
              <div className="tool-list">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              {project.href ? (
                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositorio <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="project-link muted">Publicación pendiente</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
