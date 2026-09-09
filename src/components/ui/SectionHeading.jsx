import { cn } from '@/lib/cn';

export default function SectionHeading({ title, description, className }) {
  return (
    <div data-animate className={cn('max-w-2xl', className)}>
      <h2 className="inline-block border-b-2 border-yellow-500/80 pb-2 text-3xl font-extrabold gradient-text sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-sm text-neutral-400 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
