import { motion } from "motion/react";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden" id="contacto">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E63946]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#1E1E1E] to-[#242424] border border-[#333333] rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Tenés un <span className="text-[#E63946]">proyecto</span> en mente?
              </h2>
              
              <p className="text-xl text-[#B5B5B5] leading-relaxed mb-8">
                ¿Tenés una idea, proyecto o búsqueda laboral donde mi perfil pueda aportar? 
                Charlemos sobre cómo puedo ayudarte a alcanzar tus objetivos.
              </p>
            </motion.div>
            
            {/* Right side - Contact buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <a
                href="https://wa.me/5493875895202"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#242424] border-2 border-[#333333] rounded-xl p-6 hover:border-[#E63946] hover:bg-[#E63946]/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-[#F5F5F5] mb-1">WhatsApp</h3>
                  <p className="text-sm text-[#B5B5B5]">Escribime directamente</p>
                </div>
                
                <div className="text-[#E63946] group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </a>
              
              <a
                href="mailto:lretamozo91@gmail.com"
                className="group flex items-center gap-4 bg-[#242424] border-2 border-[#333333] rounded-xl p-6 hover:border-[#E63946] hover:bg-[#E63946]/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#E63946] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-[#F5F5F5] mb-1">Email</h3>
                  <p className="text-sm text-[#B5B5B5]">lretamozo91@gmail.com</p>
                </div>
                
                <div className="text-[#E63946] group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/luis-retamozo-b69aa4154/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#242424] border-2 border-[#333333] rounded-xl p-6 hover:border-[#E63946] hover:bg-[#E63946]/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#0A66C2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-[#F5F5F5] mb-1">LinkedIn</h3>
                  <p className="text-sm text-[#B5B5B5]">Conectemos profesionalmente</p>
                </div>
                
                <div className="text-[#E63946] group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </a>
              
              <a
                href="https://github.com/lretamozo91"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#242424] border-2 border-[#333333] rounded-xl p-6 hover:border-[#E63946] hover:bg-[#E63946]/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#F5F5F5] rounded-full flex items-center justify-center flex-shrink-0">
                  <Github className="w-7 h-7 text-[#111111]" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-[#F5F5F5] mb-1">GitHub</h3>
                  <p className="text-sm text-[#B5B5B5]">Mirá mis proyectos open source</p>
                </div>
                
                <div className="text-[#E63946] group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
