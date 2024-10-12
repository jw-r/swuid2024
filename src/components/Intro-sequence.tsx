'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const IntroSequence = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const [posterComplete, setPosterComplete] = useState(pathname !== '/')
  const posterVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (pathname !== '/') return

    const posterVideo = document.createElement('video')
    posterVideo.src = '/videos/진입포스터영상.webm'
    posterVideo.preload = 'auto'

    return () => {
      posterVideo.onloadeddata = null
      posterVideo.onerror = null
    }
  }, [])

  const handlePosterVideoEnd = () => {
    setPosterComplete(true)
  }

  if (!posterComplete) {
    return (
      <video
        ref={posterVideoRef}
        autoPlay
        muted
        onEnded={handlePosterVideoEnd}
        className="fixed inset-0 size-full"
      >
        <source src="/videos/진입포스터영상.mp4" type="video/mp4" />
      </video>
    )
  }

  return <>{children}</>
}

export default IntroSequence
