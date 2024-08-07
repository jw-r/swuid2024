import React, { useEffect, useRef } from 'react'

interface RadialPatternBackgroundProps {
  width?: number
  height?: number
  centerX?: number
  centerY?: number
  initialOpacity?: number
  lineCount?: number
}

const RadialPatternBackground: React.FC<RadialPatternBackgroundProps> = ({
  width = window.innerWidth,
  height = window.innerHeight,
  centerX,
  centerY,
  initialOpacity = 0.2,
  lineCount = 100,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = width
    canvas.height = height

    const center = {
      x: centerX || canvas.width / 2,
      y: centerY || canvas.height / 2,
    }

    ctx.fillStyle = '#211A18'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const drawLine = () => {
      const angle = Math.random() * Math.PI * 2
      const length = Math.random() * Math.max(canvas.width, canvas.height)
      const endX = center.x + Math.cos(angle) * length
      const endY = center.y + Math.sin(angle) * length

      ctx.beginPath()
      ctx.moveTo(center.x, center.y)
      ctx.lineTo(endX, endY)

      const gradient = ctx.createLinearGradient(center.x, center.y, endX, endY)
      gradient.addColorStop(0, `rgba(255, 248, 185, ${initialOpacity})`)
      gradient.addColorStop(1, 'rgba(255, 248, 185, 0)')

      ctx.strokeStyle = gradient
      ctx.lineWidth = 0.5
      ctx.stroke()
    }

    for (let i = 0; i < lineCount; i++) {
      drawLine()
    }

    // 중심 원 그리기
    ctx.beginPath()
    ctx.arc(center.x, center.y, 2, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255, 248, 185, 0.8)'
    ctx.fill()
  }, [width, height, centerX, centerY, initialOpacity, lineCount])

  return <canvas ref={canvasRef} width={width} height={height} className="absolute inset-0" />
}

export default RadialPatternBackground
