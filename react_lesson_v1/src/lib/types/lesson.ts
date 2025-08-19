export interface LessonStep {
  stepNumber: number
  title: string
  instruction: string
  hint?: string
  initialCode?: string
  solutionCode: string
  copyableCode?: string | string[]  // コピー可能なコードスニペット（文字列または配列）
  validation?: {
    includes?: string[]
    excludes?: string[]
    regex?: string
  }
}

export interface Lesson {
  id: string
  title: string
  lessonNumber: number
  
  // Content
  taskDescription?: string  // 全体の説明（optional）
  material?: string  // 教材コンテンツ
  
  // Stepped approach - 新しい構造
  steps?: LessonStep[]
  
  // Code files - 従来の構造（互換性のため残す）
  initialFiles?: Record<string, string>
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