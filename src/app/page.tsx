import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { GroupGrid } from "@/components/GroupCard";
import { getAllGroups } from "@/data";

export const metadata: Metadata = {
  title: "Лекции",
  description:
    "Учебные материалы по программированию и информационным технологиям",
};

export default async function HomePage() {
  const groups = await getAllGroups();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-20">
          <h1 className="text-6xl font-bold text-foreground mb-6 tracking-tight leading-none">
            Группы
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Выберите группу для просмотра дисциплин и лекций
          </p>
        </div>

        <GroupGrid groups={groups} />
      </div>
    </main>
  );
}
