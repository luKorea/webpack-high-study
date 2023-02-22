const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


const resolvePath = pathName => path.resolve(__dirname, pathName)

module.exports = {
  mode: 'development',
  // 配置多入口文件
  /*  entry: {
     index: './src/index.js',
     main: './src/main.js'
   }, */
  // 配置共享代码
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared'
    },
    main: {
      import: './src/main.js',
      dependOn: 'shared'
    },
    shared: ['axios']
  },
  // 单入口配置
  // entry: './src/index.js',
  output: {
    path: resolvePath('./build'),
    filename: '[name]-bundle.js',
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