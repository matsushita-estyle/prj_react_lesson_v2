'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import LessonDetailPage from '@/components/pages/LessonDetailPage'

const getLessonData = async (lessonId: string) => {
  switch (lessonId) {
    case 'react-basic-01': {
      const { reactBasic01 } = await import('@/data/lessons/react-basic-01')
      return reactBasic01
    }
    case 'react-basic-02': {
      const { reactBasic02 } = await import('@/data/lessons/react-basic-02')
      return reactBasic02
    }
    default:
      return null
  }
}

interface LessonPageProps {
  params: Promise<{
    lessonId: string
  }>
}

export default function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = React.use(params)
  const [lesson, setLesson] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    getLessonData(lessonId).then((lessonData) => {
      setLesson(lessonData)
      setLoading(false)
    })
  }, [lessonId])

  if (loading) {
    return <div>読み込み中...</div>
  }

  if (!lesson) {
    notFound()
  }

  return <LessonDetailPage lesson={lesson} />
}
