/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "active-input": "linear-gradient(to left, hsl(249, 99%, 64%), hsl(278, 94%, 30%))",
        "front-card": "url(/images/bg-card-front.png)",
        "header-mobile": "url(/images/bg-main-mobile.png)",
        "header-desktop": "url(/images/bg-main-desktop.png)",
      },
      textColor: {
        "red-errors": "hsl(0, 100%, 66%)",
        "dark-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)"
      },
      backgroundColor: {
        "light-violet": "hsl(270, 3%, 87%)",
      },
      borderColor: {
        "red-errors": "hsl(0, 100%, 66%)",
      },
      fontFamily: {
        "space-grotesk": "'Space Grotesk', sans-serif"
      },
      fontSize: {
        "normal-size": "18px"
      },
      screens: {
        "desktop": "1440px"
      }
    },
  },
  plugins: [],
}
