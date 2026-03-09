import type { MDXComponents } from "mdx/types";

export function getMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-heading text-3xl font-bold mt-12 mb-4 tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading text-2xl font-semibold mt-10 mb-3 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-xl font-semibold mt-8 mb-2">
        {children}
      </h3>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors duration-200"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-accent pl-4 italic text-text-secondary my-6">
        {children}
      </blockquote>
    ),
  };
}
