import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Html } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { createBrandLogoShape, extrudeSettings } from './LogoShape';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

// Extruded 3D Logo Component with optimized standard materials
const ExtrudedLogo: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  const shape = useMemo(() => createBrandLogoShape(), []);
  const geometry = useMemo(() => new THREE.ExtrudeGeometry(shape, extrudeSettings), [shape]);

  useEffect(() => {
    geometry.center();
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Gentle auto-rotation
    meshRef.current.rotation.y += delta * 0.45;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.12;

    // Mouse parallax reaction
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 10;
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y * 0.2) * 0.05;
    meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x * 0.2) * 0.05;

    // Scroll-driven position & scale morphing
    const scrollEffect = Math.min(Math.max(scrollProgress, 0), 1);
    meshRef.current.position.y = -scrollEffect * 1.8;
    meshRef.current.position.z = -scrollEffect * 2.5;
    const scale = Math.max(1 - scrollEffect * 0.35, 0.6);
    meshRef.current.scale.set(scale, scale, scale);

    if (coreRef.current) {
      coreRef.current.rotation.z += delta * 0.8;
      coreRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color="#9333ea"
          emissive="#6d28d9"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Internal Sparkling Core Octahedron */}
      <mesh ref={coreRef} position={[0, 0.2, 0.1]}>
        <octahedronGeometry args={[0.45, 0]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={1.2}
          wireframe
        />
      </mesh>
    </group>
  );
};

// 3D Glass Phone Mockup
interface PhoneMockupProps {
  position: [number, number, number];
  rotation: [number, number, number];
  title: string;
  category: string;
  gradientColors: [string, string];
  scrollProgress: number;
  fanOffset: number;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({
  position,
  rotation,
  title,
  category,
  gradientColors,
  scrollProgress,
  fanOffset,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const scroll = Math.min(Math.max(scrollProgress, 0), 1);

    // Fan out as user scrolls
    const fanSpread = scroll * fanOffset;
    groupRef.current.position.x = position[0] + fanSpread * 1.8;
    groupRef.current.position.y = position[1] - scroll * 0.4;
    groupRef.current.position.z = position[2] + scroll * 1.5;

    // Slight pointer tilt
    const tiltX = state.pointer.y * 0.08;
    const tiltY = state.pointer.x * 0.08;
    groupRef.current.rotation.x = rotation[0] + tiltX;
    groupRef.current.rotation.y = rotation[1] + tiltY;
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={0.72}>
      {/* Phone Glass Chassis */}
      <RoundedBox args={[1.8, 3.6, 0.14]} radius={0.18} smoothness={4}>
        <meshStandardMaterial
          color="#1e1b8f"
          roughness={0.2}
          metalness={0.6}
        />
      </RoundedBox>

      {/* Phone Screen Display */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[1.65, 3.4]} />
        <meshBasicMaterial color="#07060d" />
      </mesh>

      {/* Screen Content HTML Overlay */}
      <Html
        transform
        position={[0, 0, 0.085]}
        distanceFactor={2.4}
        className="pointer-events-none select-none w-56 h-[440px] rounded-3xl overflow-hidden p-4 flex flex-col justify-between"
        style={{
          background: `linear-gradient(145deg, ${gradientColors[0]} 0%, #07060d 70%, ${gradientColors[1]} 100%)`,
        }}
      >
        <div className="flex items-center justify-between text-white/80 text-[10px] font-semibold">
          <span className="bg-black/40 px-2 py-0.5 rounded-full border border-white/10 uppercase tracking-wider">
            {category}
          </span>
          <span className="text-cyan-300 font-mono">24h Express</span>
        </div>

        <div className="space-y-1.5 text-left">
          <div className="w-9 h-9 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center border border-cyan-400/30">
            ▶
          </div>
          <h4 className="text-white font-bold text-sm leading-snug drop-shadow-md">
            {title}
          </h4>
          <p className="text-[10px] text-zinc-300">High-Retention Video Ad</p>
        </div>
      </Html>
    </group>
  );
};

// Ambient Drifting Dust Particles
const DriftingParticles: React.FC<{ count: number }> = ({ count }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const brandColors = [
      new THREE.Color('#06b6d4'),
      new THREE.Color('#6d28d9'),
      new THREE.Color('#1e1b8f'),
      new THREE.Color('#f4f2fb'),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const c = brandColors[Math.floor(Math.random() * brandColors.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.05;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const Hero3DScene: React.FC = () => {
  const { shouldDisable3D, isLowEnd, prefersReducedMotion, isWebGLAvailable, dpr } = useDevicePerformance();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      setScrollProgress(Math.min(scrollY / height, 1.5));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Performance-First Mobile / 2GB Phone / Reduced Motion Fallback
  // Zero WebGL initialization, 0MB GPU memory overhead, pure 60 FPS CSS rendering
  if (shouldDisable3D || !isWebGLAvailable || prefersReducedMotion) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Soft atmospheric radial gradient glows */}
        <div className="w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#6d28d9]/25 via-[#1e1b8f]/30 to-[#06b6d4]/25 blur-3xl opacity-80" />
        <div className="absolute w-[240px] sm:w-[360px] h-[240px] sm:h-[360px] rounded-full bg-gradient-to-br from-[#06b6d4]/20 to-[#6d28d9]/20 blur-2xl" />
      </div>
    );
  }

  const particleCount = isLowEnd ? 80 : 250;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 z-0 transition-opacity duration-700 ${
        canvasReady ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, dpr]}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
        onCreated={() => setCanvasReady(true)}
      >
        <ambientLight intensity={0.9} color="#f4f2fb" />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#06b6d4" />
        <pointLight position={[-6, -4, -3]} intensity={1.8} color="#6d28d9" />
        <pointLight position={[0, -2, 4]} intensity={1.2} color="#06b6d4" />

        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
          <ExtrudedLogo scrollProgress={scrollProgress} />
        </Float>

        {/* 3 Glass 9:16 Phones fanning out */}
        <group position={[0, -0.6, 0]}>
          {/* Phone Left: Food & Restaurant */}
          <PhoneMockup
            position={[-2.8, -0.4, -1.2]}
            rotation={[0, 0.35, -0.06]}
            title="Weekend Sizzle & Biryani Offer"
            category="Restaurant"
            gradientColors={['#6d28d9', '#e11d48']}
            scrollProgress={scrollProgress}
            fanOffset={-1.4}
          />
          {/* Phone Center: HWS Water Softener */}
          <PhoneMockup
            position={[0, -0.9, -0.5]}
            rotation={[0, 0, 0]}
            title="HWS Pure Water Softener Ad"
            category="HWS Softener"
            gradientColors={['#1e1b8f', '#06b6d4']}
            scrollProgress={scrollProgress}
            fanOffset={0}
          />
          {/* Phone Right: Flovyn Solutions / Tech */}
          <PhoneMockup
            position={[2.8, -0.4, -1.2]}
            rotation={[0, -0.35, 0.06]}
            title="Enterprise Cloud Tech Automation"
            category="Flovyn Tech"
            gradientColors={['#0284c7', '#6d28d9']}
            scrollProgress={scrollProgress}
            fanOffset={1.4}
          />
        </group>

        <DriftingParticles count={particleCount} />

        {/* Subtle Bloom only on high-end desktop */}
        {!isLowEnd && (
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.7}
              luminanceSmoothing={0.9}
              intensity={0.5}
              radius={0.4}
            />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
