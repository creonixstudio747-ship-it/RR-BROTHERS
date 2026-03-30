"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "EcoSmart Dashboard",
    category: "Web App / Dashboard",
    description: "Next.js 15 & Tailwind based dashboard for climate monitoring.",
    details: "Problem: Data overload. Solution: Intuitive 3D data viz. Result: 40% more user retention.",
    size: "col-span-2 row-span-1",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Meta-X Brand",
    category: "3D Branding",
    description: "Visual identity for a spatial computing company.",
    details: "Problem: Generic logo. Solution: 3D procedural branding. Result: Award-winning MVP.",
    size: "col-span-1 row-span-2",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "FinSecure Mobile",
    category: "App Design",
    description: "Secure, glassmorphic financial app for gen-z.",
    details: "Problem: Complex UI. Solution: Simplified mobile security. Result: $2M seed funding.",
    size: "col-span-1 row-span-1",
    color: "from-blue-400/20 to-emerald-400/20"
  },
  {
    title: "Immersive Agency",
    category: "3D Experience",
    description: "Our own 3D universe for showcasing talent.",
    details: "Problem: Stale agency sites. Solution: RR Brothers spatial web. Result: Infinite WOW factor.",
    size: "col-span-2 row-span-1",
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

function ProjectCard({ project }: { project: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl overflow-hidden glass p-8 shadow-2xl transition-all duration-300 ${project.size}`}
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="h-full flex flex-col justify-between"
      >
        <div>
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{project.category}</span>
          <h3 className="text-4xl font-bebas text-white mt-1 uppercase leading-none">{project.title}</h3>
          <p className="text-white/60 mt-4 text-sm max-w-xs">{project.description}</p>
        </div>
        
        <div className="group mt-auto pt-8">
           <div className="opacity-40 group-hover:opacity-100 transition-opacity">
              <p className="text-[10px] text-purple-400 font-mono mb-2 uppercase">DETAILS:</p>
              <p className="text-xs leading-relaxed text-white/50 group-hover:text-white/80">{project.details}</p>
           </div>
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} -z-10`} />
    </motion.div>
  );
}

export default function Work() {
  return (
    <section className="relative min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-7xl md:text-9xl font-bebas text-white leading-none">WORK</h2>
          <p className="font-bebas text-xl md:text-2xl text-purple-400 mt-2 tracking-widest uppercase">
            3D Bento Grid: Recent Projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
