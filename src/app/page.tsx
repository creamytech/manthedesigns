"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Threshold } from "@/components/animations/Threshold";
import { Navigation } from "@/components/layout/Navigation";
import { Gallery } from "@/components/gallery/Gallery";
import { SolarSystem } from "@/components/animations/SolarSystem";
import { AnchorSection } from "@/components/home/AnchorSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check session storage on mount
    const entered = sessionStorage.getItem("manthe_entered");
    if (entered === "true") {
      setHasEntered(true);
    }
    setIsChecking(false);
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    sessionStorage.setItem("manthe_entered", "true");
  };

  if (isChecking) {
    // Return a black screen to prevent flashing loop or content before check
    return <div className="min-h-screen bg-[#050505]" />;
  }

  return (
    <main className="min-h-screen relative bg-[#050505] text-foreground selection:bg-bone selection:text-ebony">
      {!hasEntered && <Threshold onEnter={handleEnter} />}

      {hasEntered && (
        <>
          <Navigation />
          
          {/* Hero Section - Works on both mobile and desktop */}
          <section className="min-h-[70vh] md:min-h-screen relative flex items-center justify-center overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.35, scale: 1 }}
              transition={{ duration: 3 }}
              className="absolute inset-0"
            >
              <Image
                src="/images/16+Faces.+remake+screen.jpg"
                alt=""
                fill
                className="object-cover grayscale contrast-125 brightness-[0.25]"
                priority
              />
            </motion.div>

            <div className="relative z-20 text-center px-6">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[22vw] md:text-[14vw] leading-[0.85] tracking-tighter italic"
              >
                Manthé
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="mt-4 font-mono text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em]"
              >
                Designs
              </motion.p>
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#050505_75%)] pointer-events-none" />
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 2 }}
              className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="opacity-50"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M7 10l5 5 5-5" />
                </svg>
              </motion.div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-40">Scroll</p>
            </motion.div>
          </section>

          {/* Desktop: Solar System Orbit Animation */}
          <SolarSystem />
          
          {/* Anchor Section - Desktop only */}
          <AnchorSection />
          
          {/* Gallery - Unified */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-50 px-8 pt-40 pb-32 bg-[#050505]"
          >
            <div className="max-w-[1600px] mx-auto">
              <div className="mb-20 text-center">
                <motion.div 
                  className="w-px h-16 bg-foreground/20 mx-auto mb-12"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
                <p className="font-mono text-[9px] uppercase tracking-[0.6em] opacity-30 mb-6">Archive</p>
                <h2 className="font-serif text-5xl italic opacity-60">Selected Works</h2>
              </div>
              <Gallery />
              
              <div className="mt-20 text-center">
                <Link 
                  href="/works"
                  className="inline-block border border-foreground/20 px-12 py-4 text-xs font-mono uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-500"
                >
                  View Complete Archive
                </Link>
              </div>
            </div>
          </motion.section>
        </>
      )}
    </main>
  );
}
