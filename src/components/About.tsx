"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const rajveerSkills = ["Next.js 15", "System Security", "Rust", "AWS Arch", "PostgreSQL", "CI/CD"];
const rupeshSkills = ["Three.js", "Spatial UI", "Brand Story", "Figma Pro", "Motion Design", "WebGL"];

export default function About() {
  const [hoveredFounder, setHoveredFounder] = useState<"rajveer" | "rupesh" | null>(null);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col md:flex-row">
      {/* Rajveer - Code Brutalism */}
      <motion.div
        onMouseEnter={() => setHoveredFounder("rajveer")}
        onMouseLeave={() => setHoveredFounder(null)}
        className={`relative flex-1 p-12 flex flex-col justify-center border-r border-white/5 transition-all duration-700 ${
          hoveredFounder === "rupesh" ? "opacity-30 grayscale" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-[10px] overflow-hidden whitespace-pre leading-none p-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i}>010110101001010101010100101010101010101010101010101010101010101010101010101010101010101010101</div>
          ))}
        </div>
        
        <div className="relative z-10">
          <span className="font-mono text-purple-500 text-sm mb-4 block tracking-tighter">{"<PRINCIPAL_ENGINEER />"}</span>
          <h2 className="text-7xl md:text-9xl font-bebas text-white leading-none mb-6">RAJVEER<br/>RAJ</h2>
          <p className="font-mono text-white/60 text-sm max-w-sm border-l-2 border-purple-500 pl-4 py-2">
            Architecting robust backend systems that scale beyond 10M requests. Focused on high-performance compute and zero-trust security.
          </p>
        </div>

        {/* Skill Cloud Sync */}
        <AnimatePresence>
          {hoveredFounder === "rajveer" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute bottom-12 left-12 flex flex-wrap gap-2 max-w-xs"
            >
              {rajveerSkills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-500 text-white font-mono text-[10px] uppercase">
                  {skill}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Rupesh - Tactile Minimalism */}
      <motion.div
        onMouseEnter={() => setHoveredFounder("rupesh")}
        onMouseLeave={() => setHoveredFounder(null)}
        className={`relative flex-1 p-12 flex flex-col justify-center transition-all duration-700 ${
          hoveredFounder === "rajveer" ? "opacity-30 grayscale" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 md:text-right flex flex-col md:items-end">
          <span className="font-sans italic text-blue-400 text-sm mb-4 block tracking-widest">{"Experience Architect"}</span>
          <h2 className="text-7xl md:text-9xl font-bebas text-white leading-none mb-6 italic tracking-tight">RUPESH<br/>SHROFF</h2>
          <p className="font-sans text-white/50 text-sm max-w-sm md:text-right italic">
            Crafting spatial experiences that merge 3D aesthetics with pixel-perfect precision. Believing that every interaction tells a brand story.
          </p>
        </div>

        {/* Skill Cloud Sync */}
        <AnimatePresence>
          {hoveredFounder === "rupesh" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute bottom-12 right-12 flex flex-wrap gap-2 max-w-xs justify-end"
            >
              {rupeshSkills.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full font-sans text-[10px] uppercase tracking-widest">
                  {skill}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
