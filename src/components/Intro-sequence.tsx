'use client'

import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const IntroSequence = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const [posterComplete, setPosterComplete] = useState(false)
  const [videoError, setVideoError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video && pathname === '/') {
      video.load()

      // 비디오 재생 시도
      const playAttempt = setInterval(() => {
        video
          .play()
          .then(() => {
            clearInterval(playAttempt)
          })
          .catch((error) => {
            console.warn('Auto-play failed:', error)
          })
      }, 1000)

      // 디버깅을 위한 이벤트 리스너들
      const onLoadedMetadata = () => console.log('Video metadata loaded')
      const onCanPlay = () => console.log('Video can play')
      const onPlay = () => console.log('Video started playing')
      const onError = (e: Event) => {
        console.error('Video error:', (e.target as HTMLVideoElement).error)
        setVideoError((e.target as HTMLVideoElement).error?.message || 'Unknown error')
      }

      video.addEventListener('loadedmetadata', onLoadedMetadata)
      video.addEventListener('canplay', onCanPlay)
      video.addEventListener('play', onPlay)
      video.addEventListener('error', onError)

      return () => {
        clearInterval(playAttempt)
        video.removeEventListener('loadedmetadata', onLoadedMetadata)
        video.removeEventListener('canplay', onCanPlay)
        video.removeEventListener('play', onPlay)
        video.removeEventListener('error', onError)
      }
    }
  }, [pathname])

  const handlePosterVideoEnd = () => {
    setPosterComplete(true)
  }

  if (!videoError && !posterComplete && pathname === '/') {
    return (
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        src="/videos/진입포스터영상.mp4"
        onEnded={handlePosterVideoEnd}
        className="fixed inset-0 size-full"
      />
    )
  }

  return <>{children}</>
}

export default IntroSequence
