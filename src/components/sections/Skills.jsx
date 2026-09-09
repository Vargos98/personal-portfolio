import { skillGroups } from '@/data/skills';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SkillMark from '@/components/ui/SkillMark';
import ToolsCard from '@/components/ui/ToolsCard';
import Section from '@/components/layout/Section';

export default function Skills() {
  return (
    <Section id="experience" className="overflow-hidden bg-gradient-to-b from-ink to-ink-muted">
      <Container className="relative z-10">
        <SectionHeading
          title="Tech-Stack"
          description="Frontend, backend, and tooling from the work I ship in production."
        />

        <div className="mt-10 grid grid-cols-1 gap-6">
          <ToolsCard />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.id}
                data-animate
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5"
              >
                <h3 className="cursor-default select-none text-xs font-semibold uppercase tracking-wide text-purple-300">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill.id}
                      className="flex cursor-default select-none items-center gap-2 rounded-full border border-white/10 bg-black/40 px-2.5 py-1.5 text-xs text-neutral-200 sm:text-sm"
                    >
                      <SkillMark skill={skill} className="h-4 w-4 shrink-0 object-contain" />
                      {skill.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
