import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

import cardAlquiturno from "../assets/card-alquiturno.png";
import cardTribunal from "../assets/card-tribunal.png";
import cardClaro from "../assets/card-claro.png";
import cardAnses from "../assets/card-anses.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";

type ProjectMetaItem = {
  label: string;
  value: string;
};

type ProjectModalData = {
  title: string;
  summary: string;
  meta: ProjectMetaItem[];
  context: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  technologies: string[];
  impact: string;
  closing: string;
};

type ProjectItem = {
  id: string;
  title: string;
  shortDescription: string;
  type: string;
  tags: string[];
  image: string;
  modal: ProjectModalData;
};

const projects: ProjectItem[] = [
  {
    id: "alquiturno",
    title: "AlquiTurno",
    shortDescription:
      "SaaS de gestión y reservas para clubes de pádel, con panel administrativo, app mobile, pagos online, roles y operación multi-club.",
    type: "SaaS",
    tags: ["Next.js", "React Native", "NestJS", "PostgreSQL", "Mercado Pago"],
    image: cardAlquiturno,
    modal: {
      title: "AlquiTurno — SaaS de gestión y reservas para clubes de pádel",
      summary:
        "Plataforma SaaS multi-tenant desarrollada para digitalizar la operación diaria de clubes de pádel: gestión de canchas, disponibilidad horaria, reservas, pagos, empleados, roles, reportes y experiencia mobile para jugadores.",
      meta: [
        { label: "Tipo", value: "SaaS / Full Stack / Mobile" },
        { label: "Rol", value: "Product Developer" },
        { label: "Año", value: "2026 - Actualidad" },
        { label: "Estado", value: "Proyecto propio" },
      ],
      context:
        "Muchos clubes gestionan reservas, pagos y disponibilidad de forma manual mediante WhatsApp, planillas o sistemas poco integrados. Esto genera errores, turnos duplicados, falta de control sobre cobros y poca visibilidad de la operación diaria.",
      problem:
        "El desafío era construir una solución centralizada que permitiera administrar varios clubes, canchas, horarios, reservas, pagos y usuarios desde una plataforma clara, escalable y fácil de usar.",
      solution:
        "Desarrollé una plataforma SaaS completa compuesta por un panel web administrativo, una app mobile para jugadores y un backend propio con reglas de negocio, roles, permisos, reservas, pagos online y despliegue en entornos de staging y producción.",
      role:
        "Product Developer / Full Stack Developer. Me encargué del diseño técnico, arquitectura, frontend web, backend, app mobile, base de datos, integración de pagos, lógica de reservas, roles, permisos, despliegues y evolución del producto.",
      features: [
        "Gestión de clubes y canchas.",
        "Configuración de disponibilidad horaria.",
        "Reservas online para jugadores.",
        "Panel administrativo para owners y empleados.",
        "Roles y permisos diferenciados.",
        "Pagos y señas online con Mercado Pago.",
        "Estados de reserva y control de saldos.",
        "Reportes y operación diaria.",
        "App mobile desarrollada con React Native / Expo.",
        "Backend modular con NestJS, Prisma, PostgreSQL y Redis.",
      ],
      technologies: [
        "Next.js",
        "React",
        "React Native",
        "Expo",
        "TypeScript",
        "NestJS",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "Mercado Pago",
        "REST APIs",
        "Render",
        "Cloudflare",
        "Git",
      ],
      impact:
        "El proyecto demuestra capacidad para construir un producto digital completo desde cero, combinando frontend, backend, mobile, base de datos, pagos, reglas de negocio y despliegue real en producción.",
      closing:
        "AlquiTurno es mi proyecto propio más importante y refleja mi capacidad para desarrollar productos SaaS completos, escalables y orientados a resolver problemas reales de negocio.",
    },
  },
  {
    id: "claro-pay",
    title: "Claro Pay",
    shortDescription:
      "Participación en una app mobile financiera de alto volumen, trabajando en flujos críticos, KYC, APIs, Redux Toolkit y mejoras de arquitectura.",
    type: "Mobile",
    tags: ["React Native", "TypeScript", "Redux Toolkit", "Axios", "Jest"],
    image: cardClaro,
    modal: {
      title: "Claro Pay — App mobile financiera",
      summary:
        "Participación como React Native Software Engineer en una billetera virtual de alto volumen, enfocada en pagos, transferencias, validación de usuarios, integración con servicios externos y experiencia mobile segura.",
      meta: [
        { label: "Tipo", value: "Mobile / Fintech" },
        { label: "Rol", value: "React Native Software Engineer" },
        { label: "Período", value: "2023 - 2025" },
        { label: "Empresa", value: "GlobalLogic" },
      ],
      context:
        "Claro Pay es una aplicación financiera mobile que requiere estabilidad, seguridad, buena experiencia de usuario y conexión con múltiples servicios externos para operar pagos, transferencias y validaciones de identidad.",
      problem:
        "El producto necesitaba evolucionar funcionalidades críticas, mejorar flujos existentes, integrar APIs, mantener calidad de código y optimizar comportamientos relacionados con servicios externos.",
      solution:
        "Participé en el desarrollo de funcionalidades mobile con React Native y TypeScript, trabajando sobre flujos de usuario, componentes reutilizables, navegación, manejo de estado, integración de APIs, testing y mejoras de arquitectura.",
      role:
        "React Native Software Engineer. Lideré el desarrollo completo de la épica KYC, participé en definición técnica, planificación, ejecución, integración de APIs, resolución de bugs, mejoras UI/UX y acompañamiento técnico a un desarrollador junior.",
      features: [
        "Liderazgo técnico de la épica KYC.",
        "Desarrollo de pantallas y flujos mobile.",
        "Integración con APIs externas.",
        "Manejo de estado con Redux Toolkit.",
        "Implementación de componentes reutilizables.",
        "Resolución de bugs y mejoras de experiencia de usuario.",
        "Participación en migración de la app para ejecutarse sin Expo.",
        "Mejoras para reducir consultas al servicio externo de CVU.",
        "Mentoría y acompañamiento técnico a un desarrollador junior.",
        "Trabajo colaborativo con equipos multidisciplinarios bajo metodología ágil.",
      ],
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "React Navigation",
        "Axios",
        "Jest",
        "ESLint",
        "Prettier",
        "Git",
        "CI",
        "Agile",
      ],
      impact:
        "Esta experiencia demuestra mi capacidad para trabajar en productos mobile reales, con alto volumen de usuarios, flujos críticos, equipos multidisciplinarios y estándares de calidad propios de una aplicación financiera.",
      closing:
        "Claro Pay representa mi experiencia en desarrollo mobile profesional, integración de servicios críticos y trabajo dentro de equipos de producto de alto rendimiento.",
    },
  },
  {
    id: "tribunal-de-faltas",
    title: "Sistema Tribunal de Faltas",
    shortDescription:
      "Sistema administrativo desarrollado desde cero para digitalizar expedientes, infracciones, multas, usuarios, reportes y control de accesos.",
    type: "Sistema a medida",
    tags: ["React", "Node.js", "Express", "MySQL", "REST API"],
    image: cardTribunal,
    modal: {
      title: "Sistema de gestión administrativa — Tribunal de Faltas",
      summary:
        "Sistema web a medida desarrollado para digitalizar procesos administrativos de un Tribunal de Faltas, centralizando la gestión de infracciones, expedientes, multas, usuarios, reportes y control de accesos.",
      meta: [
        { label: "Tipo", value: "Sistema a medida" },
        { label: "Rol", value: "Full Stack Developer" },
        { label: "Estado", value: "Proyecto freelance" },
        { label: "Área", value: "Gestión administrativa" },
      ],
      context:
        "El organismo necesitaba ordenar y digitalizar procesos administrativos que dependían de registros manuales o herramientas poco integradas, dificultando el seguimiento de casos, multas y expedientes.",
      problem:
        "La gestión administrativa requería una solución que permitiera registrar información, consultar datos, controlar estados, generar reportes y administrar usuarios con distintos niveles de acceso.",
      solution:
        "Desarrollé un sistema web completo desde cero, con frontend en React, backend en Node.js/Express y base de datos MySQL, orientado a facilitar la carga, seguimiento y administración de procesos internos.",
      role:
        "Full Stack Developer. Me encargué del relevamiento funcional, diseño de solución, modelado de base de datos, desarrollo frontend, desarrollo backend, API REST, módulos principales, roles, reportes y mantenimiento evolutivo.",
      features: [
        "Gestión de infracciones.",
        "Administración de expedientes.",
        "Registro y seguimiento de multas.",
        "Gestión de usuarios.",
        "Roles y control de accesos.",
        "Reportes administrativos.",
        "API REST propia.",
        "Modelado de base de datos relacional.",
        "Soporte técnico y mantenimiento evolutivo.",
      ],
      technologies: [
        "ReactJS",
        "Node.js",
        "Express",
        "MySQL",
        "REST APIs",
        "JavaScript",
        "HTML5",
        "CSS",
        "Git",
      ],
      impact:
        "El sistema permitió transformar procesos administrativos en una solución digital centralizada, mejorando el orden, la trazabilidad de la información y la capacidad de gestión interna.",
      closing:
        "Este proyecto demuestra mi capacidad para entender procesos reales de una organización y convertirlos en sistemas web funcionales, mantenibles y adaptados a cada necesidad.",
    },
  },
  {
    id: "anses-drupal",
    title: "ANSES / Drupal Institucional",
    shortDescription:
      "Desarrollo y mantenimiento frontend para plataformas institucionales de alto tráfico, con foco en Drupal, Twig, UX, responsive y compatibilidad cross-browser.",
    type: "Institucional",
    tags: ["Drupal", "Twig", "JavaScript", "CSS", "HTML5"],
    image: cardAnses,
    modal: {
      title: "ANSES — Desarrollo frontend institucional",
      summary:
        "Participación en el desarrollo y mantenimiento frontend de plataformas institucionales de ANSES Argentina, trabajando sobre interfaces, temas, componentes, maquetación, estilos, módulos personalizados, UX y compatibilidad cross-browser.",
      meta: [
        { label: "Tipo", value: "Frontend institucional" },
        { label: "Rol", value: "Front-End Drupal Developer" },
        { label: "Empresa", value: "America Virtual" },
        { label: "Área", value: "Plataforma institucional" },
      ],
      context:
        "ANSES cuenta con plataformas institucionales de alto tráfico que requieren interfaces claras, accesibles, mantenibles y compatibles con distintos navegadores y dispositivos.",
      problem:
        "El desafío era implementar y mantener componentes frontend dentro de un ecosistema Drupal, respetando lineamientos institucionales, necesidades de UX, compatibilidad visual y funcionamiento estable en distintas secciones del sitio.",
      solution:
        "Participé en tareas de desarrollo frontend, maquetación Twig, estilos, componentes, ajustes visuales, mantenimiento de secciones web, intranets y sistemas internos vinculados a trámites y canales de gestión.",
      role:
        "Front-End Drupal Developer. Trabajé en desarrollo y mantenimiento del sitio web de ANSES Argentina, incluyendo temas, maquetación Twig, estilos, módulos personalizados, UX y compatibilidad cross-browser.",
      features: [
        "Desarrollo frontend en Drupal.",
        "Maquetación con Twig.",
        "Implementación de estilos y componentes.",
        "Mantenimiento de secciones institucionales.",
        "Participación en Noticias, Observatorio de la Seguridad Social, intranets y sistemas internos.",
        "Ajustes de UX.",
        "Compatibilidad cross-browser.",
        "Soporte y mantenimiento evolutivo.",
      ],
      technologies: [
        "Drupal",
        "Twig",
        "PHP",
        "JavaScript",
        "HTML5",
        "CSS",
        "Sass",
        "UX",
        "Responsive Design",
        "Git",
      ],
      impact:
        "Esta experiencia demuestra mi capacidad para trabajar en plataformas institucionales grandes, con requerimientos de estabilidad, mantenimiento, accesibilidad visual y colaboración con equipos técnicos.",
      closing:
        "ANSES refuerza mi experiencia en frontend institucional, mantenimiento de plataformas de alto tráfico y desarrollo dentro de ecosistemas CMS complejos.",
    },
  },
];

type ProjectModalProps = {
  project: ProjectItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {project ? (
        <DialogContent
          closeLabel="Cerrar modal"
          className="w-[calc(100%-1rem)] max-w-[calc(100%-1rem)] overflow-hidden rounded-[28px] border border-white/10 bg-[#151515] p-0 text-white shadow-[0_36px_90px_rgba(0,0,0,0.55)] sm:max-w-[960px]"
        >
          <div className="max-h-[88svh] overflow-y-auto">
            <div className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(230,57,70,0.10)_0%,rgba(21,21,21,0.96)_45%,rgba(21,21,21,1)_100%)] px-5 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(260px,0.46fr)_minmax(0,0.54fr)]">
                <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#101012] shadow-[0_18px_46px_rgba(0,0,0,0.28)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="pr-6">
                  <span className="inline-flex rounded-full border border-[#ff4255]/24 bg-[#ff4255]/12 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#ff7b87]">
                    {project.type}
                  </span>
                  <DialogTitle className="mt-4 text-[1.9rem] font-black leading-tight tracking-[-0.04em] text-white sm:text-[2.2rem]">
                    {project.modal.title}
                  </DialogTitle>
                  <DialogDescription className="mt-4 text-base leading-7 text-[#b8b8bc] sm:text-[1.02rem]">
                    {project.modal.summary}
                  </DialogDescription>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {project.modal.meta.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                      >
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8f9097]">
                          {item.label}
                        </div>
                        <div className="mt-1 text-sm font-medium text-white sm:text-[0.95rem]">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 pb-6 pt-6 sm:px-8 sm:pb-8">
              <div className="grid gap-6 lg:grid-cols-2">
                <CaseStudyBlock title="Contexto">
                  <p>{project.modal.context}</p>
                </CaseStudyBlock>
                <CaseStudyBlock title="Problema">
                  <p>{project.modal.problem}</p>
                </CaseStudyBlock>
                <CaseStudyBlock title="Solución">
                  <p>{project.modal.solution}</p>
                </CaseStudyBlock>
                <CaseStudyBlock title="Mi rol">
                  <p>{project.modal.role}</p>
                </CaseStudyBlock>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                <CaseStudyBlock title="Funcionalidades principales">
                  <ul className="space-y-3">
                    {project.modal.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-[#c5c5c8]">
                        <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#ff4255]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CaseStudyBlock>

                <CaseStudyBlock title="Tecnologías">
                  <div className="flex flex-wrap gap-2.5">
                    {project.modal.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-[#e7e7ea]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </CaseStudyBlock>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <CaseStudyBlock title="Impacto / valor">
                  <p>{project.modal.impact}</p>
                </CaseStudyBlock>
                <CaseStudyBlock title="Cierre">
                  <p>{project.modal.closing}</p>
                </CaseStudyBlock>
              </div>
            </div>
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}

function CaseStudyBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(34,34,36,0.94)_0%,rgba(24,24,26,0.98)_100%)] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
      <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-white">
        {title}
      </h3>
      <div className="mt-3 text-[0.98rem] leading-8 text-[#b8b8bc]">{children}</div>
    </section>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <section className="bg-[#151515] px-4 py-20 md:px-8 lg:px-16" id="proyectos">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Proyectos <span className="text-[#E63946]">destacados</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-[#B5B5B5]">
              Casos reales de desarrollo web, mobile y sistemas a medida
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group overflow-hidden rounded-[24px] border border-[#333333] bg-[#242424] transition-all duration-300 hover:border-[#E63946]/60 hover:shadow-[0_20px_54px_rgba(230,57,70,0.10)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full border border-[#ff707a]/20 bg-[#E63946]/88 px-3 py-1 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(230,57,70,0.24)]">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="flex min-h-[18.5rem] flex-col p-6">
                  <h3 className="text-[1.75rem] font-bold text-[#F5F5F5] transition-colors group-hover:text-[#E63946]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[1rem] leading-7 text-[#B5B5B5]">
                    {project.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#3a3a3f] bg-[#1b1b1d] px-3.5 py-1.5 text-sm font-medium text-[#d4d4d8] transition-all duration-200 group-hover:border-[#E63946]/28"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.98rem] font-semibold text-[#ff5a68] transition-all duration-200 hover:gap-3 hover:text-[#ff7d89] focus:outline-none"
                  >
                    Ver caso
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null);
          }
        }}
      />
    </>
  );
}
