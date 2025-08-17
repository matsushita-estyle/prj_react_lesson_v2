import React from 'react'
import { X } from 'lucide-react'

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
  lessons: Array<{
    id: string
    title: string
    href: string
  }>
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose, lessons }) => {
  const handleLessonClick = (href: string) => {
    window.location.href = href
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* オーバーレイ */}
      <div
        className="animate-fadeIn fixed inset-0 z-40"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        onClick={onClose}
      />

      {/* サイドメニュー */}
      <div className="animate-slideInLeft fixed top-0 left-0 z-50 h-full w-80 bg-gray-900 shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-700 p-4">
          <h2 className="text-lg font-semibold text-white">レッスン一覧</h2>
          <button onClick={onClose} className="text-gray-400 transition-colors hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-2 p-4">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => handleLessonClick(lesson.href)}
              className="w-full rounded-md bg-gray-800 p-3 text-left text-white transition-colors hover:bg-gray-700"
            >
              {lesson.title}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default SideMenu
