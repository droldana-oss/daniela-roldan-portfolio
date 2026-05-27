import { BarChart3, Factory, GitBranch, Target } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const strengths = [
  {
    icon: Factory,
    title: "Visión de procesos",
    text: "Formación industrial aplicada a costos, producción y mejora continua.",
  },
  {
    icon: BarChart3,
    title: "Storytelling visual",
    text: "Dashboards y reportes que vuelven comprensibles las métricas.",
  },
  {
    icon: Target,
    title: "Decisión de negocio",
    text: "Análisis estadístico orientado a preguntas accionables.",
  },
  {
    icon: GitBranch,
    title: "Desarrollo técnico",
    text: "Interés en automatización y fundamentos de Ingeniería de Datos.",
  },
];

export function About() {
  return (
    <section className="section colorful-section" id="sobre-mi">
      <div className="container about-grid">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Ingeniería Industrial con mentalidad de datos"
          description="Combino análisis de datos, visualización, estadística aplicada y comprensión de negocio para convertir información en conclusiones claras. También me interesa fortalecer fundamentos de automatización e Ingeniería de Datos como complemento a mi perfil analítico."
        />
        <div className="strength-grid">
          {strengths.map(({ icon: Icon, title, text }) => (
            <article className="strength-card" key={title}>
              <Icon size={21} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
