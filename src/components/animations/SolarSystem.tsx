"use client";

import Image from "next/image";

interface OrbitProps {
  offset: number; // degrees
  duration: string; // e.g. "120s"
  imageSrc: string;
  imageAlt?: string;
  size: string; // e.g. "20vw"
}

const ORBITS: OrbitProps[] = [
  {
    offset: 0,
    duration: "40s", // Faster for better 3D effect visibility
    imageSrc: "/images/Camo_Parallax.png",
    size: "18vw",
  },
  {
    offset: 90,
    duration: "40s",
    imageSrc: "/images/InTheSky_Parallax.png",
    size: "22vw",
  },
  {
    offset: 180,
    duration: "40s",
    imageSrc: "/images/DarkNight_Parallax.png",
    size: "20vw",
  },
  {
    offset: 270,
    duration: "40s",
    imageSrc: "/images/ThreeSaints_Parallax.png",
    size: "24vw",
  },
];

export function SolarSystem() {
  return (
    <div className="relative w-full h-[125vh] -mt-32 flex items-center justify-center overflow-hidden bg-[#050505] hidden md:flex" style={{ perspective: "2000px" }}>
      {/* 3D Scene Container */}
      <div 
        className="relative flex items-center justify-center will-change-transform"
        style={{ 
          transformStyle: "preserve-3d",
          transform: "rotateX(75deg) rotateY(15deg)", // The 3D Tilt
        }}
      >
        {/* Central Object (SVG) - Stays flat to camera by counter-rotating the tilt? 
            Actually, for a sphere, we might want it to just sit there. 
            If we want it to look 3D, we can rotate it or just billboard it.
            Billboarding the center object:
        */}
        <div 
          className="absolute z-10 w-[20vw] h-[20vw] flex items-center justify-center"
          style={{ 
            transform: "rotateY(-15deg) rotateX(-75deg)", // Counter-tilt to face camera
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
            {/* Wireframe longitude lines */}
            <circle cx="100" cy="100" r="90" fill="url(#sphereGrad)" stroke="none" />
            <ellipse cx="100" cy="100" rx="90" ry="20" fill="none" stroke="#333" strokeWidth="1" transform="rotate(0 100 100)" opacity="0.5" />
            <ellipse cx="100" cy="100" rx="90" ry="20" fill="none" stroke="#333" strokeWidth="1" transform="rotate(45 100 100)" opacity="0.5" />
            <ellipse cx="100" cy="100" rx="90" ry="20" fill="none" stroke="#333" strokeWidth="1" transform="rotate(90 100 100)" opacity="0.5" />
            <ellipse cx="100" cy="100" rx="90" ry="20" fill="none" stroke="#333" strokeWidth="1" transform="rotate(135 100 100)" opacity="0.5" />
            
            {/* Inner core glow */}
            <circle cx="100" cy="100" r="30" fill="#222" filter="url(#glow)" opacity="0.8" />
          </svg>
        </div>

        {/* Orbit Path (Visual Ring) */}
        <div 
          className="absolute w-[60vw] h-[60vw] rounded-full border-[1px] border-bone/20 opacity-40 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          style={{ transform: "translateZ(0)" }}
        />

        {/* Orbiting Items */}
        {ORBITS.map((orbit, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center will-change-transform"
            style={{
              width: "60vw",
              height: "60vw",
              transformStyle: "preserve-3d",
              animation: `spin ${orbit.duration} linear infinite`,
            }}
          >
            {/* Positioner (Places item on the ring) */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
              style={{
                 width: orbit.size, 
                 height: `calc(${orbit.size} * 1.25)`,
                 // Apply fixed offset rotation to distribute them
                 // We can't just adding delay because we are spinning the container.
                 // Actually, simpler: We have 4 containers spinning.
                 // Just adding 'animation-delay' works if the animation is simple spin.
                 // But for equal distribution, 'animation-delay' is perfect.
                 animationDelay: `-${(parseInt(orbit.duration) / 360) * orbit.offset}s` // Calc delay based on offset degrees
              }} 
            >
              {/* Counter-Rotator (Billboarding) */}
              <div 
                 className="w-full h-full relative will-change-transform"
                 style={{
                    // 1. Counter-spin the orbit rotation
                    animation: `counter-spin ${orbit.duration} linear infinite`,
                    animationDelay: `-${(parseInt(orbit.duration) / 360) * orbit.offset}s`,
                    transformStyle: "preserve-3d"
                 }}
              >
                 {/* 2. Counter-tilt the Scene tilt to face camera */}
                 <div 
                    className="w-full h-full relative"
                    style={{
                       transform: "rotateY(-15deg) rotateX(-75deg)" 
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
