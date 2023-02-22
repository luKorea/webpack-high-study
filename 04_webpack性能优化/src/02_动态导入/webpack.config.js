const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


const resolvePath = pathName => path.resolve(__dirname, pathName)

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolvePath('./build'),
    filename: '[name]-bundle.js',
    // 单独针对分包进行命名
    chunkFilename: '[name]_chunk.js',
    clean: true
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}