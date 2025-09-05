"use client";

import Link from "next/link";
import { SearchComponent } from "./SearchComponent";

export function Navigation() {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold font-mono text-foreground hover:text-muted-foreground transition-colors tracking-tight"
        >
          LectureHub
        </Link>

        <div className="flex items-center">
          <SearchComponent className="w-80" />
        </div>
      </div>
    </nav>
  );
}
