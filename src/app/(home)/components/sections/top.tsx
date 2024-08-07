import Icon from '@/components/icon'

const Top = () => {
  return (
    <section className="mt-[24px] lg:mt-[40px]">
      <div className="flex items-center gap-[6px] text-primary-02 md:gap-[16px]">
        <div className="font-eulyoo1945 text-[28px] tracking-[-0.01em] md:text-[40px] lg:text-[72px]">
          41th
        </div>
        <div className="lg:text-web-body-02 font-pretendard text-[12px] tracking-[-0.02em] md:text-[16px]">
          Seoul Women’s University
          <br />
          Industrial Design Graduation Exhibition
        </div>
      </div>

      <div className="flex justify-start md:justify-end">
        <div className="w-full lg:w-[541px]">
          <div className="mt-[303px] flex w-fit flex-col text-primary-02 md:ml-auto md:mt-[181px] md:items-end lg:ml-0 lg:mt-[164px] lg:items-start">
            <Icon
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
