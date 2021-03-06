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
      colors: {
        'gray-333333': '#333333',
        'gray-4F4F4F': '#4F4F4F',
        'gray-828282': '#828282',
        'gray-A9A9A9': '#A9A9A9',
        'gray-BDBDBD': '#BDBDBD',
        'gray-F2F2F2': '#F2F2F2',
        'red-EB5757': '#EB5757',
      },
      fontFamily: {
        'montserrat' : ['Montserrat', 'sans-serif'],
        'mulish' : ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
