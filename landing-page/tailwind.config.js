/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
extend: {
    BackgroundImage: {
        'hero-pattern': "url('../image/pexels-cottonbro-studio-6153354.jpg')",

    }
},

  },
  plugins: [],
}

