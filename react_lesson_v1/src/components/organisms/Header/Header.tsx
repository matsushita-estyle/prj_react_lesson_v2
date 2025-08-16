import React from 'react'

interface HeaderProps {
  lessonTitle?: string
  courseTitle?: string
  className?: string
}

const Header: React.FC<HeaderProps> = ({ lessonTitle, courseTitle, className = '' }) => {
  return (
    <header className={`border-b border-gray-200 bg-white px-6 py-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            {lessonTitle || 'React研修プラットフォーム'}
          </h1>
          {courseTitle && <p className="text-sm text-gray-600">{courseTitle}</p>}
        </div>
        <div className="text-sm text-gray-500">React Training Platform</div>
      </div>
    </header>
  )
}

export default Header
