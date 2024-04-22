/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3238f2",
      },
      fontFamily: {
        display: ["Poppins", "sans-sarif"],
        body: ["Inter", "san-sarif"],
      },
    },
  },
  plugins: [],
};
