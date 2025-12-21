"use client";

import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-[#050505] z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full md:w-[420px] bg-background border-l border-foreground/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-foreground/10">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl italic">Collection</h2>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-40">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </span>
              </div>
              <button 
                onClick={closeDrawer}
                className="p-2 opacity-40 hover:opacity-100 transition-opacity"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" strokeWidth={1} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
                  <div className="w-px h-16 bg-foreground/10" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
                    Your collection is empty
                  </p>
                  <button 
                    onClick={closeDrawer}
                    className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50 hover:opacity-100 transition-opacity border-b border-foreground/20"
                  >
                    Continue browsing
                  </button>
                </div>
              ) : (
                <div className="space-y-10">
                  {items.map((item, index) => (
                    <motion.div 
                      key={item.artwork.id} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="relative w-20 aspect-[3/4] bg-ebony overflow-hidden flex-shrink-0">
                          <Image
                            src={item.artwork.imageUrl}
                            alt={item.artwork.title}
                            fill
                            className="object-cover grayscale contrast-110"
                            sizes="80px"
                          />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1 min-w-0">
                        <div className="space-y-2">
                          <h3 className="font-serif text-lg italic leading-tight truncate">{item.artwork.title}</h3>
                          <p className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-40">
                            {item.artwork.medium} — {item.artwork.year}
                          </p>
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <button 
                              onClick={() => removeFromCart(item.artwork.id)}
                              className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-30 hover:opacity-100 transition-opacity"
                          >
                              Remove
                          </button>
                          <span className="font-serif text-lg italic opacity-80">${item.artwork.price}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-foreground/10 space-y-8">
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-40">Subtotal</span>
                  <span className="font-serif text-2xl italic">${cartTotal}</span>
                </div>
                
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-30 text-center">
                    Shipping calculated at checkout
                </p>
                
                <button className="w-full bg-foreground text-background py-5 font-mono uppercase tracking-[0.4em] text-[10px] hover:opacity-90 transition-opacity">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
