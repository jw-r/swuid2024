import { avatarFileNames, designerData } from '@/constants/designer'
import db from '@/lib/prisma/db'
import { notFound } from 'next/navigation'

async function insertDesignerData() {
  if (process.env.NODE_ENV === 'production') {
    notFound()
  }

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
    if (uxField === 'O') fields.push('UX')
    if (bxField === 'O') fields.push('BX')
    if (dfField === 'O') fields.push('DF')

    // 아바타 파일 이름이 있는 경우에만 경로를 설정
    const avatarPath = i < avatarFileNames.length ? `/avatar/${avatarFileNames[i]}` : ''

    await db.designer.create({
      data: {
        order: parseInt(order),
        avatar: avatarPath,
        name: name.trim(),
        classNumber: parseInt(classNumber),
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

export default function Page() {
  return (
    <div>
      <form
        action={async () => {
          'use server'
          await insertDesignerData()
        }}
      >
        <button>데이터 추가</button>
      </form>
    </div>
  )
}
