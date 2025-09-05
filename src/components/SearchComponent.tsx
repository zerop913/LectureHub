"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { searchLectures } from "@/utils/search";
import { getAllLectures } from "@/data";
import { SearchResult } from "@/types";
import { cn, formatDate, getDifficultyLabel } from "@/utils/helpers";
import Link from "next/link";

interface SearchComponentProps {
  className?: string;
}

export function SearchComponent({ className }: SearchComponentProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const performSearch = async () => {
      if (query.trim()) {
        const allLectures = await getAllLectures();
        const searchResults = searchLectures(allLectures, query);
        setResults(searchResults.slice(0, 5));
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    };

    performSearch();
  }, [query]);

  const handleClose = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Поиск лекций..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
          onBlur={() => setTimeout(handleClose, 200)}
        />
      </div>

      {isOpen && results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto animate-fade-in">
          <CardContent className="p-2">
            {results.map((result) => (
              <Link
                key={result.lecture.id}
                href={`/lectures/${result.lecture.id}`}
                className="block p-3 hover:bg-muted transition-colors border-b border-border last:border-b-0"
                onClick={handleClose}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">
                      {result.lecture.title}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate mt-1">
                      {result.lecture.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {result.lecture.slides.length} слайдов
                      </Badge>
                      {result.lecture.difficulty && (
                        <Badge variant="default" className="text-xs">
                          {getDifficultyLabel(result.lecture.difficulty)}
                        </Badge>
                      )}
                      <span className="text-xs text-muted-foreground">
                        {formatDate(result.lecture.createdAt)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center ml-2">
                    <Badge
                      variant={
                        result.matchType === "title" ? "primary" : "default"
                      }
                      className="text-xs"
                    >
                      {result.matchType === "title"
                        ? "Заголовок"
                        : result.matchType === "description"
                        ? "Описание"
                        : "Контент"}
                    </Badge>
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      )}

      {isOpen && query.trim() && results.length === 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 animate-fade-in">
          <CardContent className="p-4 text-center text-muted-foreground">
            Ничего не найдено по запросу "{query}"
          </CardContent>
        </Card>
      )}
    </div>
  );
}
