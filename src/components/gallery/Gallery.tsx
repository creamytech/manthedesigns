"use client";

import { motion } from "framer-motion";
import { Artwork, artworks } from "@/data/artworks";
import Image from "next/image";
import Link from "next/link";

export function Gallery() {
  const featuredArtworks = artworks.slice(0, 6);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-48 max-w-[1600px] mx-auto">
      {featuredArtworks.map((art, index) => (
        <GalleryItem key={art.id} artwork={art} index={index} />
      ))}
    </div>
  );
}

function GalleryItem({ artwork, index }: { artwork: Artwork; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ delay: index * 0.15, duration: 2.5, ease: "easeOut" }}
      className="flex flex-col group"
    >
      <Link href={`/works/${artwork.id}`} className="block relative">
        <div className="relative aspect-[3/4] overflow-hidden bg-ebony">
           <Image
             src={artwork.imageUrl}
             alt={artwork.title}
             fill
             className={`object-cover transition-all duration-[2500ms] ease-in-out group-hover:scale-[1.03] contrast-125 brightness-[0.7] group-hover:brightness-90 ${
               artwork.medium !== "Plaster" ? "grayscale" : ""
             }`}
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
           />
        </div>
        
        {/* Title and year - invisible by default, reveals on hover */}
        <div className="mt-6 flex justify-between items-baseline opacity-0 group-hover:opacity-70 transition-opacity duration-1000">
            <span className="font-serif text-lg italic">{artwork.title}</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.4em]">{artwork.year}</span>
        </div>
      </Link>
    </motion.div>
  );
}
