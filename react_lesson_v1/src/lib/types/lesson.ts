export interface SolutionCode {
  code: string
  targetFile: string  // このコードを適用するファイル
  label?: string  // オプション: ソリューションの説明ラベル
}

export interface LessonStep {
  stepNumber: number
  title: string
  instruction: string
  hint?: string
  initialCode?: string
  solutionCode?: string  // 後方互換性のため残す（単一ソリューション）
  solutionCodes?: SolutionCode[]  // 複数のソリューションコード
  solutionTargetFile?: string  // solutionCodeの貼り付け先ファイル（後方互換性）
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
  
  // Content
  taskDescription?: string  // 全体の説明（optional）
  material?: string  // 教材コンテンツ
  
  // Stepped approach - 新しい構造
  steps?: LessonStep[]
  
  // Code files - 従来の構造（互換性のため残す）
  initialFiles?: Record<string, string>  // 後方互換性のため残す
  initialEditorFiles?: Record<string, string>  // 右のコードエディタの初期ファイル
  solutionFiles?: Record<string, string>
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