/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },

  daisyui: {
    // themes: ['garden', 'night'],
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['autumn'],
          primary: '#D95D39',
          error: '#960200',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['night'],
          primary: '#D95D39',
          error: '#960200',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
