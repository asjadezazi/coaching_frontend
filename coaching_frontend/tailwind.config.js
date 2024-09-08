/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'aboutus-bg': "url('src/assets/aboutus-bg.svg')",
        'aboutus-vertical-bg': "url('src/assets/aboutus-vertical-bg.svg')",

      },
    },
  },
  plugins: [],
}

