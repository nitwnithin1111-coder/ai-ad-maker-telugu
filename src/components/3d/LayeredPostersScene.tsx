import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

const PosterStack: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const p1Ref = useRef<THREE.Group>(null);
  const p2Ref = useRef<THREE.Group>(null);
  const p3Ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.2;
    groupRef.current.rotation.x = Math.cos(t * 0.3) * 0.1;

    // Subtle individual breathing
    if (p1Ref.current) p1Ref.current.position.z = -0.4 + Math.sin(t * 0.8) * 0.05;
    if (p2Ref.current) p2Ref.current.position.z = 0 + Math.sin(t * 0.8 + 1) * 0.05;
    if (p3Ref.current) p3Ref.current.position.z = 0.4 + Math.sin(t * 0.8 + 2) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Poster 1 (Back - Navy/Purple) */}
      <group ref={p1Ref} position={[-0.3, -0.2, -0.4]} rotation={[0, 0, -0.1]}>
        <RoundedBox args={[2.0, 2.8, 0.04]} radius={0.08} smoothness={4}>
          <meshStandardMaterial
            color="#1e1b8f"
            roughness={0.3}
            metalness={0.4}
          />
        </RoundedBox>
        {/* Decorative graphic bands */}
        <mesh position={[0, 0.6, 0.03]}>
          <planeGeometry args={[1.6, 0.3]} />
          <meshBasicMaterial color="#6d28d9" />
        </mesh>
      </group>

      {/* Poster 2 (Middle - Electric Purple) */}
      <group ref={p2Ref} position={[0, 0, 0]} rotation={[0, 0, 0.05]}>
        <RoundedBox args={[2.0, 2.8, 0.04]} radius={0.08} smoothness={4}>
          <meshStandardMaterial
            color="#6d28d9"
            roughness={0.2}
            metalness={0.5}
            emissive="#6d28d9"
            emissiveIntensity={0.2}
          />
        </RoundedBox>
        <mesh position={[0, 0.3, 0.03]}>
          <planeGeometry args={[1.5, 0.8]} />
          <meshBasicMaterial color="#0f0e1a" />
        </mesh>
      </group>

      {/* Poster 3 (Front - Radiant Cyan) */}
      <group ref={p3Ref} position={[0.3, 0.2, 0.4]} rotation={[0, 0, -0.04]}>
        <RoundedBox args={[2.0, 2.8, 0.04]} radius={0.08} smoothness={4}>
          <meshStandardMaterial
            color="#06b6d4"
            roughness={0.2}
            metalness={0.6}
            emissive="#06b6d4"
            emissiveIntensity={0.3}
          />
        </RoundedBox>
        {/* Front Poster Layout Mockup */}
        <mesh position={[0, 0.5, 0.03]}>
          <planeGeometry args={[1.6, 0.2]} />
          <meshBasicMaterial color="#f4f2fb" />
        </mesh>
        <mesh position={[-0.3, 0.1, 0.03]}>
          <planeGeometry args={[1.0, 0.1]} />
          <meshBasicMaterial color="#6d28d9" />
        </mesh>
        <mesh position={[0, -0.5, 0.03]}>
          <planeGeometry args={[1.6, 0.6]} />
          <meshBasicMaterial color="#07060d" />
        </mesh>
      </group>
    </group>
  );
};

export const LayeredPostersScene: React.FC = () => {
  const { shouldDisable3D, isLowEnd, prefersReducedMotion, isWebGLAvailable, dpr } = useDevicePerformance();

  if (shouldDisable3D || !isWebGLAvailable || prefersReducedMotion) {
    return (
      <div className="w-full h-72 sm:h-80 rounded-3xl bg-gradient-to-br from-purple-950/40 via-zinc-950 to-cyan-950/30 flex flex-col items-center justify-center border border-zinc-800/80 p-6 text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-3xl shadow-lg">
          🖼️
        </div>
        <div className="text-white font-bold text-lg">High-Impact Brand Posters</div>
        <div className="text-xs text-zinc-400 max-w-xs">Engineered for WhatsApp status, Instagram grids & print marketing.</div>
      </div>
    );
  }

  return (
    <div className="w-full h-80 md:h-96">
      <Canvas
        camera={{ position: [0, 0, 5.0], fov: 42 }}
        dpr={[1, dpr]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.9} color="#f4f2fb" />
        <directionalLight position={[4, 6, 4]} intensity={1.8} color="#06b6d4" />
        <pointLight position={[-4, -4, 2]} intensity={1.5} color="#6d28d9" />

        <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <PosterStack />
        </Float>
      </Canvas>
    </div>
  );
};

export default LayeredPostersScene;
