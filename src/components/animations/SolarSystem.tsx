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
          {/* Custom Eyeball SVG */}
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_60px_rgba(255,255,255,0.15)]">
            <defs>
              <radialGradient id="scleraGrad" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
                <stop offset="60%" stopColor="#EFECE5" />
                <stop offset="95%" stopColor="#8A8884" />
                <stop offset="100%" stopColor="#000" />
              </radialGradient>
              <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
                <stop offset="50%" stopColor="#1a1a1a" />
                <stop offset="90%" stopColor="#333" />
                <stop offset="100%" stopColor="#000" />
              </radialGradient>
            </defs>
            
            {/* Sclera (Eyeball White) */}
            <circle cx="100" cy="100" r="90" fill="url(#scleraGrad)" />
            
            {/* Iris Container */}
            <g transform="translate(100 100)">
              <circle r="50" fill="url(#irisGrad)" />
              {/* Iris Striations */}
              <g opacity="0.4" stroke="#000" strokeWidth="0.5">
                {[...Array(24)].map((_, i) => (
                   <line key={i} x1="0" y1="20" x2="0" y2="48" transform={`rotate(${i * 15})`} />
                ))}
              </g>
            </g>

            {/* Pupil */}
            <circle cx="100" cy="100" r="22" fill="#000" />
            
            {/* Gloss/Reflection */}
            <ellipse cx="75" cy="75" rx="15" ry="10" fill="#fff" opacity="0.6" transform="rotate(-45 75 75)" />
            <circle cx="115" cy="115" r="5" fill="#fff" opacity="0.3" />
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
