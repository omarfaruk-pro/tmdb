/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '0 1rem', 
        screens: {
          sm: '100%', 
          md: '576px',
          lg: '768px',
          xl: '992px',
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
      themes: ["night"],
    },
}

