module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
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

}
