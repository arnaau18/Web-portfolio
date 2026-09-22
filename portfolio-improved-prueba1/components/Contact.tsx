"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  XLogo,
  Copy,
  Check,
  ArrowUpRight,
} from "@phosphor-icons/react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const email = "arnaulol18@gmail.com";

  const socials = [
    {
      name: "GitHub",
      icon: GithubLogo,
      url: "https://github.com/arnaau18",
    },
    {
      name: "LinkedIn",
      icon: LinkedinLogo,
      url: "https://linkedin.com/in/arnaufores",
    },
    {
      name: "X",
      icon: XLogo,
      url: "https://twitter.com/arnaufores",
    },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-[100dvh] flex items-center justify-center px-4 md:px-6 py-32 md:py-40 bg-black"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Eyebrow Tag */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="px-4 py-1.5 rounded-full bg-teal-400/5 border border-teal-400/10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-teal-400">
                Contacto
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-center text-zinc-50 leading-[1.1]">
            Construyamos algo<br />juntos
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 text-center mb-16 max-w-[55ch] mx-auto leading-relaxed">
            Interesado en colaborar o conocer más sobre mi trabajo, escríbeme.
          </p>

          <div className="space-y-8">
            {/* Email Card with Double-Bezel */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Outer Shell */}
              <div className="p-2 rounded-[2rem] bg-white/5 ring-1 ring-white/10">
                {/* Inner Core */}
                <div className="p-8 rounded-[calc(2rem-0.5rem)] bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Icon in nested circle */}
                      <div className="p-1 rounded-full bg-teal-400/10 ring-1 ring-teal-400/20">
                        <div className="w-10 h-10 rounded-full bg-teal-400/10 flex items-center justify-center">
                          <Envelope weight="bold" className="w-5 h-5 text-teal-400" />
                        </div>
                      </div>
                      <span className="font-mono text-sm md:text-base text-zinc-300">
                        {email}
                      </span>
                    </div>

                    {/* Magnetic Button with nested icon */}
                    <button
                      onClick={copyEmail}
                      className="group relative w-full sm:w-auto px-6 py-3 rounded-full bg-teal-400/10 border border-teal-400/20 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-400/20 hover:border-teal-400/40 active:scale-[0.98]"
                      aria-label="Copiar email"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm font-medium text-teal-400">
                          {copied ? "Copiado" : "Copiar"}
                        </span>
                        {/* Button-in-Button trailing icon */}
                        <div className="w-6 h-6 rounded-full bg-teal-400/20 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                          {copied ? (
                            <Check weight="bold" className="w-3.5 h-3.5 text-teal-400" />
                          ) : (
                            <Copy weight="bold" className="w-3.5 h-3.5 text-teal-400" />
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social links with magnetic effect */}
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.05,
                      ease: [0.32, 0.72, 0, 1]
                    }}
                    className="group relative"
                    aria-label={social.name}
                  >
                    {/* Outer Shell */}
                    <div className="p-1.5 rounded-full bg-white/5 ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-white/[0.07] group-hover:ring-white/20">
                      {/* Inner Core */}
                      <div className="p-4 rounded-full bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 active:scale-95">
                        <Icon weight="bold" className="w-6 h-6 text-zinc-400 transition-colors duration-300 group-hover:text-teal-400" />
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-teal-400 flex items-center justify-center opacity-0 scale-50 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:scale-100">
                      <ArrowUpRight weight="bold" className="w-3 h-3 text-zinc-950" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-32 pt-8 border-t border-zinc-800/50 text-center">
            <motion.p
              initial={reduceMotion ? {} : { opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="text-sm text-zinc-500"
            >
              Arnau Fores Garcia · 2024
            </motion.p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
