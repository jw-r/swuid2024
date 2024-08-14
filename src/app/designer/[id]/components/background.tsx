'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'

const Background = () => {
  const isMobile = useMediaQuery('(max-width: 519px)')
  const isTablet = useMediaQuery('(min-width: 520px) and (max-width: 829px)')

  if (isMobile) {
    return (
      <div className="absolute inset-0 z-[-1]">
        <Image src="/assets/designer/mobile_bg_02.png" fill alt="" className="top-0" />
        <Image src="/assets/designer/mobile_bg_03.png" fill alt="" className="bottom-0" />
        <Image
          src="/assets/designer/bgObj_02.png"
          width={237.7}
          height={310}
          alt=""
          className="absolute right-0 top-[163px]"
        />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="absolute inset-0 z-[-1]">
        <Image src="/assets/designer/tablet_bg_02.png" fill alt="" className="top-0" />
        <Image src="/assets/designer/tablet_bg_03.png" fill alt="" className="bottom-0" />
        <Image
          src="/assets/designer/bgObj_02.png"
          width={389}
          height={509}
          alt=""
          className="absolute right-0 top-[279px]"
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-[-1]">
      <Image src="/assets/designer/bg_03.png" fill alt="" className="bottom-0" />
      <Image
        src="/assets/designer/bgObj_03.png"
        width={1186}
        height={1618}
        alt=""
        className="absolute right-0 top-[350px]"
      />
    </div>
  )
}

export default Background
