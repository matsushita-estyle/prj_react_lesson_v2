import React from 'react'
import Button from '@/components/atoms/Button'

interface FooterProps {
  onLessonList?: () => void
  onCheckMaterials?: () => void
  onShowAnswer?: () => void
  className?: string
}

const Footer: React.FC<FooterProps> = ({
  onLessonList,
  onCheckMaterials,
  onShowAnswer,
  className = '',
}) => {
  return (
    <footer className={`flex justify-center gap-8 border-t border-gray-700 bg-black p-4 ${className}`}>
      <Button variant="secondary" onClick={onLessonList}>
        レッスン一覧
      </Button>
      <Button variant="secondary" onClick={onCheckMaterials}>
        教材を確認
      </Button>
      <Button variant="primary" onClick={onShowAnswer}>
        答えを見る
      </Button>
    </footer>
  )
}

export default Footer