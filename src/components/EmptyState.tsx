import Link from "next/link";

interface EmptyStateProps {
  title: string;
  message: string;
  linkText?: string;
  linkHref?: string;
}

export default function EmptyState({
  title,
  message,
  linkText,
  linkHref,
}: EmptyStateProps) {
  return (
    <div className="text-center py-20">
      <div className="mx-auto mb-8 h-px w-16 bg-accent" />
      <h2 className="font-heading text-2xl font-medium mb-4">{title}</h2>
      <p className="text-text-secondary text-lg max-w-md mx-auto leading-relaxed">
        {message}
      </p>
      {linkText && linkHref && (
        <Link
          href={linkHref}
          className="inline-block mt-8 text-accent hover:text-accent-hover underline underline-offset-4 transition-colors font-heading text-sm"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
