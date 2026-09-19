"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Check, Copy } from "lucide-react";

// Social media icon components
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Contact section with social links and email copy
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const email = "arnaulol18@gmail.com"; // Replace with real email

  const socials = [
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/arnaufores", // Replace with real URL
      color: "hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      url: "https://linkedin.com/in/arnaufores", // Replace with real URL
      color: "hover:text-blue-500"
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      url: "https://twitter.com/arnaufores", // Replace with real URL
      color: "hover:text-cyan-500"
    }
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div ref={ref} className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Contacto
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-12 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/[0.05] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/[0.05] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            {/* Intro text */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-center text-foreground/60 mb-12 leading-relaxed"
            >
              ¿Interesado en colaborar o quieres saber más sobre mi trabajo? No dudes en contactarme a través de cualquiera de estos canales.
            </motion.p>

            {/* Email copy button */}
            <motion.div variants={itemVariants} className="mb-12">
              <button
                onClick={copyEmail}
                className="group relative w-full sm:w-auto mx-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                <Mail className="w-5 h-5" />
                <span className="relative z-10">
                  {copied ? "¡Email Copiado!" : "Copiar Email"}
                </span>
                {copied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants}>
              <p className="text-center text-foreground/40 mb-6 text-sm uppercase tracking-wider">
                O encuéntrame en
              </p>
              <div className="flex justify-center gap-6">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`p-4 backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-xl text-foreground/60 transition-all duration-500 ${social.color} hover:shadow-lg hover:shadow-primary/20`}
                      aria-label={social.name}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center text-foreground/50 text-sm"
        >
          <p>© 2024 Arnau Fores Garcia. Todos los derechos reservados.</p>
          <p className="mt-2">Hecho con Next.js, Tailwind CSS y Framer Motion</p>
        </motion.footer>
      </div>
    </section>
  );
}
