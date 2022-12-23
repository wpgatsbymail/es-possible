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
      boxShadow: {
        '3xl': '1px 3px 10px 2px rgba(66, 68, 90, 1)',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
