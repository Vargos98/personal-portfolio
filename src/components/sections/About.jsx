import { profile } from '@/data/profile';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Section from '@/components/layout/Section';

export default function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-ink-muted to-ink">
      <Container>
        <SectionHeading title="About" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:gap-16">
          <div data-animate className="space-y-5 text-base leading-relaxed text-neutral-200 sm:text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl
            data-animate
            className="grid h-fit gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
          >
            {profile.facts.map((fact) => (
              <div key={fact.label} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                <dt className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm text-neutral-200 sm:text-base">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
