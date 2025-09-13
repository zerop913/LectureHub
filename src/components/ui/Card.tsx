import { cn } from "@/utils/helpers";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className,
  hover = false,
  onClick,
}: CardProps) {
  const baseProps = {
    className: cn(
      "bg-card border border-border p-4 sm:p-6 lg:p-8 card-glow transition-all duration-300",
      hover && "hover:border-foreground/20 cursor-pointer group",
      className
    ),
  };

  if (onClick) {
    return (
      <button {...baseProps} onClick={onClick}>
        {children}
      </button>
    );
  }

  return <div {...baseProps}>{children}</div>;
}

export function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mb-3 sm:mb-4", className)}>{children}</div>;
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-lg font-medium text-card-foreground", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-sm text-muted-foreground mt-2", className)}>
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("", className)}>{children}</div>;
}
