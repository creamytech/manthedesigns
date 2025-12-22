"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Threshold } from "@/components/animations/Threshold";
import { Navigation } from "@/components/layout/Navigation";
import { Gallery } from "@/components/gallery/Gallery";
import Image from "next/image";
import Link from "next/link";

function ParallaxLayers() {
  const { scrollYProgress } = useScroll();

  // Art layer parallax with ZOOM
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

  const anchorOpacity = useTransform(scrollYProgress, [0.52, 0.65], [0, 1]);
  const anchorScale = useTransform(scrollYProgress, [0.52, 0.72], [1.4, 1]);
  const anchorY = useTransform(scrollYProgress, [0.52, 0.72], [150, 0]);
  const anchorRotate = useTransform(scrollYProgress, [0.52, 0.72], [2, 0]);

  const galleryOpacity = useTransform(scrollYProgress, [0.78, 0.88], [0, 1]);
  const galleryY = useTransform(scrollYProgress, [0.78, 0.92], [80, 0]);

  return (
    <>
      {/* Parallax Art Field - Desktop only via CSS */}
      <div className="hidden md:block h-[350vh] relative">
        <motion.div
          style={{ y: layer1Y, x: layer1X, scale: layer1Scale, rotate: layer1Rotate, opacity: layer1Opacity }}
          className="fixed top-[15%] left-[3%] w-[38vw] aspect-[3/4] z-20 origin-center"
        >
          <Image src="/images/Screen+Shot+Crossroads.jpg" alt="" fill className="object-cover grayscale contrast-125" />
          <div className="absolute inset-0 shadow-[0_0_80px_rgba(0,0,0,0.8)]" />
        </motion.div>

        <motion.div
          style={{ y: layer2Y, x: layer2X, scale: layer2Scale, rotate: layer2Rotate, opacity: layer2Opacity }}
          className="fixed top-[10%] right-[5%] w-[42vw] aspect-[4/5] z-30 origin-center"
        >
          <Image src="/images/InTheSky_Main.jpg" alt="" fill className="object-cover grayscale contrast-130" />
          <div className="absolute inset-0 shadow-[0_0_100px_rgba(0,0,0,0.9)]" />
        </motion.div>

        <motion.div
          style={{ y: layer3Y, scale: layer3Scale, rotate: layer3Rotate, opacity: layer3Opacity }}
          className="fixed top-[30%] left-[25%] w-[32vw] aspect-square z-25 origin-center"
        >
          <Image src="/images/DarkNight_Main.jpg" alt="" fill className="object-cover grayscale contrast-125 brightness-90" />
          <div className="absolute inset-0 shadow-[0_0_120px_rgba(0,0,0,0.95)]" />
        </motion.div>

        <motion.div
          style={{ y: layer4Y, x: layer4X, scale: layer4Scale, rotate: layer4Rotate, opacity: layer4Opacity }}
          className="fixed top-[40%] right-[12%] w-[28vw] aspect-[3/4] z-35 origin-center"
        >
          <Image src="/images/3Saints_Main.jpg" alt="" fill className="object-cover grayscale" />
          <div className="absolute inset-0 shadow-[0_0_100px_rgba(0,0,0,0.85)]" />
        </motion.div>

        <div className="fixed inset-0 bg-gradient-to-b from-[#050505]/20 via-transparent to-[#050505]/60 pointer-events-none z-40" />
      </div>

      {/* Anchor Section - Desktop only */}
      <div className="hidden md:block h-[180vh] relative">
        <motion.div
          style={{ opacity: anchorOpacity, scale: anchorScale, y: anchorY, rotate: anchorRotate }}
          className="sticky top-0 h-screen flex items-center justify-center"
        >
          <div className="relative w-[65vw] aspect-[4/5] max-w-4xl">
            <Image src="/images/16+Faces.+remake+screen.jpg" alt="" fill className="object-cover grayscale contrast-125" />
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]" />
          </div>
        </motion.div>
      </div>

      {/* Gallery - Desktop */}
      <motion.section 
        style={{ opacity: galleryOpacity, y: galleryY }}
        className="hidden md:block relative z-50 px-8 pt-40 pb-32 bg-[#050505]"
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
  );
}

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
          <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
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
              className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 w-px h-12 md:h-20 bg-gradient-to-b from-foreground to-transparent"
            />
          </section>

          {/* Desktop: Spacer + Parallax */}
          <div className="hidden md:block h-screen" />
          <ParallaxLayers />

          {/* Mobile: Simple vertical layout */}
          <section className="md:hidden py-8 px-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image src="/images/Screen+Shot+Crossroads.jpg" alt="" fill className="object-cover grayscale contrast-110" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image src="/images/InTheSky_Main.jpg" alt="" fill className="object-cover grayscale contrast-110" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <Image src="/images/DarkNight_Main.jpg" alt="" fill className="object-cover grayscale contrast-110" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image src="/images/3Saints_Main.jpg" alt="" fill className="object-cover grayscale" />
              </div>
            </motion.div>
          </section>

          {/* Mobile Gallery */}
          <section className="md:hidden px-4 pb-16">
            <div className="py-8 flex justify-center">
              <div className="w-16 h-px bg-foreground/20" />
            </div>
            <div className="mb-10 text-center">
              <p className="font-mono text-[8px] uppercase tracking-[0.4em] opacity-40 mb-3">Archive</p>
              <h2 className="font-serif text-2xl italic opacity-70">Selected Works</h2>
            </div>
            <Gallery />
          </section>
        </>
      )}
    </main>
  );
}
