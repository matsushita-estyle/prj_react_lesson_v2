'use client'

import React from 'react'
import LessonTemplate from '@/components/templates/LessonTemplate'
import LessonContent from '@/components/organisms/LessonContent'
import { Lesson } from '@/lib/types/lesson'

interface LessonDetailPageProps {
  lesson: Lesson
}

export default function LessonDetailPage({ lesson }: LessonDetailPageProps) {
  const lessonContent = (
    <LessonContent
      taskDescription={lesson.taskDescription}
      solutionFiles={lesson.solutionFiles}
      steps={lesson.steps}
    />
  )

  return (
    <LessonTemplate
      lessonTitle={lesson.title}
      courseTitle={`レッスン ${lesson.lessonNumber}`}
      lessonContent={lessonContent}
      initialFiles={lesson.initialFiles || {}}
      lesson={lesson}
    />
  )
}