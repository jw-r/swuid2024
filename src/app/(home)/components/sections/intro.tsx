import Icon from '@/components/icon'
import Section from '../section'

const Intro = () => {
  return (
    <Section title="졸업전시 소개" className="mt-[108px] md:mt-[148px] lg:mt-[426px]">
      <div className="text-e-headline-01 lg:text-web-e-headline-01 mt-[20px] flex items-center gap-[8px] text-primary-02 lg:mt-[36px] lg:gap-[18.4px]">
        <span>사각 :</span>
        <Icon name="사각-text" className="lg:h-[60px] lg:w-[106.6px]" />
      </div>
      <div className="lg:text-web-body-01 text-body-space-01 mt-[32px] lg:mt-[48px]">
        <p>
          어느 각도에서도 보이지 않는 사각이 있습니다.
          <br />
          우린 일상에 보이지 않는 사각을 탐구해 왔습니다.
        </p>
        <br />
        <p>
          그리고 우리에게 또 다른 도전의 시간이 왔습니다.
          <br />
          평번함 안에 숨겨진 미묘한 세계로 파고들어
          <br />
          사각에 숨겨진 저희만의 모습을 전시에 담았습니다.
        </p>
        <br />
        <p>
          숨겨진 아름다움과 가능성을 발견한 순간,
          <br />
          새로운 사각에 도전할 우리의 첫걸음을
          <br className="lg:hidden" /> 이제 내디뎌 볼까 합니다.
        </p>
      </div>
    </Section>
  )
}

export default Intro
