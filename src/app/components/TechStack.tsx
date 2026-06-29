import { motion } from "motion/react";

const techStack = [
  {
    category: "Frontend",
    summary: "Interfaces modernas, rápidas y enfocadas en producto.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    category: "Mobile",
    summary: "Apps cross-platform listas para crecer y publicar.",
    technologies: ["React Native", "Expo", "React Navigation"],
  },
  {
    category: "Backend",
    summary: "APIs, arquitectura y lógica para operaciones reales.",
    technologies: [
      "Node.js",
      "Express",
      "NestJS",
      "APIs REST",
      "Autenticación",
      "Roles y permisos",
    ],
  },
  {
    category: "Bases de datos",
    summary: "Persistencia y modelado con foco en rendimiento y mantenimiento.",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis", "Prisma"],
  },
  {
    category: "CMS",
    summary: "Experiencia en entornos editoriales y sitios institucionales.",
    technologies: ["Drupal 8/9", "Acquia Site Studio", "WordPress", "Twig"],
  },
  {
    category: "Herramientas",
    summary: "Flujos de trabajo ordenados para equipos y entregas confiables.",
    technologies: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Jira",
      "Render",
      "CI/CD básico",
      "Jest",
      "ESLint",
      "Prettier",
    ],
  },
];

const stackHighlights = [
  { value: "+6", label: "años construyendo productos" },
  { value: "Web + Mobile", label: "soluciones full stack" },
  { value: "APIs y SaaS", label: "experiencia en negocio real" },
  { value: "CMS + DevTools", label: "stack versátil" },
];

export function TechStack() {
  return (
    <section className="bg-[#151515] px-5 py-20 sm:px-8 lg:px-16 lg:py-24 xl:px-24" id="stack">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-16 max-w-[46rem] text-center"
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#ff6b79]">
            Tecnologías y herramientas
          </span>
          <h2 className="mt-6 text-[2.8rem] font-black leading-[0.94] tracking-[-0.05em] text-white sm:text-[3.5rem] lg:text-[4.2rem]">
            Stack <span className="text-[#ff4255]">técnico</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#b8b8bc] sm:text-[1.08rem]">
            Tecnologías que uso para construir productos web y mobile claros,
            mantenibles y listos para producción.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {techStack.map((group, categoryIndex) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: categoryIndex * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(34,34,36,0.98)_0%,rgba(27,27,29,0.98)_100%)] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-[#ff4255]/25 hover:shadow-[0_22px_56px_rgba(255,66,85,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[1.25rem] font-semibold tracking-[-0.03em] text-white">
                    {group.category}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#8f9097]">
                    {group.summary}
                  </p>
                </div>
                <span className="rounded-full border border-[#ff4255]/18 bg-[#ff4255]/8 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#ff6b79]">
                  {group.technologies.length} items
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.06 + index * 0.02 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-[#e5e5e7] transition-all duration-200 hover:border-[#ff4255]/35 hover:bg-[#ff4255]/10 hover:text-white"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stackHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5 shadow-[0_16px_38px_rgba(0,0,0,0.16)]"
            >
              <div className="text-[1.35rem] font-semibold tracking-[-0.03em] text-white">
                {item.value}
              </div>
              <div className="mt-1 text-sm leading-6 text-[#9fa0a6]">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
