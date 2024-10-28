import Image from 'next/image'
import Section from '../section'

const Interview = () => {
  const stillCuts = ['/steal/cut01.webp', '/steal/cut02.webp', '/steal/cut03.webp']

  return (
    <Section title="스틸컷" className="mt-[135px] md:mt-[135px] lg:mt-[366px]">
      <div className="mt-[10px] flex gap-[16px] overflow-x-scroll md:mt-[20px] lg:mt-[36px]">
        {stillCuts.map((src) => (
          <div
            key={src}
            className="relative h-[154.5px] min-w-[230px] cursor-pointer border border-primary-02/70 md:h-[201.2px] md:min-w-[300px] lg:h-[360px] lg:min-w-0 lg:flex-1"
          >
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Interview
