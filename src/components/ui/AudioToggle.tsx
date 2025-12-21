"use client";

import { motion } from "framer-motion";
import { useAudio } from "@/context/AudioContext";

export function AudioToggle() {
  const { isMuted, toggleMute } = useAudio();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      onClick={toggleMute}
      className="fixed bottom-8 right-8 z-50 group flex items-center gap-3"
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {/* Sound wave visualization */}
      <div className="flex items-center gap-[2px] h-4">
        {[1, 2, 3, 4].map((bar) => (
          <motion.div
            key={bar}
            className="w-[2px] bg-foreground/40 group-hover:bg-foreground/80 transition-colors"
            animate={!isMuted ? {
              height: [4, 8 + bar * 3, 4],
            } : {
              height: 4,
            }}
            transition={{
              duration: 0.8,
              repeat: !isMuted ? Infinity : 0,
              delay: bar * 0.1,
              ease: "easeInOut",
            }}
            style={{ height: 4 }}
          />
        ))}
      </div>

      {/* Label */}
      <span className="font-mono text-[8px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-50 transition-opacity">
        {isMuted ? "Sound" : "Mute"}
      </span>

      {/* Subtle circle indicator */}
      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
        isMuted 
          ? "bg-foreground/20" 
          : "bg-foreground/60 shadow-[0_0_8px_rgba(220,220,208,0.3)]"
      }`} />
    </motion.button>
  );
}
