/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "bellefair": ["Bellefair", "serif"],
        "barlow": ["Barlow Condensed", "sans-serif"]
      }
    },
  },
  plugins: [],
}

