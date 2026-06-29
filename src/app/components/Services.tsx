import { motion } from "motion/react";
import { Globe, Layout, Settings, Smartphone } from "lucide-react";

import luisBuildSection from "../assets/luis-build-workspace169.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Globe,
    title: "Aplicaciones web y SaaS",
    description:
      "Paneles administrativos, sistemas de reservas, plataformas internas, dashboards y gestión completa de usuarios.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones mobile",
    description:
      "Apps con React Native y Expo, autenticación, navegación, consumo de APIs y preparación para publicar en tiendas.",
  },
  {
    icon: Settings,
    title: "Sistemas a medida",
    description:
      "Automatización de procesos, reportes, roles, permisos, bases de datos y APIs pensadas para operaciones reales.",
  },
  {
    icon: Layout,
    title: "Sitios web profesionales",
    description:
      "Landings, sitios institucionales y portfolios claros, rápidos y orientados a conversión.",
  },
];

export function Services() {
  return (
    <section
      id="que-puedo-construir"
      className="relative overflow-hidden bg-[#101011] px-5 py-20 sm:px-8 lg:px-16 lg:py-24 xl:px-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-10 h-72 w-72 rounded-full bg-[#ff4255]/7 blur-[140px]" />
        <div className="absolute right-[8%] top-[18%] h-80 w-80 rounded-full bg-white/[0.03] blur-[160px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
        <div className="max-w-[36rem]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="text-[2.8rem] font-black leading-[0.94] tracking-[-0.05em] text-white sm:text-[3.5rem] lg:text-[4.15rem]">
              ¿Qué puedo <span className="text-[#ff4255]">construir</span>?
            </h2>
            <p className="mt-5 max-w-[31rem] text-lg leading-8 text-[#b8b8bc] sm:text-[1.1rem]">
              Desde aplicaciones web y mobile hasta sistemas a medida, con foco
              en operación, claridad de producto y escalabilidad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative mt-10"
          >
            <div className="pointer-events-none absolute left-[10%] top-[18%] h-[44%] w-[84%] rounded-[36px] bg-[#ff4255]/16 blur-[72px]" />
            <div className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(39,22,25,0.98)_0%,rgba(18,18,20,0.98)_42%,rgba(13,13,14,1)_100%)] p-3 shadow-[0_34px_90px_rgba(0,0,0,0.44)]">
              <div className="rounded-[24px] border border-white/8 bg-[#171718] p-2.5">
                <div className="relative overflow-hidden rounded-[20px] bg-[#111112]">
                  <ImageWithFallback
                    src={luisBuildSection}
                    alt="Luis Retamozo trabajando en la sección Qué puedo construir"
                    className="w-full object-cover"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative min-h-[13.2rem] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(34,34,36,0.96)_0%,rgba(27,27,29,0.98)_100%)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-[#ff4255]/35 hover:shadow-[0_20px_54px_rgba(255,66,85,0.1)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff4255]/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#ff4255]/35 group-hover:bg-[#ff4255]/10">
                <service.icon className="h-6 w-6 text-[#ff4255]" />
              </div>

              <h3 className="mt-6 text-[1.42rem] font-semibold tracking-[-0.03em] text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-[1rem] leading-8 text-[#a8a8ad]">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
