"use client";

import { useState } from "react";
import { artworks } from "@/data/artworks";
import { Navigation } from "@/components/layout/Navigation";
import { Grain } from "@/components/ui/Grain";
import Link from "next/link";
import Image from "next/image";
import { Slideshow } from "@/components/gallery/Slideshow";
import { motion, AnimatePresence } from "framer-motion";

const MEDIUMS = ["All", "Graphite", "Ink", "Plaster"] as const;
type Medium = typeof MEDIUMS[number];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function WorksPage() {
  const [activeMedium, setActiveMedium] = useState<Medium>("All");

  const filteredArtworks = activeMedium === "All" 
    ? artworks 
    : artworks.filter(a => a.medium.toLowerCase().includes(activeMedium.toLowerCase()));

  return (
    <main className="min-h-screen relative bg-background text-foreground selection:bg-bone selection:text-ebony">
      <Grain />
      <Navigation />

      <div className="pt-28 md:pt-40 pb-20 md:pb-32 px-4 md:px-12 max-w-[1800px] mx-auto">
        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12 md:mb-24 flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 items-start md:items-center"
        >
          <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40">Filter by medium</span>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {MEDIUMS.map((medium) => (
              <button
                key={medium}
                onClick={() => setActiveMedium(medium)}
                className={`font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-500 border-b py-1 ${
                  activeMedium === medium 
                    ? "opacity-100 border-foreground/60" 
                    : "opacity-40 border-transparent hover:opacity-70"
                }`}
              >
                {medium}
              </button>
            ))}
          </div>
          <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] opacity-30 md:ml-auto mt-2 md:mt-0">
            {filteredArtworks.length} works
          </span>
        </motion.div>

        {/* Works Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMedium}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32"
          >
            {filteredArtworks.map((artwork) => {
              const hasSlideshow = artwork.images && artwork.images.length > 1;
              return (
              <motion.div key={artwork.id} variants={item} className="group">
                <Link href={`/works/${artwork.id}`} className="block relative">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ebony">
                     {hasSlideshow ? (
                       <Slideshow 
                         images={artwork.images!} 
                         title={artwork.title} 
                         keepColor={artwork.keepColor || artwork.medium === "Plaster"}
                       />
                     ) : (
                       <Image
                         src={artwork.imageUrl}
                         alt={artwork.title}
                         fill
                         className={`object-cover transition-all duration-[2000ms] ease-in-out group-hover:scale-[1.03] contrast-110 brightness-95 group-hover:brightness-100 ${
                           !artwork.keepColor && artwork.medium !== "Plaster" ? "grayscale" : ""
                         }`}
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       />
                     )}
                  </div>
                  {/* Title and year - more visible */}
                  <div className="mt-6 flex justify-between items-baseline opacity-40 group-hover:opacity-80 transition-opacity duration-700">
                      <span className="font-serif text-lg italic">{artwork.title}</span>
                      <span className="font-mono text-[9px] uppercase tracking-widest">${artwork.price}</span>
                  </div>
                </Link>
              </motion.div>
            )})}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredArtworks.length === 0 && (
          <div className="py-40 text-center">
            <p className="font-mono text-sm uppercase tracking-widest opacity-40">No works found in {activeMedium}</p>
          </div>
        )}
      </div>
    </main>
  );
}
