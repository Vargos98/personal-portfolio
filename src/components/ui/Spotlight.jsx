import { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Spotlight({ className }) {
  const ref = useRef(null);
  const canHover = useMediaQuery('(pointer: fine)');

  useEffect(() => {
    if (!canHover) return undefined;

    const spotlight = ref.current;
    const parent = spotlight?.parentElement;
    if (!spotlight || !parent) return undefined;

    let frame = 0;
    const onMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        spotlight.style.transform = `translate(${event.clientX - rect.left}px, ${event.clientY - rect.top}px) translate(-50%, -50%)`;
      });
    };

    parent.addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(frame);
      parent.removeEventListener('mousemove', onMove);
    };
  }, [canHover]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_65%)] blur-2xl',
        className,
      )}
    />
  );
}
