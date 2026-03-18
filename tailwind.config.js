module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        card: '#FDFEFF',
        neon: '#335C85',
        text: '#102A43',
        textDark: '#4E6178',
        bgblue: '#F7FAFF',
        bgwhite: '#8AAED6',
        white: 'white',
        red: 'red',
        darkerBlue: '#0A192F',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        fira: ['Fira Code', 'monospace'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
