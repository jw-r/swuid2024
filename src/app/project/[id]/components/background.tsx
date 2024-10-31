'use client'

import FallbackImage from '@/components/fallback-image'
import { useMediaQuery } from '@/hooks/use-media-query'

const Background = () => {
  const isMobile = useMediaQuery('(max-width: 519px)')
  const isTablet = useMediaQuery('(min-width: 520px) and (max-width: 829px)')

  if (isMobile) {
    return (
      <div className="absolute inset-0 z-[-1]">
        <FallbackImage
          src="/assets/detail/mobile_bg_01.webp"
          fallbackSrc="/assets/detail/mobile_bg_01.png"
          width={375}
          height={1135}
          alt=""
          className="w-full"
        />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="absolute inset-0 z-[-1]">
        <FallbackImage
          src="/assets/detail/tablet_bg_01.webp"
          fallbackSrc="/assets/detail/tablet_bg_01.png"
          width={830}
          height={1306}
          alt=""
          className="w-full"
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-[-1]">
      <FallbackImage
        src="/assets/detail/bgObj_04.webp"
        fallbackSrc="/assets/detail/bgObj_04.png"
        width={1920}
        height={3022}
        alt=""
        className="bottom-0 w-full"
      />
    </div>
  )
}

export default Background
