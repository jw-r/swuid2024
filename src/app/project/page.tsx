'use client'

import { useState } from 'react'
import Background from './components/background'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import ExhibitionHeader from '@/components/exhibition-header'

export type Sort = 'ux-design' | 'digital-fabrication' | 'bx-design'

// UX : 11팀
// DF : 26명
// BX : 4팀

const uxList = Array.from({ length: 11 })
const dfList = Array.from({ length: 26 })
const bxList = Array.from({ length: 4 })

export default function Project() {
  const [sort, setSort] = useState<Sort>('ux-design')

  const curList = sort === 'ux-design' ? uxList : sort === 'digital-fabrication' ? dfList : bxList

  return (
    <>
      <Background sort={sort} />
      <main className="custom-container mb-[120px] lg:mb-[240px]">
        <ExhibitionHeader className="mt-[24px] lg:mt-[40px]" />

        <h2 className="text-web-subtitle-03 md:text-headline-02 lg:text-web-headline-01 mt-[48px] text-primary-02 md:mt-[80px] lg:mt-[96px]">
          Project
        </h2>

        <div className="mt-[24px] flex gap-[16px] *:w-fit max-md:flex-col md:mt-[32px] lg:mt-[48px]">
          <button
            className={cn(
              'border border-primary-02 bg-primary-02/20 px-[36px] py-[13px] opacity-30 hover:opacity-100 transition-all duration-300 ease-out',
              sort === 'ux-design' && 'opacity-100',
            )}
            onClick={() => setSort('ux-design')}
          >
            UX Design
          </button>
          <button
            className={cn(
              'border border-primary-02 bg-primary-02/20 px-[36px] py-[13px] opacity-30 hover:opacity-100 transition-all duration-300 ease-out',
              sort === 'digital-fabrication' && 'opacity-100',
            )}
            onClick={() => setSort('digital-fabrication')}
          >
            Digital Fabrication
          </button>
          <button
            className={cn(
              'border border-primary-02 bg-primary-02/20 px-[36px] py-[13px] opacity-30 hover:opacity-100 transition-all duration-300 ease-out',
              sort === 'bx-design' && 'opacity-100',
            )}
            onClick={() => setSort('bx-design')}
          >
            BX Design
          </button>
        </div>

        <div className="mt-[24px] grid grid-cols-2 gap-x-[7px] gap-y-[48px] md:grid-cols-3 md:gap-x-[15px] lg:mt-[48px] lg:gap-[20px]">
          {curList.map((item, idx) => (
            /* TODO: 실제 id로 대체 */
            <Link key={idx} href="/project/3">
              <div className="group relative aspect-square flex-1 overflow-hidden border border-primary-02/70">
                <Image src="/dummy.png" alt="" fill className="lg:group-hover:blur-sm" />

                <div className="absolute size-full opacity-0 transition-opacity duration-300 hover:bg-black/60 hover:opacity-100 max-lg:hidden">
                  <div className="flex h-full flex-col justify-between p-[32px]">
                    <div className="text-web-headline-01">
                      {sort === 'ux-design' ? 'UX' : sort === 'digital-fabrication' ? 'DF' : 'BX'}
                    </div>
                    <div>
                      <div className="text-web-subtitle-01">프로젝트 타이틀</div>
                      <div className="text-web-subtitle-03 mt-[5px]">
                        팀원1 팀원2 팀원3 팀원4 팀원5
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
