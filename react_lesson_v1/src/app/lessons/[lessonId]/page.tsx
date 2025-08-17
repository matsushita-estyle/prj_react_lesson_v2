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

  // コード編集に集中したMarkdownレンダラー
  const renderMarkdownText = (text: string) => {
    const lines = text.trim().split('\n')
    const elements: React.ReactNode[] = []

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={i} className="mt-6 mb-4 text-2xl font-bold text-gray-900">
            {line.slice(2)}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        const title = line.slice(3)
        if (title.includes('ハンズオンタスク') || title.includes('課題')) {
          elements.push(
            <h2 key={i} className="mt-5 mb-3 text-xl font-semibold text-green-700">
              🎯 {title}
            </h2>
          )
        } else {
          elements.push(
            <h2 key={i} className="mt-5 mb-3 text-xl font-semibold text-gray-800">
              {title}
            </h2>
          )
        }
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="mt-4 mb-2 text-lg font-medium text-gray-700">
            {line.slice(4)}
          </h3>
        )
      } else if (line.match(/^\d+\./)) {
        // 実装タスクを強調
        const listItems = []
        let j = i
        while (j < lines.length && lines[j].match(/^\d+\./)) {
          listItems.push(lines[j].replace(/^\d+\.\s*/, ''))
          j++
        }

        elements.push(
          <div key={i} className="mb-4 border-l-4 border-green-400 bg-green-50 p-4">
            <h4 className="mb-2 font-medium text-green-800">実装タスク</h4>
            <ol className="space-y-2">
              {listItems.map((item, idx) => (
                <li key={idx} className="flex items-start text-green-700">
                  <span className="mr-2 font-bold">{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        )
        i = j - 1
      } else if (line.startsWith('- ')) {
        // シンプルなリスト
        const listItems = []
        let j = i
        while (j < lines.length && lines[j].startsWith('- ')) {
          listItems.push(lines[j].slice(2))
          j++
        }

        elements.push(
          <ul key={i} className="mb-4 list-disc pl-5 text-gray-700">
            {listItems.map((item, idx) => (
              <li key={idx} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        )
        i = j - 1
      } else if (line.trim() === '') {
        // 空行はスキップ
        continue
      } else {
        // 通常のテキスト
        elements.push(
          <p key={i} className="mb-3 leading-relaxed text-gray-700">
            {line}
          </p>
        )
      }
    }

    return elements
  }

  // コード編集ガイドに特化したレッスンコンテンツ
  const lessonContent = (
    <div className="prose max-w-none">
      <div>{renderMarkdownText(lesson.taskDescription)}</div>

      {/* ファイル編集ガイド */}
      {lesson.initialFiles && Object.keys(lesson.initialFiles).length > 0 && (
        <div className="mt-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">📝 編集するファイル</h3>
          <div className="space-y-4">
            {Object.entries(lesson.initialFiles).map(([fileName, fileContent]) => {
              // コメント行を抽出して編集ポイントを特定
              const lines = fileContent.split('\n')
              const editPoints = lines
                .map((line, index) => ({ line: line.trim(), lineNumber: index + 1 }))
                .filter(
                  ({ line }) =>
                    line.startsWith('//') &&
                    (line.includes('ここ') ||
                      line.includes('追加') ||
                      line.includes('修正') ||
                      line.includes('記述') ||
                      line.includes('TODO') ||
                      line.includes('実装'))
                )

              return (
                <div key={fileName} className="overflow-hidden rounded-lg border border-gray-200">
                  <div className="bg-gray-800 px-4 py-2 font-mono text-sm text-white">
                    {fileName}
                  </div>
                  {editPoints.length > 0 && (
                    <div className="border-b border-blue-200 bg-blue-50 p-4">
                      <p className="mb-2 text-sm font-medium text-blue-800">
                        🎯 このファイルで編集する場所:
                      </p>
                      <ul className="space-y-1">
                        {editPoints.map((point, index) => (
                          <li key={index} className="flex items-start text-sm text-blue-700">
                            <span className="mt-0.5 mr-2 rounded bg-blue-100 px-1 font-mono text-xs">
                              {point.lineNumber}行目
                            </span>
                            <span>{point.line.replace(/^\/\/\s*/, '')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="bg-gray-50 p-4">
                    <pre className="overflow-x-auto text-xs text-gray-700">
                      <code>{fileContent}</code>
                    </pre>
                  </div>
                </div>
              )
            })}
          </div>
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
      lesson={lesson}
    />
  )
}
