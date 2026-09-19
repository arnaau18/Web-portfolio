"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold text-zinc-50"
        >
          AFG
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.slice(1).map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-50"
          aria-label="Menu"
        >
          {isOpen ? (
            <X weight="bold" className="w-6 h-6" />
          ) : (
            <List weight="bold" className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800">
          <div className="px-6 py-4 space-y-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-zinc-400 hover:text-zinc-50 transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
