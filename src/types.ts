import { Prisma } from '@prisma/client'

export type ProjectWithDesigners = Prisma.ProjectGetPayload<{
  include: { designers: true }
}>
