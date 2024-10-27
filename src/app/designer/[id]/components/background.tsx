'use client'

import ImageWithFallback from '@/components/image-with-fallback'
import { useMediaQuery } from '@/hooks/use-media-query'

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
          className="top-0 w-full"
        />
        <ImageWithFallback
          src="/assets/designer/mobile_bg_03.webp"
          width={375}
          height={590}
          alt=""
          className="bottom-0 w-full"
        />
        <ImageWithFallback
          src="/assets/designer/bgObj_02.webp"
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
        <ImageWithFallback
          src="/assets/designer/tablet_bg_02.webp"
          width={830}
          height={1306}
          alt=""
          className="top-0 w-full"
        />
        <ImageWithFallback
          src="/assets/designer/tablet_bg_03.webp"
          width={830}
          height={1306}
          alt=""
          className="bottom-0 w-full"
        />
        <ImageWithFallback
          src="/assets/designer/bgObj_02.webp"
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
      <ImageWithFallback
        src="/assets/designer/bg_03.webp"
        width={1920}
        height={5813}
        alt=""
        className="bottom-0 w-full"
      />
      <ImageWithFallback
        src="/assets/designer/bgObj_03.webp"
        width={1186}
        height={1618}
        alt=""
        className="absolute right-0 top-[350px]"
      />
    </div>
  )
}

export default Background
