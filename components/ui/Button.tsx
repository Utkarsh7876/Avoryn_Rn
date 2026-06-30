import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type ButtonVariant = "accent" | "outline" | "light";
type ButtonIcon = "arrow-right" | "arrow-up-right" | false;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ButtonIcon;
  external?: boolean;
};

const baseClassName =
  "group inline-flex items-center justify-center gap-3 rounded-full border text-sm font-medium transition duration-300 hover:scale-[1.03]";

const variantClassNames: Record<ButtonVariant, string> = {
  accent:
    "border-accent bg-accent text-black hover:border-accentMuted hover:bg-accentMuted hover:shadow-accent",
  outline:
    "border-borderSubtle bg-transparent text-textPrimary hover:border-accent hover:bg-accent hover:text-black",
  light:
    "border-white bg-white text-black hover:border-accent hover:bg-accent",
};

export function Button({
  href,
  children,
  variant = "accent",
  className = "",
  icon = "arrow-right",
  external = false,
}: ButtonProps) {
  const Icon = icon === "arrow-up-right" ? ArrowUpRight : ArrowRight;

  return (
    <Link
      href={href}
      className={`${baseClassName} ${variantClassNames[variant]} ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      {icon ? <Icon className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" /> : null}
    </Link>
  );
}
