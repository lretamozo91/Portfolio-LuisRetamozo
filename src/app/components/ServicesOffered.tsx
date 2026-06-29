import { motion } from "motion/react";
import { Code, Cog, Rocket, Smartphone, Puzzle, Wrench } from "lucide-react";
import luisProfessionalServiceSection from "../assets/luis-professional-service.png";

const servicesOffered = [
  {
    icon: Code,
    title: "Desarrollo de sitios web profesionales",
    description: "Landing pages, sitios corporativos y portfolios modernos y optimizados."
  },
  {
    icon: Cog,
    title: "Desarrollo de sistemas a medida",
    description: "Soluciones personalizadas para gestión interna y procesos de negocio."
  },
  {
    icon: Rocket,
    title: "Desarrollo de MVP o SaaS",
    description: "Validá tu idea con un producto mínimo viable escalable y funcional."
  },
  {
    icon: Smartphone,
    title: "Desarrollo mobile",
    description: "Apps nativas para iOS y Android con tecnología multiplataforma."
  },
  {
    icon: Puzzle,
    title: "Integración con APIs y pagos",
    description: "Conectá tu sistema con servicios externos y procesadores de pago."
  },
  {
    icon: Wrench,
    title: "Mantenimiento y mejoras evolutivas",
    description: "Soporte continuo, actualizaciones y nuevas funcionalidades."
  }
];

export function ServicesOffered() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16" id="servicios">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#E63946]/20 blur-3xl rounded-full" />
              <img
                src={luisProfessionalServiceSection}
                alt="Client meeting"
                className="relative rounded-2xl w-full border border-[#333333]"
              />
            </div>
          </motion.div>
          
          {/* Right side - Services */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Servicios <span className="text-[#E63946]">profesionales</span>
              </h2>
              <p className="text-xl text-[#B5B5B5]">
                Soluciones adaptadas a tu negocio y objetivos
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {servicesOffered.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-[#242424] border border-[#333333] rounded-xl p-5 hover:border-[#E63946] transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#1E1E1E] border border-[#333333] rounded-lg flex items-center justify-center mb-4 group-hover:border-[#E63946] group-hover:bg-[#E63946]/10 transition-all">
                    <service.icon className="w-6 h-6 text-[#E63946]" />
                  </div>
                  
                  <h3 className="font-semibold mb-2 text-[#F5F5F5]">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-[#B5B5B5] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
