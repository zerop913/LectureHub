"use client";

import Link from "next/link";
import { SearchComponent } from "./SearchComponent";

export function Navigation() {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold font-mono text-foreground hover:text-muted-foreground transition-colors tracking-tight flex-shrink-0"
        >
          LectureHub
        </Link>

        <div className="flex items-center flex-1 max-w-xs sm:max-w-sm lg:max-w-md">
          <SearchComponent className="w-full" />
        </div>
      </div>
    </nav>
  );
}
