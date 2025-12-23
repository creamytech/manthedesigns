"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Grain } from "@/components/ui/Grain";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative bg-background text-foreground selection:bg-bone selection:text-ebony">
      <Grain />
      <Navigation />

      <div className="pt-28 md:pt-48 pb-40 md:pb-80 px-4 md:px-12 max-w-3xl mx-auto">
        {/* Opening */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="mb-32"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-40 block mb-6">
            About the Artist
          </span>
          <h1 className="font-serif text-4xl md:text-5xl italic leading-[1.3] opacity-90">
            Matthew Manthé
          </h1>
        </motion.div>

        {/* Bio - Fragment 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="mb-20"
        >
          <p className="font-serif text-xl md:text-2xl leading-[1.9] opacity-80">
            I've been sketching since childhood, always with a pencil and paper close at hand. It began as instinct, a compulsion to fill empty space with marks, and over time it became the way I understand the world.
          </p>
        </motion.div>

        {/* Bio - Fragment 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="mb-20 md:pl-[10%]"
        >
          <p className="font-serif text-xl md:text-2xl leading-[1.9] opacity-80">
            For years, I spent hundreds of hours filling my walls with work. When there was no more room, I began rotating new pieces in and storing the old ones away. Eventually, I realized I had accumulated an entire room of unseen original works, drawings no one had ever laid eyes on.
          </p>
        </motion.div>

        {/* Bio - Fragment 3 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="mb-20"
        >
          <p className="font-serif text-xl md:text-2xl leading-[1.9] opacity-80">
            That discovery led me to start showing my art in galleries across the Northeast. The response has been humbling, recognition I never sought but am grateful to receive.
          </p>
        </motion.div>

        {/* Bio - Final Fragment */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="mb-32 md:pl-[5%]"
        >
          <p className="font-serif text-xl md:text-2xl leading-[1.9] opacity-80">
            My practice is defined by an obsession with detail, a need to fill every inch of the page. It's a meditation, a discipline, and after all these years, still the only way I know how to make sense of what's inside.
          </p>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
          className="flex items-center gap-6 pt-12 border-t border-foreground/10"
        >
          <div className="h-px w-12 bg-foreground/20" />
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-40">
            Long Island, NY
          </span>
        </motion.div>
      </div>
    </main>
  );
}
