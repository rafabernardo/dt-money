const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
    sourceMapFilename: '[name].[chunkhash:8].map',
    chunkFilename: '[id].[chunkhash:8].js',
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /nodule_modules/,
        // add support to css.modules and postCss
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[local]___[chunkhash:5]' },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new SpriteLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './public/index.html'),
      filename: './index.html',
      hash: true,
      favicon: join(__dirname, 'public', 'favicon.png'),
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[chunkhash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[chunkhash].css',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: join(__dirname, '/public'),
    port: 3000,
    compress: true,
    historyApiFallback: true,
    open: true,
  },
}
