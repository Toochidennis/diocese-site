import type { Config } from "tailwindcss"

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f3d2b",
        secondary: "#c5a559",
        light: "#f9f7f3"
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
        button: "8px"
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui"],
        display: ["Playfair Display", "serif"]
      }
    }
  }
} satisfies Config
