import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Container from "@/components/Container";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { getMDXComponents } from "@/lib/mdx";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const components = getMDXComponents();
  const { content } = await compileMDX({
    source: post.content,
    components,
    options: {
      parseFrontmatter: false,
    },
  });

  return (
    <Container variant="content">
      <BlogPostLayout post={post}>{content}</BlogPostLayout>
    </Container>
  );
}
