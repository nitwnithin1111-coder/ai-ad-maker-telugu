import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, Cylinder } from '@react-three/drei';
import * as THREE from 'three';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

const LostFilmReel: React.FC = () => {
  const reelRef = useRef<THREE.Group>(null);
  const filmRibbonRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (reelRef.current) {
      reelRef.current.rotation.y += delta * 0.4;
      reelRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    }
    if (filmRibbonRef.current) {
      filmRibbonRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group ref={reelRef}>
      {/* Outer Reel Ring */}
      <Torus args={[1.5, 0.09, 16, 48]}>
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Torus>

      {/* Reel Hub */}
      <Cylinder args={[0.5, 0.5, 0.25, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#6d28d9" metalness={0.7} roughness={0.3} />
      </Cylinder>

      {/* Spokes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <group key={deg} rotation={[0, 0, (deg * Math.PI) / 180]}>
          <mesh position={[0.75, 0, 0]}>
            <boxGeometry args={[1.2, 0.06, 0.1]} />
            <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* Unspooling Film Ribbon Spiraling Downward */}
      <mesh ref={filmRibbonRef} position={[0.5, -1.2, 0.2]} rotation={[0.4, 0, 0.3]}>
        <torusGeometry args={[0.8, 0.08, 8, 32, Math.PI * 1.5]} />
        <meshStandardMaterial
          color="#1e1b8f"
          emissive="#6d28d9"
          emissiveIntensity={0.6}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
};

export const LostFilmReelScene: React.FC = () => {
  const { shouldDisable3D, isLowEnd, prefersReducedMotion, isWebGLAvailable, dpr } = useDevicePerformance();

  if (shouldDisable3D || !isWebGLAvailable || prefersReducedMotion) {
    return (
      <div className="w-full h-72 flex items-center justify-center">
        <span className="text-6xl animate-bounce">🎬</span>
      </div>
    );
  }

  return (
    <div className="w-full h-72 md:h-80">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        dpr={[1, dpr]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.9} color="#f4f2fb" />
        <directionalLight position={[4, 5, 4]} intensity={1.8} color="#06b6d4" />
        <pointLight position={[-4, -3, 2]} intensity={1.5} color="#6d28d9" />

        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
          <LostFilmReel />
        </Float>
      </Canvas>
    </div>
  );
};

export default LostFilmReelScene;
