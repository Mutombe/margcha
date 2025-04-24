/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        maroon: {
          100: '#EED8D8',
          400: '#BA5A5A',
          600: '#912A2A',
          700: '#7A1F1F',
          800: '#631414',
          900: '#4A0909',
        }
      }
    },
  },
  plugins: [],
}

