'use client'

import { cn } from '@/lib/utils'
import { ProjectWithDesigners } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Background from './background'
import ExhibitionHeader from '@/components/exhibition-header'

interface Props {
  allProjects: ProjectWithDesigners[]
}

const Projects = ({ allProjects }: Props) => {
  const [sort, setSort] = useState<'UX' | 'DF' | 'BX'>('UX')
  const projects = allProjects.filter((project) => project.type === sort)

  return (
    <>
      <Background sort={sort} />
      <main className="custom-container mb-[120px] lg:mb-[240px]">
        <ExhibitionHeader className="pt-[24px] lg:pt-[40px]" />

        <h2 className="text-web-subtitle-03 md:text-headline-02 lg:text-web-headline-01 mt-[48px] text-primary-02 md:mt-[80px] lg:mt-[96px]">
          Project
        </h2>

        <div className="mt-[24px] flex gap-[16px] *:w-fit max-md:flex-col md:mt-[32px] lg:mt-[48px]">
          <button
            onClick={() => setSort('UX')}
            className={cn(
              'border border-primary-02 bg-primary-02/20 px-[36px] py-[13px] opacity-30 hover:opacity-100 transition-all duration-300 ease-out',
              sort === 'UX' && 'opacity-100',
            )}
          >
            UX Design
          </button>
          <button
            onClick={() => setSort('DF')}
            className={cn(
              'border border-primary-02 bg-primary-02/20 px-[36px] py-[13px] opacity-30 hover:opacity-100 transition-all duration-300 ease-out',
              sort === 'DF' && 'opacity-100',
            )}
          >
            Digital Fabrication
          </button>
          <button
            onClick={() => setSort('BX')}
            className={cn(
              'border border-primary-02 bg-primary-02/20 px-[36px] py-[13px] opacity-30 hover:opacity-100 transition-all duration-300 ease-out',
              sort === 'BX' && 'opacity-100',
            )}
          >
            BX Design
          </button>
        </div>

        <div className="mt-[24px] grid grid-cols-2 gap-x-[7px] gap-y-[48px] md:grid-cols-3 md:gap-x-[15px] lg:mt-[48px] lg:gap-[20px]">
          {projects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`}>
              <div className="group relative aspect-square flex-1 overflow-hidden border border-primary-02/70">
                <Image src="/dummy.png" alt="" fill className="lg:group-hover:blur-sm" />

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
                <div className="text-subtitle-01">프로젝트 타이틀</div>
                <div className="text-body-02 mt-[5px]">팀원1 팀원2 팀원3 팀원4</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export default Projects
