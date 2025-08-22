'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import LessonDetailPage from '@/components/pages/LessonDetailPage'
import { reactBasic01 } from '@/data/lessons/react-basic-01'
import { reactBasic02 } from '@/data/lessons/react-basic-02'
import { reactBasic03 } from '@/data/lessons/react-basic-03'

const getLessonData = (lessonId: string) => {
  switch (lessonId) {
    case 'react-basic-01':
      return reactBasic01
    case 'react-basic-02':
      return reactBasic02
    case 'react-basic-03':
      return reactBasic03
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
