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
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-4 md:px-8 py-5 md:py-8 text-foreground">
        <Link 
          href="/" 
          className="font-serif text-lg md:text-xl tracking-tighter italic opacity-80 hover:opacity-100 transition-opacity relative z-[201]"
        >
          Manthé
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 font-mono text-[9px] uppercase tracking-[0.4em]">
          <Link href="/works" className="hover:opacity-100 opacity-50 transition-opacity">
            Archive
          </Link>
          <Link href="/about" className="hover:opacity-100 opacity-50 transition-opacity">
            Mind
          </Link>
          <Link href="/contact" className="hover:opacity-100 opacity-50 transition-opacity">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2 relative z-[201]">
          {/* Cart Button */}
          <button 
            onClick={openDrawer}
            className="hover:opacity-100 opacity-60 transition-opacity relative p-3" 
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center font-mono text-[8px] font-bold bg-foreground text-background rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden hover:opacity-100 opacity-60 transition-opacity p-3"
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
            className="fixed inset-0 z-[300] bg-[#050505] md:hidden flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Link 
                  href="/works" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-5xl italic opacity-90 active:opacity-100"
                >
                  Archive
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <Link 
                  href="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-5xl italic opacity-90 active:opacity-100"
                >
                  Mind
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-5xl italic opacity-90 active:opacity-100"
                >
                  Contact
                </Link>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.4 }}
              className="p-8 text-center"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.5em]">
                Matthew Manthé
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
