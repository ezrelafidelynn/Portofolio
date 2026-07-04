/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "site-bg": "#000510",
        "card-bg": "#0b1019",
        "cert-bg": "#12151c",
        "pink": {
          primary: "#f472b6",
          light: "#f9a8d4",
          dark: "#ec4899",
          muted: "rgba(244,114,182,0.15)",
        },
        "tag-text": "#d1d1d6",
        "blob": "rgba(72,68,86,0.55)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
