
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
      screens: {
          'sm': '480px',
          // => @media (min-width: 480px) { ... }

          'md': '768px',
          // => @media (min-width: 768px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
          'mont': ['Montserrat', 'system-ui'],
          'radio': ['Radiotechnika','ui-serif'],
      },
          extend: {
              colors: {
                  blue: '#27348B',
                  black: '#282828'
              }
          }

  },
  plugins: [],
}
