/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#22223B",
        "light-beige": "#F2E9E4",
        "mid-beige": "#C9ADA7",
        "mid-brown": "#9A8C98",
        "mid-purple": "#4A4E69",
      },
    },
  },
  plugins: [],
};
