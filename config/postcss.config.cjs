const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = () => {
  const dev = process.env.NODE_ENV === 'development';

  return {
    plugins: [
      require('postcss-import')(),
      require('autoprefixer')(),
      require('stylelint')(),
      purgecss({
        content: ['./*.html'],
        css: ['./assets/css/main.css'],
        safelist: ['active']
      }),
      dev ? null : require('cssnano')(),
    ]
  }
}
