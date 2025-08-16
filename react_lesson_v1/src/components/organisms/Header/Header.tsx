import React from 'react'

interface HeaderProps {
  lessonTitle?: string
  courseTitle?: string
  className?: string
}

const Header: React.FC<HeaderProps> = ({ lessonTitle, courseTitle, className = '' }) => {
  return (
    <header className={`border-b border-gray-700 bg-black px-6 py-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white">
            {lessonTitle || 'React研修プラットフォーム'}
          </h1>
          {courseTitle && <p className="text-sm text-gray-300">{courseTitle}</p>}
        </div>
        <div className="text-sm text-gray-400">React Training Platform</div>
      </div>
    </header>
  )
}

export default Header
