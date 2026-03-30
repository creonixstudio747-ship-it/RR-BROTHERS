"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projectTypes = ["Website Development", "App Design (UI/UX)", "3D Immersive Design", "Scale My Business"];
const budgets = ["Under ₹50k", "₹50k - ₹1.5L", "₹1.5L - ₹5L", "₹5L+"];

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");

  const handleWhatsApp = () => {
    const message = `Hello RR Brothers! I'm interested in: ${projectType || "A Project"}. My budget is around: ${budget || "Negotiable"}.`;
    const url = `https://wa.me/918709420000?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating 3D Animated Widget */}
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[100] w-20 h-20 bg-[#25D366] rounded-[24px] shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center justify-center cursor-pointer overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
        <svg className="w-10 h-10 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="sr-only">Contact</span>
      </motion.div>

      {/* WhatsApp Flow Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[110] flex items-end md:items-center justify-center p-4">
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-[40px] p-8 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-4xl font-bebas text-white tracking-widest leading-none mb-4 italic uppercase">Ready to scale?</h3>
                  <p className="text-xs font-mono text-white/50 uppercase tracking-tighter">Qualify your project for a high-ticket redirection.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-[10px] font-mono text-purple-400 uppercase mb-2 block tracking-widest leading-none">Project Type:</label>
                    <div className="flex flex-wrap gap-2">
                       {projectTypes.map(type => (
                         <button 
                          key={type}
                          onClick={() => setProjectType(type)}
                          className={`px-4 py-2 rounded-full text-[10px] font-mono border transition-all ${
                            projectType === type 
                            ? "bg-purple-500 border-purple-500 text-white" 
                            : "bg-white/5 border-white/10 text-white/40 hover:text-white"
                          }`}
                         >
                           {type}
                         </button>
                       ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-blue-400 uppercase mb-2 block tracking-widest leading-none">Investment Capacity:</label>
                    <div className="flex flex-wrap gap-2">
                       {budgets.map(b => (
                         <button 
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`px-4 py-2 rounded-full text-[10px] font-mono border transition-all ${
                            budget === b 
                            ? "bg-blue-500 border-blue-500 text-white" 
                            : "bg-white/5 border-white/10 text-white/40 hover:text-white"
                          }`}
                         >
                           {b}
                         </button>
                       ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsApp}
                    className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bebas text-2xl tracking-[0.2em] leading-none uppercase shadow-xl hover:shadow-[#25D366]/30 transition-all mt-4"
                  >
                    Launch Redirection
                  </motion.button>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-white/20 hover:text-white cursor-pointer" onClick={() => setIsOpen(false)}>
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
