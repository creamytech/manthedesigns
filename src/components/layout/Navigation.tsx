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
      {/* Main Nav Bar */}
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-4 md:px-8 py-5 md:py-8">
        <Link 
          href="/" 
          className="font-serif text-lg md:text-xl tracking-tighter italic text-white/80 hover:text-white transition-colors relative z-[201]"
        >
          Manthé
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 font-mono text-[9px] uppercase tracking-[0.4em] text-white/50">
          <Link href="/works" className="hover:text-white transition-colors">
            Archive
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            Mind
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2 relative z-[201]">
          {/* Cart Button */}
          <button 
            onClick={openDrawer}
            className="text-white/60 hover:text-white transition-colors relative p-3" 
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center font-mono text-[8px] font-bold bg-white text-black rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white/60 hover:text-white transition-colors p-3"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[500] bg-black md:hidden flex flex-col text-white"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 text-white/60 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.4 }}
              >
                <Link 
                  href="/works" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-5xl italic text-white"
                >
                  Archive
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <Link 
                  href="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-5xl italic text-white"
                >
                  Mind
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-5xl italic text-white"
                >
                  Contact
                </Link>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-8 text-center"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-white/30">
                Matthew Manthé
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
