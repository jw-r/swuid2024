import { avatarFileNames, designerData } from '@/constants/designer'
import { projectData } from '@/constants/project'
import db from '@/lib/prisma/db'

async function insertDesignerData() {
  for (let i = 0; i < designerData.length; i++) {
    const [
      order,
      name,
      classNumber,
      uxField,
      bxField,
      dfField,
      englishName,
      email,
      instagram,
      behance,
      thought,
    ] = designerData[i].split('\t')

    const fields = []
    if (bxField === 'O') fields.push('UX')
    if (uxField === 'O') fields.push('DF')
    if (dfField === 'O') fields.push('BX')

    // 아바타 파일 이름이 있는 경우에만 경로를 설정
    const avatarPath = i < avatarFileNames.length ? `/avatar/${avatarFileNames[i]}` : ''

    await db.designer.create({
      data: {
        order: Number(order),
        avatar: avatarPath,
        name: name.trim(),
        classNumber: Number(classNumber),
        fields: fields.join(','),
        englishName: englishName.trim(),
        email: email.trim(),
        instagram: instagram || null,
        behance: behance || null,
        thought: thought.trim(),
      },
    })
  }

  console.log('Data insertion completed')
}

async function insertProjectData() {
  const projectTypes = ['UX', 'DF', 'BX'] as const

  for (const type of projectTypes) {
    const projects = projectData[type]

    for (const project of projects) {
      const [order, teamMembers, projectName, teamName] = project.split('\t')

      const designers = teamMembers.split(',').map((member) => {
        const [name, classNumber] = member.split('[')
        return {
          name: name.trim(),
          classNumber: classNumber.replace(']', '').trim(),
        }
      })

      const createdProject = await db.project.create({
        data: {
          name: projectName,
          type: type,
          order: Number(order),
          teamName: teamName || null,
          thumbnail: null,
          url: null,
          description: null,
        },
      })

      for (const designer of designers) {
        const dbDesigner = await db.designer.findFirst({
          where: { classNumber: Number(designer.classNumber) },
        })
        if (dbDesigner) {
          await db.project.update({
            where: { id: createdProject.id },
            data: {
              designers: {
                connect: { id: dbDesigner.id },
              },
            },
          })
        } else {
          console.warn(`Designer with class number ${designer.classNumber} not found`)
        }
      }
    }
  }

  console.log('Project data insertion completed')
}

export default function Page() {
  return (
    <div>
      <form
        action={async () => {
          'use server'
          await insertDesignerData()
        }}
      >
        <button>디자이너 데이터 추가</button>
      </form>

      <form
        action={async () => {
          'use server'
          await insertProjectData()
        }}
        className="mt-[40px]"
      >
        <button>프로젝트 데이터 추가</button>
      </form>
    </div>
  )
}
