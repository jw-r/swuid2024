'use server'

import { revalidatePath } from 'next/cache'
import db from '@/lib/prisma/db'
import { MessageWithDesigner } from '@/types'

export async function getMessages(params?: {
  designerId?: number
  projectId?: number
}): Promise<MessageWithDesigner[]> {
  if (params?.designerId != null) {
    return db.comment.findMany({
      where: { designerId: params.designerId },
      orderBy: { createdAt: 'desc' },
      include: {
        designer: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
  } else if (params?.projectId != null) {
    return db.comment.findMany({
      where: { projectId: params.projectId },
      orderBy: { createdAt: 'desc' },
      include: {
        designer: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
  } else {
    return db.comment.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        designer: {
          select: {
            id: true,
            name: true,
          },
        },
      },
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
}): Promise<MessageWithDesigner> {
  const newMessage = await db.comment.create({
    data: {
      content: message,
      sender: senderName,
      designer: designerId ? { connect: { id: designerId } } : undefined,
      project: projectId ? { connect: { id: projectId } } : undefined,
    },
    include: {
      designer: {
        select: {
          id: true,
          name: true,
        },
      },
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
