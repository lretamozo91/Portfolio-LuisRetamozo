import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 lg:px-16 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#B5B5B5] text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              Hecho con <Heart className="w-4 h-4 text-[#E63946] fill-[#E63946]" /> por Luis Retamozo
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#B5B5B5] hover:text-[#E63946] transition-colors"
            >
              Inicio
            </a>
            <a
              href="#proyectos"
              className="text-[#B5B5B5] hover:text-[#E63946] transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#experiencia"
              className="text-[#B5B5B5] hover:text-[#E63946] transition-colors"
            >
              Experiencia
            </a>
            <a
              href="#contacto"
              className="text-[#B5B5B5] hover:text-[#E63946] transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-[#333333] text-center text-sm text-[#B5B5B5]">
          <p>© {new Date().getFullYear()} Luis Retamozo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
