const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


const resolvePath = pathName => path.resolve(__dirname, pathName)

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolvePath('./build'),
    filename: 'bundle.js',
    // clean 先将之前打包的文件删除. 相当于 cleanWebpackPlugin
    clean: true
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        // options: {
        // plugins 使用插件
        // 使用预设
        // presets: ['@babel/preset-env']
        // }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  // devServer
  devServer: {
    // 配置静态资源地址
    static: ['public'],
    port: 9090,
    // 启动项目时是否自动打开浏览器
    open: false,
    // 是否开始gzip
    compress: true
  }
}