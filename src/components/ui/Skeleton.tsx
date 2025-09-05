import { cn } from "@/utils/helpers";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("skeleton bg-muted h-4 w-full", className)} />;
}
