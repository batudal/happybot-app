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
          light_blue: '#81CEE6',
          dark: '#1E1E1E',
          light: '#FFF6DC',

        },
      }
    },
  },
  plugins: [],
}

