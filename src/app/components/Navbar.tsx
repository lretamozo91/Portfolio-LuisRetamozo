import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Code2, Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Qué puedo construir", href: "#que-puedo-construir" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Stack", href: "#stack" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const visibleSectionsRef = useRef<Record<string, number>>({});

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 120;
      setScrolled(!atTop);
      if (atTop) {
        setActive("inicio");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSectionsRef.current[entry.target.id] = entry.intersectionRatio;
          } else {
            delete visibleSectionsRef.current[entry.target.id];
          }
        });

        const nextActive = Object.entries(visibleSectionsRef.current).sort(
          (left, right) => right[1] - left[1]
        )[0]?.[0];

        if (nextActive) {
          setActive(nextActive);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.15, 0.3, 0.45, 0.6],
      }
    );

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const navigateTo = (href: string) => {
    setOpen(false);
    const sectionId = href.slice(1);
    setActive(sectionId);
    visibleSectionsRef.current = { [sectionId]: 1 };

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-[#0f0f11]/88 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-16 xl:px-24">
        <a
          href="#inicio"
          onClick={(event) => {
            event.preventDefault();
            navigateTo("#inicio");
          }}
          className="group inline-flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition-all duration-300 group-hover:border-[#ff4255]/45 group-hover:bg-[#ff4255]/12 group-hover:shadow-[0_0_22px_rgba(255,66,85,0.2)]">
            <Code2 className="h-5 w-5 text-[#ff4255]" />
          </div>
          <div className="leading-none">
            <div className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#8e8f96]">
              Full Stack
            </div>
            <div className="mt-1 text-base font-semibold tracking-[-0.03em] text-white sm:text-[1.02rem]">
              Luis <span className="text-[#ff4255]">Retamozo</span>
            </div>
          </div>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 rounded-full p-1.5 shadow-[0_14px_36px_rgba(0,0,0,0.2)] backdrop-blur lg:flex"
        >
          {links.map((link) => {
            const isActive = active === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(link.href);
                }}
                className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white" : "text-[#b8b8bc] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full border border-[#ff4255]/20 bg-[#ff4255]/14"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <a
          href="#contacto"
          onClick={(event) => {
            event.preventDefault();
            navigateTo("#contacto");
          }}
          className="hidden rounded-full border border-[#ff4255]/30 bg-[#ff4255] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(255,66,85,0.28)] transition-all duration-300 hover:bg-[#ff5365] hover:shadow-[0_0_24px_rgba(255,66,85,0.32)] lg:inline-flex"
        >
          Hablemos
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08] lg:hidden"
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24 }}
            className="overflow-hidden border-b border-white/8 bg-[#0f0f11]/96 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Navegación móvil" className="px-5 pb-5 pt-2 sm:px-8">
              <div className="flex flex-col gap-1 rounded-[28px] border border-white/8 bg-white/[0.03] p-3 shadow-[0_16px_40px_rgba(0,0,0,0.24)]">
                {links.map((link) => {
                  const isActive = active === link.href.slice(1);

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(event) => {
                        event.preventDefault();
                        navigateTo(link.href);
                      }}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-[#ff4255]/12 text-white"
                          : "text-[#b8b8bc] hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}

                <a
                  href="#contacto"
                  onClick={(event) => {
                    event.preventDefault();
                    navigateTo("#contacto");
                  }}
                  className="mt-2 rounded-2xl bg-[#ff4255] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_14px_30px_rgba(255,66,85,0.24)] transition-colors duration-200 hover:bg-[#ff5365]"
                >
                  Hablemos
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
