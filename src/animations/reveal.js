import { gsap, prefersReducedMotion } from '@/lib/gsap';

export function revealElements(root, selector = '[data-animate]') {
  if (!root || prefersReducedMotion()) return;

  const targets = root.querySelectorAll(selector);
  if (!targets.length) return;

  gsap.from(targets, {
    y: 28,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    clearProps: 'transform',
    scrollTrigger: {
      trigger: root,
      start: 'top 78%',
      once: true,
    },
  });
}
