"use client";

import { useState } from "react";
import { Artwork, artworks } from "@/data/artworks";
import { Navigation } from "@/components/layout/Navigation";
import { Grain } from "@/components/ui/Grain";
import Link from "next/link";
import Image from "next/image";
import { Slideshow } from "@/components/gallery/Slideshow";
import { motion, AnimatePresence } from "framer-motion";

const MEDIUMS = ["All", "Graphite", "Ink", "Plaster"] as const;
type Medium = typeof MEDIUMS[number];

/**
 * Compute a natural-feeling aspect ratio for masonry cards.
 * Uses the artwork's orientation and physical dimensions to
 * create varied card heights that feel organic.
 */
function getAspectRatio(artwork: Artwork): string {
  // Square pieces (16x16, 20x20)
  const [w, h] = artwork.dimensions.split("x").map(Number);
  if (w === h) return "aspect-square";

  // Landscape images
  if (artwork.isLandscape) {
    // Very wide pieces
    if (w > h) return "aspect-[5/4]";
    // Landscape photo of a portrait piece (like Mother 20x24 but photo is landscape)
    return "aspect-[4/3]";
  }

  // Portrait - vary based on proportions for visual interest
  const ratio = w / h;
  if (ratio <= 0.6) return "aspect-[2/3]"; // Very tall
  if (ratio <= 0.75) return "aspect-[3/4]"; // Standard portrait
  return "aspect-[4/5]"; // Slightly portrait
}

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
          className="mb-12 md:mb-20 flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 items-start md:items-center"
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

        {/* Masonry Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMedium}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-x-6 md:gap-x-10 lg:gap-x-14"
          >
            {filteredArtworks.map((artwork, index) => (
              <MasonryCard key={artwork.id} artwork={artwork} index={index} />
            ))}
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

function MasonryCard({ artwork, index }: { artwork: Artwork; index: number }) {
  const hasSlideshow = artwork.images && artwork.images.length > 1;
  const aspectClass = getAspectRatio(artwork);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        delay: index < 6 ? index * 0.08 : 0, // Stagger first 6 visible cards
      }}
      className="break-inside-avoid mb-6 md:mb-10 lg:mb-14 group"
    >
      <Link href={`/gallery/${artwork.id}`} className="block relative">
        {/* Image Container - uses natural aspect ratio per artwork */}
        <div className={`relative ${aspectClass} overflow-hidden bg-ebony`}>
          {hasSlideshow ? (
            <Slideshow 
              images={artwork.images!} 
              title={artwork.title} 
              keepColor={artwork.keepColor || artwork.medium === "Plaster"}
              isLandscape={artwork.isLandscape}
            />
          ) : (
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              fill
              className={`object-cover transition-all duration-[2000ms] ease-in-out group-hover:scale-[1.03] contrast-110 brightness-95 group-hover:brightness-100 ${
                !artwork.keepColor && artwork.medium !== "Plaster" ? "grayscale" : ""
              } ${artwork.id === "26" ? "object-top" : ""}`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}

          {/* Subtle hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>

        {/* Title + Price */}
        <div className="mt-4 md:mt-5 flex justify-between items-baseline opacity-40 group-hover:opacity-80 transition-opacity duration-700">
          <span className="font-serif text-base md:text-lg italic">{artwork.title}</span>
          <span className="font-mono text-[9px] uppercase tracking-widest">${artwork.price}</span>
        </div>
      </Link>
    </motion.div>
  );
}
