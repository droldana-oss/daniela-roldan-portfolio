import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { profile } from "../data/profile";

const indicators = [
  { label: "Enfoque", value: "Analytics" },
  { label: "Herramientas", value: "Python + BI" },
  { label: "Interés técnico", value: "Data Engineering" },
];

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability">
            <span />
            Abierta a oportunidades en analítica de datos
          </div>
          <p className="hero-role">Data Analyst en formación</p>
          <h1>
            Hola, soy <span>Daniela Roldán Arias</span>
          </h1>
          <p className="hero-description">
            Analista de Datos en formación, estudiante de Ingeniería Industrial
            en la Universidad Nacional de Colombia. Me enfoco en transformar
            datos en información clara y accionable mediante Python, SQL, Power
            BI y visualización de datos.
          </p>
          <p className="location">
            <MapPin size={17} />
            Medellín, Colombia
          </p>
          <div className="hero-actions">
            <ButtonLink href="#proyectos" icon={ArrowRight}>
              Ver proyectos
            </ButtonLink>
            <ButtonLink
              href={profile.resume}
              icon={Download}
              variant="secondary"
              download
            >
              Descargar CV
            </ButtonLink>
            <ButtonLink
              href={profile.linkedin}
              icon={Linkedin}
              variant="icon"
              disabled={!profile.linkedin}
            >
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.github} icon={Github} variant="icon">
              GitHub
            </ButtonLink>
          </div>
        </div>

        <div className="analytics-card" aria-label="Resumen profesional">
          <div className="portrait-frame">
            <img
              className="profile-photo"
              src="/image/Daniela Roldan.jpeg"
              alt="Retrato de Daniela Roldán Arias"
            />
            <div className="portrait-copy">
              <p>Daniela Roldán Arias</p>
              <strong>Analista de Datos</strong>
              <span>Ingeniería Industrial · UNAL</span>
            </div>
          </div>
          <div className="analytics-summary">
            <div className="card-top">
              <div>
                <p>Perfil analítico</p>
                <strong>Datos para decisiones</strong>
              </div>
              <span className="trend">
                <TrendingUp size={17} /> BI
              </span>
            </div>
            <div className="indicator-grid">
              {indicators.map((indicator) => (
                <div key={indicator.label}>
                  <small>{indicator.label}</small>
                  <strong>{indicator.value}</strong>
                </div>
              ))}
            </div>
            <div className="stack-line">
              <span>Python</span>
              <span>SQL</span>
              <span>Power BI</span>
              <span>Tableau</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
