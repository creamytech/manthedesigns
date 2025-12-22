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
    duration: "45s", // Different speeds
    imageSrc: "/images/Camo_Parallax.png",
    size: "18vw",
    radius: "30vw",
  },
  {
    offset: 45,
    duration: "55s",
    imageSrc: "/images/InTheSky_Parallax.png",
    size: "22vw",
    radius: "45vw",
  },
  {
    offset: 90,
    duration: "70s",
    imageSrc: "/images/DarkNight_Parallax.png",
    size: "20vw",
    radius: "60vw",
  },
  {
    offset: 135,
    duration: "90s",
    imageSrc: "/images/ThreeSaints_Parallax.png",
    size: "24vw",
    radius: "75vw",
  },
];

export function SolarSystem() {
  return (
    <div className="relative w-full h-[125vh] -mt-32 flex items-center justify-center overflow-hidden bg-[#050505] hidden md:flex" style={{ perspective: "1500px" }}>
      {/* 3D Scene Container */}
      <div 
        className="relative flex items-center justify-center will-change-transform"
        style={{ 
          transformStyle: "preserve-3d",
          transform: "rotateX(60deg) rotateY(0deg)", // Reduced tilt, remove Y rotation for cleaner look
        }}
      >
        {/* Central Object (SVG) */}
        <div 
          className="absolute z-10 w-[20vw] h-[20vw] flex items-center justify-center"
          style={{ 
            transform: "rotateX(-60deg)", // Counter-tilt
            transformStyle: "preserve-3d"
          }}
        >
          {/* Cool SVG Sphere */}
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <defs>
              <radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#333" />
                <stop offset="50%" stopColor="#111" />
                <stop offset="100%" stopColor="#000" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#sphereGrad)" stroke="none" />
            <ellipse cx="100" cy="100" rx="90" ry="20" fill="none" stroke="#333" strokeWidth="1" transform="rotate(0 100 100)" opacity="0.5" />
            <ellipse cx="100" cy="100" rx="90" ry="20" fill="none" stroke="#333" strokeWidth="1" transform="rotate(45 100 100)" opacity="0.5" />
            <ellipse cx="100" cy="100" rx="90" ry="20" fill="none" stroke="#333" strokeWidth="1" transform="rotate(90 100 100)" opacity="0.5" />
            <ellipse cx="100" cy="100" rx="90" ry="20" fill="none" stroke="#333" strokeWidth="1" transform="rotate(135 100 100)" opacity="0.5" />
            <circle cx="100" cy="100" r="30" fill="#222" filter="url(#glow)" opacity="0.8" />
          </svg>
        </div>

        {/* Orbiting Items */}
        {ORBITS.map((orbit, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center rounded-full border-[1px] border-bone/10 will-change-transform"
            style={{
              width: orbit.radius,
              height: orbit.radius,
              transformStyle: "preserve-3d",
              animation: `spin ${orbit.duration} linear infinite`,
              animationDelay: `-${index * 15}s` // Stagger start
            }}
          >
            {/* Positioner */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
              style={{
                 width: orbit.size, 
                 height: `calc(${orbit.size} * 1.25)`,
              }} 
            >
              {/* Counter-Rotator (Billboarding) */}
              <div 
                 className="w-full h-full relative will-change-transform"
                 style={{
                    animation: `counter-spin ${orbit.duration} linear infinite`,
                    animationDelay: `-${index * 15}s`,
                    transformStyle: "preserve-3d"
                 }}
              >
                 {/* Counter-tilt */}
                 <div 
                    className="w-full h-full relative"
                    style={{
                       transform: "rotateX(-60deg)" // Match container tilt
                    }}
                 >
                    <Image
                      src={orbit.imageSrc}
                      alt={orbit.imageAlt || "Artwork"}
                      fill
                      className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
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
