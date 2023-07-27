/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      'mobile-small': { raw: '(max-width: 320px)' },
      'mobile-landscape-9': { raw: '(orientation: landscape) and (max-width: 927px)' },
      'mobile-landscape-7': { raw: '(orientation: landscape) and (max-width: 700px)' },
      'desktop-900': { raw: '(min-width: 900px)' }, 'desktop-1150': { raw: '(min-width: 1150px)' }, 'desktop-1280': { raw: '(min-width: 1280px)' },
      'desktop-1400': { raw: '(min-width: 1400px)' },  'desktop-1536': { raw: '(min-width: 1536px)' }, 
      'desktop-1600': { raw: '(min-width: 1600px)' }, 'desktop-1670': { raw: '(min-width: 1670px)' }, 
    },
    extend: {
      boxShadow: {
        glow: '0 2px 15px rgb(0, 0, 0, 0.3)',
        bright: '0 0 10px rgb(253, 185, 19, 0.5)',
      },
    },
  },
  plugins: [],
}

