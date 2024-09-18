'use server'

import { revalidatePath } from 'next/cache'
import db from '@/lib/prisma/db'

export interface Message {
  id: number
  content: string
  createdAt: Date
  sender: string
  designerId: number | null
  projectId: number | null
}

export async function getMessages(designerId?: number, projectId?: number): Promise<Message[]> {
  if (designerId) {
    return db.comment.findMany({
      where: { designerId },
      orderBy: { createdAt: 'desc' },
    })
  } else if (projectId) {
    return db.comment.findMany({
      where: { projectId },
      orderBy: { createdAt: 'desc' },
    })
  } else {
    return db.comment.findMany({
      orderBy: { createdAt: 'desc' },
    })
  }
}

export async function addMessage({
  senderName,
  message,
  designerId,
  projectId,
}: {
  senderName: string
  message: string
  designerId?: number
  projectId?: number
}): Promise<Message> {
  const newMessage = await db.comment.create({
    data: {
      content: message,
      sender: senderName,
      designer: designerId ? { connect: { id: designerId } } : undefined,
      project: projectId ? { connect: { id: projectId } } : undefined,
    },
  })

  if (designerId) {
    revalidatePath(`/designer/${designerId}`)
  } else if (projectId) {
    revalidatePath(`/project/${projectId}`)
  } else {
    revalidatePath('/guestbook')
  }

  return newMessage
}
