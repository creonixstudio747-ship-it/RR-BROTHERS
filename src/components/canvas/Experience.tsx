"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Environment, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import HeroObject from "./HeroObject";

function Particles({ count = 1200 }) { // Reduced count for better mobile performance
  const points = useRef<THREE.Points>(null!);
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Optimize: Only update position every other frame if needed, 
    // but R3F is fast enough for particles generally.
    points.current.rotation.y = time * 0.03;
    points.current.rotation.x = time * 0.01;
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={true}>
      <PointMaterial
        transparent
        color="#a855f7"
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Experience() {
  return (
    <>
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={15} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={10} color="#a855f7" />
      
      <HeroObject />
      <Particles />
      
      <Environment preset="night" />
    </>
  );
}
