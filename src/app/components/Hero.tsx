import { motion } from "motion/react";
import { Download, Eye, Mail } from "lucide-react";

import heroPortrait from "../assets/luis-perfil.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroStats = [
  { value: "+6 años", label: "experiencia profesional" },
  { value: "SaaS + Mobile", label: "productos reales" },
  { value: "Remoto", label: "Salta, Argentina" },
];

const floatingTags = [
  {
    title: "React",
    subtitle: "Frontend",
    className:
      "left-0 top-12 -translate-x-4 lg:-translate-x-6 xl:top-16 xl:-translate-x-7",
    duration: 4,
  },
  {
    title: "Node.js",
    subtitle: "Backend",
    className:
      "right-0 top-[62%] translate-x-4 lg:translate-x-6 xl:translate-x-7",
    duration: 4.6,
  },
  {
    title: "React Native",
    subtitle: "Mobile",
    className:
      "bottom-0 left-[18%] translate-y-5 lg:translate-y-6 xl:left-[22%] xl:translate-y-7",
    duration: 5.1,
  },
];

const backgroundGlow = {
  backgroundImage:
    "radial-gradient(circle at 82% 14%, rgba(244, 63, 79, 0.18), transparent 24%), radial-gradient(circle at 18% 34%, rgba(255, 255, 255, 0.05), transparent 28%), linear-gradient(180deg, #161214 0%, #0d0d0f 48%, #111111 100%)",
};

const backgroundGrid = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "120px 120px",
};

const imageOverlay = {
  backgroundImage:
    "radial-gradient(circle at top right, rgba(255, 88, 106, 0.26), transparent 26%), linear-gradient(180deg, rgba(17, 18, 20, 0) 0%, rgba(12, 12, 14, 0.34) 100%)",
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#0d0d0f] px-5 pb-20 pt-28 sm:px-8 lg:px-16 lg:pb-24 lg:pt-20 xl:px-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" style={backgroundGlow} />
        <div className="absolute inset-0 opacity-[0.09]" style={backgroundGrid} />
        <div className="absolute left-[-8%] top-[28%] h-72 w-72 rounded-full bg-[rgba(255,255,255,0.06)] blur-[140px]" />
        <div className="absolute right-[4%] top-[10%] h-80 w-80 rounded-full bg-[rgba(244,63,79,0.12)] blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#111111]" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[minmax(0,1.02fr)_minmax(460px,0.98fr)] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[640px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff4255] shadow-[0_0_16px_rgba(255,66,85,0.92)]" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[#ff6b79] sm:text-[0.75rem]">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 space-y-7 sm:mt-10"
          >
            <h1 className="text-[3.45rem] font-black leading-[0.9] tracking-[-0.05em] text-white sm:text-[4.55rem] lg:text-[5.35rem] xl:text-[5.9rem]">
              <span className="text-white">Soy </span>
              <span className="text-[#ff4255]">Luis</span>
              <span className="block text-[#ff4255]">Retamozo</span>
            </h1>

            <p className="text-[1.7rem] font-semibold leading-[1.28] tracking-[-0.03em] text-[#f2f2f3] sm:text-[2rem] lg:text-[2.18rem] xl:text-[2.34rem]">
              Desarrollo aplicaciones web y mobile para empresas, emprendedores y negocios.
            </p>

            <p className="max-w-[37rem] text-base leading-8 text-[#b8b8bc] sm:text-[1.06rem] sm:leading-8">
              Full Stack Developer con más de 6 años de experiencia en React, React Native,
              TypeScript, Node.js y construcción de productos digitales reales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 grid max-w-[32rem] gap-3 sm:grid-cols-2"
          >
            <motion.a
              href="#proyectos"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#f43f4f] px-6 text-base font-semibold text-white shadow-[0_16px_36px_rgba(244,63,79,0.28)] transition-colors hover:bg-[#ff5162]"
            >
              <Eye className="h-5 w-5" />
              Ver proyectos
            </motion.a>

            <motion.a
              href="#contacto"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-[rgba(255,255,255,0.12)] bg-white/[0.03] px-6 text-base font-semibold text-white shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <Mail className="h-5 w-5" />
              Contactarme
            </motion.a>

            <motion.a
              href="/CV_Luis_Retamozo_FullStack.pdf"
              download="CV_Luis_Retamozo_FullStack.pdf"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-[rgba(255,255,255,0.12)] bg-transparent px-6 text-base font-semibold text-white shadow-[0_14px_32px_rgba(0,0,0,0.18)] transition-colors hover:border-white/20 hover:bg-white/[0.03] sm:max-w-[14rem]"
            >
              <Download className="h-5 w-5" />
              Descargar CV
            </motion.a>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4 + index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur transition-colors hover:border-[rgba(244,63,79,0.3)] hover:bg-white/[0.045]"
              >
                <div className="text-[1.05rem] font-semibold tracking-[-0.02em] text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm leading-6 text-[#9fa0a6]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 42, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.16 }}
          className="relative mx-auto w-full max-w-[620px] lg:max-w-none"
        >
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f43f4f]/20 blur-[95px]" />
          <div className="absolute inset-x-[12%] bottom-3 h-20 rounded-full bg-[rgba(0,0,0,0.55)] blur-3xl" />

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35 }}
            className="relative rounded-[32px] border border-white/10 bg-white/[0.04] p-[14px] shadow-[0_36px_90px_rgba(0,0,0,0.5),0_0_42px_rgba(244,63,79,0.15)]"
          >
            <div className="absolute inset-0 rounded-[32px] border border-[rgba(255,66,85,0.18)]" />

            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#111214]">
              <div className="absolute inset-0 z-10" style={imageOverlay} />
              <ImageWithFallback
                src={heroPortrait}
                alt="Luis Retamozo - Full Stack Developer"
                className="aspect-[0.92] w-full object-cover object-center sm:aspect-[0.94] lg:aspect-[0.92]"
              />
            </div>

            {floatingTags.map((tag, index) => (
              <motion.div
                key={tag.title}
                animate={{ y: [0, index % 2 === 0 ? -9 : 9, 0] }}
                transition={{
                  duration: tag.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.35 * index,
                }}
                className={`absolute hidden min-w-[122px] rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(32,32,34,0.95)] px-4 py-3 shadow-[0_18px_36px_rgba(0,0,0,0.34)] backdrop-blur sm:flex ${tag.className}`}
              >
                <div>
                  <div className="text-[1.02rem] font-semibold leading-5 text-[#ff4c5f]">
                    {tag.title}
                  </div>
                  <div className="mt-1 text-sm leading-5 text-[#a7a8ad]">{tag.subtitle}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
