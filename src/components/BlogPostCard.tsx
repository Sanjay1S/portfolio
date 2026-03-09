import Link from "next/link";
import type { BlogPostMeta } from "@/types/blog";

export default function BlogPostCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="group py-6 border-b border-border last:border-b-0">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
          <h2 className="font-heading text-xl font-semibold text-text group-hover:text-accent transition-colors duration-200">
            {post.title}
          </h2>
          <time className="text-sm text-text-muted whitespace-nowrap font-heading">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>
        {post.excerpt && (
          <p className="text-text-secondary leading-relaxed mb-3">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-muted font-heading">
            {post.readingTime}
          </span>
          {post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-bg-subtle text-text-secondary font-heading"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
