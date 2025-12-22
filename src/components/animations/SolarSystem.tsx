"use client";

import Image from "next/image";

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
    <div className="relative w-full h-[125vh] -mt-32 flex items-center justify-center overflow-hidden bg-[#050505] hidden md:flex" style={{ perspective: "2500px" }}>
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
          {/* Simple Clean Dark Sphere */}
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_60px_rgba(255,255,255,0.1)]">
            <defs>
              <radialGradient id="deepDark" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#333" />
                <stop offset="100%" stopColor="#000" />
              </radialGradient>
            </defs>
            
            {/* Main sphere body with deep gradient */}
            <circle cx="100" cy="100" r="90" fill="url(#deepDark)" />
            
            {/* Subtle rim light */}
            <circle cx="100" cy="100" r="90" fill="none" stroke="#222" strokeWidth="1" opacity="0.5" />
            
            {/* Very subtle inner pulse/core */}
            <circle cx="100" cy="100" r="30" fill="#000" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="#111" strokeWidth="0.5" />
          </svg>
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
                 height: `calc(${orbit.size} * 1.6)`, // Taller portrait ratio
                 transformStyle: "preserve-3d", // CRITICAL FIX: Prevent flattening
              }} 
            >
              {/* Counter-Rotator (Billboarding) */}
              <div 
                 className="w-full h-full relative will-change-transform"
                 style={{
                    animation: `counter-spin ${orbit.duration} linear infinite`,
                    animationDelay: `-${(parseInt(orbit.duration) / 360) * orbit.offset}s`,
                    transformStyle: "preserve-3d"
                 }}
              >
                 {/* Counter-tilt */}
                 <div 
                    className="w-full h-full relative"
                    style={{
                       transform: "rotateX(-70deg)" // Match container tilt
                    }}
                 >
                    <Image
                      src={orbit.imageSrc}
                      alt={orbit.imageAlt || "Artwork"}
                      fill
                      className="object-cover grayscale contrast-125" // Removed hover color
                      sizes={orbit.size}
                      priority={index < 2}
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
