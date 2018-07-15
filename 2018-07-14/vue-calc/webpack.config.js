const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'html/index.html'),
      filename: 'index.html',
      inject: true,
    }),
    new UglifyjsWebpackPlugin(),
  ]
};