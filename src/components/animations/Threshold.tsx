"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useAudio } from "@/context/AudioContext";

export function Threshold({ onEnter }: { onEnter: () => void }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { startAudio } = useAudio();

  // Delay before interaction is available
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    if (!isReady) return;
    setIsExiting(true);
    startAudio();
    setTimeout(onEnter, 1500);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] text-foreground overflow-hidden cursor-pointer"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 2, ease: [0.7, 0, 0.3, 1] } 
          }}
          onClick={handleEnter}
        >
          {/* Background Video */}
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 4, ease: "easeOut" }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 brightness-90"
            >
              <source src="/BackgroundVideo.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-[#030303]/50 pointer-events-none" />

          {/* Breathing Shadow Layer */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            animate={{ 
              background: [
                "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #030303 100%)",
                "radial-gradient(ellipse 60% 40% at 50% 50%, transparent 0%, #030303 100%)",
                "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #030303 100%)",
              ]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />

          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay">
             <svg className="h-full w-full">
                <filter id="threshold-grain">
                  <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#threshold-grain)" />
             </svg>
          </div>

          {/* Deep vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_75%)] pointer-events-none" />

          {/* Central content */}
          <div className="relative flex flex-col items-center">
            {/* Name - emerges slowly */}
            <motion.h1 
               className="font-serif text-3xl md:text-5xl tracking-[0.1em] text-center"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 0.95, y: 0 }}
               transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
            >
               Matthew Manthé
            </motion.h1>

            {/* Thin divider line */}
            <motion.div 
               className="mt-10 w-px h-16 bg-foreground/30"
               initial={{ scaleY: 0, opacity: 0 }}
               animate={{ scaleY: 1, opacity: 1 }}
               transition={{ delay: 2, duration: 2, ease: "easeOut" }}
            />

            {/* Prompt - only appears when ready */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isReady ? 0.5 : 0 }}
              transition={{ duration: 1.5 }}
              className="mt-8 text-center"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.5em] hidden md:inline">
                Click to enter
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.5em] md:hidden">
                Press to enter
              </span>
            </motion.div>
          </div>

          {/* Bottom text */}
          <motion.div 
            className="absolute bottom-10 font-mono text-[8px] uppercase tracking-[0.4em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ delay: 3, duration: 2 }}
          >
             Graphite — Ink — Plaster
          </motion.div>

          {/* Subtle pulsing border */}
          <motion.div 
            className="absolute inset-0 pointer-events-none border border-foreground/5"
            animate={{ 
              borderColor: ["rgba(220,220,208,0.03)", "rgba(220,220,208,0.1)", "rgba(220,220,208,0.03)"]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
