export interface Slide {
  id: string;
  title: string;
  content: string;
  type?: "title" | "content" | "two-column" | "list" | "code" | "conclusion";
  items?: string[];
  codeExample?: {
    language: string;
    code: string;
    title?: string;
  };
  columns?: {
    left: string;
    right: string;
  };
  leftContent?: {
    title: string;
    items: string[];
  };
  rightContent?: {
    title: string;
    items: string[];
  };
  keyPoints?: Array<{
    title: string;
    description: string;
    color?: string;
  }>;
  keyTakeaways?: string[];
}

export interface Lecture {
  id: string;
  title: string;
  description: string;
  groupId: string;
  slides: Slide[];
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
  difficulty?: "beginner" | "intermediate" | "advanced";
  duration?: number;
}

export interface Subject {
  id: string;
  title: string;
  teacher: string;
  classroom: string;
  lectureCount: number;
}

export interface Group {
  id: string;
  title: string;
  description: string;
  lectureCount: number;
  subjects: Subject[];
  createdAt: Date;
  updatedAt: Date;
  color?: string;
}

export interface NavigationState {
  currentSlide: number;
  totalSlides: number;
  isFullscreen: boolean;
}

export interface SearchResult {
  lecture: Lecture;
  matchType: "title" | "description" | "content";
  relevance: number;
}
