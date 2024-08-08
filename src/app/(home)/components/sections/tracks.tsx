import Link from 'next/link'
import Section from '../section'
import Icon from '@/components/icon'

const Tracks = () => {
  return (
    <Section title="트랙소개" className="mt-[135px] md:mt-[150px] lg:mt-[240px]">
      <div className="mt-[20px] flex gap-[20px] max-lg:flex-col lg:mt-[36px]">
        {TRACKS.map((track) => (
          <Link
            key={track.title}
            href={track.href}
            className="group flex-1 border border-primary-02 p-[34px] transition-colors duration-300 ease-out hover:bg-primary-02/15 md:py-[42px] lg:px-[40] lg:pb-[52px] lg:pt-[72px]"
          >
            <div className="text-primary-02 group-hover:text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-headline-01 text-web-subtitle-01">{track.title}</h3>
                <Icon name="arrow-right" className="lg:size-[36px]" />
              </div>
              <div className="text-subtitle-01 text-web-subtitle-03 mt-[4px] lg:mt-[8px]">
                {track.description}
              </div>
            </div>
            <div className="my-[20px] h-px w-full bg-primary-02/50 lg:my-[40px]" />
            <p className="text-body-space-02 text-web-body-03">{track.detail}</p>
          </Link>
        ))}
      </div>
    </Section>
  )
}

export default Tracks

const TRACKS = [
  {
    title: 'UX DESIGN',
    description: (
      <span>
        사용자가 겪은 문제를 해결하고
        <br className="md:hidden lg:block" /> 더 나은 경험을 디자인하는 트랙
      </span>
    ),
    detail: (
      <span>
        명확한 근거를 바탕으로 사용자가 겪고 있는 문제를 해결할 방법을 제시하는 사용자 경험(UX)
        디자인 교육에 중점을 두고 있습니다.
        <br className="md:hidden lg:block" /> 리서치, 컨셉도출, 와이어프레임, UI 시각화를 통해
        제품을 신중히 설계하여 사용자 경험을 향상시키는 기회를 제공합니다.
      </span>
    ),
    href: '',
  },
  {
    title: 'DIGITAL FABRICATION',
    description: (
      <span>
        3D 모델링을 통해
        <br className="max-lg:hidden" /> 감각적이며
        <br className="md:hidden" /> 기능적인 제품을 설계하는 트랙
      </span>
    ),
    detail: (
      <span>
        3D 모델링 데이터를 이용하여 소비자들의 편리성부터 미적 감각에 대한 욕구까지 부합하는 제품의
        설계를 도모합니다.
        <br className="md:hidden lg:block" /> 감각적 특성부터 구조 및 기능적 관점을 고려하는 제품
        디자인 통합 교육을 지향합니다.
      </span>
    ),
    href: '',
  },
  {
    title: 'BX SPACE DESIGN',
    description: (
      <span>
        브랜드와 사용자가 만나는 모든 공간에서의
        <br className="md:hidden lg:block" /> 상호작용을 설계하는 트랙
      </span>
    ),
    detail: (
      <span>
        공간디자인은 인간과 그에 둘러싼 모든 생태계에 최적의 삶의 그릇을 제공하고자 하는 학문입니다.
        <br className="md:hidden lg:block" />
        실제 환경뿐 아닌 가상의 공간을 포함하여, 환경과 인간이 상호작용을 일으킬 수 있는 공간의
        창조를 목표로 합니다.
      </span>
    ),
    href: '',
  },
]
