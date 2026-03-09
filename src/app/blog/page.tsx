import type { Metadata } from "next";
import Container from "@/components/Container";
import BlogPostCard from "@/components/BlogPostCard";
import EmptyState from "@/components/EmptyState";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about machine learning, data science, and engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="py-20 sm:py-28">
      <Container variant="content">
        <div className="mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-text-secondary text-lg">
            Writing about machine learning, data science, and engineering.
          </p>
        </div>

        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No posts yet"
            message="Blog posts are on the way. Check back soon."
          />
        )}
      </Container>
    </section>
  );
}
