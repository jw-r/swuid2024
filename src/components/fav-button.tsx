'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const FAB = () => {
  const [isVisible, setIsVisible] = useState(false)
  const fabRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let lastScrollY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(() => {
    if (fabRef.current) {
      if (isVisible) {
        gsap.to(fabRef.current, {
          duration: 0.3,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        })
      } else {
        gsap.to(fabRef.current, {
          duration: 0.3,
          opacity: 0,
          y: 50,
          ease: 'power3.out',
        })
      }
    }
  }, [isVisible])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      ref={fabRef}
      className="fixed bottom-[40px] right-[16px] opacity-0 focus:outline-none md:right-[32px] lg:hidden"
      onClick={handleClick}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="#37302F" />
        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#FEF5AD" />
        <path
          d="M24.0017 32L24.0017 16.2222M24.0017 16.2222L16.8906 23.3333M24.0017 16.2222L31.1128 23.3333"
          stroke="#FEF5AD"
        />
      </svg>
    </button>
  )
}

export default FAB
