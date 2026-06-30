type SectionLabelProps = {
  label: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionLabel({
  label,
  align = "left",
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-textSecondary ${
        align === "center" ? "justify-center" : "justify-start"
      } ${className}`}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-accent" />
      <span>{label}</span>
    </div>
  );
}
