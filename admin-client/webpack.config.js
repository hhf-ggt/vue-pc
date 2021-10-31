const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// const compiler = require('vue-template-compiler')

module.exports = {
  mode: 'development',
  devServer: {
    host: '127.0.0.1',
    port: '8080',
    historyApiFallback: true
  },
  entry: './src/main.js',
  output: {
    // filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/pages')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(), // 进度条插件
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html'})
  ]
}