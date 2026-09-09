import { useRef } from 'react';
import { profile } from '@/data/profile';
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap';

export default function Preloader({ onComplete, onReveal }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const finish = () => {
        document.body.style.overflow = '';
        onComplete?.();
      };

      document.body.style.overflow = 'hidden';

      if (prefersReducedMotion()) {
        onReveal?.();
        gsap.to(root.current, {
          opacity: 0,
          duration: 0.25,
          onComplete: finish,
        });
        return;
      }

      const count = { value: 0 };
      const tl = gsap.timeline({
        onComplete: finish,
      });

      tl.from('[data-loader="brand"]', { y: 18, opacity: 0, duration: 0.55 })
        .from('[data-loader="role"]', { y: 10, opacity: 0, duration: 0.4 }, '-=0.25')
        .from('[data-loader="track"]', { scaleX: 0, duration: 0.35, transformOrigin: 'left center' }, '-=0.1')
        .to('[data-loader="bar"]', { scaleX: 1, duration: 1.35, ease: 'power2.inOut', transformOrigin: 'left center' }, '-=0.05')
        .to(
          count,
          {
            value: 100,
            duration: 1.35,
            ease: 'power2.inOut',
            onUpdate: () => {
              const node = root.current?.querySelector('[data-loader="count"]');
              if (node) node.textContent = String(Math.round(count.value)).padStart(2, '0');
            },
          },
          '<',
        )
        .to(root.current, {
          yPercent: -100,
          duration: 0.85,
          ease: 'power4.inOut',
          delay: 0.12,
          onStart: () => onReveal?.(),
        });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-ink text-white"
      role="status"
      aria-label="Loading"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18),transparent_65%)] blur-2xl" />

      <div className="relative z-10 flex w-[min(22rem,calc(100%-2.5rem))] flex-col items-center text-center">
        <p
          data-loader="brand"
          className="text-3xl font-extrabold tracking-tight gradient-text sm:text-4xl"
        >
          {profile.brand}
        </p>
        <p data-loader="role" className="mt-3 text-xs font-medium uppercase tracking-[0.28em] text-neutral-400">
          {profile.loaderLine}
        </p>

        <div data-loader="track" className="mt-10 h-px w-full origin-left overflow-hidden bg-white/10">
          <div
            data-loader="bar"
            className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
          />
        </div>

        <p className="mt-4 font-mono text-xs tracking-[0.3em] text-neutral-500">
          <span data-loader="count">00</span>
        </p>
      </div>
    </div>
  );
}
