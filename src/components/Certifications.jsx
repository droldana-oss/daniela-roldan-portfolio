import { Award } from "lucide-react";
import { certifications } from "../data/certifications";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section className="section soft" id="certificaciones">
      <div className="container">
        <SectionHeading
          eyebrow="Formación continua"
          title="Licencias y certificaciones"
          description="Aprendizaje complementario en Python, bases de datos, análisis y visualización."
          centered
        />
        <div className="certificate-grid">
          {certifications.map((certificate) => (
            <article className="certificate" key={certificate.title}>
              <Award size={22} />
              <div>
                <span>{certificate.focus}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.institution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

