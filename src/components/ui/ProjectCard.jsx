import { useRef, useState } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { skillFromStackLabel } from '@/data/skills';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import SkillMark from '@/components/ui/SkillMark';

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const canHover = useMediaQuery('(pointer: fine)');
  const [glow, setGlow] = useState({ x: 50, y: 0, visible: false });

  const onMove = (event) => {
    if (!canHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlow({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      visible: true,
    });
  };

  return (
    <article
      ref={cardRef}
      data-animate
      onMouseMove={onMove}
      onMouseLeave={() => setGlow((prev) => ({ ...prev, visible: false }))}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0c] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-[transform,border-color,box-shadow] duration-500 motion-safe:hover:-translate-y-1.5 hover:border-purple-400/30 hover:shadow-[0_20px_50px_-24px_rgba(168,85,247,0.45)]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: glow.visible
            ? `radial-gradient(500px circle at ${glow.x}px ${glow.y}px, rgba(168, 85, 247, 0.14), transparent 40%)`
            : 'none',
        }}
      />

      <div className="relative overflow-hidden">
        <div className="absolute left-4 top-4 z-10 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        {project.featured ? (
          <span className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-200 backdrop-blur-md">
            Featured
          </span>
        ) : null}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-110"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/25 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-2 sm:px-6 sm:pb-6">
        <div className="mb-3 flex items-center gap-2">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-purple-300/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
          >
            Demo
            <HiArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-purple-300/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
          >
            Code
            <HiArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>

        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
          Tech Stack
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((item) => {
            const skill = skillFromStackLabel(item);
            return (
              <span
                key={item}
                className="inline-flex cursor-default select-none items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-neutral-200"
              >
                <SkillMark skill={skill} className="h-3.5 w-3.5" />
                {item}
              </span>
            );
          })}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-neutral-400">
          {project.description}
        </p>
      </div>
    </article>
  );
}
