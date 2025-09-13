"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils/helpers";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      className={cn(
        "flex items-center space-x-1 text-xs sm:text-sm font-mono overflow-x-auto",
        className
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center flex-shrink-0">
          {index > 0 && (
            <span className="text-muted-foreground/50 mx-1 sm:mx-2">/</span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium whitespace-nowrap"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium whitespace-nowrap truncate max-w-[120px] sm:max-w-none">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
