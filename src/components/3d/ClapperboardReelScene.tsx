import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Cylinder, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

const ClapperboardAndReel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const clapperTopRef = useRef<THREE.Group>(null);
  const reelRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Gentle global float & parallax
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.25;
    groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.1;

    // Rotating film reel
    if (reelRef.current) {
      reelRef.current.rotation.z += delta * 0.8;
    }

    // Clapper top stick clapping motion
    if (clapperTopRef.current) {
      const clapCycle = Math.sin(state.clock.elapsedTime * 2);
      clapperTopRef.current.rotation.z = clapCycle > 0.8 ? -0.35 : 0;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Clapperboard Base Box */}
      <group position={[-0.8, -0.2, 0]} rotation={[0, 0.2, -0.05]}>
        <Box args={[2.4, 1.6, 0.16]}>
          <meshStandardMaterial
            color="#07060d"
            roughness={0.3}
            metalness={0.4}
          />
        </Box>

        {/* Clapperboard Slate Chalk Lines */}
        <mesh position={[0, -0.1, 0.09]}>
          <planeGeometry args={[2.1, 1.2]} />
          <meshBasicMaterial color="#0f0e1a" />
        </mesh>

        {/* Text lines mockup */}
        <mesh position={[-0.4, 0.15, 0.1]}>
          <planeGeometry args={[0.9, 0.04]} />
          <meshBasicMaterial color="#06b6d4" />
        </mesh>
        <mesh position={[-0.4, -0.1, 0.1]}>
          <planeGeometry args={[0.9, 0.04]} />
          <meshBasicMaterial color="#a855f7" />
        </mesh>

        {/* Clapperboard Top Stick (Hinged) */}
        <group ref={clapperTopRef} position={[-1.2, 0.8, 0]}>
          <mesh position={[1.2, 0.18, 0]}>
            <boxGeometry args={[2.4, 0.36, 0.16]} />
            <meshStandardMaterial color="#6d28d9" roughness={0.3} metalness={0.5} />
          </mesh>
          {/* Chevron stripes */}
          <mesh position={[0.6, 0.18, 0.09]}>
            <planeGeometry args={[0.25, 0.36]} />
            <meshBasicMaterial color="#06b6d4" />
          </mesh>
          <mesh position={[-0.2, 0.18, 0.09]}>
            <planeGeometry args={[0.25, 0.36]} />
            <meshBasicMaterial color="#06b6d4" />
          </mesh>
        </group>
      </group>

      {/* 2. Floating Film Reel Behind */}
      <group ref={reelRef} position={[1.2, 0.5, -0.5]} rotation={[0.2, 0.4, 0]}>
        {/* Outer Torus Rim */}
        <Torus args={[1.1, 0.12, 16, 48]}>
          <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
        </Torus>

        {/* Inner Hub Cylinder */}
        <Cylinder args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#6d28d9" metalness={0.6} roughness={0.3} />
        </Cylinder>

        {/* 6 Spokes */}
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <group key={deg} rotation={[0, 0, (deg * Math.PI) / 180]}>
            <mesh position={[0.6, 0, 0]}>
              <boxGeometry args={[0.9, 0.06, 0.08]} />
              <meshStandardMaterial color="#06b6d4" metalness={0.7} roughness={0.3} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
};

export const ClapperboardReelScene: React.FC = () => {
  const { shouldDisable3D, isLowEnd, prefersReducedMotion, isWebGLAvailable, dpr } = useDevicePerformance();

  if (shouldDisable3D || !isWebGLAvailable || prefersReducedMotion) {
    return (
      <div className="w-full h-72 sm:h-80 rounded-3xl bg-gradient-to-br from-purple-950/40 via-zinc-950 to-cyan-950/30 flex flex-col items-center justify-center border border-zinc-800/80 p-6 text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-3xl shadow-lg">
          🎬
        </div>
        <div className="text-white font-bold text-lg">Cinema-Grade AI Video Engine</div>
        <div className="text-xs text-zinc-400 max-w-xs">Dynamic framing, synchronized speech & motion graphics generated in 24 hours.</div>
      </div>
    );
  }

  return (
    <div className="w-full h-80 md:h-96">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        dpr={[1, dpr]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.9} color="#f4f2fb" />
        <directionalLight position={[4, 5, 4]} intensity={1.8} color="#06b6d4" />
        <pointLight position={[-4, -3, 2]} intensity={1.5} color="#6d28d9" />

        <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <ClapperboardAndReel />
        </Float>
      </Canvas>
    </div>
  );
};

export default ClapperboardReelScene;
