'use client'

import ImageWithFallback from '@/components/image-with-fallback'
import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'

// 전체 배경색상 primary 01
// mobile
// 상단맞춤<mobile_bg_02>, 하단맞춤 <mobile_bg_03>
// tablet
// 상단맞춤<tablet_bg_02>, 하단맞춤 <tablet_bg_03>

// 배경 위 mobile <mobile_obj 02>, tablet <tablet_obj 02>

{
  /* <bg_03> 페이지 전체 배경 (상단 맞춤으로 페이지 길이에 따라 아래 이미지 짤림)
페이지 전체 배경 위에 <bgObj_02></bgObj_02> */
}

const Background = () => {
  const isMobile = useMediaQuery('(max-width: 519px)')
  const isTablet = useMediaQuery('(min-width: 520px) and (max-width: 829px)')

  if (isMobile) {
    return (
      <div className="absolute inset-0 z-[-1]">
        <ImageWithFallback
          src="/assets/designer/mobile_bg_02.webp"
          width={375}
          height={590}
          alt=""
          className="absolute top-0 w-full"
        />
        <Image
          src="/assets/designer/mobile_bg_03.png"
          width={375}
          height={590}
          alt=""
          className="absolute bottom-0 w-full"
        />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="absolute inset-0 z-[-1]">
        <ImageWithFallback
          src="/assets/designer/tablet_bg_02.webp"
          width={830}
          height={1306}
          alt=""
          className="absolute top-0 w-full"
        />
        <ImageWithFallback
          src="/assets/designer/tablet_bg_03.webp"
          width={830}
          height={1306}
          alt=""
          className="absolute bottom-0 w-full"
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-[-1]">
      <ImageWithFallback
        src="/assets/designer/bg_03.webp"
        width={1920}
        height={5813}
        alt=""
        className="absolute top-0 w-full"
      />
      <ImageWithFallback
        src="/assets/designer/bgObj_02.webp"
        width={1922}
        height={2280}
        alt=""
        className="absolute right-0 top-2/3 w-full"
      />
    </div>
  )
}

export default Background
