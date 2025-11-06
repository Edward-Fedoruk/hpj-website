/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '6xl': ['52px', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
