'use server'

import db from '@/lib/prisma/db'

export interface CommentType {
  id: number
  content: string
  createdAt: Date
  sender: string
  classNumber: string | null
  projectId: number | null
}

export async function getMessages(params?: {
  classNumber?: string | null
  projectId?: number | null
}): Promise<CommentType[]> {
  let comments
  if (params?.classNumber != null) {
    comments = await db.comment.findMany({
      where: { classNumber: params.classNumber },
      orderBy: { createdAt: 'desc' },
    })
  } else if (params?.projectId != null) {
    comments = await db.comment.findMany({
      where: { projectId: params.projectId },
      orderBy: { createdAt: 'desc' },
    })
  } else {
    comments = await db.comment.findMany({
      where: { projectId: null },
      orderBy: { createdAt: 'desc' },
    })
  }

  return comments
}

export async function addMessage({
  senderName,
  message,
  classNumber,
  projectId,
}: {
  senderName: string
  message: string
  classNumber?: string
  projectId?: number
}): Promise<CommentType> {
  const newComment = await db.comment.create({
    data: {
      content: message,
      sender: senderName,
      classNumber,
      projectId,
    },
  })

  return newComment
}
