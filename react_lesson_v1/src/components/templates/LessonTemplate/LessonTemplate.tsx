'use client'

import React, { useState } from 'react'
import Header from '@/components/organisms/Header'
import LessonPanel from '@/components/organisms/LessonPanel'
import CodeEditor from '@/components/organisms/CodeEditor'
import PreviewPanel from '@/components/organisms/PreviewPanel'
import Footer from '@/components/organisms/Footer'
import ResizablePanel from '@/components/molecules/ResizablePanel'

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

  const handleFileChange = (fileName: string, content: string) => {
    setFiles((prev) => ({
      ...prev,
      [fileName]: content,
    }))
  }

  const handleLessonList = () => {
    console.log('レッスン一覧を表示')
  }

  const handleCheckMaterials = () => {
    console.log('教材を確認')
  }

  const handleShowAnswer = () => {
    console.log('答えを表示')
  }

  const previewContent = (
    <PreviewPanel code={files} />
  )

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* ヘッダー */}
      <Header lessonTitle={lessonTitle} courseTitle={courseTitle} />

      {/* メインコンテンツ */}
      <ResizablePanel
        className="flex-1"
        leftPanel={
          <LessonPanel lessonContent={lessonContent} previewContent={previewContent} />
        }
        rightPanel={
          <CodeEditor
            files={files}
            activeFile={activeFile}
            onFileChange={handleFileChange}
            onActiveFileChange={setActiveFile}
            className="h-full"
          />
        }
        initialLeftWidth={50}
        minLeftWidth={25}
        maxLeftWidth={75}
      />

      {/* フッター */}
      <Footer
        onLessonList={handleLessonList}
        onCheckMaterials={handleCheckMaterials}
        onShowAnswer={handleShowAnswer}
      />
    </div>
  )
}

export default LessonTemplate
