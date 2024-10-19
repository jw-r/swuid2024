'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

const IntroSequence = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const [posterComplete, setPosterComplete] = useState(pathname !== '/')

  const handlePosterVideoEnd = () => {
    setPosterComplete(true)
  }

  if (!posterComplete) {
    return (
      <video
        autoPlay
        muted
        src="/videos/진입포스터영상.mp4"
        onEnded={handlePosterVideoEnd}
        className="fixed inset-0 size-full"
      />
    )
  }

  return <>{children}</>
}

export default IntroSequence
