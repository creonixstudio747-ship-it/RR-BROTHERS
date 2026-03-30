"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Rajveer (Tech) Profile */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative p-8 rounded-3xl liquid-glass group cursor-pointer"
        >
          <div className="absolute top-4 right-4 text-purple-400 font-bebas text-xl opacity-50 group-hover:opacity-100 transition-opacity">
            01 / TECH & SECURITY
          </div>
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-4">RAJVEER RAJ</h2>
          <p className="font-sans text-white/70 leading-relaxed max-w-md">
            Senior Full-Stack Developer aur Security Specialist. We build scalable backend architectures jo apps ko safe aur reliable banati hain. Engineering is just half of the story; reliability matters.
          </p>
          <div className="mt-8 flex gap-4">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-purple-300 uppercase tracking-tighter">
              Next.js 15
            </span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-purple-300 uppercase tracking-tighter">
              Cloud Security
            </span>
          </div>
        </motion.div>

        {/* Rupesh (Design) Profile */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative p-8 rounded-3xl liquid-glass group cursor-pointer"
        >
          <div className="absolute top-4 right-4 text-blue-400 font-bebas text-xl opacity-50 group-hover:opacity-100 transition-opacity">
            02 / SPATIAL DESIGN
          </div>
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-4">RUPESH SHROFF</h2>
          <p className="font-sans text-white/70 leading-relaxed max-w-md">
            Senior UI/UX Architect aur 3D Enthusiast. Design apps that truly WOW users. Hum pixel-perfect borders ke peeche nahi baithte; hum designs create karte hain jo experience ki tarah feel hon (Spatial Design).
          </p>
          <div className="mt-8 flex gap-4">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-blue-300 uppercase tracking-tighter">
              Three.js
            </span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-blue-300 uppercase tracking-tighter">
              Aesthetics First
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
