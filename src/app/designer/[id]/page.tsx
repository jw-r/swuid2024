import Image from 'next/image'
import Background from './components/background'
import Link from 'next/link'
import GuestBook from '@/components/guest-book'
import { getMessages } from '@/app/guest-book/actions'
import { designers } from '@/constants/designers'
import { getDesignerProjects, getProjectMembers } from '@/utils'
import { notFound } from 'next/navigation'

export const generateMetadata = ({ params }: Props) => {
  const designer = designers[Number(params.id)]
  return { title: `SWU ID 2024 - ${designer.name}` }
}

interface Props {
  params: {
    id: string
  }
}

export default async function DesignerDetailPage({ params: { id } }: Props) {
  const designer = designers[Number(id)]

  if (!designer) {
    notFound()
  }

  const projects = getDesignerProjects(designer.classNumber)

  const sortedProjects = [...projects].sort(sortProjects)

  return (
    <>
      <Background />
      <main className="custom-container lg:pt-[174px]">
        <div className="lg:hidden">
          <h1 className="text-headline-02 text-web-subtitle-01 mt-[39px] text-primary-02 md:mt-[72px]">
            {designer.name}
          </h1>
          <div className="text-body-02 md:text-body-03 text-primary-02">{designer.englishName}</div>
        </div>

        <div className="flex gap-[42px] max-lg:justify-between max-md:flex-col md:items-end lg:gap-[118px]">
          <div className="relative h-[224px] w-[168px] shrink-0 overflow-hidden max-lg:mt-[15px] max-md:mt-[24px] md:h-[340px] md:w-[255px] lg:h-[600px] lg:w-[450px]">
            <Image src={designer.avatar} alt={designer.name} fill className="object-cover" />
          </div>

          <div>
            <div className="flex flex-col lg:h-[313px] lg:justify-between">
              <div>
                <div className="max-lg:hidden">
                  <h1 className="text-web-subtitle-01 text-primary-02">{designer.name}</h1>
                  <div className="text-web-subtitle-03 mt-[8px] text-primary-02">
                    {designer.englishName}
                  </div>
                </div>

                <div className="text-subtitle-03 lg:text-web-headline-02 mt-[20px] lg:mt-[40px]">
                  {designer.fields.join(' ')}
                </div>
              </div>
              <div className="text-body-01 lg:text-web-body-03 mt-[10px] md:mt-mobile lg:max-w-[820px]">
                {designer.message}
              </div>
            </div>
            <div className="text-body-02 lg:text-web-body-03 mt-[35px] md:mt-[33px] lg:mt-[100px] lg:pb-[27px]">
              <div className="flex">
                <div className="w-[80px] lg:w-[132px]">E-mail</div>
                <div>{designer.email}</div>
              </div>
              {designer.instagram && (
                <div className="flex">
                  <div className="w-[80px] lg:w-[132px]">Instagram</div>
                  <div>{designer.instagram}</div>
                </div>
              )}
              {designer.behance && (
                <div className="flex">
                  <div className="w-[80px] lg:w-[132px]">Behance</div>
                  <div>{designer.behance}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mb-[95px] mt-[64.5px] md:mb-[76px] md:mt-[88px] lg:mb-[172px] lg:mt-[94px]">
          <div className="text-headline-01 lg:text-web-subtitle-01 text-primary-02">
            참여 프로젝트
          </div>
          <div className="mt-[20px] flex gap-x-[7px] gap-y-[48px] max-md:grid max-md:grid-cols-2 md:mt-[30px] lg:mt-[48px]">
            {sortedProjects.map((project) => {
              const designers = getProjectMembers(project.id)

              return (
                <Link key={project.id} href={`/project/${project.id}`}>
                  <div className="group relative flex-1 overflow-hidden border border-primary-02/70 max-md:aspect-square md:size-[255px] lg:size-[450px]">
                    <Image src="/dummy.png" alt="" fill className="lg:group-hover:blur-sm" />

                    <div className="absolute size-full opacity-0 transition-opacity duration-300 hover:bg-black/60 hover:opacity-100 max-lg:hidden">
                      <div className="flex h-full flex-col justify-between p-[32px]">
                        <div className="text-web-headline-01">{project.type}</div>
                        <div>
                          <div className="text-web-subtitle-01">{project.name}</div>
                          <div className="text-web-subtitle-03 mt-[5px]">
                            {designers.map((designer) => designer.name).join(' ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[12px] lg:hidden">
                    <div className="text-body-01">{project.type}</div>
                    <div className="text-subtitle-01 mt-[4px]">{project.name}</div>
                    <div className="text-body-02 mt-[5px]">
                      {designers.map((designer) => designer.name).join(' ')}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        <GuestBook
          classNumber={designer.classNumber}
          className="mb-[98px] md:mb-[74px] lg:mb-[121px]"
          type="A"
        />
      </main>
    </>
  )
}

// Custom sorting function for ProjectType
const sortProjects = (a: any, b: any) => {
  const order = { UX: 0, DF: 1, BX: 2 }
  return order[a.type as keyof typeof order] - order[b.type as keyof typeof order]
}
