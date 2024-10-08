import ExhibitionHeader from '@/components/exhibition-header'
import Title from '../title'

const Top = () => {
  return (
    <section className="pt-[24px] lg:pt-[40px]">
      <ExhibitionHeader />

      <div className="flex justify-start md:justify-end">
        <div className="w-full lg:w-[541px]">
          <div className="mt-[303px] w-fit md:ml-auto md:mt-[181px] lg:mt-[164px]">
            <Title />
          </div>

          <div className="mt-[40px] text-end md:mt-[77px] lg:mt-[325px] lg:text-start">
            <div className="text-body-02 font-[300] md:text-[18px] lg:text-[24px]">
              서울여자대학교 조형예술관 바롬전시갤러리
            </div>
            <div className="text-body-02 mt-[3px] !font-[500] md:text-[18px] lg:text-[24px]">
              24.10.28(월) - 11.03(일) AM 10:00 - PM 8:00
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Top
