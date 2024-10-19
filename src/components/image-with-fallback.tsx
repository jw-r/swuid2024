import Image from 'next/image'

interface Props extends React.ComponentProps<typeof Image> {
  src: string
  alt: string
}

const ImageWithFallback = ({ src, alt, ...rest }: Props) => {
  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      <Image src={src.split('.webp')[0] + '.png'} alt={alt} {...rest} />
    </picture>
  )
}

export default ImageWithFallback
