const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffd300",
          200: "#3a10e5",
          300: "#10162f",
          400: "#fff0e5"
        }
      },
      boxShadow: {
        "primary-100": "-10px 10px 0px 5px #ffd300",
        "primary-400": "0px 0px 10px 2px #fff0e5"
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1280px',
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto'
        },
      });
    })
  ],
}
