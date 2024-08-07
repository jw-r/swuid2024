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
      padding: {
        mobile: '16px',
        tablet: '64px',
        desktop: '136px',
      },
      gap: {
        mobile: '16px',
        tablet: '16px',
        desktop: '20px',
      },
      colors: {
        // Basic
        white: '#FFFFFF',
        black: '#000000',

        // Grayscales
        gray: {
          90: '#E5E5E5',
          80: '#CCCCCC',
          70: '#B3B3B3',
          60: '#999999',
          50: '#808080',
          40: '#666666',
          30: '#4D4D4D',
          20: '#333333',
          10: '#1A1A1A',
        },

        // Primary
        primary: {
          '01': '#211A18',
          '02': '#FEF5AD',
        },
      },
    },
  },
  plugins: [],
}
export default config
