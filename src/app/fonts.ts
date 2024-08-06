import localFont from 'next/font/local'

export const eulyoo1945 = localFont({
  src: [
    {
      path: '../../public/fonts/Eulyoo1945-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Eulyoo1945-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-eulyoo1945',
  display: 'swap',
})

export const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
})
