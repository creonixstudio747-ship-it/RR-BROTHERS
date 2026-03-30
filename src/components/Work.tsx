"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "EcoSmart Dashboard",
    category: "SaaS / Data Viz",
    problem: "Data overload and high bounce rates on complex analytics pages.",
    solution: "Simplified 3D data visualization using R3F and optimized API queries.",
    result: "40% increase in user retention and 2.5s faster data rendering.",
    size: "col-span-1 md:col-span-2 row-span-1",
    color: "from-blue-600/30 to-purple-600/30",
  },
  {
    id: 2,
    title: "Meta-X Brand",
    category: "3D Branding",
    problem: "A generic visual identity that failed to stand out in the Web3 space.",
    solution: "A procedural 3D branding system that reacts to site interactions.",
    result: "Winner of 'Site of the Year' and 3x higher community engagement.",
    size: "col-span-1 row-span-2",
    color: "from-purple-600/30 to-pink-600/30",
  },
  {
    id: 3,
    title: "Luxury E-com",
    category: "E-commerce",
    problem: "Standard product grids led to stagnant sales for luxury items.",
    solution: "Immersive 360 viewer and haptic-feedback UI for mobile customers.",
    result: "25% conversion lift and zero drop-off in high-ticket segments.",
    size: "col-span-1 row-span-1",
    color: "from-blue-400/30 to-emerald-400/30",
  },
  {
    id: 4,
    title: "Immersive Universe",
    category: "3D Spatial Web",
    problem: "Flat agencies were unable to showcase technical scalability.",
    solution: "A full spatial web experience with optimized shader pipelines.",
    result: "100/100 Lighthouse score and featured on Next.js Showcase.",
    size: "col-span-1 md:col-span-2 row-span-1",
    color: "from-cyan-600/30 to-blue-600/30",
  }
];

export default function Work() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = caseStudies.find(p => p.id === selectedId);

  return (
    <section className="relative min-h-screen py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-7xl md:text-9xl font-bebas text-white leading-none">WORK</h2>
          <p className="font-bebas text-xl md:text-2xl text-purple-400 mt-2 tracking-widest uppercase">
            3D Bento Grid: PSR Framework
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {caseStudies.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              whileHover={{ scale: 0.98 }}
              className={`relative rounded-3xl overflow-hidden glass p-8 shadow-2xl cursor-pointer ${project.size}`}
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-4xl font-bebas text-white mt-1 uppercase leading-none">{project.title}</h3>
                </div>
                <div className="text-[10px] text-purple-400 font-mono tracking-tighter opacity-50">
                   CLICK TO VIEW CASE STUDY →
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - PSR Framework */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-2xl bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-8 right-8 text-white/20 hover:text-white cursor-pointer transition-colors" onClick={() => setSelectedId(null)}>
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
              </div>

              <span className="text-xs font-mono text-purple-500 uppercase tracking-widest mb-2 block">{selectedProject.category}</span>
              <h2 className="text-6xl md:text-7xl font-bebas text-white leading-none mb-12 italic">{selectedProject.title}</h2>

              <div className="space-y-8 font-sans">
                <div>
                  <h4 className="text-purple-400 font-bebas text-2xl tracking-widest uppercase mb-1">01. THE PROBLEM</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{selectedProject.problem}</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-bebas text-2xl tracking-widest uppercase mb-1">02. OUR SOLUTION</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{selectedProject.solution}</p>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-bebas text-2xl tracking-widest uppercase mb-1">03. MEASURABLE RESULT</h4>
                  <p className="text-white/90 font-medium text-lg leading-relaxed">{selectedProject.result}</p>
                </div>
              </div>
              
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${selectedProject.color} blur-3xl opacity-50 -z-10`} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
