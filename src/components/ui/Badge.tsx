import { cn } from "@/utils/helpers";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-muted text-muted-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
