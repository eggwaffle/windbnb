module.exports = {
  mode: 'jit',
  HTMLFormControlsCollection: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat' : ['Montserrat', 'sans-serif'],
        'notoSansJP' : ['"Noto Sans JP"', 'sans-serif'],
        'poppins' : ['Poppins', 'sans-serif'],
        'ubuntuMono' : ['"Ubuntu Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
