// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // React files in src folder
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1D4ED8", // Example: custom primary color
          secondary: "#64748B",
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  