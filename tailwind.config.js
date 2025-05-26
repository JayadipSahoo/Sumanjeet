/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0a2a35',
          light: '#1c3b46',
          dark: '#051a23',
        },
        accent: {
          DEFAULT: '#f47521',
          light: '#ff8c3f',
          dark: '#d86210',
        },
        secondary: {
          DEFAULT: '#20b286',
          light: '#36c99d',
          dark: '#189b71',
        },
      },
      screens: {
        'xs': '400px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
}