'use client'

import useWindowSize from '@/hooks/use-window-size'
import Vimeo from '@u-wave/react-vimeo'

interface Props {
  link: string
}

const VimeoPlayer = ({ link }: Props) => {
  const { width } = useWindowSize()

  // 초기 렌더링 시 width가 0인 것 방지
  if (width === 0) return null

  return <Vimeo key={link} video={link} className="aspect-[16/9]" width={width} />
}

export default VimeoPlayer
