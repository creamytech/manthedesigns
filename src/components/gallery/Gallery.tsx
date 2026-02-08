"use client";

import { motion } from "framer-motion";
import { Artwork, artworks } from "@/data/artworks";
import Image from "next/image";
import Link from "next/link";
import { Slideshow } from "./Slideshow";

function getAspectRatio(artwork: Artwork): string {
  const [w, h] = artwork.dimensions.split("x").map(Number);
  if (w === h) return "aspect-square";
  if (artwork.isLandscape) return "aspect-[4/3]";
  const ratio = w / h;
  if (ratio <= 0.75) return "aspect-[3/4]";
  return "aspect-[4/5]";
}

export function Gallery() {
  const featuredArtworks = artworks.slice(0, 6);
  
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-6 md:gap-x-10 max-w-[1600px] mx-auto">
      {featuredArtworks.map((art, index) => (
        <GalleryItem key={art.id} artwork={art} index={index} />
      ))}
    </div>
  );
}

function GalleryItem({ artwork, index }: { artwork: Artwork; index: number }) {
  const hasSlideshow = artwork.images && artwork.images.length > 1;
  const aspectClass = getAspectRatio(artwork);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="break-inside-avoid mb-6 md:mb-10 group"
    >
      <Link href={`/gallery/${artwork.id}`} className="block relative">
        <div className={`relative ${aspectClass} overflow-hidden bg-[#0a0a0a]`}>
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
               className={`object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] contrast-110 brightness-90 group-hover:brightness-100 ${
                 !artwork.keepColor && artwork.medium !== "Plaster" ? "grayscale" : ""
               }`}
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
             />
           )}

           {/* Hover overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
        
        {/* Title - visible on mobile, hover on desktop */}
        <div className="mt-3 md:mt-4 flex justify-between items-baseline opacity-60 md:opacity-0 md:group-hover:opacity-70 transition-opacity duration-500">
            <span className="font-serif text-base md:text-lg italic">{artwork.title}</span>
        </div>
      </Link>
    </motion.div>
  );
}
