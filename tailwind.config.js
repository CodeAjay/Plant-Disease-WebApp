/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'hero-image': "url('https://assets.technologynetworks.com/production/dynamic/images/content/320474/rapid-plant-disease-detection-with-novel-microneedle-technique-320474-960x540.jpg?cb=10225933')",
      },
    },
  },
  plugins: [],
}

