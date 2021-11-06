const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader')

module.exports = {
  entry: '../src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        },
        excludes: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({}),
    // new HtmlWebpackPlugin({
    //   template: '../public/index.html'
    // }),
    new VueLoaderPlugin()
  ]
}