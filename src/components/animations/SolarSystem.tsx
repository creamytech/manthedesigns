"use client";

import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface OrbitProps {
  offset: number; // degrees
  duration: string; // e.g. "120s"
  imageSrc: string;
  imageAlt?: string;
  size: string; // e.g. "20vw"
  radius: string;
}

const ORBITS: OrbitProps[] = [
  {
    offset: 0,
    duration: "80s",
    imageSrc: "/images/Camo_Parallax.png",
    size: "18vw",
    radius: "60vw",
  },
  {
    offset: 90,
    duration: "80s",
    imageSrc: "/images/InTheSky_Parallax.png",
    size: "22vw",
    radius: "60vw",
  },
  {
    offset: 180,
    duration: "80s",
    imageSrc: "/images/DarkNight_Parallax.png",
    size: "20vw",
    radius: "60vw",
  },
  {
    offset: 270,
    duration: "80s",
    imageSrc: "/images/ThreeSaints_Parallax.png",
    size: "24vw",
    radius: "60vw",
  },
];

export function SolarSystem() {
  return (
    <div className="relative w-full h-[70vh] md:h-[125vh] -mt-16 md:-mt-32 flex items-center justify-center overflow-hidden bg-[#050505] flex" style={{ perspective: "2500px" }}>
      {/* 3D Scene Container */}
      <div 
        className="relative flex items-center justify-center will-change-transform"
        style={{ 
          transformStyle: "preserve-3d",
          transform: "rotateX(70deg) rotateY(0deg)", // Strong 3D tilt
        }}
      >
        {/* Central Object (SVG) */}
        <div 
          className="absolute z-10 w-[22vw] h-[22vw] flex items-center justify-center"
          style={{ 
            transform: "rotateX(-70deg)", // Counter-tilt
            transformStyle: "preserve-3d"
          }}
        >
          <DotLottieReact
            src="/images/eye.lottie"
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
        
        {/* Visual Orbit Track */}
        <div 
          className="absolute w-[60vw] h-[60vw] rounded-full border-[1px] border-bone/10 opacity-20"
          style={{ transform: "translateZ(0)" }}
        />

        {/* Orbiting Items */}
        {ORBITS.map((orbit, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center rounded-full will-change-transform"
            style={{
              width: orbit.radius,
              height: orbit.radius,
              transformStyle: "preserve-3d",
              animation: `spin ${orbit.duration} linear infinite`,
              animationDelay: `-${(parseInt(orbit.duration) / 360) * orbit.offset}s` // Exact degree offset delay
            }}
          >
            {/* Positioner */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
              style={{
                 width: orbit.size, 
                 // height: auto (natural)
                 transformStyle: "preserve-3d", // CRITICAL FIX: Prevent flattening
              }} 
            >
              {/* Counter-Rotator (Billboarding) */}
              <div 
                 className="w-full relative will-change-transform"
                 style={{
                    animation: `counter-spin ${orbit.duration} linear infinite`,
                    animationDelay: `-${(parseInt(orbit.duration) / 360) * orbit.offset}s`,
                    transformStyle: "preserve-3d"
                 }}
              >
                 {/* Counter-tilt */}
                 <div 
                    className="w-full relative"
                    style={{
                       transform: "rotateX(-70deg)" // Match container tilt
                    }}
                 >
                    <img
                      src={orbit.imageSrc}
                      alt={orbit.imageAlt || "Artwork"}
                      className="w-full h-auto object-contain grayscale contrast-125 block" // Natural aspect ratio
                      style={{ backfaceVisibility: 'hidden' }}
                    />
                 </div>
              </div>
            </div>
          </div>
        ))}

        {/* Keyframes */}
        <style jsx>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes counter-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}</style>
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)] pointer-events-none z-20" />
    </div>
  );
}
