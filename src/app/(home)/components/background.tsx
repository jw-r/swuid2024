'use client'

import { useMediaQuery } from '@/app/hooks/use-media-query'
import Image from 'next/image'

const Background = () => {
  const isMobile = useMediaQuery('(max-width: 519px)')
  const isTablet = useMediaQuery('(min-width: 520px) and (max-width: 829px)')

  if (isMobile) {
    return (
      <div className="absolute inset-0 z-[-1]">
        <Image src="/assets/home/mobile_bg_05.webp" fill alt="" />
        <Image
          src="/assets/home/mobile-top-right.webp"
          width={162}
          height={301.98}
          alt=""
          className="absolute right-0 top-0"
        />
        <Image
          src="/assets/home/mobile-bottom-left.webp"
          width={114.14}
          height={179.38}
          alt=""
          className="absolute bottom-0 left-0"
        />
        <Image
          src="/assets/home/mobile-bottom-right.webp"
          width={231.4}
          height={315.82}
          alt=""
          className="absolute bottom-[129px] right-0"
        />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="absolute inset-0 z-[-1]">
        <Image src="/assets/home/tablet_bg_05.webp" fill alt="" />
        <Image
          src="/assets/home/tablet-top.webp"
          width={830}
          height={875}
          alt=""
          className="absolute top-0"
        />
        <Image
          src="/assets/home/tablet-bottom-left.webp"
          width={252.63}
          height={397.02}
          alt=""
          className="absolute bottom-0 left-0"
        />
        <Image
          src="/assets/home/tablet-bottom-right.webp"
          width={512.16}
          height={699}
          alt=""
          className="absolute bottom-[286px] right-0"
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-[-1]">
      <Image src="/assets/home/bg_01.webp" fill alt="" />
      <Image
        src="/assets/home/desktop-top.webp"
        width={1920}
        height={2025}
        alt=""
        className="absolute top-0"
      />
      <Image
        src="/assets/home/tablet-bottom-left.webp"
        width={585}
        height={919}
        alt=""
        className="absolute bottom-0 left-0"
      />
      <Image
        src="/assets/home/tablet-bottom-right.webp"
        width={1186}
        height={1618}
        alt=""
        className="absolute bottom-[662px] right-0"
      />
    </div>
  )
}

export default Background

// 배경 (모바일)
// mobile_bg_05
// mobile_bg_05 위에
// mobile_bgObj_03 하단 맞춤

// 배경 (태블릿)
// tablet_bg_05
// tablet_bg_05 위에
// tablet_obj_05 하단 맞춤

// 배경 <bg_01>
// <bg_01> 위에 네비게이션 바 하단 부분에 맞춰, <bgObj_home_01> 상단 맞춤 / <bgObj_02> 하단 맞춤
