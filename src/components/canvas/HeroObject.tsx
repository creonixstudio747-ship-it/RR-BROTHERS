"use client";

import { useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Scrollytelling animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "20% top",
        scrub: 1.5,
      }
    });

    tl.to(meshRef.current.scale, {
      x: 10,
      y: 10,
      z: 10,
      ease: "power2.inOut"
    }, 0);

    tl.to(meshRef.current.position, {
      z: -10,
      ease: "power2.inOut"
    }, 0);

    gsap.to(meshRef.current.rotation, {
      y: Math.PI * 4,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "50% top",
        scrub: 2,
      }
    });
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!hovered) {
      meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={1.5}
      >
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color={hovered ? "#3b82f6" : "#a855f7"}
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}
