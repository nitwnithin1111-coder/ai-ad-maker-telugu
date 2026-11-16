import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

const FloatingBrowserWindow: React.FC = () => {
  const browserRef = useRef<THREE.Group>(null);
  const pillRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!browserRef.current) return;
    const t = state.clock.elapsedTime;
    browserRef.current.rotation.y = Math.sin(t * 0.4) * 0.2;
    browserRef.current.rotation.x = Math.cos(t * 0.3) * 0.08;

    if (pillRef.current) {
      pillRef.current.position.y = -0.7 + Math.sin(t * 1.5) * 0.08;
      pillRef.current.rotation.z = Math.sin(t * 0.8) * 0.04;
    }
  });

  return (
    <group ref={browserRef}>
      {/* Browser Main Chassis */}
      <RoundedBox args={[3.2, 2.2, 0.14]} radius={0.12} smoothness={4}>
        <meshStandardMaterial
          color="#0f0e1a"
          roughness={0.2}
          metalness={0.5}
        />
      </RoundedBox>

      {/* Top Header Bar */}
      <mesh position={[0, 0.85, 0.08]}>
        <planeGeometry args={[3.0, 0.3]} />
        <meshBasicMaterial color="#1c1a30" />
      </mesh>

      {/* Window Dots (Red, Yellow, Green) */}
      <mesh position={[-1.25, 0.85, 0.09]}>
        <circleGeometry args={[0.045, 16]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
      <mesh position={[-1.12, 0.85, 0.09]}>
        <circleGeometry args={[0.045, 16]} />
        <meshBasicMaterial color="#f59e0b" />
      </mesh>
      <mesh position={[-0.99, 0.85, 0.09]}>
        <circleGeometry args={[0.045, 16]} />
        <meshBasicMaterial color="#10b981" />
      </mesh>

      {/* URL Address Bar */}
      <mesh position={[0.2, 0.85, 0.09]}>
        <planeGeometry args={[1.8, 0.15]} />
        <meshBasicMaterial color="#07060d" />
      </mesh>

      {/* Hero Header Area */}
      <mesh position={[0, 0.4, 0.08]}>
        <planeGeometry args={[2.8, 0.45]} />
        <meshStandardMaterial
          color="#6d28d9"
          emissive="#6d28d9"
          emissiveIntensity={0.25}
          roughness={0.3}
        />
      </mesh>

      {/* Two Content Columns */}
      <mesh position={[-0.75, -0.15, 0.08]}>
        <planeGeometry args={[1.3, 0.5]} />
        <meshBasicMaterial color="#1e1b8f" />
      </mesh>
      <mesh position={[0.75, -0.15, 0.08]}>
        <planeGeometry args={[1.3, 0.5]} />
        <meshBasicMaterial color="#06b6d4" />
      </mesh>

      {/* Floating 3D Performance Pill Badge */}
      <group ref={pillRef} position={[0.8, -0.7, 0.3]}>
        <RoundedBox args={[1.6, 0.38, 0.08]} radius={0.16} smoothness={4}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.5}
          />
        </RoundedBox>
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[1.4, 0.25]} />
          <meshBasicMaterial color="#07060d" />
        </mesh>
      </group>
    </group>
  );
};

export const BrowserWindowScene: React.FC = () => {
  const { shouldDisable3D, isLowEnd, prefersReducedMotion, isWebGLAvailable, dpr } = useDevicePerformance();

  if (shouldDisable3D || !isWebGLAvailable || prefersReducedMotion) {
    return (
      <div className="w-full h-72 sm:h-80 rounded-3xl bg-gradient-to-br from-purple-950/40 via-zinc-950 to-cyan-950/30 flex flex-col items-center justify-center border border-zinc-800/80 p-6 text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-3xl shadow-lg">
          🌐
        </div>
        <div className="text-white font-bold text-lg">High-Speed Business Websites</div>
        <div className="text-xs text-zinc-400 max-w-xs">Conversion-focused, mobile-responsive & SEO-ready web presence.</div>
      </div>
    );
  }

  return (
    <div className="w-full h-80 md:h-96">
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 42 }}
        dpr={[1, dpr]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.9} color="#f4f2fb" />
        <directionalLight position={[4, 5, 4]} intensity={1.8} color="#06b6d4" />
        <pointLight position={[-4, -3, 2]} intensity={1.5} color="#6d28d9" />

        <Float speed={2.5} rotationIntensity={0.25} floatIntensity={0.4}>
          <FloatingBrowserWindow />
        </Float>
      </Canvas>
    </div>
  );
};

export default BrowserWindowScene;
