export interface Lesson {
  id: string
  title: string
  lessonNumber: number
  
  // Content
  taskDescription: string
  
  // Code files
  initialFiles: Record<string, string>
  solutionFiles?: Record<string, string>
  
  // Navigation
  previousLessonId?: string
  nextLessonId?: string
}

export interface Course {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

export interface CodeFiles {
  [filename: string]: string
}