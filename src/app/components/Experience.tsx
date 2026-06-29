import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import luisExperienceSection from "../assets/luis-experience.png";

const experiences = [
  {
    company: "GlobalLogic",
    role: "React Native Software Engineer",
    period: "2021 - Presente",
    description: "Desarrollo de aplicaciones mobile para clientes internacionales utilizando React Native y TypeScript."
  },
  {
    company: "GlobalLogic",
    role: "Drupal Front-End Engineer",
    period: "2020 - 2021",
    description: "Desarrollo frontend de sitios institucionales de alto tráfico con Drupal, JavaScript y CSS."
  },
  {
    company: "Realmedia Network",
    role: "Drupal Front-End Developer",
    period: "2019 - 2020",
    description: "Implementación de interfaces web responsive y optimización de performance en proyectos Drupal."
  },
  {
    company: "America Virtual",
    role: "Front-End Drupal Developer",
    period: "2018 - 2019",
    description: "Desarrollo de componentes frontend y mantenimiento de plataformas web corporativas."
  },
  {
    company: "Universidad Nacional de Salta",
    role: "Programador Full Stack",
    period: "2017 - 2018",
    description: "Desarrollo de sistemas internos y aplicaciones web para gestión universitaria."
  }
];

export function Experience() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16" id="experiencia">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Experiencia <span className="text-[#E63946]">profesional</span>
              </h2>
              <p className="text-xl text-[#B5B5B5]">
                +6 años desarrollando soluciones para empresas y proyectos reales
              </p>
            </motion.div>
            
            <div className="space-y-6 relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-8 bottom-8 w-0.5 bg-[#333333]" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 bg-[#E63946] rounded-full border-4 border-[#111111]" />
                  
                  <div className="bg-[#242424] border border-[#333333] rounded-lg p-6 hover:border-[#E63946] transition-all duration-300">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-[#F5F5F5]">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-[#E63946] font-medium">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-4 h-4 text-[#B5B5B5]" />
                      <span className="text-[#B5B5B5] font-medium">{exp.company}</span>
                    </div>
                    
                    <p className="text-[#B5B5B5] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right side - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center lg:sticky lg:top-24"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#E63946]/20 blur-3xl rounded-full" />
              <img
                src={luisExperienceSection}
                alt="Developer working"
                className="relative rounded-2xl w-full max-w-md border border-[#333333]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
