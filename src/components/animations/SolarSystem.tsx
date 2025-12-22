"use client";

import Image from "next/image";

interface OrbitProps {
  radius: string; // e.g. "40vw"
  duration: string; // e.g. "60s"
  imageSrc: string;
  imageAlt?: string;
  size: string; // e.g. "20vw"
  delay?: string;
  reverse?: boolean;
}

const ORBITS: OrbitProps[] = [
  {
    radius: "25vw",
    duration: "45s",
    imageSrc: "/images/Camo_Parallax.png",
    size: "18vw",
    delay: "0s",
  },
  {
    radius: "40vw",
    duration: "65s",
    imageSrc: "/images/InTheSky_Parallax.png",
    size: "22vw",
    reverse: true,
  },
  {
    radius: "55vw",
    duration: "85s",
    imageSrc: "/images/DarkNight_Parallax.png",
    size: "20vw",
    delay: "-20s",
  },
  {
    radius: "70vw",
    duration: "110s",
    imageSrc: "/images/ThreeSaints_Parallax.png",
    size: "24vw",
    reverse: true,
  },
];

export function SolarSystem() {
  return (
    <div className="relative w-full h-[125vh] -mt-32 flex items-center justify-center overflow-hidden bg-[#050505] hidden md:flex">
      {/* Central Anchor (Invisible) */}
      <div className="relative flex items-center justify-center">
        
        {ORBITS.map((orbit, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center rounded-full border border-foreground/5 will-change-transform"
            style={{
              width: orbit.radius,
              height: orbit.radius,
              animation: `orbit ${orbit.duration} linear infinite ${orbit.reverse ? 'reverse' : 'normal'}`,
            }}
          >
            {/* Planet Container - Positioned on the ring */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: orbit.size, height: `calc(${orbit.size} * 1.25)` }} // Aspect ratio approx 4:5
            >
              {/* Counter-Rotation Container */}
              <div
                className="w-full h-full relative will-change-transform"
                style={{
                  animation: `orbit ${orbit.duration} linear infinite ${orbit.reverse ? 'normal' : 'reverse'}`,
                }}
              >
                <div className="relative w-full h-full">
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

        {/* CSS Keyframes */}
        <style jsx>{`
          @keyframes orbit {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)] pointer-events-none z-10" />
    </div>
  );
}
