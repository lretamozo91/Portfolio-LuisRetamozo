import { motion } from "motion/react";
import { ClipboardList, FileText, Code2, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Relevamiento",
    description: "Entendemos tu idea, objetivos y necesidades específicas del proyecto."
  },
  {
    icon: FileText,
    number: "02",
    title: "Propuesta",
    description: "Diseñamos la solución técnica, tiempos y presupuesto personalizado."
  },
  {
    icon: Code2,
    number: "03",
    title: "Desarrollo",
    description: "Construimos el producto con actualizaciones continuas y feedback constante."
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Entrega y acompañamiento",
    description: "Lanzamiento del producto y soporte post-entrega para garantizar el éxito."
  }
];

export function Process() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#151515]" id="proceso">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Cómo <span className="text-[#E63946]">trabajo</span>?
          </h2>
          <p className="text-xl text-[#B5B5B5] max-w-2xl mx-auto">
            Un proceso claro y ordenado para convertir tu idea en realidad
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection line - only show between cards, not after the last one */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#333333] to-transparent z-0" />
              )}
              
              <div className="relative bg-[#242424] border border-[#333333] rounded-xl p-6 hover:border-[#E63946] transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#E63946] rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-[#E63946]/30">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-[#1E1E1E] border border-[#333333] rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-[#E63946]" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[#F5F5F5]">
                  {step.title}
                </h3>
                
                <p className="text-[#B5B5B5] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-[#242424] border border-[#333333] rounded-xl p-6 text-center">
            <div className="text-[#E63946] font-bold text-lg mb-2">
              ✓ Comunicación fluida
            </div>
            <p className="text-[#B5B5B5] text-sm">
              Actualizaciones constantes durante todo el proceso
            </p>
          </div>
          
          <div className="bg-[#242424] border border-[#333333] rounded-xl p-6 text-center">
            <div className="text-[#E63946] font-bold text-lg mb-2">
              ✓ Código de calidad
            </div>
            <p className="text-[#B5B5B5] text-sm">
              Desarrollo profesional con mejores prácticas
            </p>
          </div>
          
          <div className="bg-[#242424] border border-[#333333] rounded-xl p-6 text-center">
            <div className="text-[#E63946] font-bold text-lg mb-2">
              ✓ Plazos cumplidos
            </div>
            <p className="text-[#B5B5B5] text-sm">
              Entrega en tiempo y forma según lo acordado
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
