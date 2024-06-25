/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Incluye todas las subcarpetas y archivos bajo src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d22730',
        primaryDark: '#a71d24',
        secondary: '#8338ec',
        secondaryDark: '#6124a5',
        tertiary: '#003566',
        tertiaryDark: '#00274c',
        quaternary: '#3a0ca3',
        quaternaryDark: '#2a0874',
        quinary: '#4361ee',
        quinaryDark: '#2b44c0',
      },
    },
  },
  plugins: [],
};
