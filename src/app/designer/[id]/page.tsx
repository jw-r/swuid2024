import Image from 'next/image'
import Background from './components/background'
import Link from 'next/link'
import GuestBook from '@/components/guest-book'

export default function DesignerDetailPage() {
  return (
    <>
      <Background />
      <main className="custom-container lg:pt-[174px]">
        <div className="lg:hidden">
          <h1 className="text-headline-02 text-web-subtitle-01 mt-[39px] text-primary-02 md:mt-[72px]">
            강지은
          </h1>
          <div className="text-body-02 md:text-body-03 text-primary-02">Kang Jieun</div>
        </div>

        <div className="flex gap-[42px] max-lg:justify-between max-md:flex-col md:items-end lg:gap-[118px]">
          <div className="relative h-[224px] w-[168px] shrink-0 overflow-hidden max-lg:mt-[15px] max-md:mt-[24px] md:h-[340px] md:w-[255px] lg:h-[600px] lg:w-[450px]">
            <Image src="/person.png" alt="" fill />
          </div>

          <div>
            <div className="flex flex-col lg:h-[313px] lg:justify-between">
              <div>
                <div className="max-lg:hidden">
                  <h1 className="text-web-subtitle-01 text-primary-02">강지은</h1>
                  <div className="text-web-subtitle-03 mt-[8px] text-primary-02">Kang Jieun</div>
                </div>

                <div className="text-subtitle-03 lg:text-web-headline-02 mt-[20px] lg:mt-[40px]">
                  UX · DF
                </div>
              </div>
              <div className="text-body-01 lg:text-web-body-03 mt-[10px] md:mt-mobile lg:max-w-[820px]">
                가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사
              </div>
            </div>
            <div className="text-body-02 lg:text-web-body-03 mt-[35px] md:mt-[33px] lg:mt-[100px] lg:pb-[27px]">
              <div className="flex">
                <div className="w-[80px] lg:w-[132px]">E-mail</div>
                <div>0000000@gmail.com</div>
              </div>
              <div className="flex">
                <div className="w-[80px] lg:w-[132px]">Instagram</div>
                <div>@0000000000</div>
              </div>
              <div className="flex">
                <div className="w-[80px] lg:w-[132px]">Behance</div>
                <div>@0000000000</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-[95px] mt-[64.5px] md:mb-[76px] md:mt-[88px] lg:mb-[172px] lg:mt-[94px]">
          <div className="text-headline-01 lg:text-web-subtitle-01 text-primary-02">
            참여 프로젝트
          </div>
          <div className="mt-[20px] flex gap-x-[7px] gap-y-[48px] max-md:grid max-md:grid-cols-2 md:mt-[30px] lg:mt-[48px]">
            <Link href="/project/3">
              <div className="group relative flex-1 overflow-hidden border border-primary-02/70 max-md:aspect-square md:size-[255px] lg:size-[450px]">
                <Image src="/dummy.png" alt="" fill className="lg:group-hover:blur-sm" />

                <div className="absolute size-full opacity-0 transition-opacity duration-300 hover:bg-black/60 hover:opacity-100 max-lg:hidden">
                  <div className="flex h-full flex-col justify-between p-[32px]">
                    <div className="text-web-headline-01">DF</div>
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
          </div>
        </div>

        <GuestBook
          initialMessages={[]}
          targetUserId="3"
          className="mb-[98px] md:mb-[74px] lg:mb-[121px]"
        />
      </main>
    </>
  )
}
