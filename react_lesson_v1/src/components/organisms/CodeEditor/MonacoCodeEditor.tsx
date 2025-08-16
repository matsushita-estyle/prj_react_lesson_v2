'use client'

import React, { useMemo } from 'react'
import { Editor } from '@monaco-editor/react'

interface MonacoCodeEditorProps {
  files: Record<string, string>
  activeFile: string
  onFileChange?: (fileName: string, content: string) => void
  onActiveFileChange?: (fileName: string) => void
  className?: string
}

const MonacoCodeEditor: React.FC<MonacoCodeEditorProps> = ({
  files,
  activeFile,
  onFileChange,
  onActiveFileChange,
  className = '',
}) => {
  const fileNames = Object.keys(files)

  // ファイル拡張子から言語を判定
  const getLanguageFromFileName = (fileName: string): string => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    switch (extension) {
      case 'js':
      case 'jsx':
        return 'javascript'
      case 'ts':
      case 'tsx':
        return 'typescript'
      case 'css':
        return 'css'
      case 'html':
        return 'html'
      case 'json':
        return 'json'
      default:
        return 'javascript'
    }
  }

  const currentLanguage = useMemo(() => getLanguageFromFileName(activeFile), [activeFile])

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      onFileChange?.(activeFile, value)
    }
  }

  const handleEditorDidMount = (editor: any, monaco: any) => {
    // カスタムダークテーマの設定
    monaco.editor.defineTheme('custom-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6a9955' },
        { token: 'keyword', foreground: '569cd6' },
        { token: 'string', foreground: 'ce9178' },
        { token: 'number', foreground: 'b5cea8' },
        { token: 'type', foreground: '4ec9b0' },
        { token: 'function', foreground: 'dcdcaa' },
        { token: 'variable', foreground: '9cdcfe' },
      ],
      colors: {
        'editor.background': '#1e1e1e',
        'editor.foreground': '#d4d4d4',
        'editorLineNumber.foreground': '#858585',
        'editor.selectionBackground': '#264f78',
        'editorCursor.foreground': '#aeafad',
        'editor.lineHighlightBackground': '#2d2d30',
      },
    })

    monaco.editor.setTheme('custom-dark')

    // JSX/TSX用の基本設定
    if (monaco.languages?.typescript?.javascriptDefaults) {
      monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.Latest,
        allowNonTsExtensions: true,
        jsx: monaco.languages.typescript.JsxEmit.React,
        allowJs: true,
      })
    }
  }

  const editorOptions = {
    fontSize: 14,
    fontFamily: 'var(--editor-font, "Consolas", "Monaco", "Courier New", monospace)',
    lineHeight: 1.5,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    wordWrap: 'on' as const,
    automaticLayout: true,
    tabSize: 2,
    insertSpaces: true,
    formatOnPaste: true,
    formatOnType: true,
    lineNumbers: 'on' as const,
    renderLineHighlight: 'line' as const,
    selectOnLineNumbers: true,
    readOnly: false,
    cursorStyle: 'line' as const,
    cursorBlinking: 'blink' as const,
  }

  return (
    <div className={`flex h-full flex-col bg-white ${className}`}>
      {/* ファイルタブ */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        {fileNames.map((fileName) => (
          <button
            key={fileName}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              fileName === activeFile
                ? 'border-b-2 border-blue-500 bg-white text-blue-600'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
            }`}
            onClick={() => onActiveFileChange?.(fileName)}
          >
            {fileName}
          </button>
        ))}
      </div>

      {/* Monaco Editor */}
      <div className="flex-1">
        <div
          className="h-full"
          style={{
            backgroundColor: 'var(--editor-bg)',
            border: '1px solid var(--editor-border)',
          }}
        >
          <Editor
            height="100%"
            language={currentLanguage}
            value={files[activeFile] || ''}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            theme="custom-dark"
            options={editorOptions}
            loading={
              <div className="flex h-full items-center justify-center text-white">
                <div className="text-center">
                  <div className="mb-2">Loading Monaco Editor...</div>
                  <div className="h-1 w-48 overflow-hidden rounded-full bg-gray-700">
                    <div className="h-full w-1/3 animate-pulse bg-blue-500"></div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default MonacoCodeEditor
