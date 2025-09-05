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
import { getGroupById } from "@/data";
import { ArrowLeft, BookOpen, Code, FileText } from "lucide-react";

interface GroupPageProps {
  params: Promise<{ groupId: string }>;
}

export async function generateMetadata({
  params,
}: GroupPageProps): Promise<Metadata> {
  const { groupId } = await params;
  const group = await getGroupById(groupId);

  if (!group) {
    return {
      title: "Группа не найдена",
    };
  }

  return {
    title: `${group.title}`,
    description: group.description,
  };
}

export default async function GroupPage({ params }: GroupPageProps) {
  const { groupId } = await params;
  const group = await getGroupById(groupId);

  if (!group) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Breadcrumbs
            items={[{ label: "Главная", href: "/" }, { label: group.title }]}
          />
        </div>

        <div className="mb-20">
          <h1 className="text-6xl font-bold text-foreground mb-6 tracking-tight leading-none">
            {group.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {group.description}
          </p>
        </div>

        <section>
          <h2 className="text-4xl font-bold text-foreground mb-16 tracking-tight">
            Дисциплины
          </h2>

          {group.subjects && group.subjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.subjects.map((subject) => (
                <Link key={subject.id} href={`/${group.id}/${subject.id}`}>
                  <Card
                    hover
                    className="h-full transform transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Code className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <span className="text-xs font-mono text-muted-foreground">
                          {subject.id}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {subject.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                          <FileText className="w-4 h-4 mr-3" />
                          <span className="text-sm font-mono font-semibold">
                            {subject.lectureCount} лекций
                          </span>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">
                          ●
                        </span>
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
                  Дисциплины не найдены
                </h3>
                <p className="text-muted-foreground">
                  Для этой группы пока не добавлены дисциплины.
                </p>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </main>
  );
}
