module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // neon: '#52DEE5',
        card:'#212529',
        neon:'white',
        // text: '#C7D3FF',
        text: '#F1EFEF',
        textDark: '#A1ABBF',
        // bgblue: '#030B2E',
        // bgblue: '#501c95',
        // bgblue: '#3a0088',
        bgblue: '#373632',
        bgwhite:'white',
        white:'white',
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
