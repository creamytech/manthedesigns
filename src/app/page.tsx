"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Threshold } from "@/components/animations/Threshold";
import { Navigation } from "@/components/layout/Navigation";
import { Gallery } from "@/components/gallery/Gallery";
import Image from "next/image";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="min-h-screen relative bg-[#050505] text-foreground selection:bg-bone selection:text-ebony">
      <Threshold onEnter={() => setHasEntered(true)} />

      {hasEntered && (
        <>
          <Navigation />
          
          {/* Hero Section */}
          <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
            {/* Background Art */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 3 }}
              className="absolute inset-0"
            >
              <Image
                src="/images/16+Faces.+remake+screen.jpg"
                alt=""
                fill
                className="object-cover grayscale contrast-125 brightness-[0.3]"
                priority
              />
            </motion.div>

            {/* Hero text */}
            <div className="relative z-20 text-center px-6">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[20vw] md:text-[14vw] leading-[0.85] tracking-tighter italic"
              >
                Manthé
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="mt-4 font-mono text-xs md:text-sm uppercase tracking-[0.5em]"
              >
                Designs
              </motion.p>
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_80%)] pointer-events-none" />
            
            {/* Scroll indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-foreground to-transparent"
            />
          </section>

          {/* Featured Art - 2 Large Pieces */}
          <section className="py-16 md:py-32 px-4 md:px-8">
            {/* Piece 1 - Full width */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 md:mb-16"
            >
              <div className="relative w-full aspect-[4/5] md:aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/Screen+Shot+Crossroads.jpg"
                  alt=""
                  fill
                  className="object-cover grayscale contrast-125"
                />
              </div>
            </motion.div>

            {/* Piece 2 - Offset */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="md:ml-[15%] md:w-[70%] mb-8 md:mb-16"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/EYE+IN+THE+SKY.jpg"
                  alt=""
                  fill
                  className="object-cover grayscale contrast-125"
                />
              </div>
            </motion.div>

            {/* Piece 3 - Full width again */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 md:mb-16"
            >
              <div className="relative w-full aspect-square md:aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/DARK+NIGHT.jpg"
                  alt=""
                  fill
                  className="object-cover grayscale contrast-125"
                />
              </div>
            </motion.div>

            {/* Piece 4 - Color piece (Plaster) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="md:mr-[20%] md:w-[65%]"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/3+SAINTS.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </section>

          {/* Divider */}
          <div className="flex justify-center py-16 md:py-32">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="w-20 h-px bg-foreground/20"
            />
          </div>

          {/* Gallery Section */}
          <section className="px-4 md:px-8 pb-20 md:pb-40">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="mb-16 md:mb-24 text-center"
            >
              <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.5em] opacity-40 mb-4">
                Archive
              </p>
              <h2 className="font-serif text-3xl md:text-5xl italic opacity-70">
                Selected Works
              </h2>
            </motion.div>
            <Gallery />
          </section>
        </>
      )}
    </main>
  );
}
