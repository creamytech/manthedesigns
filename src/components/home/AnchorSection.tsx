"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function AnchorSection() {
  const anchorRef = useRef(null);
  const { scrollYProgress: anchorProgress } = useScroll({
    target: anchorRef,
    offset: ["start end", "end start"]
  });
  
  // When anchor section comes into view:
  // We want it to be sticky.
  // Opacity: 0 -> 1 as it enters.
  const anchorOpacity = useTransform(anchorProgress, [0.1, 0.4], [0, 1]);
  const anchorScale = useTransform(anchorProgress, [0.1, 0.6], [1.4, 1]);
  const anchorY = useTransform(anchorProgress, [0.1, 0.6], [150, 0]);
  const anchorRotate = useTransform(anchorProgress, [0.1, 0.6], [2, 0]);

  return (
    <div ref={anchorRef} className="hidden md:block h-[180vh] relative">
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
  );
}
