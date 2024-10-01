/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'aboutus-bg': "url('src/assets/SvgIcons/aboutus-bg.svg')",
        'aboutus-vertical-bg': "url('src/assets/SvgIcons/aboutus-vertical-bg.svg')",
        'navbar-bg': "url('src/assets/SvgIcons/navbarbg.svg')",
        'footer-bg': "url('src/assets/SvgIcons/horizontalbg.svg')",
        'getStarted-bg': "url('src/assets/SvgIcons/getstarted.svg')"
      },
    },
  },
  plugins: [],
}

