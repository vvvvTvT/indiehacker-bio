/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        '[#1DA1F2]': '#1DA1F2',
        '[#FF0000]': '#FF0000',
        '[#0A66C2]': '#0A66C2',
        '[#181717]': '#181717',
        '[#E4405F]': '#E4405F',
        '[#1877F2]': '#1877F2',
        '[#000000]': '#000000',
        '[#BD081C]': '#BD081C',
        '[#FF4500]': '#FF4500',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}