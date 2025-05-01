// tailwind.config.js
import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Tambahkan jika menggunakan Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Tambahkan jika komponen ada di folder components
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Tambahkan jika menggunakan App Router
  ],
  darkMode: 'selector', // Menggunakan data-theme="dark"
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors, // Plugin untuk CSS variables
  ],
} satisfies Config;

// Tambahkan fungsi plugin untuk CSS variables
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}