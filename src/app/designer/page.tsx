'use client'

import ExhibitionHeader from '@/components/exhibition-header'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '@/components/icon'
import Background from './components/background'

const arr = Array.from({ length: 41 })

export default function DesignerPage() {
  return (
    <>
      <Background />
      <main className="custom-container mb-[118px] md:mb-[170px] lg:mb-[245px]">
        <ExhibitionHeader className="pt-[24px] lg:pt-[40px]" />

        <h2 className="text-headline-02 lg:text-web-headline-01 mt-[48px] text-primary-02 md:mt-[80px] lg:mt-[96px]">
          Designer
        </h2>

        <div className="mt-[24px] grid grid-cols-2 gap-x-[7px] gap-y-[24px] md:mt-[42px] md:grid-cols-4 md:gap-x-[18px] md:gap-y-[32px] lg:mt-[25px] lg:gap-x-[20px] lg:gap-y-[25px]">
          {/* TODO: 실제 데이터로 대체 */}
          {arr.map((_, idx) => (
            <Link key={idx} href="/designer/3" className="group">
              <div className="relative aspect-[168/224] overflow-hidden border border-primary-02/70">
                {/* TODO: Image */}
                <div className="absolute size-full">
                  <Image src="/dummy.png" alt="" fill className="lg:group-hover:blur-sm" />
                  <div className="max-lg:hidden">
                    <div className="absolute size-full opacity-0 transition-opacity duration-300 hover:bg-black/60 hover:opacity-100 max-lg:hidden">
                      <div className="pb-[20px] pl-[32px] pr-[29px] pt-[24px]">
                        <div className="flex items-center justify-between">
                          <span className="text-web-body-01">UX DF BX</span>
                          <Icon name="arrow-right" className="size-[36px]" />
                        </div>
                      </div>
                    </div>
                    <div className="text-web-body-01 absolute bottom-[20px] left-[32px] group-hover:text-primary-02">
                      디자이너 이름
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[12px] lg:hidden">
                <div className="text-body-03">UX DF BX</div>
                <div className="text-subtitle-03 mt-[4px]">차은우</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
