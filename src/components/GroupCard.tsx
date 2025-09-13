"use client";

import Link from "next/link";
import { Group } from "@/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import { BookOpen, Terminal, Folder } from "lucide-react";

interface GroupCardProps {
  group: Group;
}

export function GroupCard({ group }: GroupCardProps) {
  return (
    <Link href={`/${group.id}`}>
      <Card
        hover
        className="h-full transform transition-all duration-300 hover:-translate-y-1 group"
      >
        <CardHeader>
          <div className="flex items-start justify-between mb-3">
            <Folder className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-xs font-mono text-muted-foreground">
              {group.id}
            </span>
          </div>
          <CardTitle className="text-xl mb-4 font-bold group-hover:text-primary transition-colors">
            {group.title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed text-muted-foreground">
            {group.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
              <Terminal className="w-4 h-4 mr-3" />
              <span className="text-sm font-mono font-semibold">
                {group.subjects?.length || 0} дисциплин
              </span>
            </div>
            <span className="text-xs font-mono text-muted-foreground">●</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

interface GroupGridProps {
  groups: Group[];
}

export function GroupGrid({ groups }: GroupGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </div>
  );
}
