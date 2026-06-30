import { motion } from "motion/react";
import { Code, Cog, Puzzle, Rocket, Smartphone, Wrench } from "lucide-react";

import luisProfessionalServiceSection from "../assets/luis-professional-service.png";

const servicesOffered = [
  {
    icon: Code,
    title: "Sitios web profesionales",
    description:
      "Sitios modernos y responsive para negocios, profesionales y marcas personales.",
    tags: ["Landing pages", "Institucionales"],
  },
  {
    icon: Cog,
    title: "Sistemas a medida",
    description:
      "Sistemas web para ordenar procesos, usuarios, datos, reportes y gestion interna.",
    tags: ["Paneles admin", "Roles y reportes"],
  },
  {
    icon: Rocket,
    title: "MVP y SaaS",
    description:
      "Productos digitales con frontend, backend, base de datos e integraciones clave.",
    tags: ["MVP", "SaaS escalable"],
  },
  {
    icon: Smartphone,
    title: "Aplicaciones mobile",
    description:
      "Apps moviles con React Native conectadas a APIs, autenticacion y servicios externos.",
    tags: ["React Native", "APIs"],
  },
  {
    icon: Puzzle,
    title: "Integraciones y automatizacion",
    description:
      "Conexion con APIs, pagos online, formularios y flujos para reducir tareas manuales.",
    tags: ["APIs REST", "Mercado Pago"],
  },
  {
    icon: Wrench,
    title: "Mantenimiento y mejoras",
    description:
      "Correccion, evolucion y optimizacion de sitios, sistemas o aplicaciones existentes.",
    tags: ["Soporte", "Nuevas funciones"],
  },
];

export function ServicesOffered() {
  return (
    <section className="px-4 py-20 md:px-8 lg:px-16" id="servicios">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-4xl text-center"
          // className="mb-10"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Servicios <span className="text-[#E63946]">profesionales</span>
          </h2>
          <p className="text-xl leading-8 text-[#B5B5B5]">
            Puedo ayudarte a crear desde una web profesional para tu negocio
            hasta una plataforma completa con frontend, backend, base de datos
            e integraciones.
          </p>
        </motion.div>
        {/* <div className="grid gap-12 lg:grid-cols-[minmax(300px,0.9fr)_minmax(0,1.1fr)] lg:items-start"> */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="order-2 lg:order-1 lg:sticky lg:top-24 lg:col-span-4"
            // className="order-2 lg:order-1 lg:sticky lg:top-24"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#E63946]/18 blur-3xl" />
              <img
                src={luisProfessionalServiceSection}
                alt="Luis Retamozo presentando servicios profesionales"
                className="relative w-full rounded-2xl border border-[#333333]"
              />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 lg:col-span-8">

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {servicesOffered.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group flex min-h-[18.5rem] flex-col rounded-[24px] border border-[#333333] bg-[linear-gradient(180deg,rgba(36,36,36,0.98)_0%,rgba(29,29,31,0.98)_100%)] p-5 shadow-[0_16px_36px_rgba(0,0,0,0.16)] transition-all duration-300 hover:border-[#E63946]/55 hover:shadow-[0_18px_42px_rgba(230,57,70,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#333333] bg-[#1E1E1E] transition-all duration-300 group-hover:border-[#E63946]/55 group-hover:bg-[#E63946]/10">
                    <service.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[#E63946]"
                    />
                  </div>

                  <h3 className="mt-4 text-[1.06rem] font-semibold leading-6 text-[#F5F5F5]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#B5B5B5]">
                    {service.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.78rem] font-medium text-[#c8c8cc] transition-all duration-200 hover:border-[#E63946]/45 hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(30,30,30,0.96)_0%,rgba(24,24,26,0.98)_100%)] px-6 py-6 shadow-[0_20px_46px_rgba(0,0,0,0.18)]"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-[1.2rem] font-semibold text-white">
                    No sabes exactamente que necesitas?
                  </h3>
                  <p className="mt-2 max-w-[42rem] text-[0.98rem] leading-7 text-[#B5B5B5]">
                    Contame tu idea o problema y te ayudo a definir la mejor
                    solucion tecnica.
                  </p>
                </div>

                <motion.a
                  href="#contacto"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#E63946] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(230,57,70,0.22)] transition-colors hover:bg-[#f04956]"
                >
                  Hablemos de tu proyecto
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
