'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import LessonDetailPage from '@/components/pages/LessonDetailPage'
import { chapter1Lesson1 } from '@/data/lessons/chapter1/lesson1'
import { chapter1Lesson2 } from '@/data/lessons/chapter1/lesson2'
import { chapter1Lesson3 } from '@/data/lessons/chapter1/lesson3'

const getLessonData = (lessonId: string) => {
  switch (lessonId) {
    case 'chapter1-lesson1':
      return chapter1Lesson1
    case 'chapter1-lesson2':
      return chapter1Lesson2
    case 'chapter1-lesson3':
      return chapter1Lesson3
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
  const lesson = getLessonData(lessonId)

  if (!lesson) {
    notFound()
  }

  return <LessonDetailPage lesson={lesson} />
}
