"use client";

import Link from "next/link";
import { Lecture } from "@/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Play, Calendar, Clock, Layers } from "lucide-react";
import {
  formatDate,
  getDifficultyLabel,
  formatDuration,
} from "@/utils/helpers";

interface LectureCardProps {
  lecture: Lecture;
}

export function LectureCard({ lecture }: LectureCardProps) {
  return (
    <Link href={`/lectures/${lecture.id}`}>
      <Card hover className="h-full animate-fade-in group">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                {lecture.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed line-clamp-2">
                {lecture.description}
              </CardDescription>
            </div>
            <div className="ml-3 mt-1 flex-shrink-0">
              <div className="w-8 h-8 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Play className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {lecture.tags && lecture.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {lecture.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="default" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {lecture.tags.length > 3 && (
                  <Badge variant="default" className="text-xs">
                    +{lecture.tags.length - 3}
                  </Badge>
                )}
              </div>
            )}

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Layers className="w-4 h-4" />
                  <span>{lecture.slides.length} слайдов</span>
                </div>

                {lecture.duration && (
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{formatDuration(lecture.duration)}</span>
                  </div>
                )}
              </div>

              {lecture.difficulty && (
                <Badge
                  variant={
                    lecture.difficulty === "beginner"
                      ? "accent"
                      : lecture.difficulty === "intermediate"
                      ? "primary"
                      : "secondary"
                  }
                  className="text-xs"
                >
                  {getDifficultyLabel(lecture.difficulty)}
                </Badge>
              )}
            </div>

            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(lecture.createdAt)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

interface LectureGridProps {
  lectures: Lecture[];
}

export function LectureGrid({ lectures }: LectureGridProps) {
  if (lectures.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">📚</div>
        <h3 className="text-lg font-medium text-muted-foreground mb-2">
          Лекции не найдены
        </h3>
        <p className="text-sm text-muted-foreground">
          В этой группе пока нет лекций
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lectures.map((lecture, index) => (
        <div
          key={lecture.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <LectureCard lecture={lecture} />
        </div>
      ))}
    </div>
  );
}
