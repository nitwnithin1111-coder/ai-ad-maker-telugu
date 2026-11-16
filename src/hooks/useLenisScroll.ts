import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { useDevicePerformance } from './useDevicePerformance';

export function useLenisScroll() {
  const { prefersReducedMotion, isMobile, isTouch } = useDevicePerformance();

  useEffect(() => {
    // Strictly disable Lenis on mobile and touch devices for buttery smooth 60fps native scroll
    if (prefersReducedMotion || isMobile || isTouch || typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animId: number;
    function raf(time: number) {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    }

    animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, [prefersReducedMotion, isMobile, isTouch]);
}
