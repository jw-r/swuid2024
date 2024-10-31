'use client'

import React, { ComponentPropsWithoutRef, useState } from 'react'
import Image from 'next/image'

interface FallbackImageProps extends ComponentPropsWithoutRef<typeof Image> {
  fallbackSrc?: string
}

const FallbackImage = ({
  src,
  fallbackSrc = '',
  alt,
  width,
  height,
  ...props
}: FallbackImageProps) => {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}

export default FallbackImage
