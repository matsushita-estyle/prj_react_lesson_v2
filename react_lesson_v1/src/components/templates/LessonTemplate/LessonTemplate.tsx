'use client'

import React, { useState } from 'react'
import Header from '@/components/organisms/Header'
import LessonPanel from '@/components/organisms/LessonPanel'
import CodeEditor from '@/components/organisms/CodeEditor'
import PreviewPanel from '@/components/organisms/PreviewPanel'
import ActionBar from '@/components/molecules/ActionBar'

interface LessonTemplateProps {
  lessonTitle: string
  courseTitle: string
  lessonContent: React.ReactNode
  initialFiles: Record<string, string>
}

const LessonTemplate: React.FC<LessonTemplateProps> = ({
  lessonTitle,
  courseTitle,
  lessonContent,
  initialFiles,
}) => {
  const [files, setFiles] = useState(initialFiles)
  const [activeFile, setActiveFile] = useState(Object.keys(initialFiles)[0] || '')
  const [isRunning, setIsRunning] = useState(false)

  const handleFileChange = (fileName: string, content: string) => {
    setFiles((prev) => ({
      ...prev,
      [fileName]: content,
    }))
  }

  const handleRun = () => {
    setIsRunning(true)
    // 実行処理をここに実装
    setTimeout(() => setIsRunning(false), 1000) // 仮の処理
  }

  const handleReset = () => {
    setFiles(initialFiles)
  }

  const handleTest = () => {
    // テスト実行処理をここに実装
    console.log('Running tests...')
  }

  const previewContent = (
    <PreviewPanel code={files} />
  )

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* ヘッダー */}
      <Header lessonTitle={lessonTitle} courseTitle={courseTitle} />

      {/* メインコンテンツ */}
      <div className="flex flex-1">
        {/* 左側パネル */}
        <div className="w-1/2 border-r border-gray-200">
          <LessonPanel lessonContent={lessonContent} previewContent={previewContent} />
        </div>

        {/* 右側パネル */}
        <div className="flex w-1/2 flex-col">
          <CodeEditor
            files={files}
            activeFile={activeFile}
            onFileChange={handleFileChange}
            onActiveFileChange={setActiveFile}
            className="flex-1"
          />
          <ActionBar
            onRun={handleRun}
            onReset={handleReset}
            onTest={handleTest}
            isRunning={isRunning}
          />
        </div>
      </div>
    </div>
  )
}

export default LessonTemplate
