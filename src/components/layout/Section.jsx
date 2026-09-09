import { useRef } from 'react';
import { cn } from '@/lib/cn';
import { useGSAP } from '@/lib/gsap';
import { revealElements } from '@/animations/reveal';

export default function Section({ id, className, children }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      revealElements(ref.current);
    },
    { scope: ref },
  );

  return (
    <section
      id={id}
      ref={ref}
      className={cn('scroll-section relative w-full py-20 sm:py-24', className)}
    >
      {children}
    </section>
  );
}
