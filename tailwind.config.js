/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // This enables dark mode
  theme: {
    extend: {
      colors: {
        'cream': '#f0efe3',
        'taupe': '#908f7a',
        'brown': '#75694e',
        'gray': '#838179',
        'charcoal': '#1a1a17',
      },
    },
  },
  plugins: [],
}