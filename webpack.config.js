/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      favicon: join(__dirname, 'public', 'favicon.png'),
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: join(__dirname, './src'),
    port: 3000,
    hotOnly: true,
    compress: true,
    open: true,
  },
};
