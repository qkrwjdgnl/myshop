/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}" // Next.js 13 이상에서 사용하는 app 디렉토리 지원
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};