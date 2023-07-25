/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
