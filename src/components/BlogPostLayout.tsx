import Link from "next/link";
import type { BlogPost } from "@/types/blog";

interface Props {
  post: BlogPost;
  children: React.ReactNode;
}

export default function BlogPostLayout({ post, children }: Props) {
  return (
    <article className="py-20 sm:py-28">
      <header className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors font-heading mb-8 group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-0.5 transition-transform"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to blog
        </Link>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted font-heading">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        {post.tags.length > 0 && (
          <div className="flex gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 rounded-full bg-bg-subtle text-text-secondary font-heading"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose prose-lg max-w-none">{children}</div>
    </article>
  );
}
