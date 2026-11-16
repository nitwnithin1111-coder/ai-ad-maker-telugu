import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

const SmartphoneAndPlayIcon: React.FC = () => {
  const phoneRef = useRef<THREE.Group>(null);
  const playButtonRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!phoneRef.current) return;
    const t = state.clock.elapsedTime;

    // Fluid breathing motion
    phoneRef.current.rotation.y = Math.sin(t * 0.6) * 0.25;
    phoneRef.current.rotation.x = Math.cos(t * 0.5) * 0.12;

    if (playButtonRef.current) {
      playButtonRef.current.rotation.z += delta * 0.8;
      const pulse = 1 + Math.sin(t * 3) * 0.08;
      playButtonRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.5;
      ringRef.current.rotation.y += delta * 0.7;
    }
  });

  return (
    <group ref={phoneRef}>
      {/* 9:16 Smartphone Chassis */}
      <RoundedBox args={[1.8, 3.6, 0.15]} radius={0.18} smoothness={4}>
        <meshStandardMaterial
          color="#1e1b8f"
          roughness={0.2}
          metalness={0.6}
        />
      </RoundedBox>

      {/* Screen Background */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[1.65, 3.4]} />
        <meshBasicMaterial color="#07060d" />
      </mesh>

      {/* Screen Content Gradient Card */}
      <mesh position={[0, 0, 0.085]}>
        <planeGeometry args={[1.5, 3.2]} />
        <meshStandardMaterial
          color="#6d28d9"
          emissive="#6d28d9"
          emissiveIntensity={0.25}
          roughness={0.3}
        />
      </mesh>

      {/* Floating 3D Play Button Orb */}
      <mesh ref={playButtonRef} position={[0, 0.2, 0.35]}>
        <coneGeometry args={[0.45, 0.65, 3]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.5}
        />
      </mesh>

      {/* Orbiting Glowing Halo Ring */}
      <mesh ref={ringRef} position={[0, 0.2, 0.35]}>
        <Torus args={[0.75, 0.025, 16, 48]}>
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.6} />
        </Torus>
      </mesh>

      {/* Soundwave bars on lower screen */}
      {[-0.4, -0.2, 0, 0.2, 0.4].map((offset, i) => (
        <mesh key={i} position={[offset, -0.9, 0.09]}>
          <boxGeometry args={[0.08, 0.35 + (i % 2) * 0.25, 0.02]} />
          <meshBasicMaterial color="#06b6d4" />
        </mesh>
      ))}
    </group>
  );
};

export const SmartphonePlayScene: React.FC = () => {
  const { shouldDisable3D, isLowEnd, prefersReducedMotion, isWebGLAvailable, dpr } = useDevicePerformance();

  if (shouldDisable3D || !isWebGLAvailable || prefersReducedMotion) {
    return (
      <div className="w-full h-72 sm:h-80 rounded-3xl bg-gradient-to-br from-purple-950/40 via-zinc-950 to-cyan-950/30 flex flex-col items-center justify-center border border-zinc-800/80 p-6 text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-3xl shadow-lg">
          📱
        </div>
        <div className="text-white font-bold text-lg">Viral Reels & 9:16 Shorts</div>
        <div className="text-xs text-zinc-400 max-w-xs">Engineered for immediate hook retention and maximum swipe rate.</div>
      </div>
    );
  }

  return (
    <div className="w-full h-80 md:h-96">
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 42 }}
        dpr={[1, dpr]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.9} color="#f4f2fb" />
        <directionalLight position={[4, 5, 4]} intensity={1.8} color="#06b6d4" />
        <pointLight position={[-4, -3, 2]} intensity={1.5} color="#6d28d9" />

        <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <SmartphoneAndPlayIcon />
        </Float>
      </Canvas>
    </div>
  );
};

export default SmartphonePlayScene;
