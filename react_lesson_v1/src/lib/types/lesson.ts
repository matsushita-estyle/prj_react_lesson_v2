export interface SolutionCode {
  code: string
  solutionTargetFile: string  // このコードを適用するファイル
  label?: string  // オプション: ソリューションの説明ラベル
}

export interface LessonStep {
  stepNumber: number
  title: string
  instruction: string
  hint?: string
  initialCode?: string
  solutionCodes?: SolutionCode[]  // 複数のソリューションコード
  copyableCode?: string | string[] | { label: string; code: string }[]  // コピー可能なコードスニペット
  initialFiles?: Record<string, string>  // ステップごとの初期ファイル（後方互換性のため残す）
  initialStepFiles?: Record<string, string>  // ステップごとの初期ファイル
  defaultFile?: string  // ステップで最初に表示するファイル
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
  description?: string  // レッスンの簡潔な説明
  difficulty?: string  // 難易度（初級、中級、上級）
  estimatedMinutes?: number  // 推定学習時間（分）
  
  // Content
  taskDescription?: string  // 全体の説明（optional）
  material?: string  // 教材コンテンツ
  
  // Stepped approach - 必須
  steps: LessonStep[]
  
  // Code files
  initialFiles?: Record<string, string>  // 後方互換性のため残す
  initialEditorFiles?: Record<string, string>  // 右のコードエディタの初期ファイル
  defaultFile?: string  // デフォルトで表示するファイル名
  
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