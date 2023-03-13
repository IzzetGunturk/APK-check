//--------------------------------------------------------------------------
// Tailwind site configuration
//--------------------------------------------------------------------------
//
// Use this file to completely define the current sites design system by
// adding and extending to Tailwinds default utility classes.
//

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  presets: [],
  theme: {
    // Here we define the default colors available. If you want to include
    // all default Tailwind colors you should extend the colors instead.
    colors: {
      black:   '#000',
      white:  '#fff',
      // Neutrals: neutral colors, with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
      neutral: {
        DEFAULT: colors.slate['800'],
        ...colors.slate
      },
      // Primary: primary brand color with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
      primary: {
        DEFAULT: '#E70082'
      },
      secondary: {
        DEFAULT: '#3C4A67'
      },
      tertiary: {
        DEFAULT: '#3E3E3E' 
      },
      footertitle: {
        DEFAULT: '#38414F'
      },
      footericon: {
        DEFAULT: '#64748b' 
      },
      cardshover: {
        DEFAULT: '#F6F6F6'
      },
      mobilemenucolor: {
        DEFAULT: '#a2c7e3'
      },
      background: {
        DEFAULT: '#FCFCFC'
      },
      input: {
        DEFAULT: '#F3F3F3'
      }
    },
    extend: {
      // Set default transition durations and easing when using the transition utilities.
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'mover':{
          '0%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(-10px)'},
        },
        'slide-up':{
          '0%': {transform: ' translateY(260px)'},
          '100%': {transform: 'translateY(0)'},
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(12deg)' },
          '20%': { transform: 'rotate(-4deg)' },
          '30%': { transform: 'rotate(12deg)' },
          '40%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(6deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'mover': 'mover 1s infinite alternate',
        'slide-up': 'slide-up 1s ease',
        'wave': 'wave 2s linear infinite'
      },
    },
    // Remove the font families you don't want to use.
    fontFamily: {
      mono: [
        // Use a custom mono font for this site by changing 'Anonymous' to the
        // font name you want and uncommenting the following line.
        // 'Anonymous',
        ...defaultTheme.fontFamily.mono,
      ],
      sans: [
        // Use a custom sans serif font for this site by changing 'Gaultier' to the
        // font name you want and uncommenting the following line.
        // 'Gaultier',
        ...defaultTheme.fontFamily.sans,
      ],
      serif: [
        // Use a custom serif font for this site by changing 'Lavigne' to the
        // font name you want and uncommenting the following line.
        // 'Lavigne',
        ...defaultTheme.fontFamily.serif,
      ],
      Poppins: ['Poppins', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
    },
    // The font weights available for this site.
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        // Default color transition on links unless user prefers reduced motion.
        '@media (prefers-reduced-motion: no-preference)': {
          'a': {
            transition: 'color .2s ease-in-out',
          },
        },
        'html': {
            color: theme('colors.neutral.DEFAULT'),
            //--------------------------------------------------------------------------
            // Set sans, serif or mono stack with optional custom font as default.
            //--------------------------------------------------------------------------
            // fontFamily: theme('fontFamily.mono'),
            fontFamily: theme('fontFamily.sans'),
            // fontFamily: theme('fontFamily.serif'),
        },
        'mark': {
          backgroundColor: theme('colors.primary.DEFAULT'),
          color: theme('colors.white')
        },
      })
    }),

    // Custom components for this particular site.
    plugin(function({ addComponents, theme }) {
      const components = {
      }
      addComponents(components)
    }),

    // Custom utilities for this particular site.
    plugin(function({ addUtilities, theme, variants }) {
      const newUtilities = {
      }
      addUtilities(newUtilities)
    }),
  ]
}
