/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./style.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
      'vscode-dark':'#0B0B0C',
      'vscode-mainOne':'#0B0B0C',
        
    }
    },
  },
  plugins: [],
}

