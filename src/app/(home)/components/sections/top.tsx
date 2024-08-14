import ExhibitionHeader from '@/components/exhibition-header'
import Icon from '@/components/icon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Top = () => {
  /* TODO: Fade In Animation */
  // useGSAP(() => {
  //   gsap.to('#사각', {})
  // }, [])

  return (
    <section className="pt-[24px] lg:pt-[40px]">
      <ExhibitionHeader />

      <div className="flex justify-start md:justify-end">
        <div className="w-full lg:w-[541px]">
          <div className="mt-[303px] flex w-fit flex-col text-primary-02 md:ml-auto md:mt-[181px] md:items-end lg:ml-0 lg:mt-[164px] lg:items-start">
            <Icon
              id="사각"
              name="사각"
              className="h-[53px] w-[85px] shrink-0 md:h-[68px] md:w-[109px] lg:h-[161px] lg:w-[258px]"
            />
            <div className="text-e-subtitle-01 mt-[9px] leading-[normal] tracking-[auto] md:mt-[13px] lg:mt-mobile lg:text-[28px]">
              : 사각에 존재하는 것들을 찾아서
            </div>
          </div>

          <div className="mt-[40px] text-end md:mt-[77px] lg:mt-[325px] lg:text-start">
            <div className="text-body-02 font-[300] md:text-[18px] lg:text-[24px]">
              서울여자대학교 조형예술관 바롬전시갤러리
            </div>
            <div className="text-body-02 mt-[3px] font-[500] md:text-[18px] lg:text-[24px]">
              24.10.28(월) - 11.03(일) AM 10:00 - PM 6:00
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Top
