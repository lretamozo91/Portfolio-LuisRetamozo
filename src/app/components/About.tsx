import { motion } from "motion/react";
import { Award, Briefcase, GraduationCap, Rocket } from "lucide-react";
import luisAboutSection from "../assets/luis-sobre-mi.png";

export function About() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16" id="sobre-mi">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre <span className="text-[#E63946]">mí</span>
              </h2>
              
              <p className="text-xl text-[#F5F5F5] leading-relaxed mb-6">
                Soy Luis Retamozo, desarrollador de software de Salta, Argentina.
              </p>
              
              <p className="text-lg text-[#B5B5B5] leading-relaxed">
                Me especializo en crear soluciones web y mobile que combinan buena experiencia de usuario, 
                arquitectura sólida y foco en resolver problemas reales. Mi objetivo es transformar ideas 
                en productos digitales que generen valor y resultados concretos.
              </p>
            </motion.div>
            
            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  title: "+6 años de experiencia",
                  description: "Desarrollando productos reales"
                },
                {
                  icon: Briefcase,
                  title: "Full Stack Developer",
                  description: "Web y Mobile completo"
                },
                {
                  icon: GraduationCap,
                  title: "Técnico Universitario",
                  description: "En Programación"
                },
                {
                  icon: Rocket,
                  title: "Desarrollo SaaS propio",
                  description: "Experiencia en emprendimiento"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#242424] border border-[#333333] rounded-xl p-5 hover:border-[#E63946] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E1E1E] border border-[#333333] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#E63946]" />
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-[#F5F5F5] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#B5B5B5]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E63946] to-[#E63946]/50 rounded-2xl blur opacity-30"></div>
              <img
                src={luisAboutSection}
                alt="Luis Retamozo"
                className="relative rounded-2xl w-full shadow-2xl border border-[#333333]"
              />
            </div>
            
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-[#242424] border border-[#333333] rounded-lg p-4 shadow-xl"
            >
              <div className="text-2xl font-bold text-[#E63946]">6+</div>
              <div className="text-xs text-[#B5B5B5]">Años</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-[#242424] border border-[#333333] rounded-lg p-4 shadow-xl"
            >
              <div className="text-2xl font-bold text-[#E63946]">50+</div>
              <div className="text-xs text-[#B5B5B5]">Proyectos</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
