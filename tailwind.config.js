/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(10rem, 1fr))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"]
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        black: {
          "primary": "#F36090",
          "secondary": "#202020",
          "accent": "#343232",
          "neutral": "#272626",
          "base-100": "#000000",
          "info": "#0000ff",
          "success": "#008000",
          "warning": "#ffff00",
          "error": "#ff0000",
        },
        wireframe: {
          "primary": "#F36090",
          "secondary": "#eeeeee",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        }
      }]
  }
}
