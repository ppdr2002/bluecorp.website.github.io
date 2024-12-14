import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'dropdown-appear': 'dropdown-appear 1.3s ease-in-out',
        'dropdown-disappear': 'dropdown-disappear 3s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
