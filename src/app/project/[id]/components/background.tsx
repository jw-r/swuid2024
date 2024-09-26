'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'

const Background = () => {
  const isMobile = useMediaQuery('(max-width: 519px)')
  const isTablet = useMediaQuery('(min-width: 520px) and (max-width: 829px)')

  if (isMobile) {
    return (
      <div className="absolute inset-0 z-[-1]">
        <Image src="/assets/detail/mobile_bg_01.webp" fill alt="" />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="absolute inset-0 z-[-1]">
        <Image src="/assets/detail/tablet_bg_01.webp" fill alt="" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-[-1]">
      <Image src="/assets/detail/bgObj_04.webp" fill alt="" className="bottom-0" />
    </div>
  )
}

export default Background
