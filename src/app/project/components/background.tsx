'use client'

import FallbackImage from '@/components/fallback-image'
import { useMediaQuery } from '@/hooks/use-media-query'

interface Props {
  type: 'UX' | 'DF' | 'BX'
}

const Background = ({ type }: Props) => {
  const isMobile = useMediaQuery('(max-width: 519px)')
  const isTablet = useMediaQuery('(min-width: 520px) and (max-width: 829px)')

  const array =
    type === 'UX'
      ? Array.from({ length: 2 })
      : type === 'DF'
        ? Array.from({ length: 4 })
        : Array.from({ length: 1 })

  if (isMobile) {
    return (
      <div className="absolute inset-0 z-[-1]">
        {array.map((_, index) => (
          <div
            key={index}
            className="absolute w-full"
            style={{
              top: `${index * 1135}px`,
              height: '1135px',
            }}
          >
            <FallbackImage
              src="/assets/project/mobile_bg_01.webp"
              fallbackSrc="/assets/project/mobile_bg_01.png"
              alt=""
              fill
              className="absolute h-[1135px] w-[375px]"
            />
          </div>
        ))}
        {array.map((_, index) => (
          <div
            key={index}
            className="absolute w-full"
            style={{
              top: `${index * 437}px`,
              height: '437px',
            }}
          >
            <FallbackImage
              src="/assets/project/mobile_bgObj_01_right.webp"
              fallbackSrc="/assets/project/mobile_bgObj_01_right.png"
              width={152}
              height={156}
              alt=""
              className="absolute right-0 top-0"
            />
            <FallbackImage
              src="/assets/project/mobile_bgObj_01_bottom.webp"
              fallbackSrc="/assets/project/mobile_bgObj_01_bottom.png"
              width={140.8}
              height={180}
              alt=""
              className="absolute bottom-0 left-0"
            />
          </div>
        ))}
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="absolute inset-0 z-[-1]">
        <FallbackImage
          src="/assets/project/tablet_bg_01.webp"
          fallbackSrc="/assets/project/tablet_bg_01.png"
          fill
          alt=""
        />
        <div className="absolute top-0 h-[850px] w-full">
          <FallbackImage
            src="/assets/project/mobile_bgObj_01_right.webp"
            fallbackSrc="/assets/project/mobile_bgObj_01_right.png"
            width={151.3}
            height={155.1}
            alt=""
            className="absolute right-0 top-[175px]"
          />
          <FallbackImage
            src="/assets/project/tablet_bgObj_01_bottom.webp"
            fallbackSrc="/assets/project/tablet_bgObj_01_bottom.png"
            width={189.3}
            height={242}
            alt=""
            className="absolute bottom-[25px] left-0"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      <FallbackImage
        src="/assets/project/bg_02.webp"
        fallbackSrc="/assets/project/bg_02.png"
        width={1920}
        height={3250}
        alt=""
      />
      <FallbackImage
        src="/assets/project/desktop-top-right.webp"
        fallbackSrc="/assets/project/desktop-top-right.png"
        width={350}
        height={359}
        alt=""
        className="absolute right-0 top-[405px]"
      />
      <FallbackImage
        src="/assets/project/desktop-middle-left.webp"
        fallbackSrc="/assets/project/desktop-middle-left.png"
        width={438}
        height={560}
        alt=""
        className="absolute bottom-1/2 left-0 translate-y-1/2"
      />
      <FallbackImage
        src="/assets/project/desktop-bottom-right.webp"
        fallbackSrc="/assets/project/desktop-bottom-right.png"
        width={672}
        height={805}
        alt=""
        className="absolute bottom-[173px] right-0"
      />
    </div>
  )
}

export default Background
