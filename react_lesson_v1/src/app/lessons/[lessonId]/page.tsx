'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import LessonDetailPage from '@/components/pages/LessonDetailPage'
import { reactBasic01 } from '@/data/lessons/react-basic-01'
import { reactBasic02 } from '@/data/lessons/react-basic-02'

const lessons = {
  'react-basic-01': reactBasic01,
  'react-basic-02': reactBasic02,
}

interface LessonPageProps {
  params: Promise<{
    lessonId: string
  }>
}

export default function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = React.use(params)
  const lesson = lessons[lessonId as keyof typeof lessons]

  if (!lesson) {
    notFound()
  }

  return <LessonDetailPage lesson={lesson} />
}
