'use client'

import React, { ComponentPropsWithoutRef, useState } from 'react'
import Image from 'next/image'

interface FallbackImageProps extends ComponentPropsWithoutRef<typeof Image> {
  fallbackSrc?: string
  hideOnError?: boolean
}

const FallbackImage = ({
  src,
  fallbackSrc = '',
  alt,
  width,
  height,
  hideOnError = false,
  className,
  ...props
}: FallbackImageProps) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)
  const [triedFallback, setTriedFallback] = useState(false)

  if (hasError && hideOnError && triedFallback) {
    return null
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        if (fallbackSrc && !triedFallback) {
          setImgSrc(fallbackSrc)
          setTriedFallback(true)
        } else {
          setHasError(true)
        }
      }}
    />
  )
}

export default FallbackImage
