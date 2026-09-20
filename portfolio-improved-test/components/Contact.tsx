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
      className="min-h-[100dvh] flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-center text-zinc-50">
            Contacto
          </h2>

          <p className="text-lg text-zinc-400 text-center mb-12 max-w-[55ch] mx-auto">
            Interesado en colaborar o conocer más sobre mi trabajo, escríbeme.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Envelope weight="bold" className="w-6 h-6 text-teal-400" />
                  <span className="font-mono text-zinc-400">
                    {email}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors duration-300"
                  aria-label="Copiar email"
                >
                  {copied ? (
                    <Check weight="bold" className="w-5 h-5 text-teal-400" />
                  ) : (
                    <Copy weight="bold" className="w-5 h-5 text-zinc-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon weight="bold" className="w-6 h-6 text-zinc-400" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-400">
            <p>Arnau Fores Garcia · 2024</p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
