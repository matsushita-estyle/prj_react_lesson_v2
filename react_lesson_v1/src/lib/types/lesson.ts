export interface Lesson {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: number // minutes
  lessonNumber: number
  courseId: string
  
  // Content
  taskDescription: string
  learningObjectives: string[]
  concepts: string[]
  
  // Code files
  initialFiles: Record<string, string>
  solutionFiles?: Record<string, string>
  
  // UI support
  hints?: string[]
  showHints?: boolean
  showSolution?: boolean
  
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