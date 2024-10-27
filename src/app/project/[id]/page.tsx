import Icon from '@/components/icon'
import Background from './components/background'
import Link from 'next/link'
import Image from 'next/image'
import GuestBook from '@/components/guest-book'
import { projects } from '@/constants/projects'
import { getProjectMembers } from '@/utils'
import { notFound } from 'next/navigation'
import VimeoPlayer from '@/components/vimeo-player'

export const generateMetadata = ({ params }: Props) => {
  const project = projects[Number(params.id)]
  return { title: `SWU ID 2024 - ${project?.name}` }
}

interface Props {
  params: {
    id: string
  }
}

export default async function ProjectDetailPage({ params: { id } }: Props) {
  const project = projects.find((project) => project.id === Number(id))

  if (!project) {
    notFound()
  }

  const designers = getProjectMembers(Number(id))

  return (
    <>
      <Background />
      <main>
        <div>
          {!!project.banner ? (
            <div className="relative aspect-[375/200] w-full md:aspect-[830/300] lg:aspect-[192/60]">
              <Image src={project.banner} alt="" fill />
            </div>
          ) : (
            <div className="aspect-[375/200] w-full bg-gray-50 md:aspect-[830/300] lg:aspect-[192/60]" />
          )}
        </div>

        <div className="custom-container mb-[96px] mt-[40px] lg:mb-[160px] lg:mt-[80px]">
          <h2 className="text-headline-02 lg:text-web-headline-01 text-primary-02">
            {project.name}
          </h2>
          <div className="mt-mobile flex gap-[8px] lg:mt-[24px] lg:gap-[16px]">
            <span className="text-body-01 lg:text-web-body-02 opacity-70">
              {project.teamName || '디자이너'}
            </span>
            <span className="text-subtitle-01 lg:text-web-subtitle-03">
              {designers.map((designer) => designer.name).join(' ')}
            </span>
          </div>
          <p className="text-body-space-01 lg:text-web-body-space-02 mt-[40px] whitespace-pre-line max-lg:!font-[300]">
            {project.description}
          </p>
          {project.type === 'UX' && (
            <div className="mt-[40px] flex justify-end">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit cursor-pointer items-center gap-[8px] border border-primary-02/50 bg-primary-02/20 px-mobile py-[12px] transition-all hover:border-primary-02 hover:shadow-hovering_btn lg:py-[14.5px] lg:pl-[36px] lg:pr-[32px]"
              >
                <span className="lg:text-web-body-03 text-body-03">서비스 사용해보기</span>
                <Icon name="arrow-right" className="lg:size-[20px]" />
              </a>
            </div>
          )}
        </div>

        {project.assets.length > 0 ? (
          <div className="w-full">
            {project.assets.map((asset) => {
              if (asset.type === 'image') {
                return (
                  <Image
                    key={asset.src}
                    src={asset.src}
                    alt=""
                    width={1920}
                    height={0}
                    className="w-full"
                  />
                )
              }
              if (asset.type === 'vimeo') {
                return <VimeoPlayer key={asset.link} link={asset.link} />
              }
              if (asset.type === 'video') {
                return (
                  <video
                    key={asset.src}
                    src={asset.src}
                    className="aspect-[16/9] w-full"
                    controls
                  />
                )
              }
              return null
            })}
          </div>
        ) : (
          <div className="h-[800px] w-full bg-gray-50" />
        )}

        <div className="custom-container mb-[120px] lg:mb-[240px]">
          <h3 className="text-headline-01 lg:text-web-headline-01 mt-[120px] text-primary-02 lg:mt-[200px]">
            {project.teamName || '디자이너'}
          </h3>
          <div className="mt-[20px] grid grid-cols-2 gap-[10px] gap-y-[20px] md:grid-cols-4 lg:mt-[33px]">
            {designers.map((designer) => (
              <Link
                key={designer.id}
                href={`/designer/${designer.id}`}
                className="group hover:shadow-hovering_btn"
              >
                <div className="relative aspect-[168/224] overflow-hidden border border-primary-02/70">
                  <div className="absolute size-full">
                    <Image
                      src={designer.avatar}
                      alt=""
                      fill
                      className="object-cover lg:group-hover:blur-sm"
                    />
                    <div className="max-lg:hidden">
                      <div className="absolute size-full opacity-0 transition-opacity duration-300 hover:bg-black/60 hover:opacity-100 max-lg:hidden">
                        <div className="pb-[20px] pl-[32px] pr-[29px] pt-[24px]">
                          <div className="flex items-center justify-between">
                            <span className="text-web-body-01">{designer.fields.join(' ')}</span>
                            <Icon name="arrow-right" className="size-[36px]" />
                          </div>
                        </div>
                      </div>
                      <div className="text-web-body-01 absolute bottom-[20px] left-[32px] group-hover:text-primary-02">
                        {designer.name}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[12px] lg:hidden">
                  <div className="text-body-03">{designer.fields.join(' ')}</div>
                  <div className="text-subtitle-03 mt-[4px]">{designer.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="custom-container mb-[120px] lg:mb-[240px]">
          <GuestBook projectId={Number(id)} type="B" />
        </div>
      </main>
    </>
  )
}
