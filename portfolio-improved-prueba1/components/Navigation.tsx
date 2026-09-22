"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleShowNavigation = () => {
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("showNavigation", handleShowNavigation);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("showNavigation", handleShowNavigation);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const links = [
    { label: "Inicio", id: "hero" },
    { label: "Sobre mí", id: "about" },
    { label: "Experiencia", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contacto", id: "contact" },
  ];

  return (
    <>
      {/* Floating Island Navigation */}
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
        <div
          className={`
            relative transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${scrolled ? 'backdrop-blur-2xl' : 'backdrop-blur-xl'}
          `}
        >
          {/* Outer Shell (Double-Bezel) */}
          <div className="p-1 rounded-full bg-white/5 ring-1 ring-white/10">
            {/* Inner Core */}
            <div className="px-6 py-3 rounded-[calc(9999px-0.25rem)] bg-zinc-950/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <div className="flex items-center gap-8">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                  {links.slice(1).map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-[13px] text-zinc-400 hover:text-zinc-50 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden relative w-6 h-6 flex items-center justify-center group"
                  aria-label="Menu"
                >
                  <div className="relative w-5 h-4 flex flex-col justify-center gap-1">
                    <motion.span
                      animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute w-full h-[2px] bg-zinc-400 group-hover:bg-zinc-50 transition-colors origin-center"
                    />
                    <motion.span
                      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-[2px] bg-zinc-400 group-hover:bg-zinc-50 transition-colors"
                    />
                    <motion.span
                      animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute w-full h-[2px] bg-zinc-400 group-hover:bg-zinc-50 transition-colors origin-center"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
      )}

      {/* Mobile Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 backdrop-blur-3xl bg-zinc-950/95" />
            <div className="relative h-full flex flex-col items-center justify-center px-8">
              <nav className="space-y-2 w-full max-w-sm">
                {links.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.05,
                      ease: [0.32, 0.72, 0, 1]
                    }}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left text-3xl font-bold text-zinc-50 hover:text-teal-400 transition-all duration-300 py-3"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
