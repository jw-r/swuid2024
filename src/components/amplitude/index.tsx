'use client'

import { initAmplitude } from '@/lib/amplitude'
import { useEffect } from 'react'

function AmplitudeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initAmplitude()
  }, [])

  return <>{children}</>
}

export default AmplitudeProvider
