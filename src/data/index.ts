import { Group, Lecture } from "@/types";
import { dataConfig } from "./config";

const groupImports = {
  "3991": () => import("./groups/3991").then((m) => m.group3991),
  "3992": () => import("./groups/3992").then((m) => m.group3992),
  "3993": () => import("./groups/3993").then((m) => m.group3993),
  "3994-2993": () => import("./groups/3994-2993").then((m) => m.group39942993),
  "4993": () => import("./groups/4993").then((m) => m.group4993),
  "4996": () => import("./groups/4996").then((m) => m.group4996),
};

const lectureImports = {
  "lecture-template": () =>
    import("./lectures/lecture-template").then((m) => m.lectureTemplate),
  "introduction-to-info-security": () =>
    import("./lectures/introduction-to-info-security").then(
      (m) => m.introductionToInfoSecurity
    ),
  "html5-semantic-lecture": () =>
    import("./lectures/html5-semantic-lecture").then(
      (m) => m.html5SemanticLecture
    ),
  "html-tags-deep-dive": () =>
    import("./lectures/html-tags-deep-dive").then(
      (m) => m.htmlTagsDeepDiveLecture
    ),
  "java-fundamentals-lecture": () =>
    import("./lectures/java-fundamentals-lecture").then((m) => m.javaLecture),
  "java-basics-lecture": () =>
    import("./lectures/java-basics-lecture").then((m) => m.javaBasicsLecture),
  "java-syntax-advanced-lecture": () =>
    import("./lectures/java-syntax-advanced-lecture").then(
      (m) => m.javaSyntaxAdvancedLecture
    ),
  "security-architecture-lecture": () =>
    import("./lectures/security-architecture-lecture").then(
      (m) => m.securityArchitectureLecture
    ),
  "java-oop-lecture": () =>
    import("./lectures/java-oop-lecture").then((m) => m.javaOOPLecture),
  "java-oop-basic-lecture": () =>
    import("./lectures/java-oop-basic-lecture").then(
      (m) => m.javaOOPBasicLecture
    ),
  "security-assessment-methodology": () =>
    import("./lectures/security-assessment-methodology").then(
      (m) => m.securityAssessmentMethodologyLecture
    ),
  "java-oop-part2-lecture": () =>
    import("./lectures/java-oop-part2-lecture").then(
      (m) => m.javaOOPPart2Lecture
    ),
  "xss-vulnerabilities-lecture": () =>
    import("./lectures/xss-vulnerabilities-lecture").then(
      (m) => m.xssVulnerabilitiesLecture
    ),
};

export async function getAllGroups(): Promise<Group[]> {
  const groups: Group[] = [];

  for (const groupId of dataConfig.groups) {
    const importFn = groupImports[groupId as keyof typeof groupImports];
    if (importFn) {
      const group = await importFn();

      const updatedSubjects = await Promise.all(
        group.subjects.map(async (subject) => {
          const lectures = await getLecturesBySubjectId(
            subject.id,
            subject.title
          );
          return {
            ...subject,
            lectureCount: lectures.length,
          };
        })
      );

      const updatedGroup = {
        ...group,
        subjects: updatedSubjects,
        lectureCount: updatedSubjects.reduce(
          (total, subject) => total + subject.lectureCount,
          0
        ),
      };

      groups.push(updatedGroup);
    }
  }

  return groups;
}

export async function getGroupById(groupId: string): Promise<Group | null> {
  const importFn = groupImports[groupId as keyof typeof groupImports];
  if (!importFn) return null;

  const group = await importFn();

  const updatedSubjects = await Promise.all(
    group.subjects.map(async (subject) => {
      const lectures = await getLecturesBySubjectId(subject.id, subject.title);
      return {
        ...subject,
        lectureCount: lectures.length,
      };
    })
  );

  return {
    ...group,
    subjects: updatedSubjects,
    lectureCount: updatedSubjects.reduce(
      (total, subject) => total + subject.lectureCount,
      0
    ),
  };
}

export async function getAllLectures(): Promise<Lecture[]> {
  const lectures: Lecture[] = [];

  for (const lectureId of dataConfig.lectures) {
    const importFn = lectureImports[lectureId as keyof typeof lectureImports];
    if (importFn) {
      const lecture = await importFn();
      lectures.push(lecture);
    }
  }

  return lectures;
}

export async function getLectureById(
  lectureId: string
): Promise<Lecture | null> {
  const importFn = lectureImports[lectureId as keyof typeof lectureImports];
  if (!importFn) return null;

  return await importFn();
}

export async function getLecturesByGroupId(
  groupId: string
): Promise<Lecture[]> {
  const allLectures = await getAllLectures();
  return allLectures.filter((lecture) => lecture.groupId === groupId);
}

export async function getLecturesBySubjectId(
  subjectId: string,
  subjectTitle?: string
): Promise<Lecture[]> {
  const allLectures = await getAllLectures();
  return allLectures.filter((lecture) => {
    const hasSubjectTag = lecture.tags?.includes(subjectId);

    const hasSubjectInTitle = subjectTitle
      ? lecture.title.toLowerCase().includes(subjectTitle.toLowerCase()) ||
        lecture.description.toLowerCase().includes(subjectTitle.toLowerCase())
      : false;

    return hasSubjectTag || hasSubjectInTitle;
  });
}

export async function searchLectures(query: string): Promise<Lecture[]> {
  const allLectures = await getAllLectures();
  const searchTerm = query.toLowerCase();

  return allLectures.filter(
    (lecture) =>
      lecture.title.toLowerCase().includes(searchTerm) ||
      lecture.description.toLowerCase().includes(searchTerm) ||
      lecture.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))
  );
}

export async function getStats() {
  const groups = await getAllGroups();
  const lectures = await getAllLectures();

  return {
    totalGroups: groups.length,
    totalLectures: lectures.length,
    lecturesByDifficulty: {
      beginner: lectures.filter((l) => l.difficulty === "beginner").length,
      intermediate: lectures.filter((l) => l.difficulty === "intermediate")
        .length,
      advanced: lectures.filter((l) => l.difficulty === "advanced").length,
    },
    totalDuration: lectures.reduce(
      (sum, lecture) => sum + (lecture.duration || 0),
      0
    ),
  };
}
