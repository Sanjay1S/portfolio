import type { Metadata } from "next";
import Container from "@/components/Container";
import { PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description: "Research projects and technical work.",
};

export default function ProjectsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container variant="content">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Projects
        </h1>
        <p className="text-text-secondary mb-12 max-w-xl">
          Research projects, open-source implementations, and production systems
          I&apos;ve built.
        </p>
        <div className="space-y-10">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group relative pl-6 border-l border-border hover:border-accent transition-colors"
            >
              <div className="absolute left-[-5px] top-[6px] w-[9px] h-[9px] rounded-full bg-accent" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h2 className="font-heading text-lg font-semibold">
                  {project.title}
                </h2>
                {"github" in project && (project as { github?: string }).github && (
                  <a
                    href={(project as { github: string }).github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline font-heading whitespace-nowrap"
                  >
                    View on GitHub &rarr;
                  </a>
                )}
              </div>
              <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md bg-bg-subtle text-text-muted font-heading"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
