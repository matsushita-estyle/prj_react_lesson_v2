import React from 'react'

interface TabProps {
  label: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}

const Tab: React.FC<TabProps> = ({ label, isActive = false, onClick, className = '' }) => {
  const baseClasses = 'px-4 py-2 text-sm font-medium transition-colors cursor-pointer'
  const activeClasses = 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
  const inactiveClasses = 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'

  const classes = `${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className}`

  return (
    <button className={classes} onClick={onClick} role="tab" aria-selected={isActive}>
      {label}
    </button>
  )
}

export default Tab
