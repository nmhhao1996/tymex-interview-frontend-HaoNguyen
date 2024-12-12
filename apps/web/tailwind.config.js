/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "drone-ranger-pro": ["var(--font-drone-ranger-pro)"],
      },
      colors: {
        'product-card': 'var(--product-card-color)',
        'input': 'var(--input-color)',
        'primary': 'var(--primary-color)',
        'footer': 'var(--footer-color)',
      },
      backgroundImage: {
        "stars-image": "url('/img/background-stars.png')",
        "primary-gradient": "var(--primary-gradient)",
        "primary-gradient-2": "var(--primary-gradient-2)",
        "default-category-gradient": "var(--default-category-gradient)",
        "mythic-category-gradient": "var(--mythic-category-gradient)",
        "rare-category-gradient": "var(--rare-category-gradient)",
        "epic-category-gradient": "var(--epic-category-gradient)",
        "legendary-category-gradient": "var(--legendary-category-gradient)",
      },
      spacing: {
        header: "var(--header-height)",
      },
    },
  },
  plugins: [],
};
