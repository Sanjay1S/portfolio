import Container from "@/components/Container";
import { EXPERIENCE, EDUCATION, SKILLS, SITE } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <Container variant="content">
          <div className="animate-fade-in-up">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              {SITE.name}
            </h1>
            <p className="text-xl sm:text-2xl text-text-secondary font-heading font-medium mb-6">
              Member of Technical Staff
            </p>
            <div className="h-px w-12 bg-accent mb-8" />
            <p className="text-lg leading-relaxed text-text-secondary max-w-xl">
              I build and fine-tune ML systems: from diffusion models and RAG
              pipelines to supply chain automations and production-scale NLP.
              Currently at Corsair Gaming, working on generative AI, intelligent
              automation, and information retrieval. Previously at Optum,
              building healthcare AI across NLP, computer vision, and
              large-scale data pipelines.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary max-w-xl mt-4">
              Passionate about machine learning, AI-driven automation, and
              building systems that remove toil - always exploring what&apos;s
              next in the space.
            </p>
          </div>
        </Container>
      </section>

      {/* Currently */}
      <section className="pb-16 sm:pb-20">
        <Container variant="content">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-text-muted mb-8">
            Currently
          </h2>
          <div className="border-l-[3px] border-accent pl-6 space-y-4">
            <p className="leading-relaxed">
              <span className="font-heading font-semibold text-text">
                Data Scientist at Corsair Gaming
              </span>
              <span className="text-text-muted"> — Milpitas, CA</span>
            </p>
            <p className="text-text-secondary leading-relaxed">
              Fine-tuning Qwen diffusion models via LoRA with split training
              architectures. Building supply chain planning automations that
              cut planner cycle time by ~70%. Architecting multi-agent systems
              for AI-powered image generation. Deploying on-prem LLM inference
              at scale with vLLM and Docker.
            </p>
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="pb-16 sm:pb-20">
        <Container variant="content">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-text-muted mb-10">
            Experience
          </h2>
          <div className="space-y-14">
            {EXPERIENCE.map((exp) => (
              <div key={exp.company}>
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-text-muted font-heading">
                    {exp.location}
                  </p>
                </div>
                <div className="space-y-8">
                  {exp.roles.map((role) => (
                    <div key={role.title} className="relative pl-6 border-l border-border">
                      <div className="absolute left-[-5px] top-[6px] w-[9px] h-[9px] rounded-full bg-accent" />
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-3">
                        <h4 className="font-heading font-semibold">
                          {role.title}
                        </h4>
                        {role.period && (
                          <span className="text-sm text-text-muted font-heading whitespace-nowrap">
                            {role.period}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {role.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-text-secondary leading-relaxed text-[0.9375rem]"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="pb-16 sm:pb-20">
        <Container variant="content">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-text-muted mb-10">
            Education
          </h2>
          <div className="space-y-8">
            {EDUCATION.map((edu) => (
              <div key={edu.school} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <div>
                  <h3 className="font-heading font-semibold">{edu.school}</h3>
                  <p className="text-text-secondary">
                    {edu.degree}
                    {edu.detail && <span className="text-text-muted"> — {edu.detail}</span>}
                    {edu.gpa && <span className="text-text-muted"> — GPA: {edu.gpa}</span>}
                  </p>
                </div>
                <div className="text-sm text-text-muted font-heading whitespace-nowrap">
                  <p>{edu.period}</p>
                  <p>{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="pb-20 sm:pb-28">
        <Container variant="content">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-text-muted mb-10">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SKILLS.map((group) => (
              <div key={group.category}>
                <h3 className="font-heading font-semibold text-sm mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-2.5 py-1 rounded-md bg-bg-subtle text-text-secondary font-heading"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
