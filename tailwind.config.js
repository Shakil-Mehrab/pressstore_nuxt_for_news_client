module.exports = {
  purge: {
    mode:"layers",
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: ['first'],
      colors:{
        customcolor: {
          100: '#040D33',
          200: '#b9b9b9',
          300: '#718096',
          400: '#336699',
          500: '#25282A'
        },
        background:{
          100: '#e7e7e7',//body background
          200: '#F0F0F0', //Latest post background
          300: '#094470',//photo gallery
          400: '#363B40',//footer background
          600:  '#42494F',//footer heading background
        },
        customborder:{
          100: '#ddd',
          200: '#333333'
        },
        bordercolor:{
          100: '#de1f26',
          200: '#858D94'
        }
      },
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'gugi': ['Gugi', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'nato': ['Noto Serif', 'serif']
       },
      screens: {
        'xs': '480px',
      }
    },


  },
  variants: {
    extend: {
      opacity: ['responsive', 'group-hover', 'hover', 'focus', 'disabled'],
      borderWidth: ['last'],
    }
  },
  // plugins: [require("@tailwindcss/forms")],
}

// theme: {
//
//     // => @media (min-width: 640px) { ... }
//     'md': '768px',
//     // => @media (min-width: 768px) { ... }
//     'lg': '1024px',
//     // => @media (min-width: 1024px) { ... }
//     'xl': '1280px',
//     // => @media (min-width: 1280px) { ... }
//     '2xl': '1536px',
//     // => @media (min-width: 1536px) { ... }
//   }
// }
