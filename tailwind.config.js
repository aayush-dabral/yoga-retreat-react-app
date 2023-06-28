/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors : {
        sitegreen : '#B0C289',
        litegreen : '#F5F7F0'
      },
      animation: {
        shine: "shine 1s",
        fadeIn: "fade-in_1s_ease-in-out"
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  darkMode: "class"
}



