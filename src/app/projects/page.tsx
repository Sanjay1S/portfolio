import type { Metadata } from "next";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";

export const metadata: Metadata = {
  title: "Projects",
  description: "Research projects and technical work.",
};

export default function ProjectsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container variant="content">
        <EmptyState
          title="Projects"
          message="Research projects and technical work are being prepared for this space. Check back soon."
          linkText="Read the blog"
          linkHref="/blog"
        />
      </Container>
    </section>
  );
}
