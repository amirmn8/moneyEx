/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'ExYellow': '#F9CC0B',
        'navCol': '#273141',
        'ExGreen': '#00C0AF',
        'ExGray': "#F7F8FA",
        'ExPlaceHolder': '#707070',
        'ExBlack': '#1B1B1B'
      },
      spacing: {
        '5per': '5vw',
        '530': '530px',
        '400': '400px',
      },
      backgroundImage: {
        'USDT': 'radial-gradient(circle, rgba(0,192,175,0.4430147058823529) 0%, rgba(247,248,250,1) 43%);',
        'Shiba': 'radial-gradient(circle, rgba(192,0,0,0.4430147058823529) 0%, rgba(247,248,250,1) 43%);',
        'ETH': 'radial-gradient(circle, rgba(0,36,192,0.4430147058823529) 0%, rgba(247,248,250,1) 43%);',
        'BTC': 'radial-gradient(circle, rgba(192,129,0,0.4430147058823529) 0%, rgba(247,248,250,1) 43%);',
        'USDTdark': 'radial-gradient(circle, rgba(37,236,167,0.711922268907563) 0%, rgba(27,27,27,1) 74%);',
        'Shibadark': 'radial-gradient(circle, rgba(198,74,74,0.711922268907563) 0%, rgba(27,27,27,1) 74%);',
        'ETHdark': 'radial-gradient(circle, rgba(74,122,198,0.711922268907563) 0%, rgba(27,27,27,1) 74%);',
        'BTCdark': 'radial-gradient(circle, rgba(230,183,11,0.711922268907563) 0%, rgba(27,27,27,0.6558998599439776) 75%);',
        'lightBg': "linear-gradient(to bottom, #273141, #372c3d, #432831, #442821, #3a2d16);",
        'darkBg': "linear-gradient(to bottom, #f6b33f, #f8b936, #f9bf2c, #f9c520, #f9cc0b);",
        'hero-pattern': "url('/assets/images/HomeNav.png')",
        'exgreenBg':'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(37,236,167,0.08727240896358546) 100%);',
        'darkExgreenBg':'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(37,236,167,0.08727240896358546) 100%);',
        'exPink': 'linear-gradient(90deg, rgba(255,205,205,0.16290266106442575) 0%, rgba(255,255,255,0) 100%);',
        'exBlog':'linear-gradient(355deg, rgba(58,45,22,1) 0%, rgba(39,49,65,1) 100%);',
        'contact': "url('/assets/images/Earth.png')",
        'contact2': "url('/assets/images/Earth2.png')",
        'terms': "radial-gradient(circle, rgba(0,192,175,0) 62%, rgba(0,192,175,0.17970938375350143) 100%);",


      },
      width: {
        '540': '540px',
        '328': '328px',
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),

    // ...
  ],
}

