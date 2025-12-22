"use client";

import { useParams } from "next/navigation";
import { artworks } from "@/data/artworks";
import { Navigation } from "@/components/layout/Navigation";
import { Grain } from "@/components/ui/Grain";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function WorkPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const artwork = artworks.find((a) => a.id === id);

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center text-foreground bg-background">
        <p className="font-mono uppercase tracking-widest opacity-60">Work not found</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative bg-background text-foreground selection:bg-bone selection:text-ebony">
      <Grain />
      <Navigation />

      <div className="pt-24 md:pt-32 pb-20 md:pb-20 px-4 md:px-12 max-w-[1600px] mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 md:mb-12"
        >
          <Link href="/works" className="inline-flex items-center gap-2 md:gap-3 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-50 hover:opacity-100 transition-opacity">
            <MoveLeft className="w-3 h-3" /> Back to Archive
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 lg:gap-24 items-start">
          {/* Image Section - Dominant */}
          {/* Image Section - Dominant */}
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative space-y-12"
          >
             {(artwork.images || [artwork.imageUrl]).map((img, idx) => (
                <div key={idx} className="relative w-full bg-ebony overflow-hidden">
                    <Image
                      src={img}
                      alt={`${artwork.title} - View ${idx + 1}`}
                      width={1200}
                      height={1600}
                      className={`w-full h-auto object-cover ${
                          !artwork.keepColor && artwork.medium !== "Plaster" ? "grayscale contrast-110 brightness-95" : ""
                      }`}
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                </div>
             ))}
          </motion.div>

          {/* Details Section - Quiet */}
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="lg:sticky lg:top-32 space-y-16"
          >
              {/* Title Block */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
                    {artwork.id.padStart(3, '0')} — {artwork.medium}
                  </span>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl italic leading-[1.1]">
                    {artwork.title}
                  </h1>
                </div>
                
                <p className="font-serif text-lg md:text-xl leading-relaxed opacity-70 max-w-md whitespace-pre-wrap">
                   {artwork.description}
                </p>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-foreground/10">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-40 block">Dimensions</span>
                  <span className="font-mono text-sm opacity-80">{artwork.dimensions}</span>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-40 block">Medium</span>
                  <span className="font-mono text-sm opacity-80">{artwork.medium}</span>
                </div>
              </div>

              {/* Acquisition */}
              <div className="space-y-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-40">Price</span>
                  <span className="font-serif text-3xl italic">${artwork.price}</span>
                </div>
                
                <button 
                    onClick={() => addToCart(artwork)}
                    className="w-full bg-transparent border border-foreground/30 text-foreground py-5 font-mono uppercase tracking-[0.4em] text-[10px] hover:bg-foreground hover:text-background transition-all duration-700"
                >
                    Add to Collection
                </button>
                
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-30 text-center">
                  Free shipping — Certificate of authenticity included
                </p>
              </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
