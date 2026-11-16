import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

interface CarouselItem {
  id: string;
  client: string;
  category: string;
  englishHeadline: string;
  englishSub: string;
  gradient: [string, string];
}

const CAROUSEL_DATA: CarouselItem[] = [
  {
    id: '1',
    client: 'HWS Water Softener',
    category: 'Home Filtration',
    englishHeadline: '100% Solution for Hard Water Scaling Problems',
    englishSub: 'Scale-Free Living with HWS',
    gradient: ['#1e1b8f', '#06b6d4'],
  },
  {
    id: '2',
    client: 'Flovyn Solutions',
    category: 'Enterprise Tech',
    englishHeadline: 'Accelerate Your Business 10X with Smart Tech',
    englishSub: 'Solution Focused IT Systems',
    gradient: ['#4c1d95', '#0284c7'],
  },
  {
    id: '3',
    client: 'Royal Dum Biryani',
    category: 'Restaurant',
    englishHeadline: 'Authentic Dum Biryani Weekend Special Offer',
    englishSub: 'Taste Authentic Hyderabadi Flavors',
    gradient: ['#701a75', '#e11d48'],
  },
  {
    id: '4',
    client: 'Kanchi Pattu Silks',
    category: 'Festive Fashion',
    englishHeadline: 'Festive Handloom Silks Direct from Weavers',
    englishSub: 'Pure Weave Bridal Collections',
    gradient: ['#831843', '#f59e0b'],
  },
  {
    id: '5',
    client: 'Prime Open Plots',
    category: 'Real Estate',
    englishHeadline: 'Approved Prime Highway Investment Plots',
    englishSub: 'Clear Title Investment Plots',
    gradient: ['#065f46', '#0ea5e9'],
  },
  {
    id: '6',
    client: 'Smile Dental Clinic',
    category: 'Healthcare',
    englishHeadline: 'Painless Laser Aligners for a Confident Smile',
    englishSub: 'Modern Orthodontic Care',
    gradient: ['#1e3a8a', '#14b8a6'],
  },
];

const PhoneItem: React.FC<{
  item: CarouselItem;
  angle: number;
  radius: number;
}> = ({ item, angle, radius }) => {
  const meshRef = useRef<THREE.Group>(null);
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  const rotationY = angle;

  useFrame((state) => {
    if (!meshRef.current) return;
    const tiltX = state.pointer.y * 0.05;
    meshRef.current.rotation.x = tiltX;
  });

  return (
    <group ref={meshRef} position={[x, 0, z]} rotation={[0, rotationY, 0]} scale={0.85}>
      {/* Phone Glass Frame */}
      <RoundedBox args={[2.0, 4.0, 0.16]} radius={0.2} smoothness={4}>
        <meshStandardMaterial
          color="#1e1b8f"
          roughness={0.2}
          metalness={0.5}
        />
      </RoundedBox>

      {/* Screen Mesh */}
      <mesh position={[0, 0, 0.09]}>
        <planeGeometry args={[1.82, 3.82]} />
        <meshBasicMaterial color="#07060d" />
      </mesh>

      {/* HTML Video Mockup Display */}
      <Html
        transform
        position={[0, 0, 0.095]}
        distanceFactor={2.5}
        className="pointer-events-none select-none w-64 h-[460px] rounded-3xl p-5 flex flex-col justify-between"
        style={{
          background: `linear-gradient(150deg, ${item.gradient[0]} 0%, #07060d 75%, ${item.gradient[1]} 100%)`,
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-white/90 bg-black/50 px-2.5 py-1 rounded-full border border-white/10 uppercase tracking-wider">
            {item.category}
          </span>
          <span className="text-[11px] font-semibold text-cyan-300">24h Express</span>
        </div>

        <div className="space-y-2 text-left">
          <div className="w-10 h-10 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center border border-cyan-400/40 shadow-lg">
            ▶
          </div>
          <div className="text-[11px] font-medium text-zinc-300 uppercase tracking-wider">
            {item.client}
          </div>
          <h4 className="text-white font-extrabold text-base leading-snug drop-shadow-md">
            {item.englishHeadline}
          </h4>
          <p className="text-[11px] text-zinc-300 font-medium">{item.englishSub}</p>
        </div>
      </Html>
    </group>
  );
};

const CarouselRing: React.FC<{
  rotationY: number;
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerMove: (e: React.PointerEvent) => void;
  onPointerUp: () => void;
}> = ({ rotationY }) => {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 4.2;
  const count = CAROUSEL_DATA.length;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY;
    }
  });

  return (
    <group ref={groupRef}>
      {CAROUSEL_DATA.map((item, idx) => {
        const angle = (idx / count) * Math.PI * 2;
        return <PhoneItem key={item.id} item={item} angle={angle} radius={radius} />;
      })}
    </group>
  );
};

export const PhoneCarouselScene: React.FC = () => {
  const { shouldDisable3D, isLowEnd, prefersReducedMotion, isWebGLAvailable, dpr } = useDevicePerformance();
  const [rotationY, setRotationY] = useState(0);
  const [velocity, setVelocity] = useState(0.002);
  const isDragging = useRef(false);
  const prevPointerX = useRef(0);

  useEffect(() => {
    if (shouldDisable3D) return;

    let animId: number;
    const loop = () => {
      if (!isDragging.current) {
        setRotationY((prev) => prev + velocity);
        setVelocity((prev) => {
          const target = 0.002;
          return prev * 0.95 + target * 0.05;
        });
      }
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [velocity, shouldDisable3D]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    prevPointerX.current = e.clientX;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - prevPointerX.current;
    prevPointerX.current = e.clientX;
    const rotationDelta = delta * 0.006;
    setRotationY((prev) => prev + rotationDelta);
    setVelocity(rotationDelta);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  // High-Performance Mobile / 2GB Phone / Reduced Motion Fallback:
  // Native 60 FPS CSS touch-snap carousel with hardware acceleration
  if (shouldDisable3D || !isWebGLAvailable || prefersReducedMotion) {
    return (
      <div className="w-full py-8 px-4">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none touch-pan-x max-w-6xl mx-auto">
          {CAROUSEL_DATA.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-72 sm:w-80 h-[440px] rounded-3xl p-6 flex flex-col justify-between shadow-2xl border border-zinc-800/80 snap-center relative overflow-hidden"
              style={{
                background: `linear-gradient(150deg, ${item.gradient[0]} 0%, #07060d 75%, ${item.gradient[1]} 100%)`,
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-white/90 bg-black/50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/10">
                  {item.category}
                </span>
                <span className="text-[11px] font-semibold text-cyan-300">24h Express</span>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center border border-cyan-400/40 shadow-lg text-lg">
                  ▶
                </div>
                <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  {item.client}
                </div>
                <h4 className="text-white font-extrabold text-lg leading-snug">
                  {item.englishHeadline}
                </h4>
                <p className="text-xs text-zinc-300">{item.englishSub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-[620px] select-none cursor-grab active:cursor-grabbing touch-pan-y"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center">
        <span className="px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-xs text-zinc-300 font-medium backdrop-blur-md">
          ↔ Drag horizontally to rotate showreel
        </span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 7.8], fov: 42 }}
        dpr={[1, dpr]}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
      >
        <ambientLight intensity={0.9} color="#ffffff" />
        <directionalLight position={[0, 6, 8]} intensity={1.5} color="#06b6d4" />
        <pointLight position={[0, -3, 0]} intensity={1.5} color="#6d28d9" />

        <CarouselRing
          rotationY={rotationY}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        />
      </Canvas>
    </div>
  );
};

export default PhoneCarouselScene;
