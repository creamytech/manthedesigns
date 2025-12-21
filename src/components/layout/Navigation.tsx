"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const { openDrawer, cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-8 py-6 md:py-8 text-foreground mix-blend-difference">
        <Link 
          href="/" 
          className="font-serif text-lg md:text-xl tracking-tighter italic hover:opacity-100 opacity-70 transition-opacity"
        >
          Manthé
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 font-mono text-[9px] uppercase tracking-[0.4em]">
          <Link href="/works" className="hover:opacity-100 opacity-40 transition-opacity">
            Archive
          </Link>
          <Link href="/about" className="hover:opacity-100 opacity-40 transition-opacity">
            Mind
          </Link>
          <Link href="/contact" className="hover:opacity-100 opacity-40 transition-opacity">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Cart Button */}
          <button 
            onClick={openDrawer}
            className="hover:opacity-100 opacity-50 transition-opacity relative p-2" 
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5 md:w-4 md:h-4" strokeWidth={1} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center font-mono text-[8px] font-bold bg-foreground text-background rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden hover:opacity-100 opacity-50 transition-opacity p-2"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" strokeWidth={1} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-background/95 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  href="/works" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl italic opacity-80 hover:opacity-100 transition-opacity"
                >
                  Archive
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <Link 
                  href="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl italic opacity-80 hover:opacity-100 transition-opacity"
                >
                  Mind
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl italic opacity-80 hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3 }}
                className="w-12 h-px bg-foreground/20 my-4"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 0.4 }}
                className="font-mono text-[9px] uppercase tracking-[0.4em]"
              >
                Matthew Manthé
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
