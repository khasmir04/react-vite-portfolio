/** @type {import('tailwindcss').Config} */
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
      secondary: '#EB8258',
      custom: {
        100: "#242424",
        300: "#242424",
        400: "#242424",
        200: "#242424",
        500: "#242424",
        600: "#242424",
        700: "#242424",
        800: "#242424",
        900: "#242424",
      },
    }
  },
  plugins: [],
}
