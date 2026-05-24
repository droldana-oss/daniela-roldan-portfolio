import { ArrowRight, BookOpen, BriefcaseBusiness } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const path = [
  {
    title: "Data Analysis",
    text: "Limpieza, EDA y estadística aplicada.",
  },
  {
    title: "Business Intelligence",
    text: "Dashboards, KPIs y visualización.",
  },
  {
    title: "Automation",
    text: "Procesos repetibles y reportes eficientes.",
  },
  {
    title: "Data Engineering",
    text: "Área de interés para ampliar mi perfil.",
  },
];

export function ProfessionalPath() {
  return (
    <section className="section navy" id="trayectoria">
      <div className="container">
        <SectionHeading
          eyebrow="Trayectoria profesional"
          title="Analítica, inteligencia de negocio y desarrollo técnico"
          description="Un perfil que une fundamentos industriales con tecnología de datos, visualización y curiosidad por la automatización e Ingeniería de Datos."
        />
        <div className="path-grid">
          {path.map((item, index) => (
            <div className="path-item" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {index !== path.length - 1 && (
                <ArrowRight className="path-arrow" size={18} />
              )}
            </div>
          ))}
        </div>
        <div className="experience">
          <div>
            <BriefcaseBusiness size={22} />
            <p>
              <strong>Análisis y Visualización de Datos</strong>
              Universidad Nacional de Colombia · 2025 - 2026
            </p>
          </div>
          <div>
            <BookOpen size={22} />
            <p>
              <strong>Ingeniería Industrial</strong>
              Universidad Nacional de Colombia · 2022 - 2027
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
