/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1E1E1E", // Dark background for cards
        gold: "#FFD700", // Gold for accents
        emerald: "#50C878", // Green for success or positive elements
        ruby: "#DC143C", // Red for alerts or status
        lightgray: "#E2E8F0", // Light gray for text
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards", // Custom fadeIn animation
      },
    },
  },
  plugins: [],
};
