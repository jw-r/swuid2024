'use client'

import { useState } from 'react'
import Background from './components/background'

export type Sort = 'ux-design' | 'digital-fabrication' | 'bx-design'

export default function Project() {
  const [sort, setSort] = useState<Sort>('ux-design')

  return (
    <>
      <Background sort={sort} />
      <main className="custom-container h-[300vh]"></main>
    </>
  )
}
