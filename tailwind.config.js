// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["CircularStd-Book", "CircularStd-Medium", "CircularStd-Bold", "CircularStd-Black"],
        "CircularStd-Medium": ["CircularStd-Medium"],
        "CircularStd-Bold": ["CircularStd-Bold"],
        "CircularStd-Black": ["CircularStd-Black"],
        "CircularStd-Book": ["CircularStd-Book"],
      },
      fontSize: {
        "xxs":"11px",
        "xsx":"10px",
        "sxs":"8px"
      }
    },
  },
  plugins: [],
}