import { ArrowUpRight, Clock3, FolderKanban } from "lucide-react";
import { projects } from "../data/projects";
import { SectionHeading } from "./SectionHeading";

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
              {project.image && (
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />
              )}
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
