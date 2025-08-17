'use client'

import React from 'react'

interface LessonContentProps {
  taskDescription: string
  solutionFiles?: Record<string, string>
}

export default function LessonContent({ taskDescription, solutionFiles }: LessonContentProps) {
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
        continue
      } else {
        elements.push(
          <p key={i} className="mb-3 leading-relaxed text-gray-700">
            {line}
          </p>
        )
      }
    }

    return elements
  }

  return (
    <div className="prose max-w-none">
      <div>{renderMarkdownText(taskDescription)}</div>

      {solutionFiles && Object.keys(solutionFiles).length > 0 && (
        <div className="mt-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">✅ 解答例</h3>
          <div className="space-y-4">
            {Object.entries(solutionFiles).map(([fileName, fileContent]) => (
              <div key={fileName} className="overflow-hidden rounded-lg border border-green-300">
                <div className="bg-green-600 px-4 py-2 font-mono text-sm text-white">
                  {fileName}
                </div>
                <div className="bg-green-50 p-4">
                  <pre className="overflow-x-auto text-xs text-gray-700">
                    <code>{fileContent}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}