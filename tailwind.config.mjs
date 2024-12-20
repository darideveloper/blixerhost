/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fcfffe',
        grey: '#c1deee',
        blue: {
          light: '#11f7eb',
          medium: '#6a97ac',
          dark: '#010717',
          alternative: '#0e1e29'
        },
        green: {
          light: '#39ff79',
          dark: '#0bc45f',
        }
      },
    },
  },
  plugins: [],
};
