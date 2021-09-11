module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#5865F2",
      "not-black": "#2d2f33",
      white: "#fff",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
