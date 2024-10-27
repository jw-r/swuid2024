import { designers } from '@/constants/designers'
import { projects } from '@/constants/projects'

export const formatDate = (date: Date) => {
  const year = date.getFullYear().toString().slice(-2) // 연도의 마지막 두 자리
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // 월 (0-11이므로 1을 더함)
  const day = date.getDate().toString().padStart(2, '0') // 일

  return `${year}.${month}.${day}`
}

export const getDesignerProjects = (classNumber: string) => {
  return projects.filter((project) =>
    project.members.some((member) => member.classNumber === classNumber),
  )
}

export const getProjectMembers = (projectId: number) => {
  const project = projects.find((p) => p.id === projectId)
  if (!project) return []

  return project.members
    .map((member) => designers.find((designer) => designer.classNumber === member.classNumber))
    .filter((designer): designer is (typeof designers)[number] => designer !== undefined)
}
