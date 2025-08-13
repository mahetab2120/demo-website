/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'honey-green': '#2F4F4F', // Dark forest green
        'honey-yellow': '#FFD700', // Honey-like yellow
        'honey-brown': '#8B4513', // Earthy brown
        'honey-light': '#F5F5DC', // Light beige for backgrounds
      },
    },
  },
  plugins: [],
}