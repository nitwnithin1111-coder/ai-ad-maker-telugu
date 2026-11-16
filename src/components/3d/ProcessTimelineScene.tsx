import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

interface ProcessTimelineSceneProps {
  activeStep?: number;
}

const TubePathWithNodes: React.FC<{ activeStep: number }> = ({ activeStep }) => {
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Mesh[]>([]);

  // 4 3D control points representing the 4 pipeline steps
  const points = useMemo(
    () => [
      new THREE.Vector3(-2.8, 1.4, 0),
      new THREE.Vector3(-0.9, 0.2, 0.4),
      new THREE.Vector3(0.9, -0.4, -0.3),
      new THREE.Vector3(2.8, -1.2, 0),
    ],
    []
  );

  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const tubeGeometry = useMemo(() => new THREE.TubeGeometry(curve, 64, 0.08, 16, false), [curve]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;

    // Pulse active node
    nodesRef.current.forEach((mesh, index) => {
      if (!mesh) return;
      const isActive = index <= activeStep;
      const targetScale = isActive ? 1.25 + Math.sin(state.clock.elapsedTime * 4) * 0.1 : 0.85;
      mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5);
    });
  });

  return (
    <group ref={groupRef}>
      {/* The glowing tube backbone */}
      <mesh geometry={tubeGeometry}>
        <meshStandardMaterial
          color="#1e1b8f"
          emissive="#6d28d9"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.5}
        />
      </mesh>

      {/* 4 Interactive Spherical Nodes */}
      {points.map((pt, idx) => {
        const isReached = idx <= activeStep;
        return (
          <group key={idx} position={pt}>
            <mesh
              ref={(el) => {
                if (el) nodesRef.current[idx] = el;
              }}
            >
              <sphereGeometry args={[0.22, 16, 16]} />
              <meshStandardMaterial
                color={isReached ? '#06b6d4' : '#1c1a30'}
                emissive={isReached ? '#06b6d4' : '#6d28d9'}
                emissiveIntensity={isReached ? 1.2 : 0.2}
                roughness={0.2}
                metalness={0.5}
              />
            </mesh>

            {/* Glowing outer halo ring */}
            {isReached && (
              <mesh>
                <torusGeometry args={[0.35, 0.02, 12, 24]} />
                <meshBasicMaterial color="#06b6d4" transparent opacity={0.8} />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
};

export const ProcessTimelineScene: React.FC<ProcessTimelineSceneProps> = ({ activeStep = 0 }) => {
  const { shouldDisable3D, isLowEnd, prefersReducedMotion, isWebGLAvailable, dpr } = useDevicePerformance();

  if (shouldDisable3D || !isWebGLAvailable || prefersReducedMotion) {
    return (
      <div className="w-full h-32 sm:h-40 flex items-center justify-center px-4">
        <div className="h-1.5 w-full max-w-xl bg-gradient-to-r from-[#6d28d9] via-[#06b6d4] to-[#6d28d9] rounded-full shadow-lg shadow-cyan-500/30" />
      </div>
    );
  }

  return (
    <div className="w-full h-64 md:h-80 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, dpr]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.9} color="#f4f2fb" />
        <directionalLight position={[4, 5, 4]} intensity={1.8} color="#06b6d4" />
        <pointLight position={[-4, -3, 2]} intensity={1.5} color="#6d28d9" />

        <TubePathWithNodes activeStep={activeStep} />
      </Canvas>
    </div>
  );
};

export default ProcessTimelineScene;
