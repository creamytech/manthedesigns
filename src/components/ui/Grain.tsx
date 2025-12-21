"use client";

import { useEffect, useRef } from "react";

export function Grain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]">
      <div className="absolute inset-0 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 animate-grain bg-[url('/noise.png')] opacity-50 will-change-transform" />
      {/* Fallback to CSS noise if image not used, but SVG pattern is better */}
      <svg className="absolute inset-0 h-full w-full opacity-100">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
