import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28">
      <Container variant="content">
        <EmptyState
          title="404"
          message="This page doesn't exist."
          linkText="Go home"
          linkHref="/"
        />
      </Container>
    </section>
  );
}
