import { prefersReducedMotion } from '@/lib/gsap';

export function scrollToId(id) {
  const node = document.getElementById(id);
  if (!node) return;

  node.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
}
