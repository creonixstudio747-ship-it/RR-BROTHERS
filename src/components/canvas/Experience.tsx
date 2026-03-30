"use client";

import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import HeroObject from "./HeroObject";

function Particles({ count = 2000 }) {
  const points = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const x = positions[i * 3];
      const z = positions[i * 3 + 2];
      
      points.current.geometry.attributes.position.array[i * 3 + 1] += Math.sin(time + x * 0.5 + z * 0.5) * 0.002;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y = time * 0.04;
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a855f7"
        size={0.012}
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
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={15} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={10} color="#a855f7" />
      
      <HeroObject />
      <Particles />
      
      <Environment preset="night" />
    </>
  );
}
