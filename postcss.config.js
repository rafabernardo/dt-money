const postCssNested = require('postcss-nested')
const autoprefixer = require('autoprefixer')
const postCssNormalize = require('postcss-normalize')
const postCssReset = require('postcss-css-reset')
const postCssCustomMedia = require('postcss-custom-media')

module.exports = {
  plugins: [
    postCssCustomMedia({
      importFrom: './src/config/custom-media-queries.js',
    }),
    postCssNested,
    autoprefixer(),
    postCssReset(),
    postCssNormalize(),
  ],
}
