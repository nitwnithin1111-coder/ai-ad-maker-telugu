import { useState, useEffect } from 'react';

export interface DevicePerformance {
  isLowEnd: boolean;
  isMobile: boolean;
  isTouch: boolean;
  shouldDisable3D: boolean;
  prefersReducedMotion: boolean;
  isWebGLAvailable: boolean;
  dpr: number;
}

function checkWebGLSupport(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function useDevicePerformance(): DevicePerformance {
  const [perf, setPerf] = useState<DevicePerformance>({
    isLowEnd: false,
    isMobile: false,
    isTouch: false,
    shouldDisable3D: false,
    prefersReducedMotion: false,
    isWebGLAvailable: true,
    dpr: 1.0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const nav = navigator as unknown as {
      hardwareConcurrency?: number;
      deviceMemory?: number;
      maxTouchPoints?: number;
    };

    const isTouch =
      'ontouchstart' in window || (nav.maxTouchPoints && nav.maxTouchPoints > 0) || false;
    const isMobile = window.innerWidth < 1024 || isTouch;

    const cores = nav.hardwareConcurrency || 4;
    const memory = nav.deviceMemory || 4;
    // 2GB phone (memory <= 2 or cores <= 4) or mobile screen
    const isLowEnd = cores <= 4 || memory <= 4 || isMobile;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = motionQuery.matches;

    const webglSupported = checkWebGLSupport();

    // On 2GB phones, low-end devices, mobile screens, or reduced motion, disable heavy WebGL loops
    const shouldDisable3D = isMobile || isLowEnd || prefersReducedMotion || !webglSupported;

    // Cap DPR at 1 on mobile / low-end to protect fillrate and prevent GPU memory spikes
    const rawDpr = window.devicePixelRatio || 1;
    const dpr = shouldDisable3D ? 1 : Math.min(Math.max(rawDpr, 1), 1.5);

    setPerf({
      isLowEnd,
      isMobile,
      isTouch: !!isTouch,
      shouldDisable3D,
      prefersReducedMotion,
      isWebGLAvailable: webglSupported,
      dpr,
    });

    const handleResize = () => {
      const mobileNow = window.innerWidth < 1024;
      setPerf((prev) => ({
        ...prev,
        isMobile: mobileNow,
        shouldDisable3D: mobileNow || prev.isLowEnd || prev.prefersReducedMotion || !prev.isWebGLAvailable,
      }));
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return perf;
}
