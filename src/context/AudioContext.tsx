"use client";

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  isPlaying: boolean;
  startAudio: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/backgroundmusic.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const startAudio = () => {
    if (!hasInteracted && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
        setHasInteracted(true);
      }).catch(() => {
        // Autoplay blocked, will need user interaction
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        if (!isPlaying) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {});
        }
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, isPlaying, startAudio }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
}
