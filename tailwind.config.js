/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-white': '#F8FAFC',
        'soft-teal': '#2DD4BF',
        'navy-blue': '#1E293B',
        'teal-dark': '#0D9488',
        'accent-teal': '#99f6e4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

