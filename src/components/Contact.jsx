import { Download, Github, Linkedin, Mail } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section className="section contact" id="contacto">
      <div className="container contact-card vivid-card">
        <p className="eyebrow">Contacto</p>
        <h2>Conversemos sobre datos y oportunidades</h2>
        <p>
          Estoy interesada en oportunidades en análisis de datos e inteligencia
          de negocio, donde pueda aportar visualización, pensamiento analítico y
          soluciones útiles para la toma de decisiones.
        </p>
        <div className="contact-actions">
          <ButtonLink
            href={`mailto:${profile.email}`}
            icon={Mail}
          >
            {profile.email}
          </ButtonLink>
          <ButtonLink
            href={profile.linkedin}
            icon={Linkedin}
            variant="secondary"
          >
            LinkedIn
          </ButtonLink>
          <ButtonLink href={profile.github} icon={Github} variant="secondary">
            GitHub
          </ButtonLink>
          <ButtonLink
            href={profile.resume}
            icon={Download}
            variant="secondary"
            download
          >
            CV
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
