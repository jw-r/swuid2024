'use client'

import Link from 'next/link'
import Icon from './icon'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname() as '/' | '/project' | '/designer' | '/guest-book'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])
  console.log(pathname === '/project')

  return (
    <>
      <div className="custom-container sticky top-0 z-50 flex h-[56px] items-center justify-between border-b border-black bg-primary-01 lg:h-[110px]">
        <Icon
          name="logo"
          className="size-[32px] cursor-pointer lg:size-[70px]"
          onClick={() => {
            if (pathname !== '/') {
              router.push('/')
            }
          }}
        />
        <div>
          {isMenuOpen ? (
            <Menu onClose={() => setIsMenuOpen(false)} />
          ) : (
            <Icon
              name="menu"
              className="cursor-pointer lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
          <div className="flex gap-[88px] font-pretendard text-[24px] transition-all *:py-[20px] *:opacity-50 hover:*:opacity-100 max-lg:hidden">
            <Link href="/project" className={cn(pathname === '/project' && '!opacity-100')}>
              PROJECT
            </Link>
            <Link href="/designer" className={cn(pathname === '/designer' && '!opacity-100')}>
              DESIGNER
            </Link>
            <Link href="/guest-book" className={cn(pathname === '/guest-book' && '!opacity-100')}>
              GUEST BOOK
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

const Menu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/70 px-mobile text-white md:px-tablet lg:px-desktop">
      <div className="flex h-[56px] items-center border-b border-transparent lg:h-[110px]">
        <div className="flex w-full justify-between">
          <Icon name="logo" className="size-[32px] lg:size-[70px]" />
          <Icon name="x" className="size-[32px] cursor-pointer" onClick={onClose} />
        </div>
      </div>
      <div className="mt-[24px] flex flex-col gap-[11px] font-pretendard text-[30px] leading-[150%] tracking-[-0.02em]">
        <Link href="/project" onClick={onClose}>
          Project
        </Link>
        <Link href="/designer" onClick={onClose}>
          Designer
        </Link>
        <Link href="/guest-book" onClick={onClose}>
          Guest Book
        </Link>
      </div>
    </div>
  )
}

export default Header
