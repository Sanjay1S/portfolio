interface ContainerProps {
  children: React.ReactNode;
  variant?: "site" | "content" | "wide";
  className?: string;
}

const maxWidths = {
  site: "max-w-[80rem]",
  wide: "max-w-[72rem]",
  content: "max-w-[42rem]",
};

export default function Container({
  children,
  variant = "site",
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto px-6 sm:px-8 ${maxWidths[variant]} ${className}`}>
      {children}
    </div>
  );
}
