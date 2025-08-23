import React from 'react'
import Button from '@/components/atoms/Button'

interface FooterProps {
  onCheckMaterials?: () => void
  nextLessonId?: string
  className?: string
}

const Footer: React.FC<FooterProps> = ({
  onCheckMaterials,
  nextLessonId,
  className = '',
}) => {
  return (
    <footer className={`flex justify-center gap-8 border-t border-gray-700 bg-black p-4 ${className}`}>
      <Button variant="secondary" onClick={onCheckMaterials}>
        教材を確認
      </Button>
      {nextLessonId ? (
        <a 
          href={`/lessons/${nextLessonId}`}
          className="font-medium rounded-md transition-colors focus:outline-none focus:ring-2 bg-indigo-700 hover:bg-indigo-800 text-white focus:ring-indigo-600 px-4 py-2 text-base text-center"
        >
          次のレッスンに進む
        </a>
      ) : (
        <Button variant="primary" disabled>
          最後のレッスンです
        </Button>
      )}
    </footer>
  )
}

export default Footer