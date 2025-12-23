"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function Navigation() {
  const { openDrawer, cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mobile menu rendered via portal to escape transform context
  const mobileMenu = mounted && isMobileMenuOpen ? createPortal(
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
      }}
    >
      {/* Close Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ padding: '12px', color: 'rgba(255,255,255,0.6)' }}
          aria-label="Close menu"
        >
          <X style={{ width: '32px', height: '32px' }} strokeWidth={1.5} />
        </button>
      </div>

      {/* Menu Links */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '48px' 
      }}>
        <Link 
          href="/gallery" 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ 
            fontFamily: 'var(--font-cormorant)', 
            fontSize: '48px', 
            fontStyle: 'italic',
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Gallery
        </Link>
        
        <Link 
          href="/about" 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ 
            fontFamily: 'var(--font-cormorant)', 
            fontSize: '48px', 
            fontStyle: 'italic',
            color: 'white',
            textDecoration: 'none'
          }}
        >
          About
        </Link>
        
        <Link 
          href="/contact" 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ 
            fontFamily: 'var(--font-cormorant)', 
            fontSize: '48px', 
            fontStyle: 'italic',
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Contact
        </Link>
      </div>

      {/* Footer */}
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <p style={{ 
          fontFamily: 'var(--font-geist-mono)', 
          fontSize: '9px', 
          textTransform: 'uppercase', 
          letterSpacing: '0.5em',
          color: 'rgba(255,255,255,0.3)'
        }}>
          Matthew Manthé
        </p>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      {/* Main Nav Bar */}
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-4 md:px-8 py-5 md:py-8">
        <Link 
          href="/" 
          className="font-serif text-lg md:text-xl tracking-tighter italic text-white/80 hover:text-white transition-colors relative z-[201]"
        >
          Matthew Manthé
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 font-mono text-[9px] uppercase tracking-[0.4em] text-white/50">
          <Link href="/gallery" className="hover:text-white transition-colors">
            Gallery
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
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

      {/* Mobile Menu via Portal */}
      {mobileMenu}
    </>
  );
}
