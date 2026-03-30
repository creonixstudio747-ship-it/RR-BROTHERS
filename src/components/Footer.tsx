"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/5 bg-black flex flex-col items-center gap-8">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bebas text-white">RR BROTHERS</h2>
          <p className="text-xs font-mono text-white/30 uppercase tracking-widest mt-1">© 2026 creonixstudio747-ship-it. RR Brothers Digital Agency.</p>
        </div>

        {/* Security & Performance Verified Badge */}
        <motion.div
           whileHover={{ scale: 1.05 }}
           className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <div>
            <p className="text-[10px] font-mono text-white/40 leading-none uppercase mb-1">Status Report:</p>
            <p className="text-xs font-bebas text-white tracking-widest uppercase">Security & Performance Verified</p>
          </div>
        </motion.div>
      </div>

      <div className="text-[8px] font-mono text-white/10 tracking-[0.3em] uppercase">
        Built with Antigravity AI • Engineering the Future of Design
      </div>
    </footer>
  );
}
