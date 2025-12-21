"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Threshold } from "@/components/animations/Threshold";
import { Navigation } from "@/components/layout/Navigation";
import { Gallery } from "@/components/gallery/Gallery";
import Image from "next/image";

function ImmersiveContent() {
  const { scrollYProgress } = useScroll();

  // Hero zoom on scroll
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.3]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // Art layer parallax with ZOOM - different speeds for depth
  const layer1Y = useTransform(scrollYProgress, [0.08, 0.5], [300, -300]);
  const layer1X = useTransform(scrollYProgress, [0.08, 0.5], [-100, 50]);
  const layer1Scale = useTransform(scrollYProgress, [0.08, 0.35, 0.5], [0.8, 1.2, 1.5]);
  const layer1Rotate = useTransform(scrollYProgress, [0.08, 0.5], [-2, 3]);
  const layer1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.42, 0.5], [0, 1, 1, 0]);

  const layer2Y = useTransform(scrollYProgress, [0.1, 0.55], [400, -250]);
  const layer2X = useTransform(scrollYProgress, [0.1, 0.55], [100, -30]);
  const layer2Scale = useTransform(scrollYProgress, [0.1, 0.38, 0.55], [0.7, 1.3, 1.6]);
  const layer2Rotate = useTransform(scrollYProgress, [0.1, 0.55], [3, -2]);
  const layer2Opacity = useTransform(scrollYProgress, [0.12, 0.22, 0.45, 0.55], [0, 1, 1, 0]);

  const layer3Y = useTransform(scrollYProgress, [0.12, 0.52], [350, -350]);
  const layer3Scale = useTransform(scrollYProgress, [0.12, 0.4, 0.52], [0.9, 1.4, 1.8]);
  const layer3Rotate = useTransform(scrollYProgress, [0.12, 0.52], [-1, 2]);
  const layer3Opacity = useTransform(scrollYProgress, [0.15, 0.28, 0.44, 0.52], [0, 0.9, 0.9, 0]);

  const layer4Y = useTransform(scrollYProgress, [0.15, 0.58], [280, -400]);
  const layer4X = useTransform(scrollYProgress, [0.15, 0.58], [50, -80]);
  const layer4Scale = useTransform(scrollYProgress, [0.15, 0.42, 0.58], [0.75, 1.35, 1.7]);
  const layer4Rotate = useTransform(scrollYProgress, [0.15, 0.58], [2, -3]);
  const layer4Opacity = useTransform(scrollYProgress, [0.18, 0.3, 0.48, 0.58], [0, 1, 1, 0]);

  // Anchor piece - dramatic reveal
  const anchorOpacity = useTransform(scrollYProgress, [0.52, 0.65], [0, 1]);
  const anchorScale = useTransform(scrollYProgress, [0.52, 0.72], [1.4, 1]);
  const anchorY = useTransform(scrollYProgress, [0.52, 0.72], [150, 0]);
  const anchorRotate = useTransform(scrollYProgress, [0.52, 0.72], [2, 0]);

  // Gallery reveal
  const galleryOpacity = useTransform(scrollYProgress, [0.78, 0.88], [0, 1]);
  const galleryY = useTransform(scrollYProgress, [0.78, 0.92], [80, 0]);

  return (
    <>
      <Navigation />
      
      {/* Hero Section - Full viewport with zoom */}
      <motion.section 
        style={{ opacity: heroOpacity }}
        className="h-screen fixed inset-0 flex items-center justify-center overflow-hidden z-10"
      >
        {/* Background texture - zooms on scroll */}
        <motion.div 
          style={{ scale: heroScale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/16+Faces.+remake+screen.jpg"
            alt=""
            fill
            className="object-cover grayscale contrast-150 brightness-[0.2]"
            priority
          />
        </motion.div>

        {/* Hero text */}
        <motion.div 
          style={{ scale: heroScale }}
          className="relative z-20 text-center px-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[18vw] md:text-[14vw] leading-[0.8] tracking-tighter italic"
          >
            Manthé
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 0.7, letterSpacing: "0.8em" }}
            transition={{ duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-mono text-[10px] md:text-sm uppercase"
          >
            Designs
          </motion.p>
        </motion.div>

        {/* Deep vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#050505_80%)] pointer-events-none" />
        
        {/* Scroll indicator - animated */}
        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.4, scaleY: 1 }}
          transition={{ delay: 2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-foreground to-transparent origin-top"
        />
      </motion.section>

      {/* Spacer for hero */}
      <div className="h-screen" />

      {/* Scroll container for parallax */}
      <div className="relative">

        {/* Immersive Art Field - ZOOMING layers */}
        <div className="h-[350vh] relative">
          
          {/* Layer 1 - Left, back - with zoom + rotation */}
          <motion.div
            style={{ 
              y: layer1Y, 
              x: layer1X, 
              scale: layer1Scale, 
              rotate: layer1Rotate,
              opacity: layer1Opacity 
            }}
            className="fixed top-[15%] left-[3%] w-[50vw] md:w-[38vw] aspect-[3/4] z-20 origin-center"
          >
            <Image
              src="/images/Screen+Shot+Crossroads.jpg"
              alt=""
              fill
              className="object-cover grayscale contrast-125 shadow-2xl"
            />
            <div className="absolute inset-0 shadow-[0_0_80px_rgba(0,0,0,0.8)]" />
          </motion.div>

          {/* Layer 2 - Right, middle - with zoom + rotation */}
          <motion.div
            style={{ 
              y: layer2Y, 
              x: layer2X, 
              scale: layer2Scale, 
              rotate: layer2Rotate,
              opacity: layer2Opacity 
            }}
            className="fixed top-[10%] right-[5%] w-[55vw] md:w-[42vw] aspect-[4/5] z-30 origin-center"
          >
            <Image
              src="/images/EYE+IN+THE+SKY.jpg"
              alt=""
              fill
              className="object-cover grayscale contrast-130"
            />
            <div className="absolute inset-0 shadow-[0_0_100px_rgba(0,0,0,0.9)]" />
          </motion.div>

          {/* Layer 3 - Center - overlapping with zoom */}
          <motion.div
            style={{ 
              y: layer3Y, 
              scale: layer3Scale, 
              rotate: layer3Rotate,
              opacity: layer3Opacity 
            }}
            className="fixed top-[30%] left-[25%] w-[45vw] md:w-[32vw] aspect-square z-25 origin-center"
          >
            <Image
              src="/images/DARK+NIGHT.jpg"
              alt=""
              fill
              className="object-cover grayscale contrast-125 brightness-90"
            />
            <div className="absolute inset-0 shadow-[0_0_120px_rgba(0,0,0,0.95)]" />
          </motion.div>

          {/* Layer 4 - Right bottom, front - with zoom */}
          <motion.div
            style={{ 
              y: layer4Y, 
              x: layer4X,
              scale: layer4Scale, 
              rotate: layer4Rotate,
              opacity: layer4Opacity 
            }}
            className="fixed top-[40%] right-[12%] w-[40vw] md:w-[28vw] aspect-[3/4] z-35 origin-center"
          >
            <Image
              src="/images/3+SAINTS.jpg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 shadow-[0_0_100px_rgba(0,0,0,0.85)]" />
          </motion.div>

          {/* Ambient darkness overlay */}
          <div className="fixed inset-0 bg-gradient-to-b from-[#050505]/20 via-transparent to-[#050505]/60 pointer-events-none z-40" />
        </div>

        {/* Anchor Section - Chaos resolves into one piece */}
        <div className="h-[180vh] relative">
          <motion.div
            style={{ 
              opacity: anchorOpacity, 
              scale: anchorScale, 
              y: anchorY,
              rotate: anchorRotate
            }}
            className="sticky top-0 h-screen flex items-center justify-center"
          >
            <div className="relative w-[90vw] md:w-[65vw] aspect-[4/5] max-w-4xl">
              <Image
                src="/images/16+Faces.+remake+screen.jpg"
                alt=""
                fill
                className="object-cover grayscale contrast-125"
              />
              {/* Dramatic inner shadow */}
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]" />
              {/* Outer glow */}
              <div className="absolute -inset-4 shadow-[0_0_200px_rgba(5,5,5,0.9)]" />
            </div>
          </motion.div>
        </div>

        {/* Gallery Section - Order emerges from chaos */}
        <motion.section 
          style={{ opacity: galleryOpacity, y: galleryY }}
          className="relative z-50 px-6 pt-60 pb-80 bg-[#050505]"
        >
          <div className="max-w-[1600px] mx-auto">
            <motion.div className="mb-40 text-center">
              <motion.div 
                className="w-px h-16 bg-foreground/20 mx-auto mb-12"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
              <p className="font-mono text-[9px] uppercase tracking-[0.6em] opacity-30 mb-6">
                Archive
              </p>
              <h2 className="font-serif text-4xl md:text-5xl italic opacity-60">
                Selected Works
              </h2>
            </motion.div>
            <Gallery />
          </div>
        </motion.section>
      </div>
    </>
  );
}

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="min-h-screen relative bg-[#050505] text-foreground selection:bg-bone selection:text-ebony">
      <Threshold onEnter={() => setHasEntered(true)} />
      {hasEntered && <ImmersiveContent />}
    </main>
  );
}
