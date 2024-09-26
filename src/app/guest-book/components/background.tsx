'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Background = () => {
  const isMobile = useMediaQuery('(max-width: 519px)')
  const isTablet = useMediaQuery('(min-width: 520px) and (max-width: 829px)')
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    const updateMaxHeight = () => {
      const guestbookMain = document.getElementById('guestbook-main')
      const footer = document.getElementById('footer')
      if (guestbookMain && footer) {
        const totalHeight = guestbookMain.offsetHeight + footer.offsetHeight
        setMaxHeight(totalHeight)
      }
    }

    // Initial update
    updateMaxHeight()

    // Update on window resize
    window.addEventListener('resize', updateMaxHeight)

    // Cleanup
    return () => window.removeEventListener('resize', updateMaxHeight)
  }, [])

  const backgroundStyle = {
    maxHeight: maxHeight ? `${maxHeight}px` : '100%',
    overflow: 'hidden',
  }

  if (isMobile) {
    return (
      <div className="absolute inset-0 z-[-1]" style={backgroundStyle}>
        <Image src="/assets/guest/mobile_bg_04.webp" fill alt="" className="top-0 object-cover" />
        <Image src="/assets/guest/mobile_Obj_04.webp" fill alt="" className="top-0 object-cover" />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="absolute inset-0 z-[-1]" style={backgroundStyle}>
        <Image src="/assets/guest/tablet_bg_04.webp" fill alt="" className="top-0 object-cover" />
        <Image
          src="/assets/guest/tablet_obj_04.webp"
          fill
          alt=""
          className="bottom-0 left-0 object-cover"
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-[-1]" style={backgroundStyle}>
      <Image src="/assets/guest/bg_04.webp" fill alt="" className="object-cover" />
      <Image
        src="/assets/guest/bgObj_gestbook_01.webp"
        width={1922}
        height={2280}
        alt=""
        className="absolute right-0 top-2/3 object-cover"
      />
    </div>
  )
}

export default Background
