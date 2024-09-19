import { Prisma } from '@prisma/client'

export type ProjectWithDesigners = Prisma.ProjectGetPayload<{
  include: { designers: true }
}>

export type MessageWithDesigner = Prisma.CommentGetPayload<{
  include: {
    designer: {
      select: {
        id: true
        name: true
      }
    }
  }
}>
