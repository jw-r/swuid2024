'use client'

import Icon from '@/components/icon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Title = () => {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.from('#icon', {
        y: 200,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })

      tl.from(
        '#text',
        {
          y: 80,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4',
      )
    },
    { scope: containerRef },
  )

  return (
    <div
      ref={containerRef}
      className="flex flex-col text-primary-02 md:ml-auto md:items-end lg:items-start"
    >
      <Icon
        id="icon"
        name="사각"
        className="aspect-[85/53] w-[85px] shrink-0 md:h-[68px] md:w-[109px] lg:h-[161px] lg:w-[258px]"
      />
      <div
        id="text"
        className="text-e-subtitle-01 mt-[9px] leading-[normal] tracking-[auto] md:mt-[13px] lg:mt-mobile lg:text-[28px]"
      >
        : 사각에 존재하는 것들을 찾아서
      </div>
    </div>
  )
}

export default Title
