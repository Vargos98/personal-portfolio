import { useId } from 'react';
import { cn } from '@/lib/cn';

const PATHS = [
  'M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875',
  'M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867',
  'M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859',
  'M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851',
  'M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843',
  'M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835',
  'M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827',
  'M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819',
];

export default function BackgroundBeams({ className }) {
  const uid = useId().replace(/:/g, '');

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <svg
        className="absolute left-1/2 top-0 h-full w-[140%] min-w-[80rem] -translate-x-1/2"
        viewBox="0 0 696 316"
        fill="none"
      >
        {PATHS.map((d, index) => (
          <path
            key={d}
            d={d}
            stroke={`url(#beam-${uid}-${index})`}
            strokeOpacity="0.35"
            strokeWidth="0.6"
            className="motion-safe:animate-beam"
            style={{
              strokeDasharray: 80,
              animationDelay: `${index * 0.45}s`,
              animationDuration: `${5 + (index % 3)}s`,
            }}
          />
        ))}
        <defs>
          {PATHS.map((_, index) => (
            <linearGradient
              key={index}
              id={`beam-${uid}-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="50%" stopColor={index % 2 ? '#e879f9' : '#a78bfa'} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
}
