'use client'

import { useState, useEffect, useRef } from 'react'

const IntroSequence = ({ children }: { children: React.ReactNode }) => {
  const [posterComplete, setPosterComplete] = useState(false)
  const posterVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
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
        <source src="/videos/진입포스터영상.webm" type="video/webm" />
      </video>
    )
  }

  return <>{children}</>
}

export default IntroSequence
