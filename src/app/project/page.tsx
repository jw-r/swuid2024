import db from '@/lib/prisma/db'
import Projects from './components/projects'
import { ProjectWithDesigners } from '@/types'

async function getProjects(): Promise<ProjectWithDesigners[]> {
  const projects = await db.project.findMany({
    orderBy: {
      id: 'asc',
    },
    include: {
      designers: true,
    },
  })
  return projects
}

export default async function Project() {
  const allProjects = await getProjects()

  return <Projects allProjects={allProjects} />
}

export const dynamic = 'force-static'
