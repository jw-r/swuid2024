'use client'

import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    // 초기 크기 설정
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // 컴포넌트 마운트 시 한번 실행
    handleResize()

    // resize 이벤트 리스너 등록
    window.addEventListener('resize', handleResize)

    // cleanup 함수
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
