import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

import luisExperienceSection from "../assets/luis-experience.png";

const experiences = [
  {
    company: "GlobalLogic",
    role: "React Native Software Engineer",
    period: "Feb 2023 - Nov 2025",
    mode: "Remoto",
    description:
      "Participe en Claro Pay, una app mobile financiera de alto volumen. Lidere la epica KYC, integre APIs, trabaje con Redux Toolkit, mejoras UI/UX, testing y optimizacion de consultas a servicios externos.",
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "Axios", "Jest"],
  },
  {
    company: "GlobalLogic",
    role: "Drupal Front-End Engineer",
    period: "Ago 2022 - Feb 2023",
    mode: "Remoto",
    description:
      "Implemente plantillas, estilos y funcionalidades frontend en Drupal 9 para Banco BCI y Shadowbox Studios, con foco en componentes, responsive design y soporte visual.",
    technologies: ["Drupal 9", "Twig", "PHP", "JavaScript", "CSS"],
  },
  {
    company: "America Virtual",
    role: "Front-End Drupal Developer",
    period: "Abr 2021 - May 2024",
    mode: "Full-time / Freelance",
    description:
      "Desarrolle y mantuve interfaces para plataformas institucionales de ANSES Argentina, trabajando en maquetacion Twig, estilos, UX, modulos personalizados y compatibilidad cross-browser.",
    technologies: ["Drupal", "Twig", "JavaScript", "HTML5", "CSS", "Sass"],
  },
  {
    company: "Realmedia Network",
    role: "Drupal Front-End Developer",
    period: "Mar 2022 - Ago 2022",
    mode: "Remoto",
    description:
      "Desarrolle y mantuve componentes Drupal con Acquia Site Studio para Grupo Security y distintas plataformas corporativas relacionadas.",
    technologies: ["Drupal", "Acquia Site Studio", "Twig", "CSS", "JavaScript"],
  },
  {
    company: "Activarte",
    role: "Drupal 8/9 Front-End Developer",
    period: "Abr 2021 - Feb 2024",
    mode: "Freelance",
    description:
      "Implemente plantillas, estilos y comportamientos dinamicos para plataformas web responsive en Drupal, incluyendo proyectos como La Meva Llar y Club San Jorge.",
    technologies: ["Drupal 8/9", "Twig", "JavaScript", "HTML5", "CSS"],
  },
  {
    company: "Nybble Group",
    role: "Drupal Front-End Developer",
    period: "Sep 2019 - Abr 2021",
    mode: "Hibrido",
    description:
      "Desarrolle interfaces y componentes frontend en Drupal para sitios internacionales de seguros, participando tambien en QA funcional y trabajo coordinado con equipos web.",
    technologies: ["Drupal", "Twig", "JavaScript", "HTML5", "CSS", "QA"],
  },
  {
    company: "Universidad Nacional de Salta",
    role: "Programador Full Stack · Pasantia",
    period: "May 2018 - Ago 2019",
    mode: "Presencial",
    description:
      "Desarrolle y mantuve sistemas universitarios con SIU-Toba, Guarani 3W, PostgreSQL, Informix, PHP, JQuery y SQL.",
    technologies: ["PHP", "PostgreSQL", "Informix", "JQuery", "SQL", "SIU-Toba"],
  },
];

export function Experience() {
  return (
    <section className="px-4 py-20 md:px-8 lg:px-16" id="experiencia">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                Experiencia <span className="text-[#E63946]">profesional</span>
              </h2>
              <p className="text-xl text-[#B5B5B5]">
                Experiencias reales en mobile, Drupal, SaaS y sistemas orientados a negocio.
              </p>
            </motion.div>

            <div className="relative space-y-5">
              <div className="absolute bottom-6 left-[9px] top-8 w-px bg-[linear-gradient(180deg,rgba(230,57,70,0.45)_0%,rgba(51,51,51,0.9)_38%,rgba(51,51,51,0.35)_100%)]" />

              {experiences.map((experience, index) => (
                <motion.article
                  key={`${experience.company}-${experience.role}`}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-3 h-[18px] w-[18px] rounded-full border-4 border-[#111111] bg-[#E63946] shadow-[0_0_18px_rgba(230,57,70,0.32)]" />

                  <div className="rounded-[22px] border border-[#333333] bg-[linear-gradient(180deg,rgba(36,36,36,0.98)_0%,rgba(28,28,29,0.98)_100%)] p-5 shadow-[0_16px_38px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-[#E63946]/55 hover:shadow-[0_18px_44px_rgba(230,57,70,0.08)]">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-[#8f9097]">
                          <Briefcase className="h-4 w-4 text-[#E63946]" />
                          <span>{experience.company}</span>
                        </div>
                        <h3 className="mt-2 text-[1.18rem] font-bold leading-6 text-[#F5F5F5]">
                          {experience.role}
                        </h3>
                      </div>

                      <div className="rounded-full border border-[#E63946]/18 bg-[#E63946]/10 px-3 py-1 text-[0.78rem] font-medium text-[#ff808b]">
                        {experience.period} · {experience.mode}
                      </div>
                    </div>

                    <p className="mt-4 text-[0.98rem] leading-7 text-[#B5B5B5]">
                      {experience.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.8rem] font-medium text-[#c8c8cc] transition-all duration-200 hover:border-[#E63946]/45 hover:text-white"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center lg:sticky lg:top-24"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#E63946]/20 blur-3xl" />
              <img
                src={luisExperienceSection}
                alt="Developer working"
                className="relative w-full max-w-md rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
