import React, { useRef, useState } from 'react';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  glare?: boolean;
  maxTilt?: number;
}

export const Card3DTilt: React.FC<Card3DTiltProps> = ({
  children,
  className = '',
  glare = true,
  maxTilt = 8,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('none');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const { shouldDisable3D, isTouch } = useDevicePerformance();

  // On touch or mobile devices, render zero-overhead clean card
  if (shouldDisable3D || isTouch) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`}>
        {children}
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(`perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0)`);

    if (glare) {
      setGlarePosition({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.2,
      });
    }
  };

  const handleMouseLeave = () => {
    setTransformStyle('none');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: 'transform 0.15s ease-out',
        willChange: transformStyle !== 'none' ? 'transform' : 'auto',
      }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-200"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.3) 0%, rgba(6, 182, 212, 0.1) 35%, transparent 70%)`,
          }}
        />
      )}

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
