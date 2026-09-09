import { projects } from '@/data/projects';
import Container from '@/components/ui/Container';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionBackdrop from '@/components/ui/SectionBackdrop';
import SectionHeading from '@/components/ui/SectionHeading';
import Section from '@/components/layout/Section';

export default function Projects() {
  return (
    <Section id="portfolio" className="overflow-hidden bg-ink">
      <SectionBackdrop variant="violet" />
      <Container className="relative z-10">
        <SectionHeading
          title="Portfolio"
          description="Checkout some of my work right here"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
