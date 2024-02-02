/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      "gradient-light-blue": "#01C0FE",
      "gradient-dark-blue": "#0481FC",
      "light-blue": "#0567FB",
      "dark-blue": "#010F24",
      gray: "#353535",
      "off-white": "#E3E3E3",
      "btn-blue": "#E3E3E3",
      "gradient-light-gold": "#D9BC6A",
      "gradient-dark-gold": "#956E2F",
      "footer-bg": "#010E22",
      "very-dark-blue": "#021025",
      "backdrop-white": "#F7F8FA",
      "text-gray": "#6C7279",
      "light-gray-backdrop": "#E4E7F0",
    },
    fontFamily: {
      sora: ["Sora", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      lexend: ["Lexend", "sans-serif"],
      lexendDeca: ["Lexend Deca", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-bg-img": 'url("/src/assets/images/hero_bg.png")',
        "plans-bg-img": 'url("/src/assets/images/plans_bg_img.png")',
        "contact-section_bg_img":
          'url("/src/assets/images/happy_to_connect_img.png")',
      },
    },
  },
  plugins: [],
};
