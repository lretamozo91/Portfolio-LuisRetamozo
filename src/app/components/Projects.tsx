import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import cardAlquiturno from "../assets/card-alquiturno.png";
import cardTribunal from "../assets/card-tribunal.png";
import cardClaro from "../assets/card-claro.png";
import cardAnses from "../assets/card-anses.png";

const projects = [
  {
    title: "AlquiTurno",
    category: "SaaS",
    description: "Plataforma SaaS completa para gestión de reservas en clubes de pádel. Sistema de turnos, pagos online y gestión administrativa.",
    image: cardAlquiturno,
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"]
  },
  {
    title: "Claro Pay",
    category: "Mobile",
    description: "Aplicación móvil financiera para gestión de pagos y transferencias. Interfaz intuitiva y segura para transacciones.",
    image: cardClaro,
    tech: ["React Native", "TypeScript", "Expo", "REST API"]
  },
  {
    title: "Sistema Tribunal de Faltas",
    category: "Sistema a medida",
    description: "Sistema administrativo completo para gestión de trámites, multas y seguimiento de casos en tribunales municipales.",
    image: cardTribunal,
    tech: ["React", "Next.js", "Node.js", "MySQL"]
  },
  {
    title: "ANSES / Drupal Institucional",
    category: "Institucional",
    description: "Desarrollo frontend de sitio institucional de alto tráfico con Drupal. Accesibilidad y performance optimizada.",
    image: cardAnses,
    tech: ["Drupal", "JavaScript", "CSS", "HTML5"]
  }
];

export function Projects() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#151515]" id="proyectos">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos <span className="text-[#E63946]">destacados</span>
          </h2>
          <p className="text-xl text-[#B5B5B5] max-w-2xl mx-auto">
            Casos reales de desarrollo web, mobile y sistemas a medida
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-[#242424] border border-[#333333] rounded-xl overflow-hidden hover:border-[#E63946] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#E63946] text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#F5F5F5] group-hover:text-[#E63946] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[#B5B5B5] mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#1E1E1E] border border-[#333333] text-[#B5B5B5] text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Button */}
                <button className="flex items-center gap-2 text-[#E63946] font-semibold group-hover:gap-3 transition-all">
                  Ver caso
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
