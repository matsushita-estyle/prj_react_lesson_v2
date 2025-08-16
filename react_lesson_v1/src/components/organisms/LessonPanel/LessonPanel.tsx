import React from 'react'
import TabGroup from '@/components/molecules/TabGroup'

interface LessonPanelProps {
  lessonContent: React.ReactNode
  previewContent: React.ReactNode
  className?: string
}

const LessonPanel: React.FC<LessonPanelProps> = ({
  lessonContent,
  previewContent,
  className = '',
}) => {
  const tabs = [
    {
      id: 'lesson',
      label: '問題',
      content: <div className="p-6">{lessonContent}</div>,
    },
    {
      id: 'preview',
      label: 'プレビュー',
      content: <div className="p-4">{previewContent}</div>,
    },
  ]

  return (
    <div className={`flex h-full flex-col bg-white ${className}`}>
      <TabGroup tabs={tabs} defaultActiveId="lesson" />
    </div>
  )
}

export default LessonPanel
