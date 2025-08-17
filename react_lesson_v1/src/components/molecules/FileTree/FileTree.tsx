'use client'

import React from 'react'

interface FileTreeProps {
  files: Record<string, string>
  activeFile: string
  onFileSelect: (fileName: string) => void
  className?: string
}

const FileTree: React.FC<FileTreeProps> = ({
  files,
  activeFile,
  onFileSelect,
  className = '',
}) => {
  const fileNames = Object.keys(files)

  const getFileIcon = (fileName: string): string => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    switch (extension) {
      case 'jsx':
      case 'tsx':
        return '⚛️'
      case 'js':
      case 'ts':
        return '📄'
      case 'css':
        return '🎨'
      case 'html':
        return '🌐'
      case 'json':
        return '📋'
      default:
        return '📄'
    }
  }

  return (
    <div className={`flex h-full flex-col bg-gray-50 ${className}`}>
      <div className="border-b border-gray-200 px-3 py-2 text-xs font-semibold text-gray-500">
        FILES
      </div>
      <div className="flex-1 overflow-y-auto">
        {fileNames.map((fileName) => (
          <button
            key={fileName}
            className={`flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm transition-colors hover:bg-gray-100 ${
              fileName === activeFile
                ? 'bg-blue-50 border-r-2 border-blue-500 text-blue-700'
                : 'text-gray-700'
            }`}
            onClick={() => onFileSelect(fileName)}
          >
            <span className="text-xs">{getFileIcon(fileName)}</span>
            <span className="truncate">{fileName}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default FileTree