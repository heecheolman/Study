const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env']
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'html/index.html'),
      filename: 'index.html',
      inject: true,
    }),
  ]
}
;