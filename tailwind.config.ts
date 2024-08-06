import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        eulyoo1945: ['EULYOO1945', 'serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
      screens: {
        mobile: { max: '519px' },
        tablet: { min: '520px', max: '829px' },
        desktop: { min: '830px' },
      },
      maxWidth: {
        screen: '1920px',
      },
      margin: {
        mobile: '16px',
        tablet: '64px',
        desktop: '136px',
      },
      gap: {
        mobile: '16px',
        tablet: '16px',
        desktop: '20px',
      },
    },
  },
  plugins: [],
}
export default config
