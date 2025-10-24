module.exports = {
  style: {
    postcss: {
      plugins: [
        require('@tailwindcss/postcss')({
          content: ['./src/**/*.{js,jsx,ts,tsx}'],
        }),
        require('autoprefixer'),
      ],
    },
  },
};
