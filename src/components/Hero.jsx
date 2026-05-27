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

const portfolioStats = [
  { value: "4", label: "proyectos publicados" },
  { value: "3", label: "dashboards Power BI" },
  { value: "ML", label: "modelo de fraude" },
];

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-orb orb-blue" aria-hidden="true" />
      <div className="hero-orb orb-purple" aria-hidden="true" />
      <div className="hero-orb orb-pink" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability">
            <span />
            Abierta a oportunidades en analítica, ingeniería y ciencia de datos
          </div>
          <p className="hero-role">Data Analyst - Data Engineer</p>
          <h1>
            Hola, soy <span>Daniela Roldán Arias</span>
          </h1>
          <p className="hero-description">
            Analista de Datos y estudiante de Ingeniería Industrial en la
            Universidad Nacional de Colombia. Me enfoco en transformar datos en
            información clara y accionable mediante Python, SQL, Power BI y
            visualización de datos.
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
          <div className="portfolio-stats" aria-label="Resumen de portafolio">
            {portfolioStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-card" aria-label="Resumen profesional">
          <span className="floating-chip chip-dashboard">Power BI</span>
          <span className="floating-chip chip-python">Python</span>
          <span className="floating-chip chip-story">Storytelling</span>
          <span className="floating-chip chip-aws">AWS</span>
          <div className="portrait-frame">
            <img
              className="profile-photo"
              src={`${import.meta.env.BASE_URL}image/Daniela Roldan.jpeg`}
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
