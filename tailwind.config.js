/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-purple": "#a855f7",
        "neon-cyan": "#06b6d4",
        "neon-blue": "#3b82f6",
        "dark-bg": "#0a0a0a",
        glass: "rgba(255, 255, 255, 0.05)",
      },
      boxShadow: {
        "neon-purple": "0 0 20px rgba(168, 85, 247, 0.5)",
        "neon-cyan": "0 0 20px rgba(6, 182, 212, 0.5)",
        "neon-blue": "0 0 20px rgba(59, 130, 246, 0.5)",
        glow: "0 0 30px rgba(168, 85, 247, 0.3)",
      },
      animation: {
        "pulse-glow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
