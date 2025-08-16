'use client'

import React, { useState } from 'react'
import FallbackPreview from './FallbackPreview'
import SimpleSandpack from './SimpleSandpack'

interface PreviewPanelProps {
  code: Record<string, string>
  className?: string
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ code, className = '' }) => {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className={`flex h-full flex-col ${className}`}>
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">プレビュー</h3>
          <button
            onClick={() => setShowCode(!showCode)}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            {showCode ? 'プレビュー表示' : 'コード表示'}
          </button>
        </div>
      </div>
      <div className="flex-1">
        {showCode ? <FallbackPreview files={code} /> : <SimpleSandpack files={code} />}
      </div>
    </div>
  )
}

export default PreviewPanel
