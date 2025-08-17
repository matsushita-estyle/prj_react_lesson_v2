'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import LessonTemplate from '@/components/templates/LessonTemplate'
import { reactBasic01 } from '@/data/lessons/react-basic-01'
import { reactBasic02 } from '@/data/lessons/react-basic-02'

// 現在対応しているレッスン
const lessons = {
  'react-basic-01': reactBasic01,
  'react-basic-02': reactBasic02,
}

interface LessonPageProps {
  params: Promise<{
    lessonId: string
  }>
}

export default function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = React.use(params)
  const lesson = lessons[lessonId as keyof typeof lessons]

  if (!lesson) {
    notFound()
  }

  // Markdownライクなテキストを適切に表示するためのヘルパー関数
  const renderMarkdownText = (text: string) => {
    // 簡単なMarkdown処理
    const lines = text.trim().split('\n')
    const elements: React.ReactNode[] = []
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      if (line.startsWith('# ')) {
        elements.push(<h1 key={i} className="text-2xl font-bold mb-4 mt-6">{line.slice(2)}</h1>)
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="text-xl font-semibold mb-3 mt-5">{line.slice(3)}</h2>)
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="text-lg font-medium mb-2 mt-4">{line.slice(4)}</h3>)
      } else if (line.match(/^\d+\./)) {
        // 数字リストの開始
        const listItems = []
        let j = i
        while (j < lines.length && lines[j].match(/^\d+\./)) {
          listItems.push(lines[j].replace(/^\d+\.\s*/, ''))
          j++
        }
        elements.push(
          <ol key={i} className="list-decimal pl-5 mb-4">
            {listItems.map((item, idx) => (
              <li key={idx} className="mb-1">{item}</li>
            ))}
          </ol>
        )
        i = j - 1
      } else if (line.startsWith('- ')) {
        // ブレットリストの開始
        const listItems = []
        let j = i
        while (j < lines.length && lines[j].startsWith('- ')) {
          listItems.push(lines[j].slice(2))
          j++
        }
        elements.push(
          <ul key={i} className="list-disc pl-5 mb-4">
            {listItems.map((item, idx) => (
              <li key={idx} className="mb-1">{item}</li>
            ))}
          </ul>
        )
        i = j - 1
      } else if (line.trim() === '') {
        // 空行はスキップ
        continue
      } else {
        // 通常のテキスト
        elements.push(<p key={i} className="mb-3">{line}</p>)
      }
    }
    
    return elements
  }

  // レッスンコンテンツをReact要素として構成
  const lessonContent = (
    <div className="prose max-w-none">
      <div>{renderMarkdownText(lesson.taskDescription)}</div>
      
      {lesson.learningObjectives && lesson.learningObjectives.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">学習目標</h3>
          <ul className="list-disc pl-5">
            {lesson.learningObjectives.map((objective, index) => (
              <li key={index} className="mb-1">{objective}</li>
            ))}
          </ul>
        </div>
      )}

      {lesson.concepts && lesson.concepts.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">キーワード</h3>
          <div className="flex flex-wrap gap-2">
            {lesson.concepts.map((concept, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      )}

      {lesson.hints && lesson.showHints && lesson.hints.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">ヒント</h3>
          <ul className="list-disc pl-5">
            {lesson.hints.map((hint, index) => (
              <li key={index} className="mb-1 text-sm text-gray-600">{hint}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

  return (
    <LessonTemplate
      lessonTitle={lesson.title}
      courseTitle={`レッスン ${lesson.lessonNumber}`}
      lessonContent={lessonContent}
      initialFiles={lesson.initialFiles}
    />
  )
}