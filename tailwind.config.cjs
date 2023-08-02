/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        default_morph: {
          "0%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
      },
      animation: {
        image_morph: "default_morph 8s ease-in-out infinite",
      },
      fontFamily: {
        league: ['League Spartan', 'sans-serif'],
      },
    },
    colors: {
      ...colors,
      secondary: '#EB8258',
      'mine-shaft': {
        DEFAULT: '#242424',
        50: '#808080',
        100: '#767676',
        200: '#616161',
        300: '#4D4D4D',
        400: '#383838',
        500: '#242424',
        600: '#080808',
        700: '#000000',
        800: '#000000',
        900: '#000000',
        950: '#000000'
      },
      'cod-gray': {
        DEFAULT: '#1B1919',
        50: '#7A7171',
        100: '#706767',
        200: '#5B5454',
        300: '#454040',
        400: '#302D2D',
        500: '#1B1919',
        600: '#000000',
        700: '#000000',
        800: '#000000',
        900: '#000000',
        950: '#000000'
      },
      'burnt-sienna': {
        DEFAULT: '#EB8258',
        50: '#FFFDFC',
        100: '#FCEFEA',
        200: '#F8D4C5',
        300: '#F4B9A1',
        400: '#EF9D7C',
        500: '#EB8258',
        600: '#E55D26',
        700: '#BC4617',
        800: '#8A3311',
        900: '#58210B',
        950: '#3F1708'
      },
      'athens-gray': {
        DEFAULT: '#E5E7EB',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#FFFFFF',
        400: '#FCFCFD',
        500: '#E5E7EB',
        600: '#C5CAD3',
        700: '#A6ACBA',
        800: '#868FA2',
        900: '#687387',
        950: '#5C6578'
      },
    }
  },
  plugins: [],
}
