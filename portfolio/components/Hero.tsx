"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { useState, useEffect } from "react";

// Hero section with typing animation effect and name reveal
export default function Hero() {
  const [text, setText] = useState("");
  const [nameState, setNameState] = useState<"afg" | "expanding" | "typing">("afg");
  const [typedName, setTypedName] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const fullText = "Desarrollo de Aplicaciones Multiplataforma";
  const fullName = "Arnau Fores Garcia";

  useEffect(() => {
    // Name reveal animation sequence
    const timer1 = setTimeout(() => {
      setNameState("expanding");
    }, 1000);

    const timer2 = setTimeout(() => {
      setNameState("typing");
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    // Type the full name letter by letter
    if (nameState === "typing") {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index <= fullName.length) {
          setTypedName(fullName.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80);

      return () => clearInterval(typingInterval);
    }
  }, [nameState]);

  useEffect(() => {
    // Typing animation for subtitle
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const getLetterColor = (index: number) => {
    if (hoveredIndex === null) return "text-foreground";

    const distance = Math.abs(hoveredIndex - index);

    if (distance === 0) return "text-primary";
    if (distance === 1) return "text-secondary";
    if (distance === 2) return "text-accent";

    return "text-foreground";
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-5xl mx-auto"
      >
        {/* Name with reveal animation */}
        <div
          className="mb-6 cursor-pointer min-h-[120px] md:min-h-[160px] flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {nameState === "afg" && (
              <motion.h1
                key="afg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl md:text-8xl font-bold text-foreground"
              >
                AFG
              </motion.h1>
            )}

            {nameState === "expanding" && (
              <motion.h1
                key="expanding"
                className="text-6xl md:text-8xl font-bold text-foreground/30 flex gap-4 md:gap-8"
              >
                <motion.span
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: -150, opacity: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  A
                </motion.span>
                <motion.span
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: 0, opacity: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  F
                </motion.span>
                <motion.span
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: 150, opacity: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  G
                </motion.span>
              </motion.h1>
            )}

            {nameState === "typing" && (
              <motion.h1
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-6xl md:text-8xl font-bold"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {typedName.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className={`inline-block transition-colors duration-300 ${getLetterColor(index)}`}
                  >
                    {letter === " " ? " " : letter}
                  </motion.span>
                ))}
                {typedName.length < fullName.length && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-foreground"
                  >
                    |
                  </motion.span>
                )}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-foreground/60 mb-12 h-20 flex items-center justify-center"
        >
          <span className="font-mono">{text}</span>
          {text.length > 0 && text.length < fullText.length && (
            <span className="animate-pulse ml-1">|</span>
          )}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            <span className="relative z-10">Ver mis proyectos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group px-8 py-4 border-2 border-primary/30 rounded-xl font-semibold text-foreground/80 hover:bg-primary/5 transition-all duration-500 hover:scale-105 hover:border-primary flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contactar
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="w-8 h-8 text-primary/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
