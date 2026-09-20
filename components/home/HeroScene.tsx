"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Light 3D hero effect: gold/emerald particles arranged in an 8-fold
 * symmetric lattice (Islamic geometric feel) plus slow rotating
 * octagonal rings. Freezes when the user prefers reduced motion.
 */

function ParticleField({ animated }: { animated: boolean }) {
  const ref = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const count = 1300;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const gold = new THREE.Color("#c9a227");
    const emerald = new THREE.Color("#34d399");
    const c = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // 8-fold symmetric lattice across concentric rings
      const ring = Math.floor(Math.random() * 5);
      const seg = Math.floor(Math.random() * 8);
      const angle =
        (seg / 8) * Math.PI * 2 +
        (ring % 2) * (Math.PI / 8) +
        (Math.random() - 0.5) * 0.14;
      const radius = 2.4 + ring * 1.4 + (Math.random() - 0.5) * 0.6;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7.5;
      positions[i * 3 + 2] = Math.sin(angle) * radius - 2.5;

      c.copy(Math.random() > 0.35 ? gold : emerald).multiplyScalar(
        0.55 + Math.random() * 0.45
      );
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((_, delta) => {
    if (animated && ref.current) ref.current.rotation.y += delta * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function OctagonRings({ animated }: { animated: boolean }) {
  const g1 = useRef<THREE.Mesh>(null!);
  const g2 = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (!animated) return;
    const t = state.clock.elapsedTime;
    if (g1.current) {
      g1.current.rotation.z += delta * 0.07;
      g1.current.rotation.x = 0.45 + Math.sin(t * 0.25) * 0.08;
    }
    if (g2.current) {
      g2.current.rotation.z -= delta * 0.05;
      g2.current.rotation.x = -0.35 + Math.cos(t * 0.2) * 0.08;
    }
  });

  return (
    <group position={[0, 0.3, -3]}>
      <mesh ref={g1}>
        {/* 8 tubular segments = octagonal ring */}
        <torusGeometry args={[2.7, 0.018, 8, 8]} />
        <meshBasicMaterial color="#c9a227" transparent opacity={0.4} />
      </mesh>
      <mesh ref={g2}>
        <torusGeometry args={[3.6, 0.014, 8, 8]} />
        <meshBasicMaterial color="#34d399" transparent opacity={0.22} />
      </mesh>
      <mesh rotation={[0.4, 0.2, 0]}>
        <icosahedronGeometry args={[1.15, 0]} />
        <meshBasicMaterial color="#c9a227" transparent opacity={0.14} wireframe />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAnimated(!mq.matches);
    const onChange = (e: MediaQueryListEvent) => setAnimated(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 8.5], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <ParticleField animated={animated} />
        <OctagonRings animated={animated} />
      </Canvas>
    </div>
  );
}
