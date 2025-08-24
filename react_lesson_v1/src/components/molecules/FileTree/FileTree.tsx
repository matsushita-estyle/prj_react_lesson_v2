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
  onFileAdd?: (parentPath: string, fileName: string) => void
  onRename?: (oldPath: string, newPath: string) => void
  onDelete?: (path: string) => void
  className?: string
}

const FileTree: React.FC<FileTreeProps> = ({
  files,
  activeFile,
  onFileSelect,
  onDirectoryAdd,
  onFileAdd,
  onRename,
  onDelete,
  className = '',
}) => {
  const [expandedDirs, setExpandedDirs] = useState<Set<string>>(new Set(['', 'react-app']))
  const [showAddDirInput, setShowAddDirInput] = useState<string | null>(null)
  const [showAddFileInput, setShowAddFileInput] = useState<string | null>(null)
  const [showContextMenu, setShowContextMenu] = useState<{ path: string; x: number; y: number; type: 'file' | 'directory' } | null>(null)
  const [showRenameInput, setShowRenameInput] = useState<string | null>(null)
  const [newDirName, setNewDirName] = useState('')
  const [newFileName, setNewFileName] = useState('')
  const [renameValue, setRenameValue] = useState('')

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
    setShowAddFileInput(null)
    setNewDirName('')
  }

  const handleAddFile = (parentPath: string) => {
    setShowAddFileInput(parentPath)
    setShowAddDirInput(null)
    setNewFileName('')
  }

  const handleSubmitNewDirectory = (parentPath: string) => {
    if (newDirName.trim() && onDirectoryAdd) {
      onDirectoryAdd(parentPath, newDirName.trim())
      setShowAddDirInput(null)
      setNewDirName('')
    }
  }

  const handleSubmitNewFile = (parentPath: string) => {
    if (newFileName.trim() && onFileAdd) {
      onFileAdd(parentPath, newFileName.trim())
      setShowAddFileInput(null)
      setNewFileName('')
    }
  }

  const handleCancelAddDirectory = () => {
    setShowAddDirInput(null)
    setNewDirName('')
  }

  const handleCancelAddFile = () => {
    setShowAddFileInput(null)
    setNewFileName('')
  }

  const handleRightClick = (e: React.MouseEvent, path: string, type: 'file' | 'directory') => {
    e.preventDefault()
    e.stopPropagation()
    setShowContextMenu({
      path,
      x: e.clientX,
      y: e.clientY,
      type
    })
  }

  const handleRename = (path: string) => {
    const pathParts = path.split('/')
    const currentName = pathParts[pathParts.length - 1]
    setRenameValue(currentName)
    setShowRenameInput(path)
    setShowContextMenu(null)
  }

  const handleRenameSubmit = (oldPath: string) => {
    if (renameValue.trim() && onRename) {
      const pathParts = oldPath.split('/')
      pathParts[pathParts.length - 1] = renameValue.trim()
      const newPath = pathParts.join('/')
      onRename(oldPath, newPath)
    }
    setShowRenameInput(null)
    setRenameValue('')
  }

  const handleRenameCancel = () => {
    setShowRenameInput(null)
    setRenameValue('')
  }

  const handleDelete = (path: string) => {
    if (onDelete) {
      onDelete(path)
    }
    setShowContextMenu(null)
  }

  const handleClickOutside = () => {
    setShowContextMenu(null)
  }

  // グローバルクリックでコンテキストメニューを閉じる
  React.useEffect(() => {
    if (showContextMenu) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [showContextMenu])

  const renderNode = (node: FileTreeNode, depth: number = 0): React.ReactNode => {
    const indentStyle = { paddingLeft: `${depth * 16 + 12}px` }
    
    if (node.type === 'directory') {
      const isExpanded = expandedDirs.has(node.path)
      
      return (
        <div key={node.path}>
          <div className="flex items-center">
            {showRenameInput === node.path ? (
              <div className="flex w-full items-center gap-2" style={indentStyle}>
                <span className="text-xs">{getDirectoryIcon(isExpanded)}</span>
                <input
                  type="text"
                  value={renameValue}
                  onChange={(e) => setRenameValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleRenameSubmit(node.path)
                    } else if (e.key === 'Escape') {
                      handleRenameCancel()
                    }
                  }}
                  onBlur={() => handleRenameCancel()}
                  autoFocus
                  className="flex-1 rounded border border-gray-600 bg-gray-800 text-gray-200 px-2 py-1 text-xs"
                />
              </div>
            ) : (
              <button
                className="flex w-full items-center gap-2 py-1.5 text-left text-sm transition-colors hover:bg-gray-700"
                style={indentStyle}
                onClick={() => toggleDirectory(node.path)}
                onContextMenu={(e) => handleRightClick(e, node.path, 'directory')}
              >
                <span className="text-xs">{getDirectoryIcon(isExpanded)}</span>
                <span className="truncate text-gray-200">{node.name || 'root'}</span>
              </button>
            )}
            <div className="flex gap-1 mr-2">
              <button
                className="rounded px-1 text-xs text-gray-500 hover:bg-gray-600 hover:text-gray-300"
                onClick={() => handleAddFile(node.path)}
                title="新しいファイルを追加"
              >
                📄
              </button>
              <button
                className="rounded px-1 text-xs text-gray-500 hover:bg-gray-600 hover:text-gray-300"
                onClick={() => handleAddDirectory(node.path)}
                title="新しいフォルダを追加"
              >
                📁
              </button>
            </div>
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
                  className="flex-1 rounded border border-gray-600 bg-gray-800 text-gray-200 px-2 py-1 text-xs"
                  placeholder="フォルダ名を入力"
                />
              </div>
            </div>
          )}
          
          {showAddFileInput === node.path && (
            <div style={{ paddingLeft: `${(depth + 1) * 16 + 12}px` }} className="py-1">
              <div className="flex items-center gap-1">
                <span className="text-xs">📄</span>
                <input
                  type="text"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmitNewFile(node.path)
                    } else if (e.key === 'Escape') {
                      handleCancelAddFile()
                    }
                  }}
                  onBlur={handleCancelAddFile}
                  autoFocus
                  className="flex-1 rounded border border-gray-600 bg-gray-800 text-gray-200 px-2 py-1 text-xs"
                  placeholder="ファイル名を入力"
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
      // .gitkeepファイルは非表示にする
      if (node.name === '.gitkeep') {
        return null
      }
      
      return (
        <div key={node.path}>
          {showRenameInput === node.path ? (
            <div className="flex w-full items-center gap-2 py-1.5" style={indentStyle}>
              <span className="text-xs">{getFileIcon(node.name)}</span>
              <input
                type="text"
                value={renameValue}
                onChange={(e) => setRenameValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleRenameSubmit(node.path)
                  } else if (e.key === 'Escape') {
                    handleRenameCancel()
                  }
                }}
                onBlur={() => handleRenameCancel()}
                autoFocus
                className="flex-1 rounded border border-gray-600 bg-gray-800 text-gray-200 px-2 py-1 text-xs"
              />
            </div>
          ) : (
            <button
              className={`flex w-full items-center gap-2 py-1.5 text-left text-sm transition-colors hover:bg-gray-700 ${
                node.path === activeFile
                  ? 'bg-blue-900 border-r-2 border-blue-400 text-blue-300'
                  : 'text-gray-200'
              }`}
              style={indentStyle}
              onClick={() => onFileSelect(node.path)}
              onContextMenu={(e) => handleRightClick(e, node.path, 'file')}
            >
              <span className="text-xs">{getFileIcon(node.name)}</span>
              <span className="truncate">{node.name}</span>
            </button>
          )}
        </div>
      )
    }
  }

  const fileTree = buildFileTree(Object.keys(files))

  return (
    <div className={`relative flex h-full flex-col bg-gray-900 ${className}`}>
      <div className="border-b border-gray-700 px-3 py-2 text-xs font-semibold text-gray-300">
        FILES
      </div>
      <div className="flex-1 overflow-y-auto">
        {fileTree.map((node) => renderNode(node))}
      </div>
      
      {/* コンテキストメニュー */}
      {showContextMenu && (
        <div
          className="fixed z-50 rounded-md border border-gray-600 bg-gray-800 shadow-lg"
          style={{
            left: showContextMenu.x,
            top: showContextMenu.y,
          }}
        >
          <button
            className="block w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700"
            onClick={() => handleRename(showContextMenu.path)}
          >
            名前を変更
          </button>
          <button
            className="block w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-gray-700"
            onClick={() => handleDelete(showContextMenu.path)}
          >
            削除
          </button>
        </div>
      )}
    </div>
  )
}

export default FileTree