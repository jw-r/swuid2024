import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			eulyoo1945: ['EULYOO1945', 'serif'],
  			pretendard: ['Pretendard', 'sans-serif']
  		},
  		screens: {
  			md: '520px',
  			lg: '830px'
  		},
  		maxWidth: {
  			screen: '1920px'
  		},
  		margin: {
  			mobile: '16px',
  			tablet: '64px',
  			desktop: '136px'
  		},
  		padding: {
  			mobile: '16px',
  			tablet: '64px',
  			desktop: '136px'
  		},
  		colors: {
  			white: '#FFFFFF',
  			black: '#000000',
  			gray: {
  				'10': '#1A1A1A',
  				'20': '#333333',
  				'30': '#4D4D4D',
  				'40': '#666666',
  				'50': '#808080',
  				'60': '#999999',
  				'70': '#B3B3B3',
  				'80': '#CCCCCC',
  				'90': '#E5E5E5'
  			},
  			primary: {
  				'01': '#211A18',
  				'02': '#FEF5AD'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
