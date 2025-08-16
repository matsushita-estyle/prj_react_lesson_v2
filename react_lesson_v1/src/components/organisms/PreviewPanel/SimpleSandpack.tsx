'use client'

import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

// Sandpackコンポーネントの型定義
interface SandpackProps {
  template: string
  files: Record<string, string>
  options?: {
    showNavigator?: boolean
    showTabs?: boolean
    showLineNumbers?: boolean
    showEditor?: boolean
    showConsole?: boolean
    showInlineErrors?: boolean
    showRefreshButton?: boolean
    editorHeight?: number
    editorWidthPercentage?: number
    layout?: string
    [key: string]: any
  }
}

// 完全にSSRを無効化してSandpackをインポート
const Sandpack = dynamic(
  () =>
    import('@codesandbox/sandpack-react').then(
      (mod) => mod.Sandpack as ComponentType<SandpackProps>
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center">
        <div className="text-gray-500">プレビューを読み込み中...</div>
      </div>
    ),
  }
)

interface SimpleSandpackProps {
  files: Record<string, string>
  className?: string
}

const SimpleSandpack: React.FC<SimpleSandpackProps> = ({ files, className = '' }) => {
  // ファイルパスの形式を統一（先頭に"/"を追加）
  const normalizeFiles = (inputFiles: Record<string, string>): Record<string, string> => {
    const normalized: Record<string, string> = {}
    for (const [key, value] of Object.entries(inputFiles)) {
      const normalizedKey = key.startsWith('/') ? key : `/${key}`
      normalized[normalizedKey] = value
    }

    // App.jsxが存在する場合、App.jsとしても登録（Sandpackのデフォルトエントリー）
    if (normalized['/App.jsx'] && !normalized['/App.js']) {
      normalized['/App.js'] = normalized['/App.jsx']
    }

    return normalized
  }

  // 渡されたfilesを正規化し、空の場合はデフォルトを使用
  const sandpackFiles =
    Object.keys(files).length > 0
      ? normalizeFiles(files)
      : {
          '/App.js': `export default function App() {
  return <div>コードエディタで編集してください</div>;
}`,
        }

  return (
    <div className={`h-full ${className}`} style={{ height: '400px' }}>
      <Sandpack
        template="react"
        files={sandpackFiles}
        options={{
          showNavigator: false,
          showTabs: false,
          showLineNumbers: false,
          showEditor: false,
          showConsole: false,
          showInlineErrors: false,
          showRefreshButton: false,
          editorWidthPercentage: 1,
          layout: 'preview',
        }}
      />
    </div>
  )
}

export default SimpleSandpack
