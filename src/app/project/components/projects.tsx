'use client'

import { cn } from '@/lib/utils'
import { ProjectWithDesigners } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Background from './background'
import ExhibitionHeader from '@/components/exhibition-header'
import { useSearchParams } from 'next/navigation'

interface Props {
  allProjects: ProjectWithDesigners[]
}

const Projects = ({ allProjects }: Props) => {
  const type = useSearchParams().get('type')
  const [sort, setSort] = useState<'UX' | 'DF' | 'BX'>(
    type === 'df' ? 'DF' : type === 'bx' ? 'BX' : 'UX',
  )
  const projects = allProjects.filter((project) => project.type === sort)

  return (
    <>
      <Background sort={sort} />
      <main className="custom-container mb-[120px] lg:mb-[240px]">
        <ExhibitionHeader className="pt-[24px] lg:pt-[40px]" />

        <h2 className="text-web-subtitle-03 md:text-headline-02 lg:text-web-headline-01 mt-[48px] text-primary-02 md:mt-[80px] lg:mt-[96px]">
          Project
        </h2>

        <div className="lg:text-web-body-02 text-body-04 mt-[24px] flex gap-[16px] transition-shadow *:w-fit max-md:flex-col md:mt-[32px] lg:mt-[48px]">
          <button
            onClick={() => setSort('UX')}
            className={cn(
              'border border-primary-02 hover:shadow-hovering_btn bg-primary-02/20 px-[16px] py-[10px] lg:px-[36px] lg:py-[13px] opacity-30 hover:opacity-100 transition-all duration-300 ease-out',
              sort === 'UX' && 'opacity-100',
            )}
          >
            UX Design
          </button>
          <button
            onClick={() => setSort('DF')}
            className={cn(
              'border border-primary-02 bg-primary-02/20 hover:shadow-hovering_btn px-[16px] py-[10px] lg:px-[36px] lg:py-[13px] opacity-30 hover:opacity-100 transition-all duration-300 ease-out',
              sort === 'DF' && 'opacity-100',
            )}
          >
            Digital Fabrication
          </button>
          <button
            onClick={() => setSort('BX')}
            className={cn(
              'border border-primary-02 bg-primary-02/20 hover:shadow-hovering_btn px-[16px] py-[10px] lg:px-[36px] lg:py-[13px] opacity-30 hover:opacity-100 transition-all duration-300 ease-out',
              sort === 'BX' && 'opacity-100',
            )}
          >
            BX Design
          </button>
        </div>

        <div className="mt-[24px] grid grid-cols-2 gap-x-[7px] gap-y-[48px] md:grid-cols-3 md:gap-x-[15px] lg:mt-[48px] lg:gap-[20px]">
          {projects.map((project, idx) => {
            const hasContent = idx % 2 === 0

            return (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className={cn(!hasContent && 'pointer-events-none')}
              >
                <div className="group relative aspect-square flex-1 overflow-hidden border border-primary-02/70">
                  {/* no content */}
                  {hasContent ? (
                    <Image src="/dummy.png" alt="" fill className="lg:group-hover:blur-sm" />
                  ) : (
                    <div className="flex size-full items-center justify-center bg-primary-01">
                      <div className="relative size-[72px] md:size-[96px] lg:size-[230px]">
                        <Image src="/no-content.png" alt="" fill className="object-cover" />
                      </div>
                      <div className="text-body-02 md:text-subtitle-02 lg:text-web-body-01 absolute bottom-[14px] right-1/2 translate-x-1/2 opacity-70 md:bottom-[16px] lg:bottom-[56px]">
                        준비 중⋯
                      </div>
                    </div>
                  )}

                  <div className="absolute size-full opacity-0 transition-opacity duration-300 hover:bg-black/60 hover:opacity-100 max-lg:hidden">
                    <div className="flex h-full flex-col justify-between p-[32px]">
                      <div className="text-web-headline-01">
                        {sort === 'UX' ? 'UX' : sort === 'DF' ? 'DF' : 'BX'}
                      </div>
                      <div>
                        <div className="text-web-subtitle-01">{project.name}</div>
                        <div className="text-web-subtitle-03 mt-[5px]">
                          {project.designers.map((designer) => designer.name).join(' ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-mobile lg:hidden">
                  <div className="text-subtitle-01">{project.name}</div>
                  <div className="text-body-02 mt-[5px]">
                    {project.designers.map((designer) => designer.name).join(' ')}
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

export default Projects
