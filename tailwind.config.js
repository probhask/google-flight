/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Google Flights Primary Colors

        primary: {
          50: "#e8f0fe", // Light blue background
          100: "#d2e3fc", // Hover states
          200: "#aecbfa", // Secondary elements
          300: "#8ab4f8", // Borders
          400: "#669df6", // Icons
          500: "#4285f4", // Primary blue (Google blue)
          600: "#3367d6", // Pressed state
          700: "#2549b8", // Dark variant
          800: "#193099", // Darker variant
          900: "#10217a", // Darkest variant
        },

        // Google Flights Secondary Colors
        secondary: {
          50: "#fef7e0", // Light yellow
          100: "#feefc3", // Light yellow hover
          200: "#fde293", // Warning states
          300: "#fdd663", // Accent yellow
          400: "#fcc934", // Bright yellow
          500: "#fbbc04", // Google yellow
          600: "#e9ab00", // Pressed state
          700: "#d79b00", // Dark variant
        },

        // Google Flights Status Colors
        success: {
          50: "#e6f4ea",
          100: "#ceead6",
          500: "#34a853", // Google green
          700: "#1e8e3e",
        },
        error: {
          50: "#fce8e6",
          100: "#fad2cf",
          500: "#ea4335", // Google red
          700: "#d33426",
        },

        // Neutral Colors (Google Flights style)
        gray: {
          50: "#f8f9fa", // Light backgrounds
          100: "#f1f3f4", // Card backgrounds
          200: "#e8eaed", // Borders
          300: "#dadce0", // Dividers
          400: "#bdc1c6", // Disabled text
          500: "#9aa0a6", // Secondary text
          600: "#80868b", // Primary text
          700: "#5f6368", // Dark text
          800: "#3c4043", // Headings
          900: "#202124", // Dark mode text
        },

        // Special Colors
        flight: {
          economy: "#4285f4", // Blue
          premium: "#34a853", // Green
          business: "#fbbc04", // Yellow
          first: "#ea4335", // Red
        },
      },
    },
  },
  plugins: [],
};
