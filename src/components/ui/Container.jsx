import { cn } from '@/lib/cn';

export default function Container({ className, children }) {
  return (
    <div className={cn('mx-auto w-full max-w-site px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
