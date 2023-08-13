/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      images: (theme) => ({
      }),
      fontFamily: {
        yesevaOne: ['Yeseva One', 'cursive'],
      },
    },
    screens: {
      xs: "250px",
      sm: "360px",
      smXl: "400px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
