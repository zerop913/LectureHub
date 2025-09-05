import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PresentationViewer } from "@/components/PresentationViewer";
import { getLectureById } from "@/data";

interface LecturePageProps {
  params: Promise<{ lectureId: string }>;
}

export async function generateMetadata({
  params,
}: LecturePageProps): Promise<Metadata> {
  const { lectureId } = await params;
  const lecture = await getLectureById(lectureId);

  if (!lecture) {
    return {
      title: "Лекция не найдена",
    };
  }

  return {
    title: `${lecture.title} - LectureHub`,
    description: lecture.description,
    openGraph: {
      title: lecture.title,
      description: lecture.description,
      type: "article",
    },
  };
}

export default async function LecturePage({ params }: LecturePageProps) {
  const { lectureId } = await params;
  const lecture = await getLectureById(lectureId);

  if (!lecture) {
    notFound();
  }

  return <PresentationViewer lecture={lecture} />;
}
