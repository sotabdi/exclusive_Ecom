/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryWhite: 'var(--primaryWhite)',
        secondaryWhite: 'var(--secondaryWhite)',
        textWhite: 'var(--textWhite)',
        extraWhite: 'var(--extraWhite)',
        primaryBlack: 'var(--primaryBlack)',
        secondaryBlack: 'var(--secondaryBlack)',
        textGrey: 'var(--textGrey)',
        primaryRed: 'var(--primaryRed)',
        secondaryRed: 'var(--secondaryRed)',
        green: 'var(--green)',
        blueShade: 'var(--blueShade)',
        black30: 'var(--black30)',
      },
      fontFamily: {
        popins: 'var(--popins)',
        inter: 'var(--inter)',
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}