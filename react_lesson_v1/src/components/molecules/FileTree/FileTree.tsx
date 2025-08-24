'use client'

import React, { useState } from 'react'

interface FileTreeNode {
  name: string
  path: string
  type: 'file' | 'directory'
  children?: FileTreeNode[]
}

interface FileTreeProps {
  files: Record<string, string>
  activeFile: string
  onFileSelect: (fileName: string) => void
  onDirectoryAdd?: (parentPath: string, directoryName: string) => void
  className?: string
}

const FileTree: React.FC<FileTreeProps> = ({
  files,
  activeFile,
  onFileSelect,
  onDirectoryAdd,
  className = '',
}) => {
  const [expandedDirs, setExpandedDirs] = useState<Set<string>>(new Set(['', 'react-app']))
  const [showAddDirInput, setShowAddDirInput] = useState<string | null>(null)
  const [newDirName, setNewDirName] = useState('')

  const buildFileTree = (filePaths: string[]): FileTreeNode[] => {
    const pathMap = new Map<string, FileTreeNode>()

    // ルートディレクトリを作成
    pathMap.set('', { name: '', path: '', type: 'directory', children: [] })

    filePaths.forEach((filePath) => {
      const parts = filePath.split('/')
      let currentPath = ''

      parts.forEach((part, index) => {
        const parentPath = currentPath
        currentPath = currentPath ? `${currentPath}/${part}` : part
        
        if (!pathMap.has(currentPath)) {
          const isFile = index === parts.length - 1
          const node: FileTreeNode = {
            name: part,
            path: currentPath,
            type: isFile ? 'file' : 'directory',
            children: isFile ? undefined : []
          }
          
          pathMap.set(currentPath, node)
          
          // 親ディレクトリに追加
          const parent = pathMap.get(parentPath)
          if (parent && parent.children) {
            parent.children.push(node)
          }
        }
      })
    })

    return pathMap.get('')?.children || []
  }

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

  const getDirectoryIcon = (isExpanded: boolean): string => {
    return isExpanded ? '📂' : '📁'
  }

  const toggleDirectory = (path: string) => {
    const newExpanded = new Set(expandedDirs)
    if (newExpanded.has(path)) {
      newExpanded.delete(path)
    } else {
      newExpanded.add(path)
    }
    setExpandedDirs(newExpanded)
  }

  const handleAddDirectory = (parentPath: string) => {
    setShowAddDirInput(parentPath)
    setNewDirName('')
  }

  const handleSubmitNewDirectory = (parentPath: string) => {
    if (newDirName.trim() && onDirectoryAdd) {
      onDirectoryAdd(parentPath, newDirName.trim())
      setShowAddDirInput(null)
      setNewDirName('')
    }
  }

  const handleCancelAddDirectory = () => {
    setShowAddDirInput(null)
    setNewDirName('')
  }

  const renderNode = (node: FileTreeNode, depth: number = 0): React.ReactNode => {
    const indentStyle = { paddingLeft: `${depth * 16 + 12}px` }
    
    if (node.type === 'directory') {
      const isExpanded = expandedDirs.has(node.path)
      
      return (
        <div key={node.path}>
          <div className="flex items-center">
            <button
              className="flex w-full items-center gap-2 py-1.5 text-left text-sm transition-colors hover:bg-gray-100"
              style={indentStyle}
              onClick={() => toggleDirectory(node.path)}
            >
              <span className="text-xs">{getDirectoryIcon(isExpanded)}</span>
              <span className="truncate text-gray-700">{node.name || 'root'}</span>
            </button>
            <button
              className="mr-2 rounded px-1 text-xs text-gray-400 hover:bg-gray-200 hover:text-gray-600"
              onClick={() => handleAddDirectory(node.path)}
              title="新しいフォルダを追加"
            >
              +
            </button>
          </div>
          
          {showAddDirInput === node.path && (
            <div style={{ paddingLeft: `${(depth + 1) * 16 + 12}px` }} className="py-1">
              <div className="flex items-center gap-1">
                <span className="text-xs">📁</span>
                <input
                  type="text"
                  value={newDirName}
                  onChange={(e) => setNewDirName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmitNewDirectory(node.path)
                    } else if (e.key === 'Escape') {
                      handleCancelAddDirectory()
                    }
                  }}
                  onBlur={handleCancelAddDirectory}
                  autoFocus
                  className="flex-1 rounded border border-gray-300 px-2 py-1 text-xs"
                  placeholder="フォルダ名を入力"
                />
              </div>
            </div>
          )}
          
          {isExpanded && node.children && (
            <div>
              {node.children.map((child) => renderNode(child, depth + 1))}
            </div>
          )}
        </div>
      )
    } else {
      return (
        <button
          key={node.path}
          className={`flex w-full items-center gap-2 py-1.5 text-left text-sm transition-colors hover:bg-gray-100 ${
            node.path === activeFile
              ? 'bg-blue-50 border-r-2 border-blue-500 text-blue-700'
              : 'text-gray-700'
          }`}
          style={indentStyle}
          onClick={() => onFileSelect(node.path)}
        >
          <span className="text-xs">{getFileIcon(node.name)}</span>
          <span className="truncate">{node.name}</span>
        </button>
      )
    }
  }

  const fileTree = buildFileTree(Object.keys(files))

  return (
    <div className={`flex h-full flex-col bg-gray-50 ${className}`}>
      <div className="border-b border-gray-200 px-3 py-2 text-xs font-semibold text-gray-500">
        FILES
      </div>
      <div className="flex-1 overflow-y-auto">
        {fileTree.map((node) => renderNode(node))}
      </div>
    </div>
  )
}

export default FileTree