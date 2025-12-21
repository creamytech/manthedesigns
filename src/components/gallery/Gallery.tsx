"use client";

import { motion } from "framer-motion";
import { Artwork, artworks } from "@/data/artworks";
import Image from "next/image";
import Link from "next/link";

export function Gallery() {
  const featuredArtworks = artworks.slice(0, 6);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-12 md:gap-y-20 max-w-[1600px] mx-auto">
      {featuredArtworks.map((art, index) => (
        <GalleryItem key={art.id} artwork={art} index={index} />
      ))}
    </div>
  );
}

function GalleryItem({ artwork, index }: { artwork: Artwork; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col group"
    >
      <Link href={`/works/${artwork.id}`} className="block relative">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
           <Image
             src={artwork.imageUrl}
             alt={artwork.title}
             fill
             className={`object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] contrast-110 brightness-90 group-hover:brightness-100 ${
               artwork.medium !== "Plaster" ? "grayscale" : ""
             }`}
             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
           />
        </div>
        
        {/* Title and year - visible on mobile, hover on desktop */}
        <div className="mt-4 flex justify-between items-baseline opacity-60 md:opacity-0 md:group-hover:opacity-70 transition-opacity duration-500">
            <span className="font-serif text-base md:text-lg italic">{artwork.title}</span>
            <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em]">{artwork.year}</span>
        </div>
      </Link>
    </motion.div>
  );
}
