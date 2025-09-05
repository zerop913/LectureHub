import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getGroupById, getLecturesBySubjectId } from "@/data";
import { ArrowLeft, BookOpen, Clock, BarChart3 } from "lucide-react";
import { formatDate, getDifficultyLabel } from "@/utils/helpers";

interface SubjectPageProps {
  params: Promise<{ groupId: string; subjectId: string }>;
}

export async function generateMetadata({
  params,
}: SubjectPageProps): Promise<Metadata> {
  const { groupId, subjectId } = await params;
  const group = await getGroupById(groupId);

  if (!group) {
    return {
      title: "Дисциплина не найдена",
    };
  }

  const subject = group.subjects.find((s) => s.id === subjectId);

  if (!subject) {
    return {
      title: "Дисциплина не найдена",
    };
  }

  return {
    title: `${subject.title} - ${group.title}`,
    description: `Лекции по дисциплине ${subject.title}`,
  };
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { groupId, subjectId } = await params;
  const group = await getGroupById(groupId);

  if (!group) {
    notFound();
  }

  const subject = group.subjects.find((s) => s.id === subjectId);

  if (!subject) {
    notFound();
  }

  const subjectLectures = await getLecturesBySubjectId(
    subject.id,
    subject.title
  );

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: group.title, href: `/${groupId}` },
              { label: subject.title },
            ]}
          />
        </div>

        <div className="mb-20">
          <h1 className="text-6xl font-bold text-foreground mb-6 tracking-tight leading-none">
            {subject.title}
          </h1>
        </div>

        <section>
          <h2 className="text-4xl font-bold text-foreground mb-16 tracking-tight">
            Лекции
          </h2>

          {subjectLectures.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {subjectLectures.map((lecture) => (
                <Link key={lecture.id} href={`/lectures/${lecture.id}`}>
                  <Card
                    hover
                    className="transition-all duration-200 hover:shadow-md"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-medium mb-2">
                            {lecture.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {lecture.description}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          {lecture.difficulty && (
                            <Badge variant="secondary">
                              {getDifficultyLabel(lecture.difficulty)}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {lecture.slides.length} слайдов
                        </span>
                        {lecture.duration && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {lecture.duration} ч
                          </span>
                        )}
                        <span>{formatDate(lecture.createdAt)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Лекции не найдены
                </h3>
                <p className="text-muted-foreground">
                  Для этой дисциплины пока не добавлены лекции.
                </p>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </main>
  );
}
