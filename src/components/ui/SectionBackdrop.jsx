import { cn } from '@/lib/cn';
import BackgroundBeams from '@/components/ui/BackgroundBeams';

export default function SectionBackdrop({ className, variant = 'violet' }) {
  const orb =
    variant === 'cyan'
      ? {
          a: 'bg-cyan-500/20',
          b: 'bg-indigo-500/16',
        }
      : {
          a: 'bg-fuchsia-500/18',
          b: 'bg-violet-600/20',
        };

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <div className="bg-grid absolute inset-0 opacity-50" />
      <div
        className={cn(
          'absolute -left-24 top-8 h-72 w-72 rounded-full blur-3xl motion-safe:animate-orb',
          orb.a,
        )}
      />
      <div
        className={cn(
          'absolute -right-16 bottom-0 h-80 w-80 rounded-full blur-3xl motion-safe:animate-orb-slow',
          orb.b,
        )}
      />
      <BackgroundBeams className="opacity-60" />
    </div>
  );
}
