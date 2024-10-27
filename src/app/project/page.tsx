import ExhibitionHeader from '@/components/exhibition-header'
import Background from './components/background'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { getProjectMembers } from '@/utils'
import { projects } from '@/constants/projects'
import Image from 'next/image'

export default function Project({ searchParams }: { searchParams: { type: 'UX' | 'DF' | 'BX' } }) {
  const type = ['UX', 'DF', 'BX'].includes(searchParams.type) ? searchParams.type : 'UX'

  return (
    <>
      <Background type={type} />
      <main className="custom-container mb-[120px] lg:mb-[240px]">
        <ExhibitionHeader className="pt-[24px] lg:pt-[40px]" />

        <h2 className="text-web-subtitle-03 md:text-headline-02 lg:text-web-headline-01 mt-[48px] text-primary-02 md:mt-[80px] lg:mt-[96px]">
          Project
        </h2>

        <div className="lg:text-web-body-02 text-body-04 mt-[24px] flex gap-[16px] transition-shadow *:w-fit max-md:flex-col md:mt-[32px] lg:mt-[48px]">
          <Link
            href="/project?type=UX"
            replace={true}
            className={cn(
              'border border-primary-02 hover:shadow-hovering_btn bg-primary-02/20 px-[16px] py-[10px] lg:px-[36px] lg:py-[13px] opacity-30 hover:opacity-100 transition-all duration-300 ease-out',
              type === 'UX' && 'opacity-100',
            )}
          >
            UX Design
          </Link>
          <Link
            href="/project?type=DF"
            replace={true}
            className={cn(
              'border border-primary-02 bg-primary-02/20 hover:shadow-hovering_btn px-[16px] py-[10px] lg:px-[36px] lg:py-[13px] opacity-30 hover:opacity-100 transition-all duration-300 ease-out',
              type === 'DF' && 'opacity-100',
            )}
          >
            Digital Fabrication
          </Link>
          <Link
            href="/project?type=BX"
            replace={true}
            className={cn(
              'border border-primary-02 bg-primary-02/20 hover:shadow-hovering_btn px-[16px] py-[10px] lg:px-[36px] lg:py-[13px] opacity-30 hover:opacity-100 transition-all duration-300 ease-out',
              type === 'BX' && 'opacity-100',
            )}
          >
            BX Design
          </Link>
        </div>

        <div className="mt-[24px] grid grid-cols-2 gap-x-[7px] gap-y-[48px] md:grid-cols-3 md:gap-x-[15px] lg:mt-[48px] lg:gap-[20px]">
          {projects
            .filter((project) => project.type === type)
            .map((project, idx) => {
              const hasThumbnail = !!project.thumbnail
              const designers = getProjectMembers(project.id)

              return (
                <Link
                  key={project.id}
                  href={`/project/${project.id}`}
                  className={cn(!hasThumbnail && 'pointer-events-none')}
                >
                  <div className="group relative aspect-square flex-1 overflow-hidden border border-primary-02/70">
                    {/* no content */}
                    {hasThumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt=""
                        fill
                        className="lg:group-hover:blur-sm"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center bg-primary-01">
                        <div className="relative size-[72px] md:size-[96px] lg:size-[230px]">
                          <Image src="/no-content.png" alt="" fill className="object-cover" />
                        </div>
                        <div className="text-body-02 md:text-subtitle-02 !md:font-[400] lg:text-web-body-01 absolute bottom-[14px] right-1/2 translate-x-1/2 opacity-70 md:bottom-[16px] lg:bottom-[56px]">
                          준비 중⋯
                        </div>
                      </div>
                    )}

                    <div className="absolute size-full opacity-0 transition-opacity duration-300 hover:bg-black/60 hover:opacity-100 max-lg:hidden">
                      <div className="flex h-full flex-col justify-between p-[32px]">
                        <div className="text-web-headline-01">
                          {type === 'UX' ? 'UX' : type === 'DF' ? 'DF' : 'BX'}
                        </div>
                        <div>
                          <div className="text-web-subtitle-01">{project.name}</div>
                          <div className="text-web-subtitle-03 mt-[5px]">
                            {designers.map((designer) => designer.name).join(' ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-mobile lg:hidden">
                    <div className="text-subtitle-01">{project.name}</div>
                    <div className="text-body-02 mt-[5px]">
                      {designers.map((designer) => designer.name).join(' ')}
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>
      </main>
    </>
  )
}
