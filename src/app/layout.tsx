import type { Metadata } from 'next'
import { eulyoo1945, pretendard } from './fonts'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'SWU ID 2024',
  description: 'SWU ID 2024',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${eulyoo1945.variable} ${pretendard.variable}`}>
      <body className={pretendard.className}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  )
}
