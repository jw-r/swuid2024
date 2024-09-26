'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'

interface Props {
  sort: 'UX' | 'DF' | 'BX'
}

const Background = ({ sort }: Props) => {
  const isMobile = useMediaQuery('(max-width: 519px)')
  const isTablet = useMediaQuery('(min-width: 520px) and (max-width: 829px)')

  const array =
    sort === 'UX'
      ? Array.from({ length: 2 })
      : sort === 'BX'
        ? Array.from({ length: 4 })
        : Array.from({ length: 1 })

  if (isMobile) {
    return (
      <div className="absolute inset-0 z-[-1]">
        <Image src="/assets/project/mobile_bg_01.webp" fill alt="" />
        {array.map((_, index) => (
          <div
            key={index}
            className="absolute w-full"
            style={{
              top: `${index * 437}px`,
              height: '437px',
            }}
          >
            <Image
              src="/assets/project/mobile_bgObj_01_right.webp"
              width={152}
              height={156}
              alt=""
              className="absolute right-0 top-0"
            />
            <Image
              src="/assets/project/mobile_bgObj_01_bottom.webp"
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
        <Image src="/assets/project/tablet_bg_01.webp" fill alt="" />
        <div className="absolute top-0 h-[850px] w-full">
          <Image
            src="/assets/project/mobile_bgObj_01_right.webp"
            width={151.3}
            height={155.1}
            alt=""
            className="absolute right-0 top-[175px]"
          />
          <Image
            src="/assets/project/tablet_bgObj_01_bottom.webp"
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
    <div className="absolute inset-0 z-[-1]">
      <Image src="/assets/project/bg_02.webp" fill alt="" className="bottom-0" />
      <Image
        src="/assets/project/desktop-top-right.webp"
        width={350}
        height={359}
        alt=""
        className="absolute right-0 top-[405px]"
      />
      <Image
        src="/assets/project/desktop-middle-left.webp"
        width={438}
        height={560}
        alt=""
        className="absolute bottom-1/2 left-0 translate-y-1/2"
      />
      <Image
        src="/assets/project/desktop-bottom-right.webp"
        width={672}
        height={805}
        alt=""
        className="absolute bottom-[173px] right-0"
      />
    </div>
  )
}

export default Background
