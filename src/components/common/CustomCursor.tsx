import React, { useEffect, useState } from 'react';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

export const CustomCursor: React.FC = () => {
  const { shouldDisable3D, isTouch, isMobile } = useDevicePerformance();
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Completely disable on mobile and touch devices
    if (shouldDisable3D || isTouch || isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('[data-magnetic]') ||
        target?.getAttribute('role') === 'button'
      ) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [shouldDisable3D, isTouch, isMobile, isVisible]);

  if (shouldDisable3D || isTouch || isMobile || !isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHoveringInteractive ? 0 : 1})`,
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-cyan-400/60 bg-purple-600/10 -translate-x-1/2 -translate-y-1/2 transition-[width,height,transform,background-color] duration-150 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHoveringInteractive ? '48px' : '26px',
          height: isHoveringInteractive ? '48px' : '26px',
          backgroundColor: isHoveringInteractive ? 'rgba(109, 40, 217, 0.2)' : 'transparent',
          borderColor: isHoveringInteractive ? '#06b6d4' : 'rgba(6, 182, 212, 0.4)',
        }}
      />
    </>
  );
};
