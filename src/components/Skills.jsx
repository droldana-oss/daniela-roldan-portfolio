import { Database, LineChart, Settings2, Wrench } from "lucide-react";
import { skillGroups } from "../data/skills";
import { SectionHeading } from "./SectionHeading";

const icons = [LineChart, Settings2, Database, Wrench];

export function Skills() {
  return (
    <section className="section soft" id="habilidades">
      <div className="container">
        <SectionHeading
          eyebrow="Habilidades"
          title="Herramientas para comprender y comunicar datos"
          description="Tecnologías y conocimientos que desarrollo a través de proyectos académicos y análisis aplicados."
          centered
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <article className="skill-card" key={group.title}>
                <Icon className="skill-icon" size={23} />
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="pill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

