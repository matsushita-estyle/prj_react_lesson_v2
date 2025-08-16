import React from 'react'
import Button from '@/components/atoms/Button'

interface ActionBarProps {
  onRun?: () => void
  onReset?: () => void
  onTest?: () => void
  isRunning?: boolean
  className?: string
}

const ActionBar: React.FC<ActionBarProps> = ({
  onRun,
  onReset,
  onTest,
  isRunning = false,
  className = '',
}) => {
  return (
    <div className={`flex gap-2 border-t border-gray-200 bg-gray-50 p-4 ${className}`}>
      <Button variant="primary" onClick={onRun} disabled={isRunning}>
        {isRunning ? '実行中...' : '実行'}
      </Button>
      <Button variant="secondary" onClick={onReset} disabled={isRunning}>
        リセット
      </Button>
      <Button variant="secondary" onClick={onTest} disabled={isRunning}>
        テスト実行
      </Button>
    </div>
  )
}

export default ActionBar
