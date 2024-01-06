/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      mono: ['Space Mono', 'monospace'],
    },
    extend: {
      colors: {
        happy: {
          dark: '#1E1E1E',
          light: '#FFEFCE',
          yellow: '#FFDD02',
          yellow_dark: '#F4D400',
          black: '#000000',
          red: '#FA4238',
          green: '#00CE7C',
          light_blue: '#81CEE6',
          light_pink: '#F58B9F',
          light_green: '#C7FDA9',
          purple: '#9747FF',
          blue: '#00A3FF',
          scroll: '#EBC28E',
        },
      }
    },
  },
  plugins: [],
}

