"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Grain } from "@/components/ui/Grain";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative bg-background text-foreground selection:bg-bone selection:text-ebony">
      <Grain />
      <Navigation />

      <div className="pt-28 md:pt-48 pb-20 md:pb-80 px-4 md:px-12 max-w-3xl mx-auto min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {/* Minimal header */}
          <div className="mb-24">
            <h1 className="font-serif text-4xl md:text-5xl italic leading-none tracking-tighter opacity-80">Connection</h1>
          </div>

          <form className="space-y-16">
            {/* Name */}
            <div className="group">
              <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-20 group-focus-within:opacity-50 transition-opacity block mb-4">Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-foreground/30 focus:outline-none transition-colors font-serif text-xl md:text-2xl placeholder:opacity-10"
                placeholder=""
              />
            </div>

            {/* Email */}
            <div className="group">
              <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-20 group-focus-within:opacity-50 transition-opacity block mb-4">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-foreground/30 focus:outline-none transition-colors font-serif text-xl md:text-2xl placeholder:opacity-10"
                placeholder=""
              />
            </div>

            {/* Message */}
            <div className="group">
              <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-20 group-focus-within:opacity-50 transition-opacity block mb-4">Message</label>
              <textarea 
                id="message"
                rows={3}
                className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-foreground/30 focus:outline-none transition-colors font-serif text-xl md:text-2xl resize-none placeholder:opacity-10"
                placeholder=""
              />
            </div>

            {/* Submit - subdued */}
            <div className="pt-8">
                <button type="submit" className="bg-transparent border border-foreground/15 px-12 py-5 font-mono uppercase tracking-[0.5em] text-[9px] opacity-50 hover:opacity-100 hover:border-foreground/40 transition-all duration-1000">
                    Send
                </button>
            </div>
          </form>

          {/* Subdued acknowledgment - shown after submission */}
          {/* <p className="mt-16 font-mono text-[9px] uppercase tracking-[0.4em] opacity-30">Transmission received.</p> */}
        </motion.div>
      </div>
    </main>
  );
}
