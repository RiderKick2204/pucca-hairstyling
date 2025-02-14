/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#D83333",
        secondary: "#F5CEE7",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
