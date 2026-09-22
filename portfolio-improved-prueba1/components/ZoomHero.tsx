"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { TextRoll } from "@/components/ui/text-roll";
import GlowHorizonFM from "@/components/ui/glow-horizon";

export default function ZoomHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    if (showSubtitle) {
      // Mostrar la navegación inmediatamente cuando comienza la animación del subtítulo
      setShowNavigation(true);
      // Emitir evento personalizado para notificar a la navegación
      window.dispatchEvent(new CustomEvent('showNavigation'));
    }
  }, [showSubtitle]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const circleScale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const circleOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0.9, 0.3]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.3, 0]);

  return (
    <div ref={containerRef} className="h-[130vh] relative bg-black">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* GlowHorizon Effect */}
        <GlowHorizonFM variant="top" />

        <div className="absolute inset-0 bg-black">
          <motion.div
            style={{
              scale: circleScale,
              opacity: circleOpacity,
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[55%] will-change-transform"
          >
            <div className="relative w-[2200px] h-[2200px]">
              <div className="absolute inset-0 rounded-full bg-black">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `
                      radial-gradient(
                        circle at 50% 50%,
                        transparent 0%,
                        transparent 94%,
                        rgba(139, 92, 246, 0.08) 95%,
                        rgba(99, 102, 241, 0.15) 96.5%,
                        rgba(59, 130, 246, 0.12) 98%,
                        rgba(79, 70, 229, 0.08) 99%,
                        transparent 100%
                      )
                    `,
                  }}
                />

                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: `
                      inset 0 0 120px rgba(139, 92, 246, 0.15),
                      inset 0 0 80px rgba(99, 102, 241, 0.1),
                      0 0 150px rgba(139, 92, 246, 0.25),
                      0 0 100px rgba(99, 102, 241, 0.15)
                    `,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-6xl"
          >
            <h1 className="font-['Inconsolata'] text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none mb-6">
              <TextRoll
                className="text-white"
                onAnimationComplete={() => setShowSubtitle(true)}
              >
                Arnau Fores Garcia
              </TextRoll>
            </h1>

            {showSubtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-['Inconsolata'] text-lg md:text-xl text-zinc-400 font-normal tracking-wide"
              >
                Full Stack Developer
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.3 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-xs text-zinc-600 uppercase tracking-[0.25em] font-medium"
            >
              Scroll
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
