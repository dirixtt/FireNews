// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '0rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

