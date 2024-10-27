import ExhibitionHeader from '@/components/exhibition-header'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '@/components/icon'
import Background from './components/background'
import { designers } from '@/constants/designers'

export default async function DesignerPage() {
  return (
    <>
      <Background />
      <main className="custom-container mb-[118px] md:mb-[170px] lg:mb-[245px]">
        <ExhibitionHeader className="pt-[24px] lg:pt-[40px]" />

        <h2 className="text-headline-02 lg:text-web-headline-01 mt-[48px] text-primary-02 md:mt-[80px] lg:mt-[96px]">
          Designer
        </h2>

        <div className="mt-[24px] grid grid-cols-2 gap-x-[7px] gap-y-[24px] md:mt-[42px] md:grid-cols-4 md:gap-x-[18px] md:gap-y-[32px] lg:mt-[25px] lg:gap-x-[20px] lg:gap-y-[25px]">
          {designers.slice(1).map((designer) => (
            <Link key={designer.id} href={`/designer/${designer.id}`} className="group">
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
      </main>
    </>
  )
}

export const dynamic = 'force-static'
