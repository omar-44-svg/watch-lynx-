/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#0B0B0B',
          50: '#1A1A1A',
          100: '#292929',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#F7ECC8',
          100: '#F4E4B0',
          200: '#EED581',
          300: '#E8C652',
          400: '#E2B724',
          500: '#D4AF37',
          600: '#A88B29',
          700: '#7C671E',
          800: '#504314',
          900: '#241E09',
        },
        navy: {
          DEFAULT: '#0A192F',
          50: '#1E4A8D',
          100: '#1A3F7A',
          200: '#153467',
          300: '#112954',
          400: '#0D1E41',
          500: '#0A192F',
          600: '#07141D',
          700: '#040F0B',
          800: '#010A09',
          900: '#000507',
        },
        silver: {
          DEFAULT: '#C0C0C0',
          50: '#FFFFFF',
          100: '#F5F5F5',
          200: '#E6E6E6',
          300: '#D7D7D7',
          400: '#C8C8C8',
          500: '#C0C0C0',
          600: '#A3A3A3',
          700: '#878787',
          800: '#6A6A6A',
          900: '#4E4E4E',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'premium-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};