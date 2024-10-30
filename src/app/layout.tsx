import type { Metadata } from 'next'
import { eulyoo1945, pretendard } from './fonts'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import IntroSequence from '@/components/Intro-sequence'
import FAB from '@/components/fav-button'
import AmplitudeProvider from '@/components/amplitude'

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
        <AmplitudeProvider>
          <IntroSequence>
            <Header />
            <div className="relative mx-auto max-w-screen">
              {children}
              <Footer />
            </div>
            <FAB />
          </IntroSequence>
        </AmplitudeProvider>
      </body>
    </html>
  )
}
