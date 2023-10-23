/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fca311",
        // dark: "#041C32",
        // primary: "#00ADB5",
        dark: "#121212",
      },
    },
  },
  plugins: [],
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
};
