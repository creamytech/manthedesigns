"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CheckoutSuccessPage() {
  const { items, removeFromCart } = useCart();

  // Clear the cart after successful checkout
  useEffect(() => {
    items.forEach((item) => removeFromCart(item.artwork.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full text-center space-y-12"
      >
        {/* Decorative line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-px h-20 bg-foreground/20 mx-auto origin-top"
        />

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl italic">
            Thank You
          </h1>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
            Your order has been placed
          </p>
        </div>

        {/* Message */}
        <div className="space-y-6">
          <p className="font-serif text-lg italic opacity-70 leading-relaxed">
            Your art is being prepared with care. You&apos;ll receive a confirmation email with tracking details shortly.
          </p>

          <div className="w-12 h-px bg-foreground/10 mx-auto" />

          <p className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-30">
            Questions? Reach out via the contact page
          </p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/gallery"
            className="inline-block font-mono text-[10px] uppercase tracking-[0.4em] opacity-50 hover:opacity-100 transition-opacity border-b border-foreground/20 pb-1"
          >
            Return to Gallery
          </Link>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-px h-20 bg-foreground/10 mx-auto origin-top"
        />
      </motion.div>
    </main>
  );
}
