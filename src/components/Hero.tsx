"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[200vh] flex flex-col items-center justify-center overflow-hidden pointer-events-none">
      {/* Hero Content */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-9xl font-bebas tracking-tighter leading-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent drop-shadow-2xl">
            RR BROTHERS
          </h1>
          <p className="font-bebas text-2xl md:text-4xl text-purple-400 mt-2 tracking-widest uppercase">
             Engineering the Future of Design
          </p>
          
          <div className="mt-12 backdrop-blur-md bg-white/5 border border-white/10 px-8 py-4 rounded-full liquid-glass pointer-events-auto cursor-pointer hover:bg-white/10 transition-all duration-300">
            <span className="font-sans text-sm md:text-base font-medium tracking-wider uppercase text-white/80">
              Scroll to explore the space
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative fragments will be handled by the 3D canvas on scroll */}
    </section>
  );
}
