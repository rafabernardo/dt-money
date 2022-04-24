const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    // filename: '[name].[chunkhash:8].js',
    // sourceMapFilename: '[name].[chunkhash:8].map',
    // chunkFilename: '[id].[chunkhash:8].js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/public'),
    },
    port: 3000,
    compress: true,
    historyApiFallback: true,
    open: true,
  },
  devtool: 'source-map',
  mode: isDevelopment ? 'development' : 'production',
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
    alias: {
      _services: path.resolve(__dirname, 'src', 'services'),
      _assets: path.resolve(__dirname, 'src', 'assets'),
      _components: path.resolve(__dirname, 'src', 'components'),
      _styles: path.resolve(__dirname, 'src', 'styles'),
      _hooks: path.resolve(__dirname, 'src', 'hooks'),
      _types: path.resolve(__dirname, 'src', '@types'),
      _views: path.resolve(__dirname, 'src', 'views'),
      _utils: path.resolve(__dirname, 'src', 'utils'),
    },
  },
  plugins: [
    new Dotenv(),
    new SpriteLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[chunkhash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[chunkhash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: './index.html',
      hash: true,
      favicon: path.join(__dirname, 'public', 'favicon.png'),
    }),
    new CleanWebpackPlugin(),
  ],
}
