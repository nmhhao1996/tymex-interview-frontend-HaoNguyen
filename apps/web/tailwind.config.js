/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "stars-image": "url('/img/background-stars.png')",
      },
      spacing: {
        header: "84px",
      },
    },
  },
  plugins: [],
};
