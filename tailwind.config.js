/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx}",
    ],
  theme: {
    extend: {
      screens: {
        'mob': '640px',  
        'tab': '768px',  
        'lap': '1024px', 
        'desk': '1280px',
        'bigg': '1536px', 
      },
    },
  },
  plugins: [],
}

