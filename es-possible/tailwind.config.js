module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'dirt-orange': '#DE9908',
    },
    extend: {
      Poppins: ['Poppins'],
    },
  },
  plugins: [require('flowbite/plugin')],
}
