import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        spinX: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        }
      },
      animation: {
        spinY: 'spinX 0.5s linear'
      },
      backgroundImage: {
        hero1: 'url(./src/assets/images/heroimg1.png)',
        hero2: 'url(./src/assets/images/heroimg2.jpg)',
        hero3: 'url(./src/assets/images/heroimg3.jpg)',
        hero4: 'url(./src/assets/images/heroimg4.jpg)'
      }
    },
    plugins: [],
    colors: {
      ...colors,
      primary: '#000000',
      card_bg: '#1D1D1D',
      navColor: '#A1A1A1',
      red: '#C61F1F'
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
