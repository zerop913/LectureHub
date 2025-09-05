import { Lecture, SearchResult } from "@/types";

export function searchLectures(
  lectures: Lecture[],
  query: string
): SearchResult[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  lectures.forEach((lecture) => {
    let relevance = 0;
    let matchType: SearchResult["matchType"] = "content";

    if (lecture.title.toLowerCase().includes(normalizedQuery)) {
      relevance += 100;
      matchType = "title";
    }

    if (lecture.description.toLowerCase().includes(normalizedQuery)) {
      relevance += 50;
      if (matchType === "content") matchType = "description";
    }

    lecture.slides.forEach((slide) => {
      if (slide.title.toLowerCase().includes(normalizedQuery)) {
        relevance += 30;
      }
      if (slide.content.toLowerCase().includes(normalizedQuery)) {
        relevance += 10;
      }
    });

    if (
      lecture.tags?.some((tag) => tag.toLowerCase().includes(normalizedQuery))
    ) {
      relevance += 25;
    }

    if (relevance > 0) {
      results.push({
        lecture,
        matchType,
        relevance,
      });
    }
  });

  return results.sort((a, b) => b.relevance - a.relevance);
}
