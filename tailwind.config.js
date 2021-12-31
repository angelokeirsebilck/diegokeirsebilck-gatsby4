module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['Montserrat'],
    },
    colors: {
      transparent: 'transparent',
      body: '#000',
      white: '#FFF',
      error: {
        DEFAULT: '#F87171',
      },
      primary: {
        light: '#ffd995',
        DEFAULT: '#fead1b',
        dark: '#eaa019',
      },
      gray: {
        DEFAULT: '#9CA3AF',
        dark: '#4B5563',
      },
      overlay: {
        DEFAULT: '#D1D5DB',
      },
    },
    fontSize: {
      xs: '.75rem',
      sm: '1.5rem',
      tiny: '.875rem',
      base: '19px',
      button: '2.2rem',
      navlink: '30px',
      2.4: '2.4rem',
      md: '3rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    animation: {
      spin: 'spin .5s linear infinite',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
