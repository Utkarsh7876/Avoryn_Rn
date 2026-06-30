type BadgeVariant = "neutral" | "accent";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantClassNames: Record<BadgeVariant, string> = {
  neutral: "border-borderSubtle bg-panelStrong/70 text-textSecondary",
  accent: "border-accent/30 bg-accent text-black",
};

export function Badge({
  children,
  variant = "neutral",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ${variantClassNames[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
