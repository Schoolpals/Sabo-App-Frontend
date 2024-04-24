/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgba(4, 16, 58, 1)',
      },
      boxShadow: {
          inner: 'inset 0 -10px 10px -10px rgba(4, 16, 58, 1)',
      },
      colors: {
        color1:  'rgba(3, 15, 58, 1)',
      },
      bgcolor: {
        btncolor: 'rgba(11, 102, 255, 1)',
      }
    },
  },
  plugins: [],
  
}

