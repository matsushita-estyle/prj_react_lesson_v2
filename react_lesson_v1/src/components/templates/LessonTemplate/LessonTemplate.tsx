'use client'

import React, { useState } from 'react'
import Header from '@/components/organisms/Header'
import LessonPanel from '@/components/organisms/LessonPanel'
import CodeEditor from '@/components/organisms/CodeEditor'
import PreviewPanel from '@/components/organisms/PreviewPanel'
import Footer from '@/components/organisms/Footer'
import LessonMaterialModal from '@/components/organisms/LessonMaterialModal'
import LessonContent from '@/components/organisms/LessonContent'
import ResizablePanel from '@/components/molecules/ResizablePanel'
import SideMenu from '@/components/molecules/SideMenu'
import { useSideMenu } from '@/hooks/useSideMenu'
import { Lesson } from '@/lib/types/lesson'

interface LessonTemplateProps {
  lessonTitle: string
  courseTitle: string
  initialFiles: Record<string, string>
  lesson?: Lesson
}

const LessonTemplate: React.FC<LessonTemplateProps> = ({
  lessonTitle,
  courseTitle,
  initialFiles,
  lesson,
}) => {
  const [files, setFiles] = useState(initialFiles)
  const [activeFile, setActiveFile] = useState(Object.keys(initialFiles)[0] || '')
  const [isMaterialModalOpen, setIsMaterialModalOpen] = useState(false)
  const { isOpen: isSideMenuOpen, openSideMenu, closeSideMenu } = useSideMenu()

  const handleFileChange = (fileName: string, content: string) => {
    setFiles((prev) => ({
      ...prev,
      [fileName]: content,
    }))
  }

  const handleLessonList = () => {
    openSideMenu()
  }

  const handleCheckMaterials = () => {
    setIsMaterialModalOpen(true)
  }

  const handleShowAnswer = () => {
    console.log('答えを表示')
  }

  const handleApplyCode = (fileName: string, code: string) => {
    setFiles((prev) => ({
      ...prev,
      [fileName]: code,
    }))
    // 反映したファイルをアクティブにする
    setActiveFile(fileName)
  }

  const lessonContent = (
    <LessonContent
      taskDescription={lesson?.taskDescription}
      solutionFiles={lesson?.solutionFiles}
      steps={lesson?.steps}
      onApplyCode={handleApplyCode}
      nextLessonId={lesson?.nextLessonId}
    />
  )

  const previewContent = <PreviewPanel code={files} />

  const lessons = [
    {
      id: 'react-basic-01',
      title: 'Reactに触れてみよう',
      href: '/lessons/react-basic-01'
    },
    {
      id: 'react-basic-02',
      title: 'ReactDOMを使ってHTMLにコンポーネントを表示する',
      href: '/lessons/react-basic-02'
    }
  ]

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* ヘッダー */}
      <Header lessonTitle={lessonTitle} courseTitle={courseTitle} />

      {/* メインコンテンツ */}
      <ResizablePanel
        className="h-[calc(100vh-128px)] flex-1 overflow-hidden"
        leftPanel={<LessonPanel lessonContent={lessonContent} previewContent={previewContent} />}
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

      {/* サイドメニュー */}
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={closeSideMenu}
        lessons={lessons}
      />

      {/* 教材確認モーダル */}
      <LessonMaterialModal
        isOpen={isMaterialModalOpen}
        onClose={() => setIsMaterialModalOpen(false)}
        lesson={lesson || null}
      />
    </div>
  )
}

export default LessonTemplate
