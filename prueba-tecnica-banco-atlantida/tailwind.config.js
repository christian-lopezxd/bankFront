/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#d22730',
        'secondary': '#8338ec',
        'tertiary': '#003566',
        'quaternary': '#3a0ca3',
        'quinary': '#4361ee',
  
        },
    },
  },
  plugins: [],
};
