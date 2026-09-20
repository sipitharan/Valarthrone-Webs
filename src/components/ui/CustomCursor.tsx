import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices with fine pointer, never on touch/mobile
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;
    let isHovered = false;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      // Direct positioning for instant, latency-free dot
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const onMouseLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseEnter = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = !!target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover');
      if (interactive !== isHovered) {
        isHovered = interactive;
        if (isHovered) {
          ring.classList.add('scale-125', 'border-gold', 'bg-gold/15', 'shadow-[0_0_15px_rgba(212,175,55,0.4)]');
          dot.classList.add('scale-150', 'bg-crimson-500');
        } else {
          ring.classList.remove('scale-125', 'border-gold', 'bg-gold/15', 'shadow-[0_0_15px_rgba(212,175,55,0.4)]');
          dot.classList.remove('scale-150', 'bg-crimson-500');
        }
      }
    };

    // Smooth lerp loop for the outer ring only
    const updateRing = () => {
      ringX += (targetX - ringX) * 0.25;
      ringY += (targetY - ringY) * 0.25;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(updateRing);
    };

    rafId = requestAnimationFrame(updateRing);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer Follower Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-7 h-7 rounded-full border border-gold/40 bg-transparent opacity-0 transition-transform duration-100 ease-out will-change-transform pointer-events-none"
      />

      {/* Inner Central Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold opacity-0 shadow-[0_0_8px_rgba(212,175,55,0.8)] will-change-transform pointer-events-none"
      />
    </div>
  );
};
