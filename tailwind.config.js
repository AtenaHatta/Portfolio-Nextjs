// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        bghero_light: "linear-gradient(180deg, rgba(0, 0, 0, 0.01), #000000 100%),url(/images/bg_hero.webp)",
        bghero_dark:"linear-gradient(180deg, rgba(0, 0, 0, 0.01), #000000 100%),url(/images/bg_hero_dark.webp)",
        profile_img: "url(/images/profilephoto.webp)",
        about_img: "url(/images/about.webp)",
        myYoutube_img: "url(/images/youtube.webp)",
      },
      textColor: {
        mainColor: "#6923E1",
      },
      borderColor: {
        borderMainColor: "#6923E1",
      },
      letterSpacing: {
        "extra-wide": "0.15em",
        "super-wide": "0.25em",
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
      darkMode: "class",
    },
  },
  plugins: [],
};
