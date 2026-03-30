"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, ScrollControls } from "@react-three/drei";
import { Suspense } from "react";

export default function Scene({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
