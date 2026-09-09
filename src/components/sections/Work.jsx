import { work } from '@/data/work';
import Container from '@/components/ui/Container';
import SectionBackdrop from '@/components/ui/SectionBackdrop';
import SectionHeading from '@/components/ui/SectionHeading';
import Section from '@/components/layout/Section';

export default function Work() {
  return (
    <Section id="work" className="overflow-hidden bg-ink">
      <SectionBackdrop variant="cyan" />
      <Container className="relative z-10">
        <SectionHeading
          title="Work"
          description="Roles and projects from production SaaS to client-facing web work."
        />

        <ol className="mt-10 space-y-6">
          {work.map((job) => (
            <li
              key={job.id}
              data-animate
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6"
            >
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/70 to-cyan-400/0" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-bold sm:text-xl">
                  {job.role}
                  <span className="text-neutral-400"> · {job.company}</span>
                </h3>
                <p className="text-sm text-purple-300">{job.period}</p>
              </div>
              <p className="mt-2 text-sm text-neutral-400">{job.summary}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-300">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
